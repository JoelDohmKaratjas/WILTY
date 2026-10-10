import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Russell Howard',
			wiki: 'https://en.wikipedia.org/wiki/Russell_Howard',
			gender: 'male'
		},
		{
			name: 'Wendy Richard',
			wiki: 'https://en.wikipedia.org/wiki/Wendy_Richard',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Len Goodman',
			wiki: 'https://en.wikipedia.org/wiki/Len_Goodman',
			gender: 'male'
		},
		{
			name: 'Vic Reeves',
			wiki: 'https://en.wikipedia.org/wiki/Jim_Moir',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I Immac my armpits.',
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
		statement: 'I used to proofread dictionaries for a living.',
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
		statement: 'I was a contestant on Junior MasterChef.',
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
		statement: 'I once fixed Dame Judi Dench\'s push-bike.',
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
		guest: 'Maurice',
		connections: {
			'Russell Howard': 'His landlord who is the 16th Earl of Westmorland.',
			'Wendy Richard': 'Her hairdresser and also cuts Tony Blair\'s hair.',
			'David Mitchell': 'Teaches him the art of ventriloquism.'
		},
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
		statement: 'The Swedish entry in the 1980 Eurovision Song Contest had a real live Orangutan as a dancer.',
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
		statement: 'On the 27th July in Finland they celebrate Sleepy Head Day where the last family member to wake up is thrown into the sea.',
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
		statement: 'I have no idea how to use a launderette washing machine.',
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
		statement: 'My parents told me my dog was dead when it was actually in Scunthorpe.',
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
		statement: 'As a teenager I had a poster of Margaret Thatcher on my bedroom wall.',
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
		statement: 'I killed a falcon while playing golf.',
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
		statement: 'I once helped TV\'s Doctor Raj Persaud fix his computer. It just needed a reboot.',
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
	score: [11, 9],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
