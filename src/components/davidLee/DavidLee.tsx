import { lazy } from 'react'

import { chartData } from '../../generated/chartData'
import ChartCard from '../ChartCard'
import ChartsSection from '../ChartsSection'

const CleanSheetsChart = lazy(() => import('./CleanSheetsChart'))
const CumulativeDifferenceChart = lazy(() => import('./CumulativeDifferenceChart'))
const EpisodeHeatmap = lazy(() => import('../fun/EpisodeHeatmap'))
const LieRateByCaptainChart = lazy(() => import('./LieRateByCaptainChart'))
const LiarByTeamChart = lazy(() => import('./LiarByTeamChart'))
const MarginBreakdownChart = lazy(() => import('./MarginBreakdownChart'))
const PlayerHeatmap = lazy(() => import('./PlayerHeatmap'))
const WinRateBySeasonChart = lazy(() => import('./WinRateBySeasonChart'))

export default function DavidLee() {
	const { meta } = chartData

	return (
		<ChartsSection title='The David vs Lee rivalry'>
			<ChartCard
				title='Win rate by season'
				description='Percentage of scored episodes won by each captain in each season. Compilations are excluded.'
				fallbackHeight={300}
			>
				<WinRateBySeasonChart />
			</ChartCard>
			<ChartCard
				title='Lie rate by captain'
				description={`Share of each captain’s own statements that were lies, across ${meta.binaryRoundCount} true/false rounds with an identifiable owner.`}
				fallbackHeight={300}
			>
				<LieRateByCaptainChart />
			</ChartCard>
			<ChartCard
				title='Cumulative score difference'
				description='Running David-minus-Lee score across episodes in season order. Above zero favours David; below zero favours Lee.'
				fallbackHeight={300}
			>
				<CumulativeDifferenceChart />
			</ChartCard>
			<ChartCard
				title='Win margin breakdown'
				description='Decided episodes grouped by winning captain and margin, from 1-point grinds to 4+ point blowouts.'
				fallbackHeight={340}
			>
				<MarginBreakdownChart />
			</ChartCard>
			<ChartCard
				title='Clean sheets'
				description='Episodes where one captain held the opposition to zero points.'
				fallbackHeight={300}
			>
				<CleanSheetsChart />
			</ChartCard>
			<ChartCard
				title='Liar of the Week by team'
				description={`Awards exist in seasons ${meta.awardSeasonFrom}–${meta.awardSeasonTo} (${meta.awardEpisodeCount} episodes). Guests are grouped under the captain whose team they sat on.`}
				fallbackHeight={300}
			>
				<LiarByTeamChart />
			</ChartCard>
			<ChartCard
				title='Episode heatmap'
				description='One square per scored episode, one row per season. Blue is a David win, orange a Lee win, grey a draw. Compilations are excluded.'
				fallbackHeight={450}
			>
				<EpisodeHeatmap />
			</ChartCard>
			<ChartCard
				title='Captain × episode heatmap'
				description='Pick David or Lee to see every round they guessed, one row per season with episodes grouped within it, coloured correct, wrong or abstained.'
				fallbackHeight={790}
			>
				<PlayerHeatmap />
			</ChartCard>
		</ChartsSection>
	)
}
