import { AreaChart } from '@mantine/charts'

import { chartData } from '../../generated/chartData'

const data = [...chartData.roundTypeMixBySeason]

export default function RoundTypeMixBySeasonChart() {
	return (
		<AreaChart
			h={320}
			data={data}
			dataKey='season'
			type='stacked'
			series={[
				{ name: 'home_truths', label: 'Home truths', color: 'blue' },
				{ name: 'quick_fire', label: 'Quick fire', color: 'orange' },
				{ name: 'this_is_my', label: 'This is my', color: 'teal' },
				{ name: 'ring_of_truth', label: 'Ring of truth', color: 'violet' },
				{ name: 'telly_tales', label: 'Telly tales', color: 'gray' }
			]}
			withLegend
			xAxisLabel='Season'
			yAxisLabel='Share of rounds (%)'
			yAxisProps={{ domain: [0, 100], allowDecimals: false }}
			valueFormatter={value => `${value}%`}
		/>
	)
}
