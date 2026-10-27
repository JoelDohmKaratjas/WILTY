import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Stephen Bailey',
			wiki: 'https://en.wikipedia.org/wiki/Stephen_Bailey',
			gender: 'male'
		},
		{
			name: 'Gemma Collins',
			wiki: 'https://en.wikipedia.org/wiki/Gemma_Collins',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Asim Chaudhry',
			wiki: 'https://en.wikipedia.org/wiki/Asim_Chaudhry',
			gender: 'male'
		},
		{
			name: 'Sally Lindsay',
			wiki: 'https://en.wikipedia.org/wiki/Sally_Lindsay',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Whenever I need an energy boost, I\'ll stop doing what I\'m doing and I hug a tree.',
		guessingTeam: 'Lee Mack',
		person: 'Gemma Collins',
		personGuesses: {
			'Asim Chaudhry': 'truth',
			'Lee Mack': 'lie',
			'Sally Lindsay': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Age 14, my mum deliberately lost me for ten minutes in a French hypermarket in order to force me to use the French I\'d learnt at school.',
		guessingTeam: 'Lee Mack',
		person: 'Stephen Bailey',
		personGuesses: {
			'Asim Chaudhry': 'lie',
			'Lee Mack': 'undecided',
			'Sally Lindsay': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once saw someone disappear in a puff of smoke, never to be seen again.',
		guessingTeam: 'David Mitchell',
		person: 'Asim Chaudhry',
		personGuesses: {
			'David Mitchell': 'lie',
			'Gemma Collins': 'lie',
			'Stephen Bailey': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Elliot',
		connections: {
			'David Mitchell': 'David was bombarded by hundreds of tennis balls by Elliot\'s tennis machine and had to shout for his help.',
			'Gemma Collins': 'Gemma broke out of Elliot\'s weight loss boot camp to go for a Chinese.',
			'Stephen Bailey': 'Elliot was the air steward who had to force the door when Stephen fell asleep in the loo.'
		},
		personGuesses: {
			'Asim Chaudhry': 'Gemma Collins',
			'Lee Mack': 'Gemma Collins',
			'Sally Lindsay': 'David Mitchell'
		},
		teamGuess: 'Gemma Collins',
		truth: 'Gemma Collins'
	},
	{
		type: 'quick_fire',
		statement: 'Because I thought he was someone else, I once revealed all to a cleaner.',
		guessingTeam: 'David Mitchell',
		person: 'Sally Lindsay',
		personGuesses: {
			'David Mitchell': 'truth',
			'Gemma Collins': 'lie',
			'Stephen Bailey': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 16,
	episode: 9,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
