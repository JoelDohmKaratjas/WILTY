import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Lorraine Kelly',
			wiki: 'https://en.wikipedia.org/wiki/Lorraine_Kelly'
		},
		{
			name: 'Dara Ó Briain',
			wiki: 'https://en.wikipedia.org/wiki/Dara_%C3%93_Briain'
		}
	],
	lee: [
		{
			name: 'Barry Cryer',
			wiki: 'https://en.wikipedia.org/wiki/Barry_Cryer'
		},
		{
			name: 'Sue Perkins',
			wiki: 'https://en.wikipedia.org/wiki/Sue_Perkins'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Dara Ó Briain',
		personGuesses: {
			'Barry Cryer': 'lie',
			'Lee Mack': 'lie',
			'Sue Perkins': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Lorraine Kelly',
		personGuesses: {
			'Barry Cryer': 'truth',
			'Lee Mack': 'truth',
			'Sue Perkins': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Barry Cryer',
		personGuesses: {
			'Dara Ó Briain': 'lie',
			'David Mitchell': 'lie',
			'Lorraine Kelly': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'Dara Ó Briain': 'Sue Perkins',
			'David Mitchell': 'Sue Perkins',
			'Lorraine Kelly': 'Lee Mack'
		},
		teamGuess: 'Sue Perkins',
		truth: 'Barry Cryer'
	},
	{
		type: 'quick_fire',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Barry Cryer': 'lie',
			'Lee Mack': 'lie',
			'Sue Perkins': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Dara Ó Briain': 'lie',
			'David Mitchell': 'lie',
			'Lorraine Kelly': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 5,
	episode: 8,
	rounds: rounds,
	score: [3, 8],
	liarOfTheWeek: 'Barry Cryer'
} as const satisfies StandardEpisode<typeof cast>
