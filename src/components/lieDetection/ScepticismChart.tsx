import { BarChart } from '@mantine/charts'

import { chartData } from '../../generated/chartData'

const data = [...chartData.scepticismByTeam]

export default function ScepticismChart() {
	return (
		<BarChart
			h={300}
			data={data}
			dataKey='season'
			series={[
				{ name: 'david', label: 'David’s team', color: 'blue' },
				{ name: 'lee', label: 'Lee’s team', color: 'orange' }
			]}
			withLegend
			xAxisLabel='Season'
			yAxisLabel='Guessed lie (%)'
			yAxisProps={{ domain: [0, 100] }}
			valueFormatter={value => `${value}%`}
		/>
	)
}
