import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Myleene Klass',
			wiki: 'https://en.wikipedia.org/wiki/Myleene_Klass',
			gender: 'female'
		},
		{
			name: 'Jason Manford',
			wiki: 'https://en.wikipedia.org/wiki/Jason_Manford',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Leslie Ash',
			wiki: 'https://en.wikipedia.org/wiki/Leslie_Ash',
			gender: 'female'
		},
		{
			name: 'Neil Morrissey',
			wiki: 'https://en.wikipedia.org/wiki/Neil_Morrissey',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I recently had an extension built by a builder called Bob.',
		guessingTeam: 'David Mitchell',
		person: 'Neil Morrissey',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jason Manford': 'truth',
			'Myleene Klass': 'truth' // mildly unsure
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I have beaten Gary Barlow at crazy golf.',
		guessingTeam: 'Lee Mack',
		person: 'Jason Manford',
		personGuesses: {
			'Lee Mack': 'lie',
			'Leslie Ash': 'lie',
			'Neil Morrissey': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I was Red Rum\'s stableboy.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jason Manford': 'lie',
			'Myleene Klass': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_dual',
		statement: 'Gwyneth Paltrow said she would rather die than let her child eat Cup-a-Soup.',
		personGuesses: {
			david: {
				'David Mitchell': 'lie',
				'Jason Manford': 'lie',
				'Myleene Klass': 'lie'
			},
			lee: {
				'Lee Mack': 'truth',
				'Leslie Ash': 'truth',
				'Neil Morrissey': 'truth'
			}
		},
		teamGuess: {
			david: 'lie',
			lee: 'truth'
		},
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Jill',
		connections: {
			'Myleene Klass': 'A friend who has fitted Camilla Parker Bowles\' underwear.',
			'Jason Manford': 'An air hostess who saved his life when he choked on a peanut.',
			'David Mitchell': 'A hypnotherapist who cured him of his fear of balloons.'
		},
		personGuess: {
			'Lee Mack': 'David Mitchell',
			'Leslie Ash': 'David Mitchell',
			'Neil Morrissey': 'Jason Manford'
		},
		teamGuess: 'David Mitchell',
		truth: 'Myleene Klass'
	},
	{
		type: 'telly_tales',
		statement: 'Mike Read often does a musical turn at the Tory party conference, and last year (2006) it was a ten minute political rap.',
		guessingTeam: 'David Mitchell',
		statementOwner: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jason Manford': 'truth', // unconfident truth
			'Myleene Klass': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I have been banned from Streatham ice rink.',
		guessingTeam: 'David Mitchell',
		person: 'Leslie Ash',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jason Manford': 'lie',
			'Myleene Klass': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I have formulated a five point plan for surviving if I were in prison.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Lee Mack': 'lie',
			'Leslie Ash': 'lie',
			'Neil Morrissey': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I have never eaten an apple, not even taken a bite.',
		guessingTeam: 'David Mitchell',
		person: 'Leslie Ash',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jason Manford': 'lie',
			'Myleene Klass': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 1,
	episode: 4,
	rounds: rounds,
	score: [7, 11],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
