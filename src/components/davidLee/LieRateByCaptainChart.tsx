import { BarChart } from '@mantine/charts'

import { chartData } from '../../generated/chartData'

const data = [...chartData.lieRateBySeason]

export default function LieRateByCaptainChart() {
	return (
		<BarChart
			h={300}
			data={data}
			dataKey='season'
			series={[
				{ name: 'david', label: 'David’s statements', color: 'blue' },
				{ name: 'lee', label: 'Lee’s statements', color: 'orange' }
			]}
			withLegend
			xAxisLabel='Season'
			yAxisLabel='Lies (%)'
			yAxisProps={{ domain: [0, 100] }}
			valueFormatter={value => `${value}%`}
		/>
	)
}
