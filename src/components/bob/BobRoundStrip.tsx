import { Box, Group, Stack, Text, Tooltip } from '@mantine/core'

import type { BobRoundPoint } from '../../chartTypes'
import { chartData } from '../../generated/chartData'

const OUTCOME_COLOR = {
	fooled: 'red.7',
	caught: 'teal.7'
} as const

const OUTCOME_LABEL = {
	fooled: 'Fooled',
	caught: 'Caught'
} as const

const seasons = new Map<number, BobRoundPoint[]>()
for (const round of chartData.bobRounds) {
	const rounds = seasons.get(round.season) ?? []
	rounds.push(round)
	seasons.set(round.season, rounds)
}

export default function BobRoundStrip() {
	return (
		<Stack gap='xs'>
			<Group gap='lg' wrap='wrap'>
				{(Object.keys(OUTCOME_COLOR) as readonly (keyof typeof OUTCOME_COLOR)[]).map(outcome => (
					<Group key={outcome} gap={4} wrap='nowrap'>
						<Box w={12} h={12} bg={OUTCOME_COLOR[outcome]} style={{ borderRadius: 2 }} />
						<Text size='xs'>{OUTCOME_LABEL[outcome]}</Text>
					</Group>
				))}
				<Text size='xs' c='dimmed'>T = truth, L = lie</Text>
			</Group>
			<Stack gap={6}>
				{[...seasons.entries()]
					.sort(([a], [b]) => a - b)
					.map(([season, rounds]) => (
						<Group key={season} gap='sm' wrap='nowrap'>
							<Text size='xs' fw={600} w={24}>{season}</Text>
							<Group gap={4} wrap='nowrap'>
								{rounds.map(round => (
									<Tooltip
										key={round.key}
										label={(
											<Stack gap={2} maw={320}>
												<Text size='xs' fw={600}>{round.label} · {OUTCOME_LABEL[round.outcome]}</Text>
												<Text size='xs'>{round.statement || 'No statement recorded'}</Text>
												<Text size='xs'>Called a {round.call}; it was a {round.truth}</Text>
												<Text size='xs' c='dimmed'>
													Fooled on {round.wrong} of {round.guesses} guesses ({round.foolRate}%)
												</Text>
											</Stack>
										)}
										withArrow
									>
										<Box
											w={24}
											h={24}
											bg={OUTCOME_COLOR[round.outcome]}
											style={{
												borderRadius: 4,
												cursor: 'default',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center'
											}}
										>
											<Text size='11px' fw={700} c='white'>
												{round.truth === 'truth' ? 'T' : 'L'}
											</Text>
										</Box>
									</Tooltip>
								))}
							</Group>
						</Group>
					))}
			</Stack>
		</Stack>
	)
}
