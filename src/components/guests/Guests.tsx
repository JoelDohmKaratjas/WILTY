import { lazy } from 'react'

import { chartData } from '../../generated/chartData'
import ChartCard from '../ChartCard'
import ChartsSection from '../ChartsSection'

const GenderRatesChart = lazy(() => import('./GenderRatesChart'))
const GuestWinRateBubbleChart = lazy(() => import('./GuestWinRateBubbleChart'))
const LiarWinnerTimeline = lazy(() => import('./LiarWinnerTimeline'))
const GuestLieProfileChart = lazy(() => import('./GuestLieProfileChart'))
const StatementLengthTrendChart = lazy(() => import('./StatementLengthTrendChart'))

export default function Guests() {
	const { meta } = chartData

	return (
		<ChartsSection title='Guests, gender, and patterns'>
			<ChartCard
				title='Guest win-rate vs appearances'
				description={`Guests with at least three scored appearances across ${meta.episodeCount - meta.compilationCount} episodes. Compilations are excluded; bubble size reflects appearances.`}
				fallbackHeight={340}
			>
				<GuestWinRateBubbleChart />
			</ChartCard>
			<ChartCard
				title='Win rate and lie rate by gender'
				description='Female and male guests compared across all 16 seasons. Toggle between team win rate and share of their own statements that were lies.'
				fallbackHeight={300}
			>
				<GenderRatesChart />
			</ChartCard>
			<ChartCard
				title='Liar of the Week timeline'
				description={`One row per award season from ${meta.awardSeasonFrom}–${meta.awardSeasonTo}, coloured by the captain whose team the winner sat on. Outlined squares are repeat winners.`}
				fallbackHeight={340}
			>
				<LiarWinnerTimeline />
			</ChartCard>
			<ChartCard
				title='Lie rate vs fool rate'
				description='Guests with at least two lies in regular episodes. The further right, the more often their statements were lies; the higher up, the more often those lies fooled the team. Bubble size shows lies told.'
				fallbackHeight={440}
			>
				<GuestLieProfileChart />
			</ChartCard>
			<ChartCard
				title='Statement length vs detection rate'
				description='Statement lengths grouped into bins, comparing the pooled detection rate with the share of statements in each bin that were lies (the remainder were truths). Based on true/false statements with at least three guesses.'
				fallbackHeight={320}
			>
				<StatementLengthTrendChart />
			</ChartCard>
		</ChartsSection>
	)
}
