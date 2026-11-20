import { BarChart } from '@mantine/charts'

import { chartData } from '../../generated/chartData'

const data = [...chartData.teamVsIndividual].map(point => ({
	...point,
	label: point.team === 'david' ? 'David’s team' : 'Lee’s team'
}))

export default function TeamVsIndividualChart() {
	return (
		<BarChart
			h={300}
			data={data}
			dataKey='label'
			series={[
				{ name: 'teamAccuracy', label: 'Final team guess', color: 'blue' },
				{ name: 'individualAccuracy', label: 'Average individual', color: 'gray' }
			]}
			withLegend
			yAxisLabel='Accuracy (%)'
			yAxisProps={{ domain: [0, 100] }}
			valueFormatter={value => `${value}%`}
		/>
	)
}
