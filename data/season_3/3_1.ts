import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Jo Brand',
			wiki: 'https://en.wikipedia.org/wiki/Jo_Brand'
		},
		{
			name: 'Larry Lamb',
			wiki: 'https://en.wikipedia.org/wiki/Larry_Lamb'
		}
	],
	lee: [
		{
			name: 'Russell Howard',
			wiki: 'https://en.wikipedia.org/wiki/Russell_Howard'
		},
		{
			name: 'Carol Vorderman',
			wiki: 'https://en.wikipedia.org/wiki/Carol_Vorderman'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Carol Vorderman',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jo Brand': 'lie',
			'Larry Lamb': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Larry Lamb',
		personGuesses: {
			'Carol Vorderman': 'lie',
			'Lee Mack': 'lie',
			'Russell Howard': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Russell Howard',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jo Brand': 'truth',
			'Larry Lamb': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Carol Vorderman': 'truth',
			'Lee Mack': 'lie',
			'Russell Howard': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: {
			'Carol Vorderman': 'Larry Lamb',
			'Lee Mack': 'Larry Lamb',
			'Russell Howard': 'David Mitchell'
		},
		teamGuess: 'Larry Lamb',
		truth: 'Jo Brand'
	},
	{
		type: 'quick_fire',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Carol Vorderman': 'lie',
			'Lee Mack': 'lie',
			'Russell Howard': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jo Brand': 'lie',
			'Larry Lamb': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 3,
	episode: 1,
	rounds: rounds,
	score: [5, 5],
	liarOfTheWeek: 'Jo Brand'
} as const satisfies StandardEpisode<typeof cast>
