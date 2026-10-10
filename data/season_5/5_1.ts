import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Rebecca Front',
			wiki: 'https://en.wikipedia.org/wiki/Rebecca_Front',
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
			name: 'Miranda Hart',
			wiki: 'https://en.wikipedia.org/wiki/Miranda_Hart',
			gender: 'female'
		},
		{
			name: 'Nick Hewer',
			wiki: 'https://en.wikipedia.org/wiki/Nick_Hewer',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Nick Hewer',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jack Whitehall': 'lie',
			'Rebecca Front': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Jack Whitehall',
		personGuesses: {
			'Lee Mack': 'undecided',
			'Miranda Hart': 'truth',
			'Nick Hewer': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Mitchell': 'Lee Mack',
			'Jack Whitehall': 'Nick Hewer',
			'Rebecca Front': 'Nick Hewer'
		},
		teamGuess: 'Nick Hewer',
		truth: 'Miranda Hart'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Lee Mack': 'lie',
			'Miranda Hart': 'undecided',
			'Nick Hewer': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'host',
		personGuesses: {
			david: {
				'David Mitchell': 'truth',
				'Jack Whitehall': 'truth',
				'Rebecca Front': 'truth'
			},
			lee: {
				'Lee Mack': 'lie',
				'Miranda Hart': 'lie',
				'Nick Hewer': 'lie'
			}
		},
		teamGuess: {
			david: 'truth',
			lee: 'lie'
		},
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 5,
	episode: 1,
	rounds: rounds,
	score: [3, 5],
	liarOfTheWeek: 'Nick Hewer'
} as const satisfies StandardEpisode<typeof cast>
