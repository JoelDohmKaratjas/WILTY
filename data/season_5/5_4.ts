import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Nigel Havers',
			wiki: 'https://en.wikipedia.org/wiki/Nigel_Havers',
			gender: 'male'
		},
		{
			name: 'Gregg Wallace',
			wiki: 'https://en.wikipedia.org/wiki/Gregg_Wallace',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Charlie Brooker',
			wiki: 'https://en.wikipedia.org/wiki/Charlie_Brooker',
			gender: 'male'
		},
		{
			name: 'Nina Wadia',
			wiki: 'https://en.wikipedia.org/wiki/Nina_Wadia',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Gregg Wallace',
		personGuesses: {
			'Charlie Brooker': 'lie',
			'Lee Mack': 'lie',
			'Nina Wadia': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Charlie Brooker',
		personGuesses: {
			'David Mitchell': 'lie',
			'Gregg Wallace': 'lie',
			'Nigel Havers': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Nigel Havers',
		personGuesses: {
			'Charlie Brooker': 'lie',
			'Lee Mack': 'lie',
			'Nina Wadia': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Mitchell': 'Nina Wadia',
			'Gregg Wallace': 'unknown',
			'Nigel Havers': 'unknown'
		},
		teamGuess: 'Nina Wadia',
		truth: 'Charlie Brooker'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Gregg Wallace': 'lie',
			'Nigel Havers': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Charlie Brooker': 'truth',
			'Lee Mack': 'truth',
			'Nina Wadia': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'Gregg Wallace',
		personGuesses: {
			'Charlie Brooker': 'lie',
			'Lee Mack': 'lie',
			'Nina Wadia': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 5,
	episode: 4,
	rounds: rounds,
	score: [6, 6],
	liarOfTheWeek: 'Nigel Havers'
} as const satisfies StandardEpisode<typeof cast>
