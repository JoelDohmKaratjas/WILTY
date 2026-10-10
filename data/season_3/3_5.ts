import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Kelvin MacKenzie',
			wiki: 'https://en.wikipedia.org/wiki/Kelvin_MacKenzie',
			gender: 'male'
		},
		{
			name: 'Jack Whitehall',
			wiki: 'https://en.wikipedia.org/wiki/Jack_Whitehall',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Christine Bleakley',
			wiki: 'https://en.wikipedia.org/wiki/Christine_Lampard',
			gender: 'female'
		},
		{
			name: 'Frankie Boyle',
			wiki: 'https://en.wikipedia.org/wiki/Frankie_Boyle',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Christine Bleakley',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jack Whitehall': 'truth',
			'Kelvin MacKenzie': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Jack Whitehall',
		personGuesses: {
			'Christine Bleakley': 'truth',
			'Frankie Boyle': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Frankie Boyle',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jack Whitehall': 'truth',
			'Kelvin MacKenzie': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jack Whitehall': 'truth',
			'Kelvin MacKenzie': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: {
			'Christine Bleakley': 'Kelvin MacKenzie',
			'Frankie Boyle': 'Kelvin MacKenzie',
			'Lee Mack': 'Jack Whitehall'
		},
		teamGuess: 'Kelvin MacKenzie',
		truth: 'Jack Whitehall'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jack Whitehall': 'unknown',
			'Kelvin MacKenzie': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Christine Bleakley',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jack Whitehall': 'lie',
			'Kelvin MacKenzie': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 3,
	episode: 5,
	rounds: rounds,
	score: [5, 5],
	liarOfTheWeek: 'Kelvin MacKenzie'
} as const satisfies StandardEpisode<typeof cast>
