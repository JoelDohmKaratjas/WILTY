import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Richard Osman',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Osman',
			gender: 'male'
		},
		{
			name: 'Lou Sanders',
			wiki: 'https://en.wikipedia.org/wiki/Lou_Sanders',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Les Dennis',
			wiki: 'https://en.wikipedia.org/wiki/Les_Dennis',
			gender: 'male'
		},
		{
			name: 'Alice Levine',
			wiki: 'https://en.wikipedia.org/wiki/Alice_Levine',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'At school, because of something I once had in my lunchbox, I was given a seven-syllable nickname.',
		guessingTeam: 'Lee Mack',
		person: 'Richard Osman',
		personGuesses: {
			'Alice Levine': 'lie',
			'Lee Mack': 'lie',
			'Les Dennis': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'After an incident in a hotel room, the crew of Celebs Go Fishing wrongly believed I was having a breakdown.',
		guessingTeam: 'David Mitchell',
		person: 'Les Dennis',
		personGuesses: {
			'David Mitchell': 'truth',
			'Lou Sanders': 'truth',
			'Richard Osman': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'A singing coach once refused to give me lessons because he said my voice was so bad, there was nothing he could do for me.',
		guessingTeam: 'Lee Mack',
		person: 'Lou Sanders',
		personGuesses: {
			'Alice Levine': 'lie',
			'Lee Mack': 'lie',
			'Les Dennis': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Roger',
		connections: {
			'Alice Levine': 'Roger painted my living room the wrong colour twice.',
			'Lee Mack': 'We looked for a made-up dog for twenty minutes.',
			'Les Dennis': 'Roger gave me a lift to Family Fortunes on top of a bouncy castle.'
		},
		personGuesses: {
			'David Mitchell': 'Alice Levine',
			'Lou Sanders': 'Alice Levine',
			'Richard Osman': 'unknown'
		},
		teamGuess: 'Alice Levine',
		truth: 'Les Dennis'
	},
	{
		type: 'quick_fire',
		statement: 'During lockdown, I let my hair grow so long that I would occasionally tie it up in a man bun.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Alice Levine': 'unknown',
			'Lee Mack': 'lie',
			'Les Dennis': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I like to keep my old fingernail clippings, so I can use them later on.',
		guessingTeam: 'David Mitchell',
		person: 'Les Dennis',
		personGuesses: {
			'David Mitchell': 'lie',
			'Lou Sanders': 'lie',
			'Richard Osman': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 14,
	episode: 2,
	rounds: rounds,
	score: [2, 4],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
