import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Bernard Cribbins',
			wiki: 'https://en.wikipedia.org/wiki/Bernard_Cribbins'
		},
		{
			name: 'Patrick Kielty',
			wiki: 'https://en.wikipedia.org/wiki/Patrick_Kielty'
		}
	],
	lee: [
		{
			name: 'Deborah Meaden',
			wiki: 'https://en.wikipedia.org/wiki/Deborah_Meaden'
		},
		{
			name: 'Mark Watson',
			wiki: 'https://en.wikipedia.org/wiki/Mark_Watson'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Patrick Kielty',
		personGuesses: {
			'Deborah Meaden': 'lie',
			'Lee Mack': 'lie',
			'Mark Watson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Deborah Meaden',
		personGuesses: {
			'Bernard Cribbins': 'truth',
			'David Mitchell': 'truth',
			'Patrick Kielty': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Mark Watson',
		personGuesses: {
			'Bernard Cribbins': 'truth',
			'David Mitchell': 'truth',
			'Patrick Kielty': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Bernard Cribbins',
		personGuesses: {
			'Deborah Meaden': 'lie',
			'Lee Mack': 'lie',
			'Mark Watson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'Bernard Cribbins': 'Deborah Meaden',
			'David Mitchell': 'Deborah Meaden',
			'Patrick Kielty': 'Mark Watson'
		},
		teamGuess: 'Deborah Meaden',
		truth: 'Mark Watson'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Deborah Meaden': 'unknown',
			'Lee Mack': 'truth',
			'Mark Watson': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'host',
		possession: true,
		personGuesses: {
			david: {
				'Bernard Cribbins': 'lie',
				'David Mitchell': 'lie',
				'Patrick Kielty': 'truth'
			},
			lee: {
				'Deborah Meaden': 'lie',
				'Lee Mack': 'truth',
				'Mark Watson': 'unknown'
			}
		},
		teamGuess: {
			david: 'lie',
			lee: 'truth'
		},
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 4,
	episode: 7,
	rounds: rounds,
	score: [7, 5],
	liarOfTheWeek: 'Deborah Meaden'
} as const satisfies StandardEpisode<typeof cast>
