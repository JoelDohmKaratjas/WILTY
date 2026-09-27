import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Myleene Klass',
			wiki: 'https://en.wikipedia.org/wiki/Myleene_Klass'
		},
		{
			name: 'Jason Manford',
			wiki: 'https://en.wikipedia.org/wiki/Jason_Manford'
		}
	],
	lee: [
		{
			name: 'Leslie Ash',
			wiki: 'https://en.wikipedia.org/wiki/Leslie_Ash'
		},
		{
			name: 'Neil Morrissey',
			wiki: 'https://en.wikipedia.org/wiki/Neil_Morrissey'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
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
	score: [7, 11]
} as const satisfies StandardEpisode
