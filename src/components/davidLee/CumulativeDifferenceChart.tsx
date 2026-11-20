import { AreaChart } from '@mantine/charts'

import { chartData } from '../../generated/chartData'

const data = [...chartData.cumulativeDifferenceByEpisode]

export default function CumulativeDifferenceChart() {
	return (
		<AreaChart
			h={300}
			data={data}
			dataKey='label'
			series={[{ name: 'cumulative', label: 'David − Lee', color: 'blue' }]}
			type='split'
			splitColors={['blue', 'orange']}
			splitOffset={0}
			withGradient
			fillOpacity={0.5}
			referenceLines={[{ y: 0, color: 'gray' }]}
			xAxisProps={{ interval: 'preserveStartEnd', minTickGap: 24 }}
			yAxisLabel='Score difference'
			valueFormatter={value => value >= 0 ? `David +${value}` : `Lee +${Math.abs(value)}`}
		/>
	)
}
