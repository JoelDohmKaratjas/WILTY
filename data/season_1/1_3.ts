import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Eamonn Holmes',
			wiki: 'https://en.wikipedia.org/wiki/Eamonn_Holmes',
			gender: 'male'
		},
		{
			name: 'Dara Ó Briain',
			wiki: 'https://en.wikipedia.org/wiki/Dara_%C3%93_Briain',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Jimmy Carr',
			wiki: 'https://en.wikipedia.org/wiki/Jimmy_Carr',
			gender: 'male'
		},
		{
			name: 'Ulrika Jonsson',
			wiki: 'https://en.wikipedia.org/wiki/Ulrika_Jonsson',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Ulrika Jonsson',
		personGuesses: {
			'Dara Ó Briain': 'truth',
			'David Mitchell': 'lie',
			'Eamonn Holmes': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Jimmy Carr': 'truth',
			'Lee Mack': 'lie',
			'Ulrika Jonsson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Jimmy Carr',
		personGuesses: {
			'Dara Ó Briain': 'lie',
			'David Mitchell': 'lie',
			'Eamonn Holmes': 'lie' // originally true
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_dual',
		personGuesses: {
			david: {
				'Dara Ó Briain': 'lie',
				'David Mitchell': 'lie',
				'Eamonn Holmes': 'lie'
			},
			lee: {
				'Jimmy Carr': 'truth',
				'Lee Mack': 'truth',
				'Ulrika Jonsson': 'truth'
			}
		},
		teamGuess: {
			david: 'lie',
			lee: 'truth'
		},
		truth: 'lie'
	},
	{
		type: 'telly_tales',
		guessingTeam: 'David Mitchell',
		statementOwner: 'Ulrika Jonsson',
		personGuesses: {
			'Dara Ó Briain': 'lie',
			'David Mitchell': 'truth',
			'Eamonn Holmes': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'telly_tales',
		guessingTeam: 'David Mitchell',
		statementOwner: 'Jimmy Carr',
		personGuesses: {
			'Dara Ó Briain': 'lie',
			'David Mitchell': 'lie',
			'Eamonn Holmes': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: {
			'Jimmy Carr': 'David Mitchell',
			'Lee Mack': 'David Mitchell',
			'Ulrika Jonsson': 'Eamonn Holmes'
		},
		teamGuess: 'David Mitchell',
		truth: 'Eamonn Holmes'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Eamonn Holmes',
		personGuesses: {
			'Jimmy Carr': 'lie',
			'Lee Mack': 'lie',
			'Ulrika Jonsson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Jimmy Carr',
		personGuesses: {
			'Dara Ó Briain': 'truth',
			'David Mitchell': 'truth',
			'Eamonn Holmes': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Dara Ó Briain',
		personGuesses: {
			'Jimmy Carr': 'truth',
			'Lee Mack': 'truth',
			'Ulrika Jonsson': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Eamonn Holmes',
		personGuesses: {
			'Jimmy Carr': 'truth',
			'Lee Mack': 'lie',
			'Ulrika Jonsson': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 1,
	episode: 3,
	rounds: rounds,
	score: [13, 6],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
