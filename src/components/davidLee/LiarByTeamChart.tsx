import { BarChart } from '@mantine/charts'

import { chartData } from '../../generated/chartData'

const data = [...chartData.liarByTeamBySeason]

export default function LiarByTeamChart() {
	return (
		<BarChart
			h={300}
			data={data}
			dataKey='season'
			type='stacked'
			series={[
				{ name: 'david', label: 'David’s guests', color: 'blue', stackId: 'liar' },
				{ name: 'lee', label: 'Lee’s guests', color: 'orange', stackId: 'liar' }
			]}
			withLegend
			xAxisLabel='Season'
			yAxisLabel='Awards'
		/>
	)
}
