import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Duncan Bannatyne',
			wiki: 'https://en.wikipedia.org/wiki/Duncan_Bannatyne',
			gender: 'male'
		},
		{
			name: 'Frankie Boyle',
			wiki: 'https://en.wikipedia.org/wiki/Frankie_Boyle',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Natalie Cassidy',
			wiki: 'https://en.wikipedia.org/wiki/Natalie_Cassidy',
			gender: 'female'
		},
		{
			name: 'Dom Joly',
			wiki: 'https://en.wikipedia.org/wiki/Dom_Joly',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Dom Joly',
		personGuesses: {
			'David Mitchell': 'lie',
			'Duncan Bannatyne': 'truth',
			'Frankie Boyle': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Duncan Bannatyne',
		personGuesses: {
			'Dom Joly': 'truth',
			'Lee Mack': 'truth',
			'Natalie Cassidy': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Natalie Cassidy',
		personGuesses: {
			'David Mitchell': 'lie',
			'Duncan Bannatyne': 'lie',
			'Frankie Boyle': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Dom Joly': 'truth',
			'Lee Mack': 'truth',
			'Natalie Cassidy': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'lie',
			'Duncan Bannatyne': 'truth',
			'Frankie Boyle': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Mitchell': 'Natalie Cassidy',
			'Duncan Bannatyne': 'Natalie Cassidy',
			'Frankie Boyle': 'Natalie Cassidy'
		},
		teamGuess: 'Natalie Cassidy',
		truth: 'Natalie Cassidy'
	},
	{
		type: 'telly_tales',
		guessingTeam: 'Lee Mack',
		statementOwner: 'Frankie Boyle',
		personGuesses: {
			'Dom Joly': 'lie',
			'Lee Mack': 'lie',
			'Natalie Cassidy': 'truth'
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
			'Duncan Bannatyne': 'lie',
			'Frankie Boyle': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Dom Joly': 'truth',
			'Lee Mack': 'truth',
			'Natalie Cassidy': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Dom Joly',
		personGuesses: {
			'David Mitchell': 'lie',
			'Duncan Bannatyne': 'lie',
			'Frankie Boyle': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Frankie Boyle',
		personGuesses: {
			'Dom Joly': 'truth',
			'Lee Mack': 'lie',
			'Natalie Cassidy': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Dom Joly': 'lie',
			'Lee Mack': 'lie',
			'Natalie Cassidy': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 1,
	episode: 1,
	rounds: rounds,
	score: [11, 11],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
