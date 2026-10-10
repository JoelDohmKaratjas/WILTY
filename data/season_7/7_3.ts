import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Joan Bakewell',
			wiki: 'https://en.wikipedia.org/wiki/Joan_Bakewell',
			gender: 'female'
		},
		{
			name: 'Jason Manford',
			wiki: 'https://en.wikipedia.org/wiki/Jason_Manford',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Warwick Davis',
			wiki: 'https://en.wikipedia.org/wiki/Warwick_Davis',
			gender: 'male'
		},
		{
			name: 'Paul Hollywood',
			wiki: 'https://en.wikipedia.org/wiki/Paul_Hollywood',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Warwick Davis',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jason Manford': 'truth',
			'Joan Bakewell': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Jason Manford',
		personGuesses: {
			'Lee Mack': 'truth',
			'Paul Hollywood': 'lie',
			'Warwick Davis': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Mitchell': 'Warwick Davis',
			'Jason Manford': 'Warwick Davis',
			'Joan Bakewell': 'Warwick Davis'
		},
		teamGuess: 'Warwick Davis',
		truth: 'Lee Mack'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Joan Bakewell',
		personGuesses: {
			'Lee Mack': 'lie',
			'Paul Hollywood': 'lie',
			'Warwick Davis': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jason Manford': 'lie',
			'Joan Bakewell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 7,
	episode: 3,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: 'Warwick Davis'
} as const satisfies StandardEpisode<typeof cast>
