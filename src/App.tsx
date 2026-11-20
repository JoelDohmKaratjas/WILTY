import { AppShell, Box, Stack } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import AppHeader from './components/AppHeader'
import { useSectionNavigation } from './hooks/useSectionNavigation'
import { SECTIONS } from './sections'

const COMPACT_HEADER_QUERY = '(max-width: 61.99em)'
const HEADER_HEIGHT = { base: 104, md: 60 }
const HEADER_SCROLL_GAP = 16

export default function App() {
	const isCompact = useMediaQuery(COMPACT_HEADER_QUERY, false, { getInitialValueInEffect: false })
	const headerOffset = (isCompact ? HEADER_HEIGHT.base : HEADER_HEIGHT.md) + HEADER_SCROLL_GAP
	const { active, selectSection } = useSectionNavigation(headerOffset)

	return (
		<AppShell padding='md' header={{ height: HEADER_HEIGHT }}>
			<AppShell.Header bg='var(--mantine-color-default)'>
				<AppHeader active={active} onSelect={selectSection} isCompact={isCompact} />
			</AppShell.Header>
			<AppShell.Main>
				<Stack gap={64} pb={64}>
					{SECTIONS.map(({ value, Component }) => (
						<Box key={value} id={value} style={{ scrollMarginTop: headerOffset }}>
							<Component />
						</Box>
					))}
				</Stack>
			</AppShell.Main>
		</AppShell>
	)
}
