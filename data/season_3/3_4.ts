import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Jason Manford',
			wiki: 'https://en.wikipedia.org/wiki/Jason_Manford',
			gender: 'male'
		},
		{
			name: 'Claudia Winkleman',
			wiki: 'https://en.wikipedia.org/wiki/Claudia_Winkleman',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Clive Anderson',
			wiki: 'https://en.wikipedia.org/wiki/Clive_Anderson',
			gender: 'male'
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
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'Claudia Winkleman',
		personGuesses: {
			'Clive Anderson': 'lie',
			'Lee Mack': 'lie',
			'Miranda Hart': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Clive Anderson',
		personGuesses: {
			'Claudia Winkleman': 'lie',
			'David Mitchell': 'lie',
			'Jason Manford': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Miranda Hart',
		personGuesses: {
			'Claudia Winkleman': 'truth',
			'David Mitchell': 'undecided',
			'Jason Manford': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		statement: '',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Clive Anderson': 'lie',
			'Lee Mack': 'truth',
			'Miranda Hart': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: '',
		connections: {
			'Clive Anderson': '',
			'Miranda Hart': '',
			'Lee Mack': ''
		},
		personGuess: {
			'Claudia Winkleman': 'Clive Anderson',
			'David Mitchell': 'Clive Anderson',
			'Jason Manford': 'Clive Anderson'
		},
		teamGuess: 'Clive Anderson',
		truth: 'Lee Mack'
	},
	{
		type: 'quick_fire',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Clive Anderson': 'lie',
			'Lee Mack': 'lie',
			'Miranda Hart': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'Jason Manford',
		personGuesses: {
			'Clive Anderson': 'lie',
			'Lee Mack': 'truth',
			'Miranda Hart': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: '',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'Claudia Winkleman',
		personGuesses: {
			'Clive Anderson': 'truth',
			'Lee Mack': 'truth',
			'Miranda Hart': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 3,
	episode: 4,
	rounds: rounds,
	score: [3, 7],
	liarOfTheWeek: 'Claudia Winkleman'
} as const satisfies StandardEpisode<typeof cast>
