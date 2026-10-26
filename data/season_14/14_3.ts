import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Chris McCausland',
			wiki: 'https://en.wikipedia.org/wiki/Chris_McCausland',
			gender: 'male'
		},
		{
			name: 'Laura Whitmore',
			wiki: 'https://en.wikipedia.org/wiki/Laura_Whitmore',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Maisie Adam',
			wiki: 'https://en.wikipedia.org/wiki/Maisie_Adam',
			gender: 'female'
		},
		{
			name: 'Stephen Hendry',
			wiki: 'https://en.wikipedia.org/wiki/Stephen_Hendry',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'During lockdown, I bought a pogo stick to use as a home-school teaching aid.',
		guessingTeam: 'Lee Mack',
		person: 'Chris McCausland',
		personGuesses: {
			'Lee Mack': 'lie',
			'Maisie Adam': 'lie',
			'Stephen Hendry': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Before every World Championship final, I used to give a motivational team talk to my snooker cue, or as I called him, Sir Potsalot.',
		guessingTeam: 'David Mitchell',
		person: 'Stephen Hendry',
		personGuesses: {
			'Chris McCausland': 'truth',
			'David Mitchell': 'truth',
			'Laura Whitmore': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'Once, while trying to impress a date, I landed flat on my back in a flower bed.',
		guessingTeam: 'David Mitchell',
		person: 'Maisie Adam',
		personGuesses: {
			'Chris McCausland': 'lie',
			'David Mitchell': 'truth',
			'Laura Whitmore': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Neil',
		connections: {
			'Chris McCausland': 'I had to stay at Neil\'s house after handing my own keys in to a lost property office.',
			'David Mitchell': 'I sat on Neil\'s shoulders to get a better look at a fat chaffinch.',
			'Laura Whitmore': 'I mistakenly pushed Neil, the health and safety officer of Love Island, into a pool.'
		},
		personGuesses: {
			'Lee Mack': 'Laura Whitmore',
			'Maisie Adam': 'Laura Whitmore',
			'Stephen Hendry': 'Laura Whitmore'
		},
		teamGuess: 'Laura Whitmore',
		truth: 'Chris McCausland'
	},
	{
		type: 'quick_fire',
		statement: 'For the last six months, I\'ve been secretly liaising with David\'s wife behind his back.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Chris McCausland': 'unknown',
			'David Mitchell': 'truth',
			'Laura Whitmore': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 14,
	episode: 3,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
