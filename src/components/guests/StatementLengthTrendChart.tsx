import { LineChart } from '@mantine/charts'
import { Stack, Text } from '@mantine/core'

import type { StatementLengthDetectionBin } from '../../chartTypes'
import { chartData } from '../../generated/chartData'

const data: StatementLengthDetectionBin[] = [...chartData.statementLengthDetectionBins]

type TooltipItem = {
	payload?: StatementLengthDetectionBin
}

type TooltipProps = {
	active?: boolean
	payload?: TooltipItem[]
}

function BinTooltip({ active, payload }: TooltipProps) {
	const point = payload?.[0]?.payload
	if (!active || !point) return null
	return (
		<Stack gap={2}>
			<Text size='xs' fw={600}>{point.bin} words</Text>
			<Text size='xs'>Detected correctly: {point.accuracy}%</Text>
			<Text size='xs'>Was a lie: {point.lieRate}% (truth {Math.round((100 - point.lieRate) * 10) / 10}%)</Text>
			<Text size='xs' c='dimmed'>{point.statements} statements · {point.guesses} guesses</Text>
		</Stack>
	)
}

export default function StatementLengthTrendChart() {
	return (
		<Stack gap='xs'>
			<LineChart
				h={320}
				data={data}
				dataKey='bin'
				series={[
					{ name: 'accuracy', label: 'Correctly detected', color: 'teal' },
					{ name: 'lieRate', label: 'Was a lie', color: 'orange' }
				]}
				withLegend
				xAxisLabel='Words in statement'
				yAxisLabel='Rate (%)'
				yAxisProps={{ domain: [0, 100] }}
				valueFormatter={value => `${value}%`}
				tooltipProps={{ content: <BinTooltip /> }}
			/>
			<Text size='xs' c='dimmed'>
				Statements grouped by word count. Detection is pooled across guesses in each bin; “was a lie” is the share of statements in that bin that were lies, so the remainder were truths.
				Only true/false statements with at least three guesses are included.
			</Text>
		</Stack>
	)
}
