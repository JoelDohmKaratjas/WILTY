import { BarChart } from '@mantine/charts'

import { chartData } from '../../generated/chartData'

const data = [...chartData.possessionEffect].map(point => ({
	...point,
	label: point.team === 'david' ? 'David' : 'Lee'
}))

export default function PossessionEffectChart() {
	return (
		<BarChart
			h={320}
			data={data}
			dataKey='label'
			series={[
				{ name: 'lieRateWithout', label: 'Lies · no possession', color: 'blue.3' },
				{ name: 'lieRateWith', label: 'Lies · possession', color: 'blue.7' },
				{ name: 'spotRateWithout', label: 'Spotted · no possession', color: 'orange.3' },
				{ name: 'spotRateWith', label: 'Spotted · possession', color: 'orange.7' }
			]}
			withLegend
			yAxisLabel='Rate (%)'
			yAxisProps={{ domain: [0, 100] }}
			valueFormatter={value => `${value}%`}
		/>
	)
}
