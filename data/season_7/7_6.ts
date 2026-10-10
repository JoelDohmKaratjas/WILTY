import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Sarah Millican',
			wiki: 'https://en.wikipedia.org/wiki/Sarah_Millican',
			gender: 'female'
		},
		{
			name: 'Jon Richardson',
			wiki: 'https://en.wikipedia.org/wiki/Jon_Richardson',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'David Harewood',
			wiki: 'https://en.wikipedia.org/wiki/David_Harewood',
			gender: 'male'
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
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jon Richardson': 'lie',
			'Sarah Millican': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Jon Richardson',
		personGuesses: {
			'Bob Mortimer': 'lie',
			'David Harewood': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Mitchell': 'David Harewood',
			'Jon Richardson': 'Bob Mortimer',
			'Sarah Millican': 'David Harewood'
		},
		teamGuess: 'David Harewood',
		truth: 'Bob Mortimer'
	},
	{
		type: 'quick_fire',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'Sarah Millican',
		personGuesses: {
			'Bob Mortimer': 'lie',
			'David Harewood': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'David Harewood',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jon Richardson': 'lie',
			'Sarah Millican': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 7,
	episode: 6,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: 'Bob Mortimer'
} as const satisfies StandardEpisode<typeof cast>
