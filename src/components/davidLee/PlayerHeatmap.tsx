import { Box, Group, SegmentedControl, Stack, Text, Tooltip } from '@mantine/core'
import { useMemo, useState } from 'react'

import type { PlayerRoundPoint } from '../../chartTypes'
import { chartData } from '../../generated/chartData'

type Captain = 'David Mitchell' | 'Lee Mack'

const OUTCOME_COLOR = {
	correct: 'teal.7',
	wrong: 'red.7',
	abstained: 'gray.6'
} as const

const OUTCOME_LABEL = {
	correct: 'Correct',
	wrong: 'Wrong',
	abstained: 'Abstained'
} as const

type EpisodeGroup = {
	episode: number
	cells: PlayerRoundPoint[]
}

type SeasonGroup = {
	season: number
	episodes: EpisodeGroup[]
}

export default function PlayerHeatmap() {
	const [player, setPlayer] = useState<Captain>('David Mitchell')

	const seasons = useMemo(() => {
		const bySeason = new Map<number, Map<number, PlayerRoundPoint[]>>()
		for (const point of chartData.playerRounds) {
			if (point.person !== player) continue
			const byEpisode = bySeason.get(point.season) ?? new Map<number, PlayerRoundPoint[]>()
			const cells = byEpisode.get(point.episode) ?? []
			cells.push(point)
			byEpisode.set(point.episode, cells)
			bySeason.set(point.season, byEpisode)
		}
		const result: SeasonGroup[] = [...bySeason.entries()]
			.sort(([a], [b]) => a - b)
			.map(([season, byEpisode]) => ({
				season,
				episodes: [...byEpisode.entries()]
					.sort(([a], [b]) => a - b)
					.map(([episode, cells]) => ({
						episode,
						cells: cells.sort((a, b) => a.round - b.round)
					}))
			}))
		return result
	}, [player])

	return (
		<Stack gap='xs'>
			<SegmentedControl
				size='xs'
				value={player}
				onChange={value => setPlayer(value)}
				data={[
					{ value: 'David Mitchell', label: 'David' },
					{ value: 'Lee Mack', label: 'Lee' }
				]}
			/>
			<Group gap='xs' ml='auto' wrap='nowrap'>
				{(Object.keys(OUTCOME_COLOR) as readonly (keyof typeof OUTCOME_COLOR)[]).map(outcome => (
					<Group key={outcome} gap={4} wrap='nowrap'>
						<Box w={12} h={12} bg={OUTCOME_COLOR[outcome]} style={{ borderRadius: 2 }} />
						<Text size='xs'>{OUTCOME_LABEL[outcome]}</Text>
					</Group>
				))}
			</Group>
			<Box style={{ overflowX: 'auto' }}>
				<Stack gap={8}>
					{seasons.map(row => (
						<Group key={row.season} gap={8} wrap='nowrap' align='flex-end'>
							<Text size='xs' fw={600} w={28}>{row.season}</Text>
							{row.episodes.map(episode => (
								<Stack key={episode.episode} gap={2} align='center'>
									<Text size='10px' c='dimmed'>E{episode.episode}</Text>
									<Group gap={2} wrap='nowrap'>
										{episode.cells.map(cell => (
											<Tooltip
												key={cell.label}
												label={(
													<Stack gap={2}>
														<Text size='xs' fw={600}>{cell.label} · {OUTCOME_LABEL[cell.outcome]}</Text>
														<Text size='xs'>Said “{cell.call}”, was {cell.truth}</Text>
													</Stack>
												)}
												withArrow
											>
												<Box
													w={18}
													h={18}
													bg={OUTCOME_COLOR[cell.outcome]}
													style={{ borderRadius: 3, cursor: 'default' }}
												/>
											</Tooltip>
										))}
									</Group>
								</Stack>
							))}
						</Group>
					))}
				</Stack>
			</Box>
			<Text size='xs' c='dimmed'>
				One row per season. Each labelled cluster is an episode, with a square for every round the player guessed.
				“Abstained” is an unknown or undecided call; unknown still counts as correct in the accuracy charts.
			</Text>
		</Stack>
	)
}
