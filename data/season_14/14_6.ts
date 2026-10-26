import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Sara Barron',
			wiki: 'https://en.wikipedia.org/wiki/Sara_Barron',
			gender: 'female'
		},
		{
			name: 'Claudia Winkleman',
			wiki: 'https://en.wikipedia.org/wiki/Claudia_Winkleman',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'The Rev. Kate Bottley',
			wiki: 'https://en.wikipedia.org/wiki/Kate_Bottley',
			gender: 'female'
		},
		{
			name: 'Ed Gamble',
			wiki: 'https://en.wikipedia.org/wiki/Ed_Gamble',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'One Sunday, I embarrassed myself in front of the entire congregation after too many cups of communion wine.',
		guessingTeam: 'David Mitchell',
		person: 'The Rev. Kate Bottley',
		personGuesses: {
			'Claudia Winkleman': 'lie',
			'David Mitchell': 'lie',
			'Sara Barron': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'For several months, I had to sleep on the floor because I\'d given up my bed for a sunbed.',
		guessingTeam: 'Lee Mack',
		person: 'Claudia Winkleman',
		personGuesses: {
			'Ed Gamble': 'truth',
			'Lee Mack': 'truth',
			'The Rev. Kate Bottley': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once watched a sad film immediately before breaking up with a boyfriend so I could generate enough tears to mask my indifference.',
		guessingTeam: 'Lee Mack',
		person: 'Sara Barron',
		personGuesses: {
			'Ed Gamble': 'truth',
			'Lee Mack': 'lie',
			'The Rev. Kate Bottley': 'lie' // 70% lie
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'John',
		connections: {
			'Ed Gamble': 'I hid behind my shower curtain after mistaking John for a burglar.',
			'Lee Mack': 'John named his baby Lee after I helped him deliver the baby in a local library.',
			'The Rev. Kate Bottley': 'John gave me the best day of my life at the National Funeral Exhibition.'
		},
		personGuesses: {
			'Claudia Winkleman': 'The Rev. Kate Bottley',
			'David Mitchell': 'The Rev. Kate Bottley',
			'Sara Barron': 'Ed Gamble'
		},
		teamGuess: 'The Rev. Kate Bottley',
		truth: 'The Rev. Kate Bottley'
	},
	{
		type: 'quick_fire',
		statement: 'Last year, while staying in a hotel, I was forced to sleep with teabags in my ears to drown out the sound of the work Christmas party below.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Ed Gamble': 'lie',
			'Lee Mack': 'lie',
			'The Rev. Kate Bottley': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 14,
	episode: 6,
	rounds: rounds,
	score: [1, 4],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
