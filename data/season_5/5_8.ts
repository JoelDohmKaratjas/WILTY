import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Lorraine Kelly',
			wiki: 'https://en.wikipedia.org/wiki/Lorraine_Kelly',
			gender: 'female'
		},
		{
			name: 'Dara Ó Briain',
			wiki: 'https://en.wikipedia.org/wiki/Dara_%C3%93_Briain',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Barry Cryer',
			wiki: 'https://en.wikipedia.org/wiki/Barry_Cryer',
			gender: 'male'
		},
		{
			name: 'Sue Perkins',
			wiki: 'https://en.wikipedia.org/wiki/Sue_Perkins',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'On doctor\'s advice, I have to sleep in a cycle helmet due to the violent nature of my dreams.',
		guessingTeam: 'Lee Mack',
		person: 'Dara Ó Briain',
		personGuesses: {
			'Barry Cryer': 'lie',
			'Lee Mack': 'lie',
			'Sue Perkins': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once presented an episode of TV-am whilst drunk.',
		guessingTeam: 'Lee Mack',
		person: 'Lorraine Kelly',
		personGuesses: {
			'Barry Cryer': 'truth',
			'Lee Mack': 'truth',
			'Sue Perkins': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I have written and have published a trilogy of romantic novels under a female pen name.',
		guessingTeam: 'David Mitchell',
		person: 'Barry Cryer',
		personGuesses: {
			'Dara Ó Briain': 'lie',
			'David Mitchell': 'lie',
			'Lorraine Kelly': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Rhod',
		connections: {
			'Barry Cryer': 'Rhod drives his favourite bus and whenever he sees the bus, he shouts "Hello, darling".',
			'Lee Mack': 'Accidentally took each other\'s baggage and Lee had to wear his clothes for 3 days.',
			'Sue Perkins': 'Her local butcher celebrated her winning of Maestro by putting an image of her face on a pig\'s face and a little conducting baton in its trotters.'
		},
		personGuesses: {
			'Dara Ó Briain': 'Sue Perkins',
			'David Mitchell': 'Sue Perkins',
			'Lorraine Kelly': 'Lee Mack'
		},
		teamGuess: 'Sue Perkins',
		truth: 'Barry Cryer'
	},
	{
		type: 'quick_fire',
		statement: 'This is my bear, Tablecloth, customs officers once cut his head off and searched him for smuggled goods.',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Barry Cryer': 'lie',
			'Lee Mack': 'lie',
			'Sue Perkins': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I spent an entire year in a plastic work class at school and this is the only thing I managed to make.',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Dara Ó Briain': 'lie',
			'David Mitchell': 'lie',
			'Lorraine Kelly': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 5,
	episode: 8,
	rounds: rounds,
	score: [3, 8],
	liarOfTheWeek: 'Barry Cryer'
} as const satisfies StandardEpisode<typeof cast>
