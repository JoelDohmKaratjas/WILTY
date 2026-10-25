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
		statement: 'As a baby, I was regularly fed coffee in my bottle.',
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
		statement: 'I once spent an entire Christmas locked in a bank.',
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
		guest: 'Ray',
		connections: {
			'Dave Myers': 'As teenagers, they spent two weeks building a 35-foot long airship in Ray\'s back garden only for Ray\'s cat to pop it.',
			'Lee Mack': 'Taught Lee how to drive in a hearse.',
			'Susanna Reid': 'Stole Ray\'s title for downing a pint faster than anyone else on the BBC Breakfast team.'
		},
		personGuesses: {
			'David Mitchell': 'Dave Myers',
			'Griff Rhys Jones': 'Dave Myers',
			'Jimmy Carr': 'Dave Myers'
		},
		teamGuess: 'Dave Myers',
		truth: 'Dave Myers'
	},
	{
		type: 'quick_fire',
		statement: 'My dad used to keep a coconut in the car, because holding it was the only thing that would cure my travel sickness.',
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
		statement: 'I pretended to Princess Margaret that I was deaf.',
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
		statement: 'I have hidden in a cupboard to escape Anthea Turner.',
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
