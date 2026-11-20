import { BarChart } from '@mantine/charts'

import { chartData } from '../../generated/chartData'

const data = [...chartData.truthLieShareByRoundType]

export default function TruthLieShareByRoundTypeChart() {
	return (
		<BarChart
			h={320}
			data={data}
			dataKey='name'
			type='stacked'
			series={[
				{ name: 'truth', label: 'Truth', color: 'teal', stackId: 'truthLie' },
				{ name: 'lie', label: 'Lie', color: 'orange', stackId: 'truthLie' }
			]}
			withLegend
			xAxisLabel='Round type'
			yAxisLabel='Share of statements (%)'
			yAxisProps={{ domain: [0, 100] }}
			valueFormatter={value => `${value}%`}
		/>
	)
}
