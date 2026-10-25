import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Marcus Brigsocke',
			wiki: 'https://en.wikipedia.org/wiki/Marcus_Brigstocke',
			gender: 'male'
		},
		{
			name: 'Jamellia',
			wiki: 'https://en.wikipedia.org/wiki/Jamelia',
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
			name: 'Terry Christian',
			wiki: 'https://en.wikipedia.org/wiki/Terry_Christian',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Prince Philip told me I was a funny-looking fellow when I was a ball boy at Wimbledon.',
		guessingTeam: 'David Mitchell',
		person: 'Jimmy Carr',
		personGuesses: {
			'David Mitchell': 'lie',
			'Marcus Brigsocke': 'lie',
			'Jamellia': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once stole some toilet paper from George Michael\'s house.',
		guessingTeam: 'Lee Mack',
		person: 'Jamellia',
		personGuesses: {
			'Jimmy Carr': 'lie',
			'Lee Mack': 'lie',
			'Terry Christian': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I worked as a podium dancer at the Ministry of Sound.',
		guessingTeam: 'Lee Mack',
		person: 'Marcus Brigsocke',
		personGuesses: {
			'Jimmy Carr': 'truth',
			'Lee Mack': 'truth',
			'Terry Christian': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		statement: 'Jodie Marsh has a degree in \'Golf Course Management\' from the University of Birmingham.',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Jimmy Carr': 'lie',
			'Lee Mack': 'lie',
			'Terry Christian': 'lie' // "might be true"
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Steve',
		connections: {
			'Jimmy Carr': 'Steve and Jimmy were at primary school together and didn\'t see each other for 20 years until Steve brought room service to Jimmy in a hotel.',
			'Lee Mack': 'Steve and Lee own a greyhound that has come last in all of its races.',
			'Terry Christian': 'Steve and Terry were questioned by police who mistook them for jewel thieves.'
		},
		personGuesses: {
			'David Mitchell': 'Jimmy Carr',
			'Marcus Brigsocke': 'Lee Mack',
			'Jamellia': 'Jimmy Carr'
		},
		teamGuess: 'Jimmy Carr',
		truth: 'Terry Christian'
	},
	{
		type: 'quick_fire',
		statement: 'I read Nineteen Eighty-Four from cover to cover in W H Smith, so I didn\'t have to buy a copy.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Jimmy Carr': 'truth',
			'Lee Mack': 'lie',
			'Terry Christian': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'This is some of my hair collection that I\'ve gathered from guests who appeared on The Word.',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Terry Christian',
		personGuesses: {
			'David Mitchell': 'lie',
			'Marcus Brigsocke': 'lie',
			'Jamellia': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 3,
	episode: 3,
	rounds: rounds,
	score: [4, 6],
	liarOfTheWeek: 'Terry Christian'
} as const satisfies StandardEpisode<typeof cast>
