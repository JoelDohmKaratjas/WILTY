import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Ronni Ancona',
			wiki: 'https://en.wikipedia.org/wiki/Ronni_Ancona'
		},
		{
			name: 'Sir Chris Hoy',
			wiki: 'https://en.wikipedia.org/wiki/Chris_Hoy'
		}
	],
	lee: [
		{
			name: 'Gabby Logan',
			wiki: 'https://en.wikipedia.org/wiki/Gabby_Logan'
		},
		{
			name: 'Danny Wallace',
			wiki: 'https://en.wikipedia.org/wiki/Danny_Wallace_(humorist)'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Sir Chris Hoy',
		personGuesses: {
			'Danny Wallace': 'lie',
			'Gabby Logan': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Gabby Logan',
		personGuesses: {
			'David Mitchell': 'truth',
			'Ronni Ancona': 'lie',
			'Sir Chris Hoy': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Danny Wallace',
		personGuesses: {
			'David Mitchell': 'lie',
			'Ronni Ancona': 'lie',
			'Sir Chris Hoy': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'truth',
			'Ronni Ancona': 'unknown',
			'Sir Chris Hoy': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Danny Wallace': 'lie',
			'Gabby Logan': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: {
			'Danny Wallace': 'Sir Chris Hoy',
			'Gabby Logan': 'Sir Chris Hoy',
			'Lee Mack': 'Sir Chris Hoy'
		},
		teamGuess: 'Sir Chris Hoy',
		truth: 'Sir Chris Hoy'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Ronni Ancona': 'lie',
			'Sir Chris Hoy': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Danny Wallace': 'lie',
			'Gabby Logan': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Gabby Logan',
		personGuesses: {
			'David Mitchell': 'lie',
			'Ronni Ancona': 'lie',
			'Sir Chris Hoy': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 3,
	episode: 7,
	rounds: rounds,
	score: [5, 5],
	liarOfTheWeek: 'Gabby Logan'
} as const satisfies StandardEpisode<typeof cast>
