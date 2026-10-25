import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Sheila Hancock',
			wiki: 'https://en.wikipedia.org/wiki/Sheila_Hancock',
			gender: 'female'
		},
		{
			name: 'Stephen Mangan',
			wiki: 'https://en.wikipedia.org/wiki/Stephen_Mangan',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Mark Bonnar',
			wiki: 'https://en.wikipedia.org/wiki/Mark_Bonnar',
			gender: 'male'
		},
		{
			name: 'Anita Rani',
			wiki: 'https://en.wikipedia.org/wiki/Anita_Rani',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I keep a spare front door key on my cat\'s collar. If I ever get locked out, I simply call my cat and he comes to my rescue.',
		guessingTeam: 'Lee Mack',
		person: 'Sheila Hancock',
		personGuesses: {
			'Anita Rani': 'lie',
			'Lee Mack': 'lie',
			'Mark Bonnar': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'The day I moved into my new house, I caused the whole street to be shut down and my neighbours\' homes to be evacuated.',
		guessingTeam: 'David Mitchell',
		person: 'Anita Rani',
		personGuesses: {
			'David Mitchell': 'lie',
			'Sheila Hancock': 'lie',
			'Stephen Mangan': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'John',
		connections: {
			'David Mitchell': 'I was the only person to attend his neighbourhood watch meeting, so we spent ten minutes drawing a map of the road then gave up and watched an episode of Knight Rider.',
			'Sheila Hancock': 'He disrupted a show that I was in with an explosive attack of the hiccups.',
			'Stephen Mangan': 'We once spent an hour hiding from a piece of rope because we thought it was a snake.'
		},
		personGuesses: {
			'Anita Rani': 'Sheila Hancock', // kinda of changed to Stephen
			'Lee Mack': 'Stephen Mangan',
			'Mark Bonnar': 'David Mitchell' // kinda agreed to Stephen
		},
		teamGuess: 'Stephen Mangan',
		truth: 'Stephen Mangan'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'I recently took a crash course in taxidermy, by the end of which I\'ve managed to make this.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Sheila Hancock': 'lie',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 11,
	episode: 2,
	rounds: rounds,
	score: [1, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
