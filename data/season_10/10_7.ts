import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Tom Davis',
			wiki: 'https://en.wikipedia.org/wiki/Tom_Davis_(actor)',
			gender: 'male'
		},
		{
			name: 'Shaun Ryder',
			wiki: 'https://en.wikipedia.org/wiki/Shaun_Ryder',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Clara Amfo',
			wiki: 'https://en.wikipedia.org/wiki/Clara_Amfo',
			gender: 'female'
		},
		{
			name: 'Henning Wehn',
			wiki: 'https://en.wikipedia.org/wiki/Henning_Wehn',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'For three weeks, I carted an empty box around without realising that what I bought wasn\'t actually in it.',
		guessingTeam: 'David Mitchell',
		person: 'Henning Wehn',
		personGuesses: {
			'David Mitchell': 'truth',
			'Shaun Ryder': 'truth',
			'Tom Davis': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I have trained my cat to wink.',
		guessingTeam: 'Lee Mack',
		person: 'Shaun Ryder',
		personGuesses: {
			'Clara Amfo': 'truth',
			'Henning Wehn': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I was grabbed by security after sticking my finger in Pharrell\'s belly button.',
		guessingTeam: 'David Mitchell',
		person: 'Clara Amfo',
		personGuesses: {
			'David Mitchell': 'lie',
			'Shaun Ryder': 'lie',
			'Tom Davis': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Bill',
		connections: {
			'Clara Amfo': 'When my chair broke, he let me sit on his back so I could interview Nicki Minaj.',
			'Henning Wehn': 'I once bought an Irish accent mouth spray from him because I genuinely believed it would give me an Irish accent.',
			'Lee Mack': 'I had to leave my life-drawing class when he walked in, disrobed, and I realised he was the man that sold me my sausages.'
		},
		personGuess: {
			'David Mitchell': 'Henning Wehn',
			'Shaun Ryder': 'Clara Amfo',
			'Tom Davis': 'Lee Mack'
		},
		teamGuess: 'Henning Wehn',
		truth: 'Henning Wehn'
	},
	{
		type: 'quick_fire',
		statement: 'I once hired a jet ski but couldn\'t work out how to stop it so had to buzz around the bay for fifty minutes until it ran out of petrol.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Clara Amfo': 'lie',
			'Henning Wehn': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 10,
	episode: 7,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
