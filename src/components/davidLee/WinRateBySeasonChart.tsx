import { LineChart } from '@mantine/charts'

import { chartData } from '../../generated/chartData'

const data = [...chartData.winRateBySeason]

export default function WinRateBySeasonChart() {
	return (
		<LineChart
			h={300}
			data={data}
			dataKey='season'
			series={[
				{ name: 'davidRate', label: 'David', color: 'blue' },
				{ name: 'leeRate', label: 'Lee', color: 'orange' }
			]}
			withLegend
			xAxisLabel='Season'
			yAxisLabel='Win rate (%)'
			yAxisProps={{ domain: [0, 100] }}
			valueFormatter={value => `${value}%`}
		/>
	)
}
