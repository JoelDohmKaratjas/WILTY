import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Joe Lycett',
			wiki: 'https://en.wikipedia.org/wiki/Joe_Lycett',
			gender: 'male'
		},
		{
			name: 'Ruth Madeley',
			wiki: 'https://en.wikipedia.org/wiki/Ruth_Madeley',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Jo Brand',
			wiki: 'https://en.wikipedia.org/wiki/Jo_Brand',
			gender: 'female'
		},
		{
			name: 'Joe Swash',
			wiki: 'https://en.wikipedia.org/wiki/Joe_Swash',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Last Christmas, the biggest family row in the Lycett household was over how many doof-doofs there are in the EastEnders closing theme tune.',
		guessingTeam: 'Lee Mack',
		person: 'Joe Lycett',
		personGuesses: {
			'Jo Brand': 'lie',
			'Joe Swash': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'One Christmas, I accidentally put the wrong address in my mum\'s sat-nav and instead of driving to Lakeside, she drove all the way to the Lake District.',
		guessingTeam: 'David Mitchell',
		person: 'Joe Swash',
		personGuesses: {
			'David Mitchell': 'truth',
			'Joe Lycett': 'truth',
			'Ruth Madeley': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Because my dog hates loud noises so much, I always put earmuffs on him before we pull our Christmas crackers.',
		guessingTeam: 'Lee Mack',
		person: 'Ruth Madeley',
		personGuesses: {
			'Jo Brand': 'lie',
			'Joe Swash': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'David',
		connections: {
			'David Mitchell': 'After my daughter lost her toy rabbit, they held up a train so I could board and fetch the rabbit.',
			'Joe Lycett': 'We timeshared a Christmas tree last year to save money.',
			'Ruth Madeley': 'He caught me donating the gift he\'d given me a few days earlier.'
		},
		personGuesses: {
			'Jo Brand': 'David Mitchell',
			'Joe Swash': 'David Mitchell',
			'Lee Mack': 'David Mitchell'
		},
		teamGuess: 'David Mitchell',
		truth: 'David Mitchell'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'This box contains everything I need to play my family\'s favourite festive game.',
		guessingTeam: 'David Mitchell',
		person: 'Jo Brand',
		personGuesses: {
			'David Mitchell': 'truth',
			'Joe Lycett': 'unknown',
			'Ruth Madeley': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'special',
	cast: cast,
	season: 14,
	episode: 1,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
