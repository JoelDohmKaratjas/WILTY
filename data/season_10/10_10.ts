import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Sir Tom Courtenay',
			wiki: 'https://en.wikipedia.org/wiki/Tom_Courtenay',
			gender: 'male'
		},
		{
			name: 'Richard Osman',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Osman',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Chris Kamara',
			wiki: 'https://en.wikipedia.org/wiki/Chris_Kamara',
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
		statement: 'I still haven\'t watched Breaking Bad because every time I sit down to watch it, I notice there are new episodes of Homes Under the Hammer on the planner and I have to watch those instead.',
		guessingTeam: 'Lee Mack',
		person: 'Richard Osman',
		personGuesses: {
			'Chris Kamara': 'truth',
			'Lee Mack': 'truth',
			'Sara Pascoe': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'My full name is Christmas Kamara.',
		guessingTeam: 'David Mitchell',
		person: 'Chris Kamara',
		personGuesses: {
			'David Mitchell': 'lie',
			'Richard Osman': 'unknown',
			'Sir Tom Courtenay': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'As a child, my Christmas was once cut short when my mum took the decorations down halfway through Christmas day.',
		guessingTeam: 'David Mitchell',
		person: 'Sara Pascoe',
		personGuesses: {
			'David Mitchell': 'truth',
			'Richard Osman': 'truth',
			'Sir Tom Courtenay': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I kick off every Christmas morning with a bowl of cornflakes in a sea of Baileys.',
		guessingTeam: 'Lee Mack',
		person: 'Sir Tom Courtenay',
		personGuesses: {
			'Chris Kamara': 'lie',
			'Lee Mack': 'truth',
			'Sara Pascoe': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Dennis',
		connections: {
			'Chris Kamara': 'We once staged a burglary to cover up for the fact that we\'d been bunking off school.',
			'Lee Mack': 'This is Dennis, or as I call him, Squeaky Diesel. I always fill up at his petrol station because his unbelievably high pitched voice always cheers me up.',
			'Sara Pascoe': 'He\'s the park gardener who came to my aid when my legs turned to jelly mid-run.'
		},
		personGuesses: {
			'David Mitchell': 'Sara Pascoe',
			'Richard Osman': 'Chris Kamara', // Not Lee
			'Sir Tom Courtenay': 'unknown' // Not sara
		},
		teamGuess: 'Sara Pascoe',
		truth: 'Chris Kamara'
	},
	{
		type: 'quick_fire',
		statement: 'Aged 9, I undertook my first ever acting role as Joseph in the school nativity, a performance described in my end-of-year report as world-weary.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Chris Kamara': 'truth',
			'Lee Mack': 'truth',
			'Sara Pascoe': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'special',
	cast: cast,
	season: 10,
	episode: 10,
	rounds: rounds,
	score: [5, 1],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
