import { Box, Group, Stack, Text, Tooltip } from '@mantine/core'
import { Fragment } from 'react'

import { chartData } from '../../generated/chartData'

const TICKS = [0, 25, 50, 75, 100]
const ROW_HEIGHT = 72

const data = [...chartData.bobVsShowByTruth].sort((a, b) =>
	(a.truth === 'truth' ? 0 : 1) - (b.truth === 'truth' ? 0 : 1)
)
const truth = data.find(point => point.truth === 'truth')
const lie = data.find(point => point.truth === 'lie')

function formatGap(value: number) {
	const rounded = Math.abs(value) < 0.05 ? 0 : Math.round(value * 10) / 10
	return `${rounded > 0 ? '+' : ''}${rounded.toFixed(1)} pts`
}

function gapColor(value: number) {
	return value > 0 ? 'grape' : value < 0 ? 'teal' : 'dimmed'
}

export default function BobFoolRateByTruthChart() {
	const truthGap = truth ? truth.bobRate - truth.showRate : 0
	const lieGap = lie ? lie.bobRate - lie.showRate : 0

	return (
		<Stack gap='xs'>
			<Group gap='lg' wrap='wrap'>
				<Group gap={4} wrap='nowrap'>
					<Box w={10} h={10} bg='var(--mantine-color-grape-filled)' style={{ borderRadius: '50%' }} />
					<Text size='xs'>Bob</Text>
				</Group>
				<Group gap={4} wrap='nowrap'>
					<Box w={10} h={10} bg='var(--mantine-color-blue-filled)' style={{ borderRadius: '50%' }} />
					<Text size='xs'>Show baseline</Text>
				</Group>
				<Text size='xs' c='dimmed'>Regular episodes only</Text>
			</Group>
			<Box style={{ display: 'grid', gridTemplateColumns: '58px minmax(0, 1fr) 72px', columnGap: 8 }}>
				<Box />
				<Text size='10px' c='dimmed' ta='center'>Fool rate</Text>
				<Text size='10px' c='dimmed' ta='right'>Bob − show</Text>
				{data.map(point => {
					const gap = point.bobRate - point.showRate
					const left = Math.min(point.bobRate, point.showRate)
					const width = Math.abs(point.bobRate - point.showRate)
					return (
						<Fragment key={point.truth}>
							<Box h={ROW_HEIGHT} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
								<Text size='xs' fw={600} c={point.truth === 'lie' ? 'grape' : undefined}>
									{point.label}
								</Text>
								<Text size='10px' c='dimmed'>
									{point.bobRounds} {point.bobRounds === 1 ? 'story' : 'stories'}
								</Text>
							</Box>
							<Box h={ROW_HEIGHT} style={{ position: 'relative', marginRight: 8 }}>
								{TICKS.map(tick => (
									<Box
										key={tick}
										style={{
											position: 'absolute',
											left: `${tick}%`,
											top: 0,
											bottom: 0,
											borderLeft: '1px solid var(--mantine-color-default-border)'
										}}
									/>
								))}
								<Box
									style={{
										position: 'absolute',
										left: 0,
										right: 0,
										top: '50%',
										height: 4,
										background: 'var(--mantine-color-default-border)',
										borderRadius: 2,
										transform: 'translateY(-50%)'
									}}
								/>
								{width > 0 && (
									<Box
										style={{
											position: 'absolute',
											left: `${left}%`,
											width: `${width}%`,
											top: '50%',
											height: 4,
											background: 'var(--mantine-color-gray-5)',
											borderRadius: 2,
											transform: 'translateY(-50%)'
										}}
									/>
								)}
								<Tooltip
									withArrow
									label={(
										<Stack gap={2}>
											<Text size='xs' fw={600}>Bob · {point.label.toLowerCase()}</Text>
											<Text size='xs'>
												{point.bobWrong} of {point.bobGuesses} guesses fooled ({point.bobRate}%)
											</Text>
											<Text size='xs' c='dimmed'>{point.bobRounds} rounds</Text>
										</Stack>
									)}
								>
									<Box
										style={{
											position: 'absolute',
											left: `${point.bobRate}%`,
											top: '50%',
											width: 14,
											height: 14,
											background: 'var(--mantine-color-grape-filled)',
											borderRadius: '50%',
											transform: 'translate(-50%, -50%)',
											cursor: 'default',
											zIndex: 1
										}}
									/>
								</Tooltip>
								<Tooltip
									withArrow
									label={(
										<Stack gap={2}>
											<Text size='xs' fw={600}>Show baseline · {point.label.toLowerCase()}</Text>
											<Text size='xs'>
												{point.showWrong} of {point.showGuesses} guesses fooled ({point.showRate}%)
											</Text>
											<Text size='xs' c='dimmed'>{point.showRounds} rounds · regular episodes</Text>
										</Stack>
									)}
								>
									<Box
										style={{
											position: 'absolute',
											left: `${point.showRate}%`,
											top: '50%',
											width: 14,
											height: 14,
											background: 'var(--mantine-color-blue-filled)',
											borderRadius: '50%',
											transform: 'translate(-50%, -50%)',
											cursor: 'default',
											zIndex: 1
										}}
									/>
								</Tooltip>
								<Text
									size='10px'
									fw={700}
									c='grape'
									style={{ position: 'absolute', left: `${point.bobRate}%`, top: 4, transform: 'translateX(-50%)' }}
								>
									{point.bobRate}%
								</Text>
								<Text
									size='10px'
									fw={700}
									c='blue'
									style={{ position: 'absolute', left: `${point.showRate}%`, bottom: 4, transform: 'translateX(-50%)' }}
								>
									{point.showRate}%
								</Text>
							</Box>
							<Box h={ROW_HEIGHT} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
								<Text size='xs' fw={700} c={gapColor(gap)}>{formatGap(gap)}</Text>
							</Box>
						</Fragment>
					)
				})}
				<Box />
				<Box style={{ position: 'relative', height: 16, marginRight: 8 }}>
					{TICKS.map(tick => (
						<Text
							key={tick}
							size='10px'
							c='dimmed'
							style={{
								position: 'absolute',
								left: `${tick}%`,
								top: 0,
								transform: tick === 0
									? 'none'
									: tick === 100 ? 'translateX(-100%)' : 'translateX(-50%)'
							}}
						>
							{tick}%
						</Text>
					))}
				</Box>
				<Box />
			</Box>
			<Text size='xs' c='dimmed'>
				Bob beat the show baseline by {formatGap(truthGap)} on truths and {formatGap(lieGap)} on lies. His lie rate is
				based on {lie?.bobRounds ?? 0} round and {lie?.bobGuesses ?? 0} guesses, so treat that gap cautiously. The
				baseline covers all binary rounds in regular episodes; compilations are excluded.
			</Text>
		</Stack>
	)
}
