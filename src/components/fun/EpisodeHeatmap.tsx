import { Box, Group, Stack, Text, Tooltip } from '@mantine/core'

import { chartData } from '../../generated/chartData'

type Outcome = 'david' | 'lee' | 'draw'

type EpisodeCell = {
	key: string
	label: string
	david: number
	lee: number
	outcome: Outcome
}

const OUTCOME_COLOR: Record<Outcome, string> = {
	david: 'blue.6',
	lee: 'orange.6',
	draw: 'gray.6'
}

const OUTCOME_LABEL: Record<Outcome, string> = {
	david: 'David win',
	lee: 'Lee win',
	draw: 'Draw'
}

const bySeason = new Map<number, EpisodeCell[]>()
for (const point of chartData.scoreByEpisode) {
	const outcome: Outcome = point.david > point.lee
		? 'david'
		: point.lee > point.david ? 'lee' : 'draw'
	const cells = bySeason.get(point.season) ?? []
	cells.push({
		key: point.key,
		label: point.label,
		david: point.david,
		lee: point.lee,
		outcome
	})
	bySeason.set(point.season, cells)
}

const seasons = Array.from(
	{ length: chartData.meta.seasonTo - chartData.meta.seasonFrom + 1 },
	(_, index) => chartData.meta.seasonFrom + index
)

export default function EpisodeHeatmap() {
	return (
		<Stack gap={8}>
			<Group gap='xs'>
				<Text size='xs' c='dimmed'>Key</Text>
				{(['david', 'lee', 'draw'] as const).map(outcome => (
					<Group key={outcome} gap={4} wrap='nowrap'>
						<Box w={12} h={12} bg={OUTCOME_COLOR[outcome]} style={{ borderRadius: 2 }} />
						<Text size='xs'>{OUTCOME_LABEL[outcome]}</Text>
					</Group>
				))}
			</Group>
			{seasons.map(season => (
				<Group key={season} gap={6} wrap='nowrap'>
					<Text size='xs' c='dimmed' w={20}>{season}</Text>
					{(bySeason.get(season) ?? []).map(cell => (
						<Tooltip
							key={cell.key}
							label={`${cell.label} · David ${cell.david}–${cell.lee} Lee · ${OUTCOME_LABEL[cell.outcome]}`}
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
			))}
		</Stack>
	)
}
