import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Michelle de Swarte',
			wiki: 'https://en.wikipedia.org/wiki/Michelle_de_Swarte',
			gender: 'female'
		},
		{
			name: 'Chris Ramsey',
			wiki: 'https://en.wikipedia.org/wiki/Chris_Ramsey_(comedian)',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Sara Davies',
			wiki: 'https://en.wikipedia.org/wiki/Sara_Davies',
			gender: 'female'
		},
		{
			name: 'Bob Mortimer',
			wiki: 'https://en.wikipedia.org/wiki/Bob_Mortimer',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Despite being a wealthy Dragon, I recently sold half a tin of paint on eBay for £7.50.',
		guessingTeam: 'David Mitchell',
		person: 'Sara Davies',
		personGuesses: {
			'Chris Ramsey': 'lie',
			'David Mitchell': 'lie',
			'Michelle de Swarte': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once upset a lot of people after I was hired to film a wedding.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'Chris Ramsey': 'lie',
			'David Mitchell': 'truth',
			'Michelle de Swarte': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once had a row with friend after he did something inappropriate in my car.',
		guessingTeam: 'Lee Mack',
		person: 'Chris Ramsey',
		personGuesses: {
			'Bob Mortimer': 'lie',
			'Lee Mack': 'truth',
			'Sara Davies': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Linda',
		connections: {
			'Bob Mortimer': 'Linda allowed me to blow up her caravan.',
			'Lee Mack': 'Linda\'s monkey beat me at Snap.',
			'Sara Davies': 'Linda is me on German TV.'
		},
		personGuesses: {
			'Chris Ramsey': 'undecided',
			'David Mitchell': 'Lee Mack',
			'Michelle de Swarte': 'undecided'
		},
		teamGuess: 'Lee Mack',
		truth: 'Sara Davies'
	},
	{
		type: 'quick_fire',
		statement: 'I once at a Full English in a plane toilet.',
		guessingTeam: 'Lee Mack',
		person: 'Michelle de Swarte',
		personGuesses: {
			'Bob Mortimer': 'lie',
			'Lee Mack': 'truth',
			'Sara Davies': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 18,
	episode: 10,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
