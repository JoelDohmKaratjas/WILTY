import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Reece Shearsmith',
			wiki: 'https://en.wikipedia.org/wiki/Reece_Shearsmith'
		},
		{
			name: 'Trinny Woodall',
			wiki: 'https://en.wikipedia.org/wiki/Trinny_Woodall'
		}
	],
	lee: [
		{
			name: 'Michael Ball',
			wiki: 'https://en.wikipedia.org/wiki/Michael_Ball'
		},
		{
			name: 'Charlie Brooker',
			wiki: 'https://en.wikipedia.org/wiki/Charlie_Brooker'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Michael Ball',
		personGuesses: {
			'David Mitchell': 'lie',
			'Reece Shearsmith': 'lie',
			'Trinny Woodall': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Trinny Woodall',
		personGuesses: {
			'Charlie Brooker': 'unknown',
			'Lee Mack': 'lie',
			'Michael Ball': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Reece Shearsmith',
		personGuesses: {
			'Charlie Brooker': 'lie',
			'Lee Mack': 'lie',
			'Michael Ball': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Charlie Brooker',
		personGuesses: {
			'David Mitchell': 'truth',
			'Reece Shearsmith': 'truth',
			'Trinny Woodall': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Charlie Brooker': 'truth',
			'Lee Mack': 'truth',
			'Michael Ball': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Mitchell': 'Lee Mack',
			'Reece Shearsmith': 'Lee Mack',
			'Trinny Woodall': 'Lee Mack'
		},
		teamGuess: 'Lee Mack',
		truth: 'Michael Ball'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Charlie Brooker': 'lie',
			'Lee Mack': 'truth',
			'Michael Ball': 'lie'
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
			'Reece Shearsmith': 'lie',
			'Trinny Woodall': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 3,
	episode: 8,
	rounds: rounds,
	score: [2, 9],
	liarOfTheWeek: 'Michael Ball'
} as const satisfies StandardEpisode<typeof cast>
