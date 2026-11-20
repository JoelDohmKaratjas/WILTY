import { BarChart } from '@mantine/charts'

import { chartData } from '../../generated/chartData'

const data = [...chartData.accuracyByRoundType]

export default function AccuracyByRoundTypeChart() {
	return (
		<BarChart
			h={320}
			data={data}
			dataKey='name'
			series={[
				{ name: 'david', label: 'David’s team', color: 'blue' },
				{ name: 'lee', label: 'Lee’s team', color: 'orange' }
			]}
			withLegend
			xAxisLabel='Round type'
			yAxisLabel='Accuracy (%)'
			yAxisProps={{ domain: [0, 100] }}
			valueFormatter={value => `${value}%`}
		/>
	)
}
