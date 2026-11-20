import { Box, Group, Paper, Stack, Text, Title } from '@mantine/core'
import { type ReactNode, Suspense } from 'react'
import ChartFallback from './ChartFallback'

type ChartCardProps = {
	title: string
	description: string
	fallbackHeight?: number
	children: ReactNode
}

export default function ChartCard({
	title,
	description,
	fallbackHeight = 300,
	children
}: ChartCardProps) {
	return (
		<Paper withBorder p='md' bg='var(--mantine-color-default)'>
			<Stack gap='sm'>
				<Group justify='space-between' align='flex-start'>
					<Stack gap={2}>
						<Title order={4}>{title}</Title>
						<Text size='xs' c='dimmed'>{description}</Text>
					</Stack>
				</Group>
				<Box
					style={{
						minHeight: fallbackHeight,
						contentVisibility: 'auto',
						containIntrinsicBlockSize: `auto ${fallbackHeight}px`
					}}
				>
					<Suspense fallback={<ChartFallback height={fallbackHeight} />}>
						{children}
					</Suspense>
				</Box>
			</Stack>
		</Paper>
	)
}
