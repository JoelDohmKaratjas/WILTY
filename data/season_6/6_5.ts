import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Andy Hamilton',
			wiki: 'https://en.wikipedia.org/wiki/Andy_Hamilton'
		},
		{
			name: 'Gabby Logan',
			wiki: 'https://en.wikipedia.org/wiki/Gabby_Logan'
		}
	],
	lee: [
		{
			name: 'Dr. Christian Jessen',
			wiki: 'https://en.wikipedia.org/wiki/Christian_Jessen'
		},
		{
			name: 'Diane Parish',
			wiki: 'https://en.wikipedia.org/wiki/Diane_Parish'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Gabby Logan',
		personGuesses: {
			'Diane Parish': 'lie',
			'Dr. Christian Jessen': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Andy Hamilton',
		personGuesses: {
			'Diane Parish': 'lie',
			'Dr. Christian Jessen': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Diane Parish',
		personGuesses: {
			'Andy Hamilton': 'lie',
			'David Mitchell': 'lie',
			'Gabby Logan': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'Andy Hamilton': 'undecided',
			'David Mitchell': 'undecided',
			'Gabby Logan': 'undecided'
		},
		teamGuess: 'Lee Mack',
		truth: 'Lee Mack'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Andy Hamilton': 'unknown',
			'David Mitchell': 'truth',
			'Gabby Logan': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Dr. Christian Jessen',
		personGuesses: {
			'Andy Hamilton': 'lie',
			'David Mitchell': 'lie',
			'Gabby Logan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 6,
	episode: 5,
	rounds: rounds,
	score: [4, 2],
	liarOfTheWeek: 'Andy Hamilton'
} as const satisfies StandardEpisode<typeof cast>
