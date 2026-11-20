import { BarChart } from '@mantine/charts'

import { chartData } from '../../generated/chartData'

const data = [...chartData.marginBySeason]

export default function MarginBreakdownChart() {
	return (
		<BarChart
			h={340}
			data={data}
			dataKey='season'
			type='stacked'
			series={[
				{ name: 'david1', label: 'David +1', color: 'blue.4', stackId: 'margin' },
				{ name: 'david2', label: 'David +2', color: 'blue.5', stackId: 'margin' },
				{ name: 'david3', label: 'David +3', color: 'blue.6', stackId: 'margin' },
				{ name: 'david4Plus', label: 'David +4+', color: 'blue.8', stackId: 'margin' },
				{ name: 'lee1', label: 'Lee +1', color: 'orange.4', stackId: 'margin' },
				{ name: 'lee2', label: 'Lee +2', color: 'orange.5', stackId: 'margin' },
				{ name: 'lee3', label: 'Lee +3', color: 'orange.6', stackId: 'margin' },
				{ name: 'lee4Plus', label: 'Lee +4+', color: 'orange.8', stackId: 'margin' }
			]}
			withLegend
			referenceLines={[{ y: 0, color: 'gray' }]}
			xAxisLabel='Season'
			yAxisLabel='Episodes (David ▲ / Lee ▼)'
			valueFormatter={value => `${Math.abs(value)}`}
		/>
	)
}
