import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Nicola Coughlan',
			wiki: 'https://en.wikipedia.org/wiki/Nicola_Coughlan',
			gender: 'female'
		},
		{
			name: 'Dan Walker',
			wiki: 'https://en.wikipedia.org/wiki/Dan_Walker_(broadcaster)',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Mr. Motivator',
			wiki: 'https://en.wikipedia.org/wiki/Mr_Motivator',
			gender: 'male'
		},
		{
			name: 'Sara Pascoe',
			wiki: 'https://en.wikipedia.org/wiki/Sara_Pascoe',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'As a child, I once secretly cashed my mum\'s family allowance and used the money to buy a cat.',
		guessingTeam: 'David Mitchell',
		person: 'Sara Pascoe',
		personGuesses: {
			'Dan Walker': 'truth',
			'David Mitchell': 'truth',
			'Nicola Coughlan': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		possession: true,
		statement: 'This is my sports bag. And, halfway through signing it, I told Pelé to put his pen down because I thought he was ruining it.',
		guessingTeam: 'Lee Mack',
		person: 'Dan Walker',
		personGuesses: {
			'Lee Mack': 'lie',
			'Mr. Motivator': 'lie',
			'Sara Pascoe': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Every day, I do one press-up for each year I\'ve been alive.',
		guessingTeam: 'David Mitchell',
		person: 'Mr. Motivator',
		personGuesses: {
			'Dan Walker': 'truth',
			'David Mitchell': 'truth',
			'Nicola Coughlan': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Graham',
		connections: {
			'Dan Walker': 'Graham is the secretary of my highly exclusive club, Egg Club.',
			'David Mitchell': 'Graham comforted me when I, while visiting a model village, became overwhelmed by my enormousness.',
			'Nicola Coughlan': 'Graham jumped out of a cupboard to scare away my hiccups.'
		},
		personGuesses: {
			'Lee Mack': 'Nicola Coughlan',
			'Mr. Motivator': 'Nicola Coughlan',
			'Sara Pascoe': 'Dan Walker' // agreed to Nicola
		},
		teamGuess: 'Nicola Coughlan',
		truth: 'Dan Walker'
	},
	{
		type: 'quick_fire',
		statement: 'Last year, on a silent retreat, I got into a row with the rest of the group because of the snap, crackle and pop coming from my bowl of Rice Krispies.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Dan Walker': 'lie',
			'David Mitchell': 'truth',
			'Nicola Coughlan': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 14,
	episode: 7,
	rounds: rounds,
	score: [4, 1],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
