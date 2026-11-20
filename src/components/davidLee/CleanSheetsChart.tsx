import { BarChart } from '@mantine/charts'

import { chartData } from '../../generated/chartData'

const data = [...chartData.cleanSheetsBySeason]

export default function CleanSheetsChart() {
	return (
		<BarChart
			h={300}
			data={data}
			dataKey='season'
			series={[
				{ name: 'david', label: 'David', color: 'blue' },
				{ name: 'lee', label: 'Lee', color: 'orange' }
			]}
			withLegend
			xAxisLabel='Season'
			yAxisLabel='Clean sheets'
		/>
	)
}
