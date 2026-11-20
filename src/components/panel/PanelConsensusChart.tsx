import { BarChart } from '@mantine/charts'
import { Stack, Text } from '@mantine/core'

import type { PanelConsensusPoint } from '../../chartTypes'
import { chartData } from '../../generated/chartData'

const data: PanelConsensusPoint[] = [...chartData.panelConsensus]

type TooltipItem = {
	payload?: PanelConsensusPoint
}

type TooltipProps = {
	active?: boolean
	payload?: TooltipItem[]
}

function ConsensusTooltip({ active, payload }: TooltipProps) {
	const point = payload?.[0]?.payload
	if (!active || !point) return null
	return (
		<Stack gap={2}>
			<Text size='xs' fw={600}>{point.panel} panels</Text>
			<Text size='xs'>Individual: {point.individualCorrect}/{point.individualGuesses} guesses</Text>
			<Text size='xs'>Team call: {point.teamCorrect}/{point.rounds} rounds</Text>
		</Stack>
	)
}

export default function PanelConsensusChart() {
	return (
		<Stack gap='xs'>
			<BarChart
				h={320}
				data={data}
				dataKey='panel'
				series={[
					{ name: 'individualAccuracy', label: 'Individual guesses', color: 'blue' },
					{ name: 'teamAccuracy', label: 'Team final call', color: 'orange' }
				]}
				yAxisLabel='Accuracy (%)'
				yAxisProps={{ domain: [0, 100] }}
				valueFormatter={value => `${value}%`}
				tooltipProps={{ content: <ConsensusTooltip /> }}
			/>
			<Text size='xs' c='dimmed'>
				A panel is unanimous when at least two committed calls are all truth or all lie; split means they disagreed.
				Unknown counts as correct; undecided guesses are excluded.
			</Text>
		</Stack>
	)
}
