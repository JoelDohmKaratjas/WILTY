import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Sarah Millican',
			wiki: 'https://en.wikipedia.org/wiki/Sarah_Millican',
			gender: 'female'
		},
		{
			name: 'Jon Richardson',
			wiki: 'https://en.wikipedia.org/wiki/Jon_Richardson',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'David Harewood',
			wiki: 'https://en.wikipedia.org/wiki/David_Harewood',
			gender: 'male'
		},
		{
			name: 'Bob Mortimer',
			wiki: 'https://en.wikipedia.org/wiki/Bob_Mortimer',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once set fire to my house with a box of fireworks.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jon Richardson': 'lie',
			'Sarah Millican': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'When I\'m stressed I take a water-free bath.',
		guessingTeam: 'Lee Mack',
		person: 'Jon Richardson',
		personGuesses: {
			'Bob Mortimer': 'lie',
			'David Harewood': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Keith',
		connections: {
			'Bob Mortimer': 'When we were at school together we hid a dictaphone in the ceiling to confuse the teacher.',
			'David Harewood': 'He is my old teacher. We met in a café and I had to pretend to not be me as I was preparing a character.',
			'Lee Mack': 'His hawk was supposed to land on my arm, and instead stole the wig off the man next to me.'
		},
		personGuess: {
			'David Mitchell': 'David Harewood',
			'Jon Richardson': 'Bob Mortimer',
			'Sarah Millican': 'David Harewood'
		},
		teamGuess: 'David Harewood',
		truth: 'Bob Mortimer'
	},
	{
		type: 'quick_fire',
		statement: 'This is my cat cam. I put it around my cat\'s neck for a week because I believed he was turning the kitchen tap on.',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'Sarah Millican',
		personGuesses: {
			'Bob Mortimer': 'lie',
			'David Harewood': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I can balance a banknote on my nose.',
		guessingTeam: 'David Mitchell',
		person: 'David Harewood',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jon Richardson': 'lie',
			'Sarah Millican': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 7,
	episode: 6,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: 'Bob Mortimer'
} as const satisfies StandardEpisode<typeof cast>
