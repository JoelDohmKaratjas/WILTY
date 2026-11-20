import { useCallback, useEffect, useRef, useState } from 'react'

import { isSectionValue, SECTIONS, type SectionValue } from '../sections'

const ACTIVE_VIEWPORT_FRACTION = 0.35
const BOTTOM_TOLERANCE = 8
const TARGET_TOLERANCE = 4
const SCROLL_LOCK_TIMEOUT = 1600

export function useSectionNavigation(headerOffset: number) {
	const [active, setActive] = useState<SectionValue>(SECTIONS[0].value)
	const targetSection = useRef<SectionValue | null>(null)
	const scrollTimer = useRef<number | null>(null)

	const clearScrollLock = useCallback(() => {
		if (scrollTimer.current !== null) {
			window.clearTimeout(scrollTimer.current)
			scrollTimer.current = null
		}
		targetSection.current = null
	}, [])

	useEffect(() => {
		let frame = 0
		const updateActive = () => {
			frame = 0
			const target = targetSection.current
			if (target) {
				const top = document.getElementById(target)?.getBoundingClientRect().top
				if (top === undefined || Math.abs(top - headerOffset) > TARGET_TOLERANCE) return
				clearScrollLock()
			}

			const threshold = headerOffset + window.innerHeight * ACTIVE_VIEWPORT_FRACTION
			let current: SectionValue = SECTIONS[0].value
			for (const section of SECTIONS) {
				const element = document.getElementById(section.value)
				if (element && element.getBoundingClientRect().top <= threshold) {
					current = section.value
				}
			}
			const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - BOTTOM_TOLERANCE
			setActive(atBottom ? SECTIONS[SECTIONS.length - 1].value : current)
		}
		const onScroll = () => {
			if (frame === 0) frame = window.requestAnimationFrame(updateActive)
		}

		window.addEventListener('scroll', onScroll, { passive: true })
		window.addEventListener('resize', onScroll)
		window.addEventListener('scrollend', clearScrollLock)
		updateActive()

		return () => {
			window.removeEventListener('scroll', onScroll)
			window.removeEventListener('resize', onScroll)
			window.removeEventListener('scrollend', clearScrollLock)
			if (frame !== 0) window.cancelAnimationFrame(frame)
		}
	}, [clearScrollLock, headerOffset])

	useEffect(() => {
		const initial = window.location.hash.slice(1)
		if (isSectionValue(initial)) {
			document.getElementById(initial)?.scrollIntoView()
		}
		return () => {
			if (scrollTimer.current !== null) window.clearTimeout(scrollTimer.current)
		}
	}, [])

	const selectSection = useCallback((value: string | null) => {
		if (value === null || !isSectionValue(value)) return
		setActive(value)
		targetSection.current = value
		if (scrollTimer.current !== null) window.clearTimeout(scrollTimer.current)
		scrollTimer.current = window.setTimeout(clearScrollLock, SCROLL_LOCK_TIMEOUT)
		document.getElementById(value)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}, [clearScrollLock])

	return { active, selectSection }
}
