import { LineChart } from '@mantine/charts'
import { SegmentedControl, Stack } from '@mantine/core'
import { useState } from 'react'

import { chartData } from '../../generated/chartData'

type View = 'win' | 'lie'

const data = [...chartData.genderRatesBySeason]

export default function GenderRatesChart() {
	const [view, setView] = useState<View>('win')

	return (
		<Stack gap='xs'>
			<SegmentedControl
				size='xs'
				value={view}
				onChange={value => setView(value)}
				data={[
					{ value: 'win', label: 'Win rate' },
					{ value: 'lie', label: 'Lie rate' }
				]}
			/>
			<LineChart
				h={300}
				data={data}
				dataKey='season'
				series={view === 'win'
					? [
						{ name: 'femaleWin', label: 'Female guests', color: 'pink' },
						{ name: 'maleWin', label: 'Male guests', color: 'blue' }
					]
					: [
						{ name: 'femaleLie', label: 'Female guests', color: 'pink' },
						{ name: 'maleLie', label: 'Male guests', color: 'blue' }
					]}
				withLegend
				xAxisLabel='Season'
				yAxisLabel={view === 'win' ? 'Win rate (%)' : 'Lie rate (%)'}
				yAxisProps={{ domain: [0, 100], allowDecimals: false }}
				valueFormatter={value => `${value}%`}
			/>
		</Stack>
	)
}
