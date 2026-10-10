import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Emily Maitlis',
			wiki: 'https://en.wikipedia.org/wiki/Emily_Maitlis',
			gender: 'female'
		},
		{
			name: 'Jack Whitehall',
			wiki: 'https://en.wikipedia.org/wiki/Jack_Whitehall',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Jim Carter',
			wiki: 'https://en.wikipedia.org/wiki/Jim_Carter_(actor)',
			gender: 'male'
		},
		{
			name: 'Armando Iannucci',
			wiki: 'https://en.wikipedia.org/wiki/Armando_Iannucci',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Jim Carter',
		personGuesses: {
			'David Mitchell': 'lie',
			'Emily Maitlis': 'lie',
			'Jack Whitehall': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Jack Whitehall',
		personGuesses: {
			'Armando Iannucci': 'truth',
			'Jim Carter': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: {
			'Armando Iannucci': 'Jack Whitehall',
			'Jim Carter': 'unknown',
			'Lee Mack': 'Jack Whitehall'
		},
		teamGuess: 'Jack Whitehall',
		truth: 'Emily Maitlis'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Armando Iannucci': 'lie',
			'Jim Carter': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Armando Iannucci',
		personGuesses: {
			'David Mitchell': 'truth',
			'Emily Maitlis': 'truth',
			'Jack Whitehall': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 6,
	episode: 8,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: 'Jim Carter'
} as const satisfies StandardEpisode<typeof cast>
