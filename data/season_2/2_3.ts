import { type Episode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'David Baddiel',
			wiki: 'https://en.wikipedia.org/wiki/David_Baddiel'
		},
		{
			name: 'Maureen Lipman',
			wiki: 'https://en.wikipedia.org/wiki/Maureen_Lipman'
		}
	],
	lee: [
		{
			name: 'Jimmy Carr',
			wiki: 'https://en.wikipedia.org/wiki/Jimmy_Carr'
		},
		{
			name: 'Richard Wilson',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Wilson_(Scottish_actor)'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Maureen Lipman',
		personGuesses: {
			'Jimmy Carr': 'truth',
			'Lee Mack': 'lie',
			'Richard Wilson': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Jimmy Carr',
		personGuesses: {
			'David Baddiel': 'lie',
			'David Mitchell': 'lie',
			'Maureen Lipman': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'David Baddiel',
		personGuesses: {
			'Jimmy Carr': 'truth',
			'Lee Mack': 'lie',
			'Richard Wilson': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Jimmy Carr': 'truth',
			'Lee Mack': 'lie',
			'Richard Wilson': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Baddiel': 'Lee Mack',
			'David Mitchell': 'Jimmy Carr',
			'Maureen Lipman': 'Jimmy Carr'
		},
		teamGuess: 'Jimmy Carr',
		truth: 'Richard Wilson'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Jimmy Carr': 'truth',
			'Lee Mack': 'lie',
			'Richard Wilson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Baddiel': 'lie',
			'David Mitchell': 'lie',
			'Maureen Lipman': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire_possession',
		guessingTeam: 'Lee Mack',
		person: 'David Baddiel',
		personGuesses: {
			'Jimmy Carr': 'truth',
			'Lee Mack': 'lie',
			'Richard Wilson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	cast: cast,
	season: 2,
	episode: 3,
	rounds: rounds,
	score: [5, 6]
} as const satisfies Episode
