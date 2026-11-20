import { lazy } from 'react'

import ChartCard from '../ChartCard'
import ChartsSection from '../ChartsSection'

const AccuracyByRoundTypeChart = lazy(() => import('./AccuracyByRoundTypeChart'))
const PanelConsensusChart = lazy(() => import('../panel/PanelConsensusChart'))
const RoundTypeMixBySeasonChart = lazy(() => import('./RoundTypeMixBySeasonChart'))
const TeamOverrideChart = lazy(() => import('../panel/TeamOverrideChart'))
const ThisIsMySuccessChart = lazy(() => import('./ThisIsMySuccessChart'))
const TruthLieShareByRoundTypeChart = lazy(() => import('./TruthLieShareByRoundTypeChart'))

export default function Formats() {
	return (
		<ChartsSection title='Formats and panel behaviour'>
			<ChartCard
				title='Accuracy by round type'
				description='Guess accuracy for each format by team. Ring of truth combines single, dual and host variants.'
				fallbackHeight={320}
			>
				<AccuracyByRoundTypeChart />
			</ChartCard>
			<ChartCard
				title='Round-type mix over seasons'
				description='Share of all rounds by format in each season, showing how the show’s lineup changed across 16 seasons.'
				fallbackHeight={320}
			>
				<RoundTypeMixBySeasonChart />
			</ChartCard>
			<ChartCard
				title='“This Is My” success rate'
				description='How often teams identify the correct guest from the connections, by season.'
				fallbackHeight={300}
			>
				<ThisIsMySuccessChart />
			</ChartCard>
			<ChartCard
				title='Truth/lie share by round type'
				description='True versus false statements within each true/false format. “This is my” is excluded because it has no truth or lie answer.'
				fallbackHeight={320}
			>
				<TruthLieShareByRoundTypeChart />
			</ChartCard>
			<ChartCard
				title='Unanimous vs split panels'
				description='Accuracy when all committed panelists made the same call compared with when they disagreed. Shows both individual guesses and the team’s final call.'
				fallbackHeight={320}
			>
				<PanelConsensusChart />
			</ChartCard>
			<ChartCard
				title='Team overrides'
				description='How often the team’s final call went against its panel majority, and whether those overrides were right compared with calls that followed the majority.'
				fallbackHeight={220}
			>
				<TeamOverrideChart />
			</ChartCard>
		</ChartsSection>
	)
}
