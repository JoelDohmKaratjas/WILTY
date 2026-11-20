import { Box, SimpleGrid, Stack, Text, Tooltip } from '@mantine/core'
import { Fragment } from 'react'

import { chartData } from '../../generated/chartData'
import type { Team } from '../../chartTypes'

const data = [...chartData.confusionMatrix]
const actuals = ['truth', 'lie'] as const
const guessed = ['truth', 'lie'] as const
const teams = [
	{ team: 'david', label: 'David’s team', rgb: '34, 139, 230' },
	{ team: 'lee', label: 'Lee’s team', rgb: '255, 146, 43' }
] as const satisfies readonly { team: Team, label: string, rgb: string }[]

function Matrix({ team, label, rgb }: typeof teams[number]) {
	return (
		<Stack gap={6}>
			<Text size='sm' fw={600}>{label}</Text>
			<Box style={{ display: 'grid', gridTemplateColumns: '58px repeat(2, 1fr)', gap: 4 }}>
				<Box />
				{guessed.map(guess => (
					<Text key={guess} size='xs' fw={600} ta='center' tt='capitalize'>{guess}</Text>
				))}
				{actuals.map(actual => (
					<Fragment key={actual}>
						<Text size='xs' fw={600} ta='right' tt='capitalize'>{actual}</Text>
						{guessed.map(guess => {
							const cell = data.find(point =>
								point.team === team && point.actual === actual && point.guessed === guess)
							const count = cell?.count ?? 0
							const percent = cell?.percent ?? 0
							const intensity = percent / 100
							return (
								<Tooltip
									key={guess}
									label={`${count} guesses · ${percent}% of ${actual} statements`}
								>
									<Box
										style={{
											backgroundColor: `rgba(${rgb}, ${0.12 + intensity * 0.78})`,
											borderRadius: 4,
											minHeight: 56,
											padding: 6,
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											justifyContent: 'center'
										}}
									>
										<Text
											size='sm'
											fw={700}
											style={{ color: intensity > 0.55 ? '#fff' : undefined }}
										>
											{count}
										</Text>
										<Text
											size='xs'
											style={{ color: intensity > 0.55 ? '#fff' : undefined }}
										>
											{percent}%
										</Text>
									</Box>
								</Tooltip>
							)
						})}
					</Fragment>
				))}
			</Box>
		</Stack>
	)
}

export default function ConfusionMatrixChart() {
	return (
		<Stack gap='xs'>
			<SimpleGrid cols={{ base: 1, sm: 2 }}>
				{teams.map(team => <Matrix key={team.team} {...team} />)}
			</SimpleGrid>
			<Text size='xs' c='dimmed'>Rows are what the statement actually was; columns are the call. “Unknown” calls are counted as the team’s final call (truth or lie); undecided guesses are excluded.</Text>
		</Stack>
	)
}
