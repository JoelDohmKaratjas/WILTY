import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Marcus Brigsocke',
			wiki: 'https://en.wikipedia.org/wiki/Marcus_Brigstocke'
		},
		{
			name: 'Jamellia',
			wiki: 'https://en.wikipedia.org/wiki/Jamelia'
		}
	],
	lee: [
		{
			name: 'Jimmy Carr',
			wiki: 'https://en.wikipedia.org/wiki/Jimmy_Carr'
		},
		{
			name: 'Terry Christian',
			wiki: 'https://en.wikipedia.org/wiki/Terry_Christian'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Jimmy Carr',
		personGuesses: {
			'David Mitchell': 'lie',
			'Marcus Brigsocke': 'lie',
			'Jamellia': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Jamellia',
		personGuesses: {
			'Jimmy Carr': 'lie',
			'Lee Mack': 'lie',
			'Terry Christian': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Marcus Brigsocke',
		personGuesses: {
			'Jimmy Carr': 'truth',
			'Lee Mack': 'truth',
			'Terry Christian': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Jimmy Carr': 'lie',
			'Lee Mack': 'lie',
			'Terry Christian': 'lie' // "might be true"
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Mitchell': 'Jimmy Carr',
			'Marcus Brigsocke': 'Lee Mack',
			'Jamellia': 'Jimmy Carr'
		},
		teamGuess: 'Jimmy Carr',
		truth: 'Terry Christian'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Jimmy Carr': 'truth',
			'Lee Mack': 'lie',
			'Terry Christian': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire_possession',
		guessingTeam: 'David Mitchell',
		person: 'Terry Christian',
		personGuesses: {
			'David Mitchell': 'lie',
			'Marcus Brigsocke': 'lie',
			'Jamellia': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 3,
	episode: 3,
	rounds: rounds,
	score: [4, 6],
	liarOfTheWeek: 'Terry Christian'
} as const satisfies StandardEpisode<typeof cast>
