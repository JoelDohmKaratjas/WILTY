import { BarChart } from '@mantine/charts'
import { Stack, Text } from '@mantine/core'

import type { StatementLengthTruthPoint } from '../../chartTypes'
import { chartData } from '../../generated/chartData'

const summary = chartData.statementLengthByTruth

const data: StatementLengthTruthPoint[] = [...summary.bins]

type TooltipItem = {
	payload?: StatementLengthTruthPoint
}

type TooltipProps = {
	active?: boolean
	payload?: TooltipItem[]
}

function TruthTooltip({ active, payload }: TooltipProps) {
	const point = payload?.[0]?.payload
	if (!active || !point) return null
	return (
		<Stack gap={2}>
			<Text size='xs' fw={600}>{point.bin} words</Text>
			<Text size='xs'>Truths: {point.truth}% ({point.truthCount})</Text>
			<Text size='xs'>Lies: {point.lie}% ({point.lieCount})</Text>
		</Stack>
	)
}

export default function StatementLengthByTruthChart() {
	return (
		<Stack gap='xs'>
			<BarChart
				h={320}
				data={data}
				dataKey='bin'
				series={[
					{ name: 'truth', label: 'Truth', color: 'blue' },
					{ name: 'lie', label: 'Lie', color: 'orange' }
				]}
				yAxisLabel='Share of statements in bin (%)'
				yAxisProps={{ domain: [0, 100] }}
				valueFormatter={value => `${value}%`}
				tooltipProps={{ content: <TruthTooltip /> }}
			/>
			<Text size='xs' c='dimmed'>
				Median length: {summary.truthMedian} words for truths vs {summary.lieMedian} for lies.
				Based on {summary.truthCount} truths and {summary.lieCount} lies from regular episodes with at least three guesses.
			</Text>
		</Stack>
	)
}
