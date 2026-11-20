import { BubbleChart } from '@mantine/charts'
import { Box, Group, SegmentedControl, Stack, Text } from '@mantine/core'
import { useMemo, useState } from 'react'

import type { GuestLieProfilePoint } from '../../chartTypes'
import { chartData } from '../../generated/chartData'

type MinimumStatements = '3' | '5' | '8'

const profiles: readonly GuestLieProfilePoint[] = chartData.guestLieProfiles
const totalLieGuesses = profiles.reduce((sum, point) => sum + point.lieGuesses, 0)
const totalLieWrong = profiles.reduce((sum, point) => sum + point.lieWrong, 0)
const guestAverage = totalLieGuesses > 0
	? Math.round((totalLieWrong / totalLieGuesses) * 1000) / 10
	: 0

type BubbleProps = {
	cx?: number
	cy?: number
	payload?: GuestLieProfilePoint
}

function TeamBubble({ cx, cy, payload }: BubbleProps) {
	const color = payload?.team === 'lee'
		? 'var(--mantine-color-orange-6)'
		: payload?.team === 'david'
			? 'var(--mantine-color-blue-6)'
			: 'var(--mantine-color-gray-6)'
	const radius = 5 + Math.sqrt(payload?.lies ?? 0) * 1.8

	return (
		<circle
			cx={cx}
			cy={cy}
			r={radius}
			fill={color}
			fillOpacity={0.55}
			stroke={color}
			strokeWidth={1}
		/>
	)
}

type TooltipPayload = {
	payload?: GuestLieProfilePoint
}

type TooltipProps = {
	active?: boolean
	payload?: TooltipPayload[]
}

function ProfileTooltip({ active, payload }: TooltipProps) {
	const point = payload?.[0]?.payload
	if (!active || !point) return null

	const team = point.team === 'david'
		? 'David’s team'
		: point.team === 'lee'
			? 'Lee’s team'
			: 'Unknown team'

	return (
		<div>
			<div>{point.person}</div>
			<div>{team}</div>
			<div>Lies: {point.lies} of {point.statements} statements ({point.lieRate}%)</div>
			<div>Fooled: {point.lieWrong} of {point.lieGuesses} guesses ({point.lieFoolRate}%)</div>
		</div>
	)
}

export default function GuestLieProfileChart() {
	const [minimum, setMinimum] = useState<MinimumStatements>('3')
	const points = useMemo(
		() => profiles.filter(point => point.statements >= Number(minimum) && point.lies >= 2),
		[minimum]
	)

	return (
		<Stack gap='xs'>
			<Group justify='space-between' wrap='wrap'>
				<SegmentedControl
					size='xs'
					value={minimum}
					onChange={value => setMinimum(value)}
					data={[
						{ value: '3', label: '3+ stories' },
						{ value: '5', label: '5+ stories' },
						{ value: '8', label: '8+ stories' }
					]}
				/>
				<Text size='xs' c='dimmed'>Guest average: {guestAverage}% fooled</Text>
			</Group>
			<Group gap='lg' wrap='wrap'>
				<Group gap={4} wrap='nowrap'>
					<Box w={10} h={10} bg='var(--mantine-color-blue-6)' style={{ borderRadius: '50%' }} />
					<Text size='xs'>David’s guests</Text>
				</Group>
				<Group gap={4} wrap='nowrap'>
					<Box w={10} h={10} bg='var(--mantine-color-orange-6)' style={{ borderRadius: '50%' }} />
					<Text size='xs'>Lee’s guests</Text>
				</Group>
				<Text size='xs' c='dimmed'>Bubble size = lies told</Text>
			</Group>
			<BubbleChart
				h={320}
				data={points}
				dataKey={{ x: 'lieRate', y: 'lieFoolRate', z: 'lies' }}
				range={[60, 220]}
				scatterProps={{ shape: <TeamBubble /> }}
				tooltipProps={{ content: <ProfileTooltip /> }}
				xAxisProps={{
					type: 'number',
					domain: [0, 100],
					padding: { left: 0, right: 16 },
					allowDecimals: false,
					tickCount: 6,
					tickFormatter: value => `${value}%`,
					label: { value: 'Share of statements that were lies', position: 'insideBottom', offset: -4, fontSize: 12, fill: 'currentColor' }
				}}
				yAxisProps={{
					domain: [0, 100],
					allowDecimals: false,
					tickCount: 6,
					tickFormatter: value => `${value}%`,
					width: 56,
					label: { value: 'Fool rate on lies', angle: -90, position: 'insideLeft', fontSize: 12, fill: 'currentColor' }
				}}
			/>
			<Text size='xs' c='dimmed'>
				Showing {points.length} guests with at least two lies in regular episodes. Compilations are excluded; “fooled”
				means the guessing team got the lie wrong.
			</Text>
		</Stack>
	)
}
