import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Suggs',
			wiki: 'https://en.wikipedia.org/wiki/Suggs',
			gender: 'male'
		},
		{
			name: 'Holly Willoughby',
			wiki: 'https://en.wikipedia.org/wiki/Holly_Willoughby',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Angellica Bell',
			wiki: 'https://en.wikipedia.org/wiki/Angellica_Bell',
			gender: 'female'
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
		possession: true,
		statement: 'This is Jeff. Every Thursday, our floor manager hides him somewhere on the set of This Morning for me and Phillip to find during the show. The first one to spot him is the winner.',
		guessingTeam: 'Lee Mack',
		person: 'Holly Willoughby',
		personGuesses: {
			'Angellica Bell': 'truth',
			'Bob Mortimer': 'unknown',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'On a dark winter\'s night, I once broke into the garden of the local witch\'s house and was shocked by what I found there.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'lie',
			'Holly Willoughby': 'lie',
			'Suggs': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I only found out Madness were trying to replace me when I saw an advert looking for a new singer.',
		guessingTeam: 'Lee Mack',
		person: 'Suggs',
		personGuesses: {
			'Angellica Bell': 'truth',
			'Bob Mortimer': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Mario',
		connections: {
			'Angellica Bell': 'Angellica accidentally exposed herself to Mario, the builder.',
			'Bob Mortimer': 'Mario has been sending Bob photographs of massive rats.',
			'Lee Mack': 'He got into a row with Mario over Lee\'s honking when in fact, Lee was on his way to the garage to fix his faulty horn.'
		},
		personGuesses: {
			'David Mitchell': 'Bob Mortimer',
			'Holly Willoughby': 'Angellica Bell',
			'Suggs': 'Bob Mortimer'
		},
		teamGuess: 'Bob Mortimer',
		truth: 'Angellica Bell'
	},
	{
		type: 'quick_fire',
		statement: 'To keep things exciting at home, every time I fill our tin with normal teabags, I slip in one Earl Grey, knowing it could surprise me at any time.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Angellica Bell': 'unknown',
			'Bob Mortimer': 'unknown',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'Even though I could see the DVD on the shelf, I once paid £6.99 to rent a movie because I couldn\'t be bothered to get off the sofa.',
		guessingTeam: 'Lee Mack',
		person: 'Holly Willoughby',
		personGuesses: {
			'Angellica Bell': 'lie',
			'Bob Mortimer': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 15,
	episode: 3,
	rounds: rounds,
	score: [2, 4],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
