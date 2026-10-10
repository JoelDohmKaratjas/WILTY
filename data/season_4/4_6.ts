import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Rhod Gilbert',
			wiki: 'https://en.wikipedia.org/wiki/Rhod_Gilbert',
			gender: 'male'
		},
		{
			name: 'Miranda Hart',
			wiki: 'https://en.wikipedia.org/wiki/Miranda_Hart',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Hugh Fearnley-Whittingstall',
			wiki: 'https://en.wikipedia.org/wiki/Hugh_Fearnley-Whittingstall',
			gender: 'male'
		},
		{
			name: 'Rufus Hound',
			wiki: 'https://en.wikipedia.org/wiki/Rufus_Hound',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Hugh Fearnley-Whittingstall',
		personGuesses: {
			'David Mitchell': 'lie',
			'Miranda Hart': 'lie',
			'Rhod Gilbert': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Miranda Hart',
		personGuesses: {
			'Hugh Fearnley-Whittingstall': 'truth',
			'Lee Mack': 'truth',
			'Rufus Hound': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Rhod Gilbert',
		personGuesses: {
			'Hugh Fearnley-Whittingstall': 'truth',
			'Lee Mack': 'truth',
			'Rufus Hound': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Mitchell': 'Hugh Fearnley-Whittingstall',
			'Miranda Hart': 'Hugh Fearnley-Whittingstall',
			'Rhod Gilbert': 'Hugh Fearnley-Whittingstall'
		},
		teamGuess: 'Hugh Fearnley-Whittingstall',
		truth: 'Rufus Hound'
	},
	{
		type: 'quick_fire',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Hugh Fearnley-Whittingstall': 'truth',
			'Lee Mack': 'lie',
			'Rufus Hound': 'lie'
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
			'Miranda Hart': 'truth',
			'Rhod Gilbert': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 4,
	episode: 6,
	rounds: rounds,
	score: [4, 5],
	liarOfTheWeek: 'Hugh Fearnley-Whittingstall'
} as const satisfies StandardEpisode<typeof cast>
