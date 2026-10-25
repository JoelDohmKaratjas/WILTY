import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Mackenzie Crook',
			wiki: 'https://en.wikipedia.org/wiki/Mackenzie_Crook',
			gender: 'male'
		},
		{
			name: 'Chris Packham',
			wiki: 'https://en.wikipedia.org/wiki/Chris_Packham',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Victoria Coren',
			wiki: 'https://en.wikipedia.org/wiki/Victoria_Coren_Mitchell',
			gender: 'female'
		},
		{
			name: 'Rhod Gilbert',
			wiki: 'https://en.wikipedia.org/wiki/Rhod_Gilbert',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I was sacked from my job at a zoo, when my boss found I\'d been taking photos of the animals wearing hats.',
		guessingTeam: 'David Mitchell',
		person: 'Rhod Gilbert',
		personGuesses: {
			'Chris Packham': 'lie',
			'David Mitchell': 'lie',
			'Mackenzie Crook': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'This is my Orchidometer, it was a present from my sister.',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'Mackenzie Crook',
		personGuesses: {
			'Lee Mack': 'truth',
			'Rhod Gilbert': 'unknown',
			'Victoria Coren': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Simon',
		connections: {
			'Chris Packham': 'In a virtual world, they are married.',
			'David Mitchell': 'He has a tattoo of David\'s face on his knee.',
			'Mackenzie Crook': 'Mackenzie hoaxed his school by burying some "treasure", Simon found it and the police were called.'
		},
		personGuesses: {
			'Lee Mack': 'Mackenzie Crook',
			'Rhod Gilbert': 'Mackenzie Crook',
			'Victoria Coren': 'Mackenzie Crook'
		},
		teamGuess: 'Mackenzie Crook',
		truth: 'Mackenzie Crook'
	},
	{
		type: 'quick_fire',
		statement: 'I once helped my Mum and Dad look for something they\'d lost, using a Oujia Board.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Chris Packham': 'truth',
			'David Mitchell': 'lie',
			'Mackenzie Crook': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'If I ever get stuck on a crossword clue I phone Tim Henman for help, he hasn\'t let me down yet.',
		guessingTeam: 'David Mitchell',
		person: 'Victoria Coren',
		personGuesses: {
			'Chris Packham': 'truth',
			'David Mitchell': 'truth',
			'Mackenzie Crook': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I once paid for some Tapas with a Nissan Micra.',
		guessingTeam: 'David Mitchell',
		person: 'Rhod Gilbert',
		personGuesses: {
			'Chris Packham': 'lie',
			'David Mitchell': 'lie',
			'Mackenzie Crook': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 5,
	episode: 7,
	rounds: rounds,
	score: [4, 6],
	liarOfTheWeek: 'Mackenzie Crook'
} as const satisfies StandardEpisode<typeof cast>
