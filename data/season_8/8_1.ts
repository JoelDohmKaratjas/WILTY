import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Fiona Bruce',
			wiki: 'https://en.wikipedia.org/wiki/Fiona_Bruce',
			gender: 'female'
		},
		{
			name: 'Micky Flanagan',
			wiki: 'https://en.wikipedia.org/wiki/Micky_Flanagan',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Steve Jones',
			wiki: 'https://en.wikipedia.org/wiki/Steve_Jones_(Welsh_presenter)',
			gender: 'male'
		},
		{
			name: 'Claudia Winkleman',
			wiki: 'https://en.wikipedia.org/wiki/Claudia_Winkleman',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'Micky Flanagan',
		personGuesses: {
			'Claudia Winkleman': 'truth',
			'Lee Mack': 'truth',
			'Steve Jones': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Steve Jones',
		personGuesses: {
			'David Mitchell': 'lie',
			'Fiona Bruce': 'lie',
			'Micky Flanagan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: '',
		connections: {
			'David Mitchell': '',
			'Fiona Bruce': '',
			'Micky Flanagan': ''
		},
		personGuess: {
			'Claudia Winkleman': 'David Mitchell',
			'Lee Mack': 'Micky Flanagan',
			'Steve Jones': 'Micky Flanagan'
		},
		teamGuess: 'Micky Flanagan',
		truth: 'David Mitchell'
	},
	{
		type: 'quick_fire',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'Fiona Bruce',
		personGuesses: {
			'Claudia Winkleman': 'truth',
			'Lee Mack': 'unknown',
			'Steve Jones': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Fiona Bruce': 'lie',
			'Micky Flanagan': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 8,
	episode: 1,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: 'Steve Jones'
} as const satisfies StandardEpisode<typeof cast>
