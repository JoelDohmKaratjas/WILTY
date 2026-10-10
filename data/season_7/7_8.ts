import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Jimmy Carr',
			wiki: 'https://en.wikipedia.org/wiki/Jimmy_Carr',
			gender: 'male'
		},
		{
			name: 'Griff Rhys Jones',
			wiki: 'https://en.wikipedia.org/wiki/Griff_Rhys_Jones',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Dave Myers',
			wiki: 'https://en.wikipedia.org/wiki/Dave_Myers_(presenter)',
			gender: 'male'
		},
		{
			name: 'Susanna Reid',
			wiki: 'https://en.wikipedia.org/wiki/Susanna_Reid',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Jimmy Carr',
		personGuesses: {
			'Dave Myers': 'lie',
			'Lee Mack': 'lie',
			'Susanna Reid': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Dave Myers',
		personGuesses: {
			'David Mitchell': 'truth',
			'Griff Rhys Jones': 'unknown',
			'Jimmy Carr': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Mitchell': 'Dave Myers',
			'Griff Rhys Jones': 'Dave Myers',
			'Jimmy Carr': 'Dave Myers'
		},
		teamGuess: 'Dave Myers',
		truth: 'Dave Myers'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Susanna Reid',
		personGuesses: {
			'David Mitchell': 'truth',
			'Griff Rhys Jones': 'lie',
			'Jimmy Carr': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Griff Rhys Jones',
		personGuesses: {
			'Dave Myers': 'truth',
			'Lee Mack': 'truth',
			'Susanna Reid': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Griff Rhys Jones': 'lie',
			'Jimmy Carr': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 7,
	episode: 8,
	rounds: rounds,
	score: [3, 3],
	liarOfTheWeek: 'Dave Myers'
} as const satisfies StandardEpisode<typeof cast>
