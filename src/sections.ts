import { memo } from 'react'

import Bob from './components/bob/Bob'
import DavidLee from './components/davidLee/DavidLee'
import Formats from './components/formats/Formats'
import Guests from './components/guests/Guests'
import LieDetection from './components/lieDetection/LieDetection'

export const SECTIONS = [
	{ value: 'rivalry', label: 'David vs Lee', Component: memo(DavidLee) },
	{ value: 'formats', label: 'Formats & panel', Component: memo(Formats) },
	{ value: 'guests', label: 'Guests', Component: memo(Guests) },
	{ value: 'lies', label: 'Lie detection', Component: memo(LieDetection) },
	{ value: 'bob', label: 'Bob', Component: memo(Bob) }
] as const

export type SectionValue = typeof SECTIONS[number]['value']

export function isSectionValue(value: string): value is SectionValue {
	return SECTIONS.some(section => section.value === value)
}
