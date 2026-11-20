import { LineChart } from '@mantine/charts'
import { Stack, Text } from '@mantine/core'

import type { BobFoolRateTrendPoint } from '../../chartTypes'
import { chartData } from '../../generated/chartData'

const data = [...chartData.bobFoolRateOverTime]

type TooltipItem = {
	payload?: BobFoolRateTrendPoint
}

type TooltipProps = {
	active?: boolean
	payload?: TooltipItem[]
}

function TrendTooltip({ active, payload }: TooltipProps) {
	const point = payload?.[0]?.payload
	if (!active || !point) return null
	return (
		<Stack gap={2} maw={320}>
			<Text size='xs' fw={600}>{point.fullLabel} · {point.truth}</Text>
			<Text size='xs'>{point.statement || 'No statement recorded'}</Text>
			<Text size='xs'>
				Fooled on {point.wrong} of {point.guesses} guesses ({point.foolRate}%)
			</Text>
			<Text size='xs' c='dimmed'>Show-wide average: {point.showAverage}%</Text>
		</Stack>
	)
}

export default function BobFoolRateOverTimeChart() {
	return (
		<Stack gap='xs'>
			<LineChart
				h={300}
				data={data}
				dataKey='label'
				series={[
					{ name: 'foolRate', label: 'Bob', color: 'grape' },
					{ name: 'showAverage', label: 'Show average', color: 'gray', strokeDasharray: '5 4' }
				]}
				xAxisProps={{ interval: 0, angle: -40, textAnchor: 'end', height: 60 }}
				yAxisLabel='Fool rate (%)'
				yAxisProps={{ domain: [0, 100], ticks: [0, 25, 50, 75, 100] }}
				valueFormatter={value => `${value}%`}
				tooltipProps={{ content: <TrendTooltip /> }}
			/>
			<Text size='xs' c='dimmed'>
				One point per Bob story in a regular episode. Teams have got him wrong more often in recent seasons, but
				each point is only two or three guesses.
			</Text>
		</Stack>
	)
}
