import { lazy } from 'react'

import ChartCard from '../ChartCard'
import ChartsSection from '../ChartsSection'

const BobFoolRateByTruthChart = lazy(() => import('./BobFoolRateByTruthChart'))
const BobFoolRateOverTimeChart = lazy(() => import('./BobFoolRateOverTimeChart'))
const BobPanelReactionChart = lazy(() => import('./BobPanelReactionChart'))
const BobRoundStrip = lazy(() => import('./BobRoundStrip'))
const BobVsFieldChart = lazy(() => import('./BobVsFieldChart'))

export default function Bob() {
	return (
		<ChartsSection title='Bob Mortimer'>
			<ChartCard
				title='Bob vs the field'
				description='Fool rate for guests who told stories in regular episodes. Bob is highlighted, one-off guests can be filtered out, and the dashed line is the show-wide average.'
				fallbackHeight={460}
			>
				<BobVsFieldChart />
			</ChartCard>
			<ChartCard
				title='Bob vs the show: truth or lie'
				description='Bob’s fool rate on truths and lies compared with the show-wide baseline. Both markers are hoverable for the guesses behind them.'
				fallbackHeight={300}
			>
				<BobFoolRateByTruthChart />
			</ChartCard>
			<ChartCard
				title='Bob’s fool rate over time'
				description='Bob’s fool rate on each story in chronological order, with the show-wide average as a dashed comparison line.'
				fallbackHeight={360}
			>
				<BobFoolRateOverTimeChart />
			</ChartCard>
			<ChartCard
				title='Bob round-by-round strip'
				description='One square per Bob story, coloured by whether Bob fooled the guessing team or was caught by it. T marks a true story and L marks a lie; hover for details.'
				fallbackHeight={380}
			>
				<BobRoundStrip />
			</ChartCard>
			<ChartCard
				title='Bob: when everyone agreed'
				description='How often David’s team fooled Bob when its committed panelists were unanimous, compared with split panels.'
				fallbackHeight={300}
			>
				<BobPanelReactionChart />
			</ChartCard>
		</ChartsSection>
	)
}
