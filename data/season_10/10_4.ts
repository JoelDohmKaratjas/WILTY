import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Katherine Ryan',
			wiki: 'https://en.wikipedia.org/wiki/Katherine_Ryan',
			gender: 'female'
		},
		{
			name: 'John Simpson',
			wiki: 'https://en.wikipedia.org/wiki/John_Simpson_(journalist)',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Warwick Davis',
			wiki: 'https://en.wikipedia.org/wiki/Warwick_Davis',
			gender: 'male'
		},
		{
			name: 'Hugh Dennis',
			wiki: 'https://en.wikipedia.org/wiki/Hugh_Dennis',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'My motto is \'Never give a child a one-syllable name\' because life has taught me that people with one-syllable names are generally dim.',
		guessingTeam: 'Lee Mack',
		person: 'Katherine Ryan',
		personGuesses: {
			'Hugh Dennis': 'lie',
			'Lee Mack': 'lie',
			'Warwick Davis': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		possession: true,
		statement: 'This is the bottle of hand gel I use to wash my hands before I handle my main bottle of hand gel.',
		guessingTeam: 'David Mitchell',
		person: 'Warwick Davis',
		personGuesses: {
			'David Mitchell': 'lie',
			'John Simpson': 'lie',
			'Katherine Ryan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once crawled through passport control on my hands and knees because I\'d forgotten to pack my passport.',
		guessingTeam: 'Lee Mack',
		person: 'John Simpson',
		personGuesses: {
			'Hugh Dennis': 'truth',
			'Lee Mack': 'truth',
			'Warwick Davis': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Michael',
		connections: {
			'Hugh Dennis': 'He once tried to sell the remains of my lunch for a hundred pounds.',
			'Lee Mack': 'Last summer, I threw his phone in a boating lake.',
			'Warwick Davis': 'I first met him when his shot put came over my garden fence.'
		},
		personGuesses: {
			'David Mitchell': 'Warwick Davis',
			'John Simpson': 'unknown',
			'Katherine Ryan': 'Warwick Davis'
		},
		teamGuess: 'Warwick Davis',
		truth: 'Hugh Dennis'
	},
	{
		type: 'quick_fire',
		statement: 'Last summer, I lost a tennis match when a bee buzzed up the leg of my shorts at a crucial moment.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Hugh Dennis': 'lie',
			'Lee Mack': 'lie',
			'Warwick Davis': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 10,
	episode: 4,
	rounds: rounds,
	score: [1, 4],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
