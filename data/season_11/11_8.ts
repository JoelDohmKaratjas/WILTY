import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Claude Littner',
			wiki: 'https://en.wikipedia.org/wiki/Claude_Littner',
			gender: 'male'
		},
		{
			name: 'Jordan Stephens',
			wiki: 'https://en.wikipedia.org/wiki/Jordan_Stephens',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Ade Edmondson',
			wiki: 'https://en.wikipedia.org/wiki/Adrian_Edmondson',
			gender: 'male'
		},
		{
			name: 'Cariad Lloyd',
			wiki: 'https://en.wikipedia.org/wiki/Cariad_Lloyd',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'When I broke my neck at school, all I was given was an aspirin.',
		guessingTeam: 'David Mitchell',
		person: 'Ade Edmondson',
		personGuesses: {
			'Claude Littner': 'truth',
			'David Mitchell': 'truth',
			'Jordan Stephens': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I was sacked from my job in a call center for repeatedly using different accents on the phone.',
		guessingTeam: 'David Mitchell',
		person: 'Cariad Lloyd',
		personGuesses: {
			'Claude Littner': 'lie',
			'David Mitchell': 'truth',
			'Jordan Stephens': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Ian',
		connections: {
			'Claude Littner': 'He\'s keeping my motorbike in his shed and my wife doesn\'t know that I\'ve actually got a motorbike.',
			'David Mitchell': 'He\'s the taxi driver who cooked me a fried egg sandwich on the engine of his car.',
			'Jordan Stephens': 'We used to regularly drive to a field together and howl at the moon.'
		},
		personGuess: {
			'Ade Edmondson': 'Jordan Stephens',
			'Cariad Lloyd': 'Jordan Stephens',
			'Lee Mack': 'Claude Littner'
		},
		teamGuess: 'Claude Littner',
		truth: 'Jordan Stephens'
	},
	{
		type: 'quick_fire',
		statement: 'Having recently got into Eastern cuisine, this Christmas sees the launch of my new cookbook, Lee Mack\'s Wok Around the Clock.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Claude Littner': 'unknown',
			'David Mitchell': 'lie',
			'Jordan Stephens': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 11,
	episode: 8,
	rounds: rounds,
	score: [4, 0],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
