import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Richard Bacon',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Bacon_(broadcaster)',
			gender: 'male'
		},
		{
			name: 'Dale Winton',
			wiki: 'https://en.wikipedia.org/wiki/Dale_Winton',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Clare Baldain',
			wiki: 'https://en.wikipedia.org/wiki/Clare_Balding',
			gender: 'female'
		},
		{
			name: 'Miranda Hart',
			wiki: 'https://en.wikipedia.org/wiki/Miranda_Hart',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Dale Winton',
		personGuesses: {
			'Clare Baldain': 'truth',
			'Lee Mack': 'truth',
			'Miranda Hart': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Richard Bacon',
		personGuesses: {
			'Clare Baldain': 'lie',
			'Lee Mack': 'truth',
			'Miranda Hart': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'Dale Winton': 'Lee Mack',
			'David Mitchell': 'Clare Baldain',
			'Richard Bacon': 'Clare Baldain'
		},
		teamGuess: 'Clare Baldain',
		truth: 'Lee Mack'
	},
	{
		type: 'quick_fire',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Dale Winton': 'lie',
			'David Mitchell': 'lie',
			'Richard Bacon': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Miranda Hart',
		personGuesses: {
			'Dale Winton': 'truth',
			'David Mitchell': 'truth',
			'Richard Bacon': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'host',
		personGuesses: {
			david: {
				'Dale Winton': 'truth',
				'David Mitchell': 'truth',
				'Richard Bacon': 'truth'
			},
			lee: {
				'Clare Baldain': 'lie',
				'Lee Mack': 'lie',
				'Miranda Hart': 'truth'
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
	season: 6,
	episode: 3,
	rounds: rounds,
	score: [2, 4],
	liarOfTheWeek: 'Dale Winton'
} as const satisfies StandardEpisode<typeof cast>
