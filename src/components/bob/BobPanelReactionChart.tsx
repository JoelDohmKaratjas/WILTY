import { BarChart } from '@mantine/charts'
import { Stack, Text } from '@mantine/core'

import type { BobPanelReactionPoint } from '../../chartTypes'
import { chartData } from '../../generated/chartData'

const data = [...chartData.bobPanelReaction]

type TooltipItem = {
	payload?: BobPanelReactionPoint
}

type TooltipProps = {
	active?: boolean
	payload?: TooltipItem[]
}

function PanelTooltip({ active, payload }: TooltipProps) {
	const point = payload?.[0]?.payload
	if (!active || !point) return null
	return (
		<Stack gap={2}>
			<Text size='xs' fw={600}>{point.panel} panel</Text>
			<Text size='xs'>Fooled: {point.fooled} rounds</Text>
			<Text size='xs'>Caught: {point.caught} rounds</Text>
			<Text size='xs' c='dimmed'>Fool rate: {point.foolRate}%</Text>
		</Stack>
	)
}

export default function BobPanelReactionChart() {
	const unanimous = data.find(point => point.panel === 'Unanimous')

	return (
		<Stack gap='xs'>
			<BarChart
				h={220}
				data={data}
				dataKey='panel'
				type='stacked'
				series={[
					{ name: 'fooled', label: 'Fooled', color: 'red', stackId: 'result' },
					{ name: 'caught', label: 'Caught', color: 'teal', stackId: 'result' }
				]}
				yAxisLabel='Rounds'
				tooltipProps={{ content: <PanelTooltip /> }}
			/>
			<Text size='xs' c='dimmed'>
				When at least two panelists made the same call, David’s team was wrong {unanimous?.fooled} of{' '}
				{unanimous?.rounds} times ({unanimous?.foolRate}%). Unknown calls are ignored for unanimity; undecided
				calls are excluded.
			</Text>
		</Stack>
	)
}
