import { lazy } from 'react'

import { chartData } from '../../generated/chartData'
import ChartCard from '../ChartCard'
import ChartsSection from '../ChartsSection'

const BestLieDetectorsChart = lazy(() => import('./BestLieDetectorsChart'))
const ConfusionMatrixChart = lazy(() => import('./ConfusionMatrixChart'))
const LieSpottingAccuracyChart = lazy(() => import('./LieSpottingAccuracyChart'))
const PossessionEffectChart = lazy(() => import('./PossessionEffectChart'))
const ScepticismChart = lazy(() => import('./ScepticismChart'))
const StatementLengthByTruthChart = lazy(() => import('../fun/StatementLengthByTruthChart'))
const TeamVsIndividualChart = lazy(() => import('./TeamVsIndividualChart'))
const TruthSpottingAccuracyChart = lazy(() => import('./TruthSpottingAccuracyChart'))

export default function LieDetection() {
	const { meta } = chartData

	return (
		<ChartsSection title='Lie rate & lie detection'>
			<ChartCard
				title='Lie-spotting accuracy'
				description='When a statement was a lie, how often each team called it a lie. Unknown counts as correct; undecided is excluded.'
				fallbackHeight={300}
			>
				<LieSpottingAccuracyChart />
			</ChartCard>
			<ChartCard
				title='Truth-spotting accuracy'
				description='When a statement was true, how often each team called it true. Pair this with lie-spotting to reveal truth bias.'
				fallbackHeight={300}
			>
				<TruthSpottingAccuracyChart />
			</ChartCard>
			<ChartCard
				title='Confusion matrix: truth vs guess'
				description='True/lie statements against each team’s truth or lie call. “Unknown” calls are counted as the team’s final call; percentages are within each row.'
				fallbackHeight={210}
			>
				<ConfusionMatrixChart />
			</ChartCard>
			<ChartCard
				title='Best lie detectors'
				description='Guests and captains ranked by lie-spotting accuracy, with at least 10 lie guesses. Sample size is shown in brackets.'
				fallbackHeight={420}
			>
				<BestLieDetectorsChart />
			</ChartCard>
			<ChartCard
				title='Scepticism index'
				description='Share of binary guesses labelled lie by each team in each season.'
				fallbackHeight={300}
			>
				<ScepticismChart />
			</ChartCard>
			<ChartCard
				title='Possession effect'
				description={`Lie rate with and without possession versus the opposition’s spot rate. Lower “Spotted” is better for the captain; ${meta.possessionRoundCount} possession rounds included.`}
				fallbackHeight={320}
			>
				<PossessionEffectChart />
			</ChartCard>
			<ChartCard
				title='Team vs individual accuracy'
				description='Final team guess versus the average individual guess. A positive gap suggests discussion adds value.'
				fallbackHeight={300}
			>
				<TeamVsIndividualChart />
			</ChartCard>
			<ChartCard
				title='Statement length: truths vs lies'
				description='Histogram of statement length by whether the statement was true or a lie. Each bar shows the share of statements in that length bin; hover for counts and see the median lengths.'
				fallbackHeight={320}
			>
				<StatementLengthByTruthChart />
			</ChartCard>
		</ChartsSection>
	)
}
