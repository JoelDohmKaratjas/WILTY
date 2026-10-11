import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'David Baddiel',
			wiki: 'https://en.wikipedia.org/wiki/David_Baddiel',
			gender: 'male'
		},
		{
			name: 'Maureen Lipman',
			wiki: 'https://en.wikipedia.org/wiki/Maureen_Lipman',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Jimmy Carr',
			wiki: 'https://en.wikipedia.org/wiki/Jimmy_Carr',
			gender: 'male'
		},
		{
			name: 'Richard Wilson',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Wilson_(Scottish_actor)',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once worked as part of a circus double act which was called Franko and Tootie.',
		guessingTeam: 'Lee Mack',
		person: 'Maureen Lipman',
		personGuesses: {
			'Jimmy Carr': 'truth',
			'Lee Mack': 'lie',
			'Richard Wilson': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I had an interview at MI5 to be a spy.',
		guessingTeam: 'David Mitchell',
		person: 'Jimmy Carr',
		personGuesses: {
			'David Baddiel': 'lie',
			'David Mitchell': 'lie',
			'Maureen Lipman': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I have snogged two of the Spice Girls [Melanie Brown and Melanie Chisholm].',
		guessingTeam: 'Lee Mack',
		person: 'David Baddiel',
		personGuesses: {
			'Jimmy Carr': 'truth',
			'Lee Mack': 'lie',
			'Richard Wilson': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		statement: 'After a visit to Scotland, Paris Hilton demanded her PA only ever speak to her with a Scottish accent. Her PA resigned.',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Jimmy Carr': 'truth',
			'Lee Mack': 'lie',
			'Richard Wilson': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Della',
		connections: {
			'Jimmy Carr': 'His chiropodist.',
			'Lee Mack': 'An estate agent who accidentally locked him inside a house after a viewing.',
			'Richard Wilson': 'Danced with Della on his dancersize fitness video.'
		},
		personGuess: {
			'David Baddiel': 'Lee Mack',
			'David Mitchell': 'Jimmy Carr',
			'Maureen Lipman': 'Jimmy Carr'
		},
		teamGuess: 'Jimmy Carr',
		truth: 'Richard Wilson'
	},
	{
		type: 'quick_fire',
		statement: 'I used to buy my gran a chocolate orange every Christmas until I found seven of them in a drawer at her house.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Jimmy Carr': 'truth',
			'Lee Mack': 'lie',
			'Richard Wilson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I have been attacked by a snake charmer and his snake.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Baddiel': 'lie',
			'David Mitchell': 'lie',
			'Maureen Lipman': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'This [pictured right] is the neck brace I wore once just to get an upgrade on a flight.',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'David Baddiel',
		personGuesses: {
			'Jimmy Carr': 'truth',
			'Lee Mack': 'lie',
			'Richard Wilson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 2,
	episode: 3,
	rounds: rounds,
	score: [5, 6],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
