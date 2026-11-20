import { BarChart } from '@mantine/charts'
import { Stack, Text } from '@mantine/core'

import { chartData } from '../../generated/chartData'

const CAPTAINS = new Set(['David Mitchell', 'Lee Mack'])

const data = chartData.lieDetectors
	.filter(person => person.guesses >= 10)
	.map(person => ({
		...person,
		label: `${person.person} (${person.guesses})`,
		color: CAPTAINS.has(person.person) ? 'orange' : 'blue'
	}))

export default function BestLieDetectorsChart() {
	return (
		<Stack gap='xs'>
			<BarChart
				h={420}
				data={data}
				dataKey='label'
				orientation='vertical'
				series={[{ name: 'accuracy', label: 'Lies spotted', color: 'blue' }]}
				xAxisLabel='Lies spotted (%)'
				xAxisProps={{ domain: [0, 100] }}
				yAxisProps={{ width: 170 }}
				valueFormatter={value => `${value}%`}
			/>
			<Text size='xs' c='dimmed'>David and Lee are orange. Sample size in brackets. Accuracy counts only rounds where the statement was a lie.</Text>
		</Stack>
	)
}
