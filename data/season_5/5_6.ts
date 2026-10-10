import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Bill Oddie',
			wiki: 'https://en.wikipedia.org/wiki/Bill_Oddie',
			gender: 'male'
		},
		{
			name: 'Frank Skinner',
			wiki: 'https://en.wikipedia.org/wiki/Frank_Skinner',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Sarah Millican',
			wiki: 'https://en.wikipedia.org/wiki/Sarah_Millican',
			gender: 'female'
		},
		{
			name: 'Jon Richardson',
			wiki: 'https://en.wikipedia.org/wiki/Jon_Richardson',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Sarah Millican',
		personGuesses: {
			'Bill Oddie': 'truth',
			'David Mitchell': 'truth',
			'Frank Skinner': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Frank Skinner',
		personGuesses: {
			'Jon Richardson': 'lie',
			'Lee Mack': 'lie',
			'Sarah Millican': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Bill Oddie',
		personGuesses: {
			'Jon Richardson': 'truth',
			'Lee Mack': 'truth',
			'Sarah Millican': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'Bill Oddie': 'Lee Mack',
			'David Mitchell': 'Sarah Millican',
			'Frank Skinner': 'Sarah Millican'
		},
		teamGuess: 'Sarah Millican',
		truth: 'Sarah Millican'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Bill Oddie': 'lie',
			'David Mitchell': 'lie',
			'Frank Skinner': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Jon Richardson',
		personGuesses: {
			'Bill Oddie': 'lie',
			'David Mitchell': 'lie',
			'Frank Skinner': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 5,
	episode: 6,
	rounds: rounds,
	score: [3, 7],
	liarOfTheWeek: 'Sarah Millican'
} as const satisfies StandardEpisode<typeof cast>
