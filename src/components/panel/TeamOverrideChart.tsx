import { BarChart } from '@mantine/charts'
import { Stack, Text } from '@mantine/core'

import { chartData } from '../../generated/chartData'

const summary = chartData.teamOverride

const data = [
	{
		label: 'Overrode majority',
		value: summary.overrideRate,
		detail: `${summary.overrides} of ${summary.comparableCalls} team calls`
	},
	{
		label: 'Correct when overriding',
		value: summary.overrideAccuracy,
		detail: `${summary.overrideCorrect} of ${summary.overrides} overrides`
	},
	{
		label: 'Correct when following',
		value: summary.followAccuracy,
		detail: `${summary.followCorrect} of ${summary.followCalls} calls`
	}
]

type TooltipItem = {
	payload?: typeof data[number]
}

type TooltipProps = {
	active?: boolean
	payload?: TooltipItem[]
}

function OverrideTooltip({ active, payload }: TooltipProps) {
	const point = payload?.[0]?.payload
	if (!active || !point) return null
	return (
		<Stack gap={2}>
			<Text size='xs' fw={600}>{point.label}</Text>
			<Text size='xs'>{point.value}%</Text>
			<Text size='xs' c='dimmed'>{point.detail}</Text>
		</Stack>
	)
}

export default function TeamOverrideChart() {
	return (
		<Stack gap='xs'>
			<BarChart
				h={220}
				data={data}
				dataKey='label'
				orientation='vertical'
				series={[{ name: 'value', label: 'Rate', color: 'violet' }]}
				xAxisLabel='Rate (%)'
				xAxisProps={{ domain: [0, 100] }}
				yAxisProps={{ width: 185 }}
				valueFormatter={value => `${value}%`}
				tooltipProps={{ content: <OverrideTooltip /> }}
			/>
			<Text size='xs' c='dimmed'>
				Compares the team’s final call with the majority of its individual calls on true/false rounds with a clear majority.
				Unknown team calls are not counted as overrides.
			</Text>
		</Stack>
	)
}
