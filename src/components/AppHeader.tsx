import { Box, Group, Stack, Tabs, Title } from '@mantine/core'
import { useEffect, useRef } from 'react'

import { SECTIONS, type SectionValue } from '../sections'
import GitHubLink from './Github'

const TAB_VISIBLE_PADDING = 12

type AppHeaderProps = {
	active: SectionValue
	onSelect: (value: string | null) => void
	isCompact: boolean
}

export default function AppHeader({ active, onSelect, isCompact }: AppHeaderProps) {
	const tabsRef = useRef<HTMLDivElement | null>(null)
	const tabRefs = useRef<Partial<Record<SectionValue, HTMLButtonElement | null>>>({})

	useEffect(() => {
		if (!isCompact) return
		const list = tabsRef.current
		const tab = tabRefs.current[active]
		if (!list || !tab) return

		const listRect = list.getBoundingClientRect()
		const tabRect = tab.getBoundingClientRect()
		if (
			tabRect.left >= listRect.left + TAB_VISIBLE_PADDING
			&& tabRect.right <= listRect.right - TAB_VISIBLE_PADDING
		) return

		const target = list.scrollLeft + tabRect.left - listRect.left - (listRect.width - tabRect.width) / 2
		list.scrollTo({ left: target, behavior: 'smooth' })
	}, [active, isCompact])

	const title = (
		<Title
			order={isCompact ? 5 : 3}
			style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
		>
			Would I Lie To You Charts
		</Title>
	)
	const github = (
		<Box style={{ flexShrink: 0 }}>
			<GitHubLink />
		</Box>
	)
	const tabs = (
		<Tabs.List
			ref={tabsRef}
			style={{ flexWrap: 'nowrap', overflowX: 'auto', overflowY: 'hidden', scrollbarWidth: 'none' }}
		>
			{SECTIONS.map(section => (
				<Tabs.Tab
					key={section.value}
					value={section.value}
					ref={node => {
						tabRefs.current[section.value] = node
					}}
					style={{ flexShrink: 0 }}
					onClick={section.value === active ? () => onSelect(section.value) : undefined}
				>
					{section.label}
				</Tabs.Tab>
			))}
		</Tabs.List>
	)

	return (
		<Tabs value={active} onChange={onSelect} variant='pills' h='100%'>
			{isCompact
				? (
					<Stack h='100%' gap={4} justify='center' px='sm' py={6}>
						<Group justify='space-between' align='center' wrap='nowrap' gap='xs'>
							{title}
							{github}
						</Group>
						{tabs}
					</Stack>
				)
				: (
					<Group h='100%' px='md' justify='space-between' align='center' wrap='nowrap'>
						{title}
						{tabs}
						{github}
					</Group>
				)}
		</Tabs>
	)
}
