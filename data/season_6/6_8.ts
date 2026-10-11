import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Emily Maitlis',
			wiki: 'https://en.wikipedia.org/wiki/Emily_Maitlis',
			gender: 'female'
		},
		{
			name: 'Jack Whitehall',
			wiki: 'https://en.wikipedia.org/wiki/Jack_Whitehall',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Jim Carter',
			wiki: 'https://en.wikipedia.org/wiki/Jim_Carter_(actor)',
			gender: 'male'
		},
		{
			name: 'Armando Iannucci',
			wiki: 'https://en.wikipedia.org/wiki/Armando_Iannucci',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'As a method actor, on the set of Downton Abbey I like to remain in character all day and even help serve lunch to the cast and the crew as Carson.',
		guessingTeam: 'David Mitchell',
		person: 'Jim Carter',
		personGuesses: {
			'David Mitchell': 'lie',
			'Emily Maitlis': 'lie',
			'Jack Whitehall': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once hid a girl in my bed, whilst my entire family came into the bedroom to have a conversation with me.',
		guessingTeam: 'Lee Mack',
		person: 'Jack Whitehall',
		personGuesses: {
			'Armando Iannucci': 'truth',
			'Jim Carter': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Benjie',
		connections: {
			'David Mitchell': 'He owns an ice cream van and gives David two flakes on his 99 ice cream, he then decided to name him \'David-Two-Flakes\'.',
			'Emily Maitlis': 'He\'s helping me to fulfil my recurring dream, which is to do the splits.',
			'Jack Whitehall': 'He hypnotised him and his friend to make them believe they had never watched Harry Potter so they could watch it again.'
		},
		personGuess: {
			'Armando Iannucci': 'Jack Whitehall',
			'Jim Carter': 'unknown',
			'Lee Mack': 'Jack Whitehall'
		},
		teamGuess: 'Jack Whitehall',
		truth: 'Emily Maitlis'
	},
	{
		type: 'quick_fire',
		statement: 'Last year I was forced to abandon the purchase of a new armchair mid-transaction, because the shop assistant used the terms \'well jel\' and \'amazeballs\'.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Armando Iannucci': 'lie',
			'Jim Carter': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I once had to abandon my car in a safari park after a baboon climbed through the sunroof, lay down on the back seat and fell asleep.',
		guessingTeam: 'David Mitchell',
		person: 'Armando Iannucci',
		personGuesses: {
			'David Mitchell': 'truth',
			'Emily Maitlis': 'truth',
			'Jack Whitehall': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 6,
	episode: 8,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: 'Jim Carter'
} as const satisfies StandardEpisode<typeof cast>
