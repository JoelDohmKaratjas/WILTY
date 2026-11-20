import { SimpleGrid, Stack, Title } from '@mantine/core'
import type { ReactNode } from 'react'

type ChartsSectionProps = {
	title: string
	children: ReactNode
}

export default function ChartsSection({ title, children }: ChartsSectionProps) {
	return (
		<Stack>
			<Title order={2}>{title}</Title>
			<SimpleGrid cols={{ base: 1, lg: 2 }}>
				{children}
			</SimpleGrid>
		</Stack>
	)
}
