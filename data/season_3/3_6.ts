import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Dave Gorman',
			wiki: 'https://en.wikipedia.org/wiki/Dave_Gorman',
			gender: 'male'
		},
		{
			name: 'Davina McCall',
			wiki: 'https://en.wikipedia.org/wiki/Davina_McCall',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Omid Djalili',
			wiki: 'https://en.wikipedia.org/wiki/Omid_Djalili',
			gender: 'male'
		},
		{
			name: 'Jane Street-Porter',
			wiki: 'https://en.wikipedia.org/wiki/Janet_Street-Porter',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Jane Street-Porter',
		personGuesses: {
			'Dave Gorman': 'truth',
			'David Mitchell': 'lie',
			'Davina McCall': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Davina McCall',
		personGuesses: {
			'Jane Street-Porter': 'lie',
			'Lee Mack': 'truth',
			'Omid Djalili': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Omid Djalili',
		personGuesses: {
			'Dave Gorman': 'lie',
			'David Mitchell': 'lie',
			'Davina McCall': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Jane Street-Porter': 'truth',
			'Lee Mack': 'lie',
			'Omid Djalili': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'Dave Gorman': 'Jane Street-Porter',
			'David Mitchell': 'Jane Street-Porter',
			'Davina McCall': 'Jane Street-Porter'
		},
		teamGuess: 'Jane Street-Porter',
		truth: 'Jane Street-Porter'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Jane Street-Porter': 'lie',
			'Lee Mack': 'lie',
			'Omid Djalili': 'lie'
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
			'Dave Gorman': 'unknown',
			'David Mitchell': 'lie',
			'Davina McCall': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 3,
	episode: 6,
	rounds: rounds,
	score: [7, 3],
	liarOfTheWeek: 'Davina McCall'
} as const satisfies StandardEpisode<typeof cast>
