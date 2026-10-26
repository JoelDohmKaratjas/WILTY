import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Judi Love',
			wiki: 'https://en.wikipedia.org/wiki/Judi_Love',
			gender: 'female'
		},
		{
			name: 'Chris McCausland',
			wiki: 'https://en.wikipedia.org/wiki/Chris_McCausland',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'John Cooper Clarke',
			wiki: 'https://en.wikipedia.org/wiki/John_Cooper_Clarke',
			gender: 'male'
		},
		{
			name: 'Caroline Quentin',
			wiki: 'https://en.wikipedia.org/wiki/Caroline_Quentin',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once had to call 999 for a woman who couldn\'t speak English. Unfortunately, I couldn\'t see what the emergency was, and she couldn\'t describe it.',
		guessingTeam: 'Lee Mack',
		person: 'Chris McCausland',
		personGuesses: {
			'Caroline Quentin': 'lie',
			'John Cooper Clarke': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'An ex-boyfriend once dumped me after he found a list of pros and cons I\'d made about him.',
		guessingTeam: 'Lee Mack',
		person: 'Judi Love',
		personGuesses: {
			'Caroline Quentin': 'lie',
			'John Cooper Clarke': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'For three months, I shared a flat with a monkey.',
		guessingTeam: 'David Mitchell',
		person: 'John Cooper Clarke',
		personGuesses: {
			'Chris McCausland': 'truth',
			'David Mitchell': 'truth',
			'Judi Love': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Emma',
		connections: {
			'Chris McCausland': 'He made Emma cry whilst filming a tv show and wanted to apologise.',
			'David Mitchell': 'Emma mistook David\'s backstroke for drowning and dived in to save him.',
			'Judi Love': 'When she freaked out in a broken-down lift, Emma calmed her down by playing a game of Guess Who.'
		},
		personGuesses: {
			'Caroline Quentin': 'Chris McCausland', // maybe Judi
			'John Cooper Clarke': 'Chris McCausland',
			'Lee Mack': 'Chris McCausland'
		},
		teamGuess: 'Chris McCausland',
		truth: 'Chris McCausland'
	},
	{
		type: 'quick_fire',
		statement: 'I once went home halfway through a gig I wasn\'t enjoying, then came back at the end and pretended to my friends that I\'d been there all along.',
		guessingTeam: 'David Mitchell',
		person: 'Caroline Quentin',
		personGuesses: {
			'Chris McCausland': 'lie',
			'David Mitchell': 'lie',
			'Judi Love': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I always read the last line of a book first.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Chris McCausland': 'truth',
			'David Mitchell': 'truth',
			'Judi Love': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 15,
	episode: 2,
	rounds: rounds,
	score: [3, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
