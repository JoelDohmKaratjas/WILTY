import { LineChart } from '@mantine/charts'

import { chartData } from '../../generated/chartData'

const data = [...chartData.lieDetectionBySeason]

export default function LieSpottingAccuracyChart() {
	return (
		<LineChart
			h={300}
			data={data}
			dataKey='season'
			series={[
				{ name: 'david', label: 'David’s team', color: 'blue' },
				{ name: 'lee', label: 'Lee’s team', color: 'orange' }
			]}
			withLegend
			xAxisLabel='Season'
			yAxisLabel='Correctly called lies (%)'
			yAxisProps={{ domain: [0, 100] }}
			valueFormatter={value => `${value}%`}
		/>
	)
}
