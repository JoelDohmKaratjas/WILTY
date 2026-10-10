import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Keeley Hawes',
			wiki: 'https://en.wikipedia.org/wiki/Keeley_Hawes',
			gender: 'female'
		},
		{
			name: 'Stephen Mangan',
			wiki: 'https://en.wikipedia.org/wiki/Stephen_Mangan',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Kevin Bridges',
			wiki: 'https://en.wikipedia.org/wiki/Kevin_Bridges',
			gender: 'male'
		},
		{
			name: 'Prof. Brain Cox',
			wiki: 'https://en.wikipedia.org/wiki/Brian_Cox_(physicist)',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Stephen Mangan',
		personGuesses: {
			'Kevin Bridges': 'truth',
			'Lee Mack': 'truth',
			'Prof. Brain Cox': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Keeley Hawes',
		personGuesses: {
			'Kevin Bridges': 'truth',
			'Lee Mack': 'truth',
			'Prof. Brain Cox': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Kevin Bridges',
		personGuesses: {
			'David Mitchell': 'lie',
			'Keeley Hawes': 'lie',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Mitchell': 'Prof. Brain Cox',
			'Keeley Hawes': 'Prof. Brain Cox',
			'Stephen Mangan': 'Prof. Brain Cox'
		},
		teamGuess: 'Prof. Brain Cox',
		truth: 'Prof. Brain Cox'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Kevin Bridges': 'lie',
			'Lee Mack': 'lie',
			'Prof. Brain Cox': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Keeley Hawes': 'lie',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 4,
	episode: 3,
	rounds: rounds,
	score: [7, 4],
	liarOfTheWeek: 'Kevin Bridges'
} as const satisfies StandardEpisode<typeof cast>
