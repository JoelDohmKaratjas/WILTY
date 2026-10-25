import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Danny Dyer',
			wiki: 'https://en.wikipedia.org/wiki/Danny_Dyer',
			gender: 'male'
		},
		{
			name: 'Jon Richardson',
			wiki: 'https://en.wikipedia.org/wiki/Jon_Richardson',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Joe Lycett',
			wiki: 'https://en.wikipedia.org/wiki/Joe_Lycett',
			gender: 'male'
		},
		{
			name: 'Moira Stuart',
			wiki: 'https://en.wikipedia.org/wiki/Moira_Stuart',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'On a camping trip, I won an award for having the tidiest tent even though I\'d wet my sleeping bag.',
		guessingTeam: 'Lee Mack',
		person: 'Jon Richardson',
		personGuesses: {
			'Joe Lycett': 'truth',
			'Lee Mack': 'truth',
			'Moira Stuart': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'If I\'m ever walking alone at night, I call out the name of an imaginary dog to deter muggers.',
		guessingTeam: 'David Mitchell',
		person: 'Joe Lycett',
		personGuesses: {
			'Danny Dyer': 'truth',
			'David Mitchell': 'lie',
			'Jon Richardson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		possession: true,
		statement: 'Last year on a visit to the zoo, I put on a mask so that no one recognised me. This is that mask.',
		guessingTeam: 'Lee Mack',
		person: 'Danny Dyer',
		personGuesses: {
			'Joe Lycett': 'lie',
			'Lee Mack': 'lie',
			'Moira Stuart': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Charlotte',
		connections: {
			'Joe Lycett': 'In the evenings, I like to relax by watching videos of her wrapping gifts on YouTube.',
			'Lee Mack': 'She is my judo instructor and she told me off recently when she caught me having a pint in my judo kit just before a tournament.',
			'Moira Stuart': 'She does such a good impression of me that I once let her be me on Radio Two and no one noticed.'
		},
		personGuesses: {
			'Danny Dyer': 'Moira Stuart',
			'David Mitchell': 'Moira Stuart',
			'Jon Richardson': 'Moira Stuart'
		},
		teamGuess: 'Moira Stuart',
		truth: 'Joe Lycett'
	},
	{
		type: 'quick_fire',
		statement: 'On a cold winter evening, I like to treat myself to a jacket potato with a melted KitKat on top.',
		guessingTeam: 'David Mitchell',
		person: 'Moira Stuart',
		personGuesses: {
			'Danny Dyer': 'lie',
			'David Mitchell': 'lie',
			'Jon Richardson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 9,
	episode: 1,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: 'Danny Dyer'
} as const satisfies StandardEpisode<typeof cast>
