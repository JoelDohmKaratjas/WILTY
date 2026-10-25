import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Rhod Gilbert',
			wiki: 'https://en.wikipedia.org/wiki/Rhod_Gilbert',
			gender: 'male'
		},
		{
			name: 'Miranda Hart',
			wiki: 'https://en.wikipedia.org/wiki/Miranda_Hart',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Hugh Fearnley-Whittingstall',
			wiki: 'https://en.wikipedia.org/wiki/Hugh_Fearnley-Whittingstall',
			gender: 'male'
		},
		{
			name: 'Rufus Hound',
			wiki: 'https://en.wikipedia.org/wiki/Rufus_Hound',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Occasionally, as a treat, I put marmite on my face, and let my dog lick it off.',
		guessingTeam: 'David Mitchell',
		person: 'Hugh Fearnley-Whittingstall',
		personGuesses: {
			'David Mitchell': 'lie',
			'Miranda Hart': 'lie',
			'Rhod Gilbert': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I always test the temperature of my bath, with my ear.',
		guessingTeam: 'Lee Mack',
		person: 'Miranda Hart',
		personGuesses: {
			'Hugh Fearnley-Whittingstall': 'truth',
			'Lee Mack': 'truth',
			'Rufus Hound': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once had a job where I had to answer the phone and say "Hello, beef?"',
		guessingTeam: 'Lee Mack',
		person: 'Rhod Gilbert',
		personGuesses: {
			'Hugh Fearnley-Whittingstall': 'truth',
			'Lee Mack': 'truth',
			'Rufus Hound': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Steve',
		connections: {
			'Hugh Fearnley-Whittingstall': 'He rescued Hugh when he got stuck in a cave looking for bats.',
			'Lee Mack': 'Went camping together, when they were in the Scouts, and woke up to find that someone had stolen their tent.',
			'Rufus Hound': 'Over a week, they\'ve visited every pub inside the M25, called The Red Lion, apart from four of them (42 pubs visited in total).'
		},
		personGuesses: {
			'David Mitchell': 'Hugh Fearnley-Whittingstall',
			'Miranda Hart': 'Hugh Fearnley-Whittingstall',
			'Rhod Gilbert': 'Hugh Fearnley-Whittingstall'
		},
		teamGuess: 'Hugh Fearnley-Whittingstall',
		truth: 'Rufus Hound'
	},
	{
		type: 'quick_fire',
		statement: 'This is the cricket ball with which I bowled out Jeremy Clarkson at a charity cricket match.',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Hugh Fearnley-Whittingstall': 'truth',
			'Lee Mack': 'lie',
			'Rufus Hound': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I trained for last year\'s Paris Marathon but pulled out when a doctor advised me that one of my legs is shorter than the other.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Miranda Hart': 'truth',
			'Rhod Gilbert': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 4,
	episode: 6,
	rounds: rounds,
	score: [4, 5],
	liarOfTheWeek: 'Hugh Fearnley-Whittingstall'
} as const satisfies StandardEpisode<typeof cast>
