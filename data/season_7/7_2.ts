import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Stephen Mangan',
			wiki: 'https://en.wikipedia.org/wiki/Stephen_Mangan',
			gender: 'male'
		},
		{
			name: 'Isy Suttie',
			wiki: 'https://en.wikipedia.org/wiki/Isy_Suttie',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Charles Dance',
			wiki: 'https://en.wikipedia.org/wiki/Charles_Dance',
			gender: 'male'
		},
		{
			name: 'Gok Wan',
			wiki: 'https://en.wikipedia.org/wiki/Gok_Wan',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'Stephen Mangan',
		personGuesses: {
			'Charles Dance': 'truth',
			'Gok Wan': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Charles Dance',
		personGuesses: {
			'David Mitchell': 'truth',
			'Isy Suttie': 'undecided',
			'Stephen Mangan': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Gok Wan',
		personGuesses: {
			'David Mitchell': 'truth',
			'Isy Suttie': 'truth',
			'Stephen Mangan': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'Isy Suttie',
		personGuesses: {
			'Charles Dance': 'lie',
			'Gok Wan': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: '',
		connections: {
			'Stephen Mangan': '',
			'Isy Suttie': '',
			'David Mitchell': ''
		},
		personGuess: {
			'Charles Dance': 'Stephen Mangan',
			'Gok Wan': 'Stephen Mangan',
			'Lee Mack': 'Isy Suttie'
		},
		teamGuess: 'Stephen Mangan',
		truth: 'Isy Suttie'
	},
	{
		type: 'quick_fire',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Isy Suttie': 'lie',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 7,
	episode: 2,
	rounds: rounds,
	score: [5, 1],
	liarOfTheWeek: 'Stephen Mangan'
} as const satisfies StandardEpisode<typeof cast>
