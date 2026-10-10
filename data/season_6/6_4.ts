import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Rhod Gilbert',
			wiki: 'https://en.wikipedia.org/wiki/Rhod_Gilbert',
			gender: 'male'
		},
		{
			name: 'Sally Philips',
			wiki: 'https://en.wikipedia.org/wiki/Sally_Phillips',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Tess Daly',
			wiki: 'https://en.wikipedia.org/wiki/Tess_Daly',
			gender: 'female'
		},
		{
			name: 'Des O\'Connor',
			wiki: 'https://en.wikipedia.org/wiki/Des_O\'Connor',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Des O\'Connor',
		personGuesses: {
			'David Mitchell': 'truth',
			'Rhod Gilbert': 'truth',
			'Sally Philips': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Rhod Gilbert',
		personGuesses: {
			'Des O\'Connor': 'truth',
			'Lee Mack': 'truth',
			'Tess Daly': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: { // all agreed on Sally in the end
			'Des O\'Connor': 'David Mitchell',
			'Lee Mack': 'Rhod Gilbert',
			'Tess Daly': 'Sally Philips'
		},
		teamGuess: 'Sally Philips',
		truth: 'Rhod Gilbert'
	},
	{
		type: 'quick_fire',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Rhod Gilbert': 'lie',
			'Sally Philips': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Sally Philips',
		personGuesses: {
			'Des O\'Connor': 'lie',
			'Lee Mack': 'truth',
			'Tess Daly': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Des O\'Connor': 'lie',
			'Lee Mack': 'truth',
			'Tess Daly': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 6,
	episode: 4,
	rounds: rounds,
	score: [5, 1],
	liarOfTheWeek: 'Sally Philips'
} as const satisfies StandardEpisode<typeof cast>
