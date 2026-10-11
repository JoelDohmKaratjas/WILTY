import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Sanjeev Bhaskar',
			wiki: 'https://en.wikipedia.org/wiki/Sanjeev_Bhaskar',
			gender: 'male'
		},
		{
			name: 'Richard Madeley',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Madeley',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Kate Humble',
			wiki: 'https://en.wikipedia.org/wiki/Kate_Humble',
			gender: 'female'
		},
		{
			name: 'Miles Jupp',
			wiki: 'https://en.wikipedia.org/wiki/Miles_Jupp',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'One Christmas morning I woke up stark naked in our shoe cupboard clutching nothing but two cans of fake snow.',
		guessingTeam: 'Lee Mack',
		person: 'Richard Madeley',
		personGuesses: {
			'Kate Humble': 'lie',
			'Lee Mack': 'truth',
			'Miles Jupp': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Every time I shower I must adhere to my strict system for drying myself.',
		guessingTeam: 'David Mitchell',
		person: 'Miles Jupp',
		personGuesses: {
			'David Mitchell': 'lie',
			'Richard Madeley': 'truth',
			'Sanjeev Bhaskar': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Every time I have a haircut I ask to keep the hair which I then take to London and scatter for the pigeons to make nests with.',
		guessingTeam: 'David Mitchell',
		person: 'Kate Humble',
		personGuesses: {
			'David Mitchell': 'lie',
			'Richard Madeley': 'lie',
			'Sanjeev Bhaskar': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'John',
		connections: {
			'Kate Humble': 'In Africa they dressed up in a pantomime giraffe costume to get close-up shots of giraffes in the wild.',
			'Lee Mack': 'They were once forced to share a bed when they were double booked into the same hotel room.',
			'Miles Jupp': 'They were paid to fight together in a supermarket, dressed as gladiators.'
		},
		personGuess: {
			'David Mitchell': 'Lee Mack',
			'Richard Madeley': 'Lee Mack',
			'Sanjeev Bhaskar': 'Kate Humble'
		},
		teamGuess: 'Lee Mack',
		truth: 'Miles Jupp'
	},
	{
		type: 'quick_fire',
		statement: 'I like pens. And I like to know where my pens are. For this reason, I have a three point pen policy.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Kate Humble': 'truth',
			'Lee Mack': 'lie',
			'Miles Jupp': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 6,
	episode: 2,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: 'Miles Jupp'
} as const satisfies StandardEpisode<typeof cast>
