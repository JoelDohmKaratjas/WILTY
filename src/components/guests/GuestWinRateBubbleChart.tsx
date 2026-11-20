import { BubbleChart } from '@mantine/charts'

import { chartData } from '../../generated/chartData'

type GuestPoint = {
	guest: string
	team: 'david' | 'lee'
	appearances: number
	winRate: number
}

const data: GuestPoint[] = chartData.guestWinRate.map(guest => ({
	guest: guest.person,
	team: guest.team,
	appearances: guest.appearances,
	winRate: guest.winRate
}))
type BubbleProps = {
	cx?: number
	cy?: number
	payload?: unknown
}

function TeamBubble({ cx, cy, payload }: BubbleProps) {
	const point = payload as GuestPoint | undefined
	const color = point?.team === 'lee'
		? 'var(--mantine-color-orange-6)'
		: 'var(--mantine-color-blue-6)'
	const radius = 5 + Math.sqrt(point?.appearances ?? 0) * 1.3
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

type TooltipItem = {
	payload?: GuestPoint
}

type TooltipProps = {
	active?: boolean
	payload?: TooltipItem[]
}

function GuestTooltip({ active, payload }: TooltipProps) {
	const point = payload?.[0]?.payload
	if (!active || !point) return null
	return (
		<div>
			<div>{point.guest}</div>
			<div>{point.team === 'david' ? 'David’s team' : 'Lee’s team'}</div>
			<div>Win rate: {point.winRate}%</div>
			<div>Appearances: {point.appearances}</div>
		</div>
	)
}

export default function GuestWinRateBubbleChart() {
	return (
		<BubbleChart
			h={340}
			data={data}
			dataKey={{ x: 'appearances', y: 'winRate', z: 'appearances' }}
			range={[70, 420]}
			scatterProps={{ shape: <TeamBubble /> }}
			tooltipProps={{ content: <GuestTooltip /> }}
			xAxisProps={{
				type: 'number',
				domain: [0, 'dataMax'],
				padding: { left: 0, right: 16 },
				allowDecimals: false,
				interval: 'preserveStartEnd',
				tickCount: 6
			}}
			yAxisProps={{
				domain: [0, 100],
				allowDecimals: false,
				tickCount: 6,
				tick: { fontSize: 12, fill: 'currentColor' },
				tickLine: true,
				axisLine: true,
				width: 44
			}}
		/>
	)
}
