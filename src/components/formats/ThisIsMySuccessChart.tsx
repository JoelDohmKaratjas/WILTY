import { LineChart } from '@mantine/charts'

import { chartData } from '../../generated/chartData'

const data = [...chartData.thisIsMySuccessBySeason]

export default function ThisIsMySuccessChart() {
	return (
		<LineChart
			h={300}
			data={data}
			dataKey='season'
			series={[{ name: 'accuracy', label: 'Correct guest', color: 'teal' }]}
			xAxisLabel='Season'
			yAxisLabel='Success rate (%)'
			yAxisProps={{ domain: [0, 100] }}
			valueFormatter={value => `${value}%`}
		/>
	)
}
