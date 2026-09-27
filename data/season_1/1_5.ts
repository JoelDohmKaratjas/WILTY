import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Russell Howard',
			wiki: 'https://en.wikipedia.org/wiki/Russell_Howard'
		},
		{
			name: 'Wendy Richard',
			wiki: 'https://en.wikipedia.org/wiki/Wendy_Richard'
		}
	],
	lee: [
		{
			name: 'Len Goodman',
			wiki: 'https://en.wikipedia.org/wiki/Len_Goodman'
		},
		{
			name: 'Vic Reeves',
			wiki: 'https://en.wikipedia.org/wiki/Jim_Moir'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Len Goodman',
		personGuesses: {
			'David Mitchell': 'lie',
			'Russell Howard': 'lie',
			'Wendy Richard': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Lee Mack': 'truth',
			'Len Goodman': 'truth',
			'Vic Reeves': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Russell Howard',
		personGuesses: {
			'Lee Mack': 'lie',
			'Len Goodman': 'lie',
			'Vic Reeves': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Vic Reeves',
		personGuesses: {
			'David Mitchell': 'lie',
			'Russell Howard': 'unknown',
			'Wendy Richard': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: {
			'Lee Mack': 'David Mitchell',
			'Len Goodman': 'Russell Howard',
			'Vic Reeves': 'David Mitchell'
		},
		teamGuess: 'David Mitchell',
		truth: 'Wendy Richard'
	},
	{
		type: 'telly_tales',
		guessingTeam: 'David Mitchell',
		statementOwner: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Russell Howard': 'truth',
			'Wendy Richard': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'telly_tales',
		guessingTeam: 'David Mitchell',
		statementOwner: 'Len Goodman',
		personGuesses: {
			'David Mitchell': 'truth',
			'Russell Howard': 'truth',
			'Wendy Richard': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Wendy Richard',
		personGuesses: {
			'Lee Mack': 'truth',
			'Len Goodman': 'unknown',
			'Vic Reeves': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'truth',
			'Russell Howard': 'unknown',
			'Wendy Richard': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Lee Mack': 'lie',
			'Len Goodman': 'truth',
			'Vic Reeves': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Len Goodman',
		personGuesses: {
			'David Mitchell': 'lie',
			'Russell Howard': 'lie',
			'Wendy Richard': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Vic Reeves',
		personGuesses: {
			'David Mitchell': 'lie',
			'Russell Howard': 'unknown',
			'Wendy Richard': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 1,
	episode: 5,
	rounds: rounds,
	score: [11, 9]
} as const satisfies StandardEpisode
