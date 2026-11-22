import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Ivo Graham',
			wiki: 'https://en.wikipedia.org/wiki/Ivo_Graham',
			gender: 'male'
		},
		{
			name: 'Johnny Marr',
			wiki: 'https://en.wikipedia.org/wiki/Johnny_Marr',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Jo Brand',
			wiki: 'https://en.wikipedia.org/wiki/Jo_Brand',
			gender: 'female'
		},
		{
			name: 'Sinitta',
			wiki: 'https://en.wikipedia.org/wiki/Sinitta',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once dumped my hypnotist boyfriend when I brought him a surprise breakfast in bed, only for him to reveal he\'d hypnotised me to do it.',
		guessingTeam: 'David Mitchell',
		person: 'Jo Brand',
		personGuesses: {
			'David Mitchell': 'lie',
			'Ivo Graham': 'truth',
			'Johnny Marr': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'After one year at university, in order to improve my love life, I changed my bed linen.',
		guessingTeam: 'Lee Mack',
		person: 'Ivo Graham',
		personGuesses: {
			'Jo Brand': 'unknown',
			'Lee Mack': 'truth',
			'Sinitta': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'For my 50th birthday, Simon Cowell gave me a life-sized painting of himself.',
		guessingTeam: 'David Mitchell',
		person: 'Sinitta',
		personGuesses: {
			'David Mitchell': 'truth',
			'Ivo Graham': 'truth',
			'Johnny Marr': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Danny',
		connections: {
			'David Mitchell': 'Danny dropped and smashed his phone in disbelief when he caught David watching him watching David.',
			'Ivo Graham': 'Danny and Ivo form two thirds of a woodwind trio, Tutti-Flutti.',
			'Johnny Marr': 'Danny came to Johnny\'s rescue when he was egged in the Co-op.'
		},
		personGuesses: {
			'Jo Brand': 'Johnny Marr',
			'Lee Mack': 'Johnny Marr',
			'Sinitta': 'Ivo Graham'
		},
		teamGuess: 'Johnny Marr',
		truth: 'Johnny Marr'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'This is Brian May\'s hairbrush. Or at least, it was, until he got cross and threw it at me in a restaurant.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Ivo Graham': 'lie',
			'Johnny Marr': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 17,
	episode: 8,
	rounds: rounds,
	score: [1, 4],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
