import { Box, Group, Stack, Text, Tooltip } from '@mantine/core'

import type { LiarAwardPoint } from '../../chartTypes'
import { chartData } from '../../generated/chartData'

const timeline: readonly LiarAwardPoint[] = chartData.liarAwardTimeline
const awarded = timeline.filter(point => point.person !== null)
const uniqueWinners = new Set(awarded.map(point => point.person)).size
const repeatWinners = new Set(awarded.filter(point => point.isRepeatWinner).map(point => point.person)).size

const COLOR = {
	david: 'blue.7',
	lee: 'orange.7',
	none: 'gray.7'
} as const

const TEAM_LABEL = {
	david: 'David’s guest',
	lee: 'Lee’s guest'
} as const

const bySeason = new Map<number, LiarAwardPoint[]>()
for (const point of timeline) {
	const points = bySeason.get(point.season) ?? []
	points.push(point)
	bySeason.set(point.season, points)
}

function colorOf(team: LiarAwardPoint['team']) {
	return team === 'david' ? COLOR.david : team === 'lee' ? COLOR.lee : COLOR.none
}

function teamLabel(team: LiarAwardPoint['team']) {
	return team === 'david' || team === 'lee' ? TEAM_LABEL[team] : 'No award'
}

export default function LiarWinnerTimeline() {
	return (
		<Stack gap='xs'>
			<Group gap='lg' wrap='wrap'>
				<Group gap={4} wrap='nowrap'>
					<Box w={12} h={12} bg={COLOR.david} style={{ borderRadius: 2 }} />
					<Text size='xs'>David’s guest</Text>
				</Group>
				<Group gap={4} wrap='nowrap'>
					<Box w={12} h={12} bg={COLOR.lee} style={{ borderRadius: 2 }} />
					<Text size='xs'>Lee’s guest</Text>
				</Group>
				<Group gap={4} wrap='nowrap'>
					<Box w={12} h={12} bg={COLOR.none} style={{ borderRadius: 2 }} />
					<Text size='xs'>No award</Text>
				</Group>
				<Group gap={4} wrap='nowrap'>
					<Box
						w={12}
						h={12}
						bg={COLOR.david}
						style={{ borderRadius: 2, border: '2px solid var(--mantine-color-yellow-5)' }}
					/>
					<Text size='xs'>Repeat winner</Text>
				</Group>
			</Group>
			<Box style={{ overflowX: 'auto' }}>
				<Stack gap={6}>
					{[...bySeason.entries()]
						.sort(([a], [b]) => a - b)
						.map(([season, points]) => (
							<Group key={season} gap='sm' wrap='nowrap'>
								<Text size='xs' fw={600} w={24}>{season}</Text>
								<Group gap={4} wrap='nowrap'>
									{points.map(point => (
										<Tooltip
											key={point.key}
											label={(
												<Stack gap={2}>
													<Text size='xs' fw={600}>{point.label}</Text>
													<Text size='xs'>{point.person ?? 'No award recorded'}</Text>
													<Text size='xs' c='dimmed'>
														{point.person
															? `${teamLabel(point.team)} · ${point.wins} ${point.wins === 1 ? 'award' : 'awards'}`
															: 'No Liar of the Week recorded'}
													</Text>
													{point.isRepeatWinner && (
														<Text size='xs' c='yellow'>Repeat winner</Text>
													)}
												</Stack>
											)}
											withArrow
										>
											<Box
												w={28}
												h={28}
												bg={colorOf(point.team)}
												style={{
													borderRadius: 4,
													border: point.isRepeatWinner
														? '2px solid var(--mantine-color-yellow-5)'
														: '1px solid transparent',
													cursor: 'default',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center'
												}}
											>
												<Text size='10px' fw={700} c='white'>{point.episode}</Text>
											</Box>
										</Tooltip>
									))}
								</Group>
							</Group>
						))}
				</Stack>
			</Box>
			<Text size='xs' c='dimmed'>
				One square per episode during the award era. {uniqueWinners} guests won {awarded.length} awards; only{' '}
				{repeatWinners} won more than once. Hover a square for the winner and their total awards.
			</Text>
		</Stack>
	)
}
