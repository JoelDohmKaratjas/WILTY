import { Box, Group, SegmentedControl, Stack, Text, Tooltip } from '@mantine/core'
import { useMemo, useState } from 'react'

import type { BobGuestFoolRatePoint } from '../../chartTypes'
import { chartData } from '../../generated/chartData'

const guests = chartData.bobGuestsFoolRate
const { showAverage } = chartData.bobSummary
const GRID_COLUMNS = '150px minmax(220px, 1fr) 52px'

export default function BobVsFieldChart() {
	const [minimum, setMinimum] = useState('5')
	const points = useMemo(
		() => guests
			.filter(point => point.statements >= Number(minimum))
			.sort((a, b) => b.foolRate - a.foolRate || b.statements - a.statements),
		[minimum]
	)

	return (
		<Stack gap='xs'>
			<Group justify='space-between' wrap='wrap'>
				<SegmentedControl
					size='xs'
					value={minimum}
					onChange={setMinimum}
					data={[
						{ value: '3', label: '3+ stories' },
						{ value: '5', label: '5+ stories' },
						{ value: '10', label: '10+ stories' }
					]}
				/>
				<Text size='xs' c='dimmed'>Show-wide average: {showAverage}%</Text>
			</Group>
			<Group gap='lg' wrap='wrap'>
				<Group gap={4} wrap='nowrap'>
					<Box w={10} h={10} bg='var(--mantine-color-grape-filled)' style={{ borderRadius: '50%' }} />
					<Text size='xs'>Bob</Text>
				</Group>
				<Group gap={4} wrap='nowrap'>
					<Box w={10} h={10} bg='var(--mantine-color-blue-filled)' style={{ borderRadius: '50%' }} />
					<Text size='xs'>Other guests</Text>
				</Group>
				<Group gap={4} wrap='nowrap'>
					<Box w={16} style={{ borderTop: '1px dashed var(--mantine-color-gray-5)' }} />
					<Text size='xs'>Show average</Text>
				</Group>
			</Group>
			<Box style={{ overflowX: 'auto' }}>
				<Stack gap={2}>
					{points.map((point: BobGuestFoolRatePoint) => {
						const color = point.isBob
							? 'var(--mantine-color-grape-filled)'
							: 'var(--mantine-color-blue-filled)'
						return (
							<Box
								key={point.person}
								style={{ display: 'grid', gridTemplateColumns: GRID_COLUMNS, alignItems: 'center', minHeight: 22 }}
							>
								<Text
									size='xs'
									fw={point.isBob ? 700 : 400}
									c={point.isBob ? 'grape' : undefined}
									truncate
								>
									{point.person}
								</Text>
								<Box h={16} style={{ position: 'relative' }}>
									<Box
										style={{
											position: 'absolute',
											left: 0,
											right: 0,
											top: 7,
											height: 2,
											background: 'var(--mantine-color-default-border)'
										}}
									/>
									<Box
										style={{
											position: 'absolute',
											left: 0,
											top: 7,
											width: `${point.foolRate}%`,
											height: 2,
											background: color
										}}
									/>
									<Box
										style={{
											position: 'absolute',
											left: `${showAverage}%`,
											top: 0,
											bottom: 0,
											borderLeft: '1px dashed var(--mantine-color-gray-5)'
										}}
									/>
									<Tooltip
										withArrow
										label={(
											<Stack gap={2}>
												<Text size='xs' fw={600}>{point.person}</Text>
												<Text size='xs'>
													Fooled on {point.wrong} of {point.guesses} guesses ({point.foolRate}%)
												</Text>
												<Text size='xs' c='dimmed'>{point.statements} stories in regular episodes</Text>
											</Stack>
										)}
									>
										<Box
											w={10}
											h={10}
											style={{
												position: 'absolute',
												left: `calc(${point.foolRate}% - 5px)`,
												top: 3,
												background: color,
												borderRadius: '50%',
												cursor: 'default'
											}}
										/>
									</Tooltip>
								</Box>
								<Text size='xs' ta='right' fw={point.isBob ? 700 : 400}>
									{point.foolRate}%
								</Text>
							</Box>
						)
					})}
					<Box style={{ display: 'grid', gridTemplateColumns: GRID_COLUMNS }}>
						<Text size='10px' c='dimmed'>Guest</Text>
						<Box h={14} style={{ position: 'relative' }}>
							{[0, 25, 50, 75, 100].map(tick => (
								<Text
									key={tick}
									size='10px'
									c='dimmed'
									style={{
										position: 'absolute',
										left: `${tick}%`,
										transform: tick === 0
											? 'none'
											: tick === 100 ? 'translateX(-100%)' : 'translateX(-50%)'
									}}
								>
									{tick}%
								</Text>
							))}
						</Box>
						<Text size='10px' c='dimmed' ta='right'>Rate</Text>
					</Box>
				</Stack>
			</Box>
			<Text size='xs' c='dimmed'>
				Showing {points.length} guests. “Fooled” means the guessing team got the statement wrong; unknown calls count
				as correct and undecided calls are excluded. Compilations are excluded.
			</Text>
		</Stack>
	)
}
