import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Ruth Jones',
			wiki: 'https://en.wikipedia.org/wiki/Ruth_Jones',
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
			name: 'Jack Dee',
			wiki: 'https://en.wikipedia.org/wiki/Jack_Dee',
			gender: 'male'
		},
		{
			name: 'Peter Serafinowicz',
			wiki: 'https://en.wikipedia.org/wiki/Peter_Serafinowicz',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Ruth Jones',
		personGuesses: {
			'Jack Dee': 'truth',
			'Lee Mack': 'truth',
			'Peter Serafinowicz': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Jack Dee',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jason Manford': 'lie',
			'Ruth Jones': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Jason Manford',
		personGuesses: {
			'Jack Dee': 'truth',
			'Lee Mack': 'truth',
			'Peter Serafinowicz': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: {
			'Jack Dee': 'David Mitchell',
			'Lee Mack': 'David Mitchell',
			'Peter Serafinowicz': 'David Mitchell'
		},
		teamGuess: 'David Mitchell',
		truth: 'Ruth Jones'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jason Manford': 'lie',
			'Ruth Jones': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Peter Serafinowicz',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jason Manford': 'lie',
			'Ruth Jones': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'host',
		personGuesses: {
			david: {
				'David Mitchell': 'truth',
				'Jason Manford': 'truth',
				'Ruth Jones': 'truth'
			},
			lee: {
				'Jack Dee': 'lie',
				'Lee Mack': 'lie',
				'Peter Serafinowicz': 'lie'
			}
		},
		teamGuess: {
			david: 'truth',
			lee: 'lie'
		},
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 4,
	episode: 2,
	rounds: rounds,
	score: [8, 3],
	liarOfTheWeek: 'Ruth Jones'
} as const satisfies StandardEpisode<typeof cast>
