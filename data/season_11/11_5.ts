import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Henry Blofeld',
			wiki: 'https://en.wikipedia.org/wiki/Henry_Blofeld',
			gender: 'male'
		},
		{
			name: 'Kerry Howard',
			wiki: 'https://en.wikipedia.org/wiki/Kerry_Howard',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'The Rev. Richard Coles',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Coles',
			gender: 'male'
		},
		{
			name: 'Clive Myrie',
			wiki: 'https://en.wikipedia.org/wiki/Clive_Myrie',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'In our family, whoever was deemed to have done the worst mime in the Christmas game of charades had to stand up and have their finger nibbled by our pet tortoise.',
		guessingTeam: 'David Mitchell',
		person: 'The Rev. Richard Coles',
		personGuesses: {
			'David Mitchell': 'lie',
			'Henry Blofeld': 'lie',
			'Kerry Howard': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'If fans stop me in the street when I don\'t want to be disturbed, I will put on my \'common\' voice and pretend I\'m someone else.',
		guessingTeam: 'Lee Mack',
		person: 'Henry Blofeld',
		personGuesses: {
			'Clive Myrie': 'lie',
			'Lee Mack': 'lie',
			'The Rev. Richard Coles': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Matthew',
		connections: {
			'Clive Myrie': 'When he was filming me reporting on a rise in street crime, someone took his camera.',
			'Lee Mack': 'I had to foot his dry-cleaning bill after my fidget spinner landed in his soup.',
			'The Rev. Richard Coles': 'When we were nine years old, we co-founded an atheists\' club.'
		},
		personGuesses: {
			'David Mitchell': 'The Rev. Richard Coles',
			'Henry Blofeld': 'Clive Myrie',
			'Kerry Howard': 'Clive Myrie'
		},
		teamGuess: 'Clive Myrie',
		truth: 'The Rev. Richard Coles'
	},
	{
		type: 'quick_fire',
		statement: 'After a flu virus swept through my class, I starred in a primary school production of Snow White and the Two Dwarves.',
		guessingTeam: 'Lee Mack',
		person: 'Kerry Howard',
		personGuesses: {
			'Clive Myrie': 'lie',
			'Lee Mack': 'lie',
			'The Rev. Richard Coles': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'After a mixup on the telephone, I accidentally went on holiday with the wrong girl.',
		guessingTeam: 'Lee Mack',
		person: 'Henry Blofeld',
		personGuesses: {
			'Clive Myrie': 'truth',
			'Lee Mack': 'lie',
			'The Rev. Richard Coles': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'special',
	cast: cast,
	season: 11,
	episode: 5,
	rounds: rounds,
	score: [1, 4],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
