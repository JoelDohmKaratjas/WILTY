import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Vernon Kay',
			wiki: 'https://en.wikipedia.org/wiki/Vernon_Kay'
		},
		{
			name: 'Dara Ó Briain',
			wiki: 'https://en.wikipedia.org/wiki/Dara_%C3%93_Briain'
		}
	],
	lee: [
		{
			name: 'Rhod Gilbert',
			wiki: 'https://en.wikipedia.org/wiki/Rhod_Gilbert'
		},
		{
			name: 'Denise van Outen',
			wiki: 'https://en.wikipedia.org/wiki/Denise_van_Outen'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Dara Ó Briain',
		personGuesses: {
			'Denise van Outen': 'truth',
			'Lee Mack': 'truth',
			'Rhod Gilbert': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Denise van Outen',
		personGuesses: {
			'Dara Ó Briain': 'lie',
			'David Mitchell': 'lie',
			'Vernon Kay': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: {
			'Denise van Outen': 'Dara Ó Briain',
			'Lee Mack': 'Dara Ó Briain',
			'Rhod Gilbert': 'Vernon Kay'
		},
		teamGuess: 'Dara Ó Briain',
		truth: 'Vernon Kay'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Denise van Outen': 'truth',
			'Lee Mack': 'truth',
			'Rhod Gilbert': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Rhod Gilbert',
		personGuesses: {
			'Dara Ó Briain': 'lie',
			'David Mitchell': 'lie',
			'Vernon Kay': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 7,
	episode: 1,
	rounds: rounds,
	score: [1, 4],
	liarOfTheWeek: 'Dara Ó Briain'
} as const satisfies StandardEpisode<typeof cast>
