import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Ronnie Corbett',
			wiki: 'https://en.wikipedia.org/wiki/Ronnie_Corbett'
		},
		{
			name: 'Sarah Millican',
			wiki: 'https://en.wikipedia.org/wiki/Sarah_Millican'
		}
	],
	lee: [
		{
			name: 'Julian Clary',
			wiki: 'https://en.wikipedia.org/wiki/Julian_Clary'
		},
		{
			name: 'Holly Walsh',
			wiki: 'https://en.wikipedia.org/wiki/Holly_Walsh'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Julian Clary',
		personGuesses: {
			'David Mitchell': 'truth',
			'Ronnie Corbett': 'lie',
			'Sarah Millican': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Ronnie Corbett',
		personGuesses: {
			'Holly Walsh': 'lie',
			'Julian Clary': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Sarah Millican',
		personGuesses: {
			'Holly Walsh': 'truth',
			'Julian Clary': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: {
			'Holly Walsh': 'David Mitchell',
			'Julian Clary': 'David Mitchell',
			'Lee Mack': 'Sarah Millican'
		},
		teamGuess: 'Sarah Millican',
		truth: 'David Mitchell'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Holly Walsh': 'lie',
			'Julian Clary': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Ronnie Corbett',
		personGuesses: {
			'Holly Walsh': 'truth',
			'Julian Clary': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 4,
	episode: 5,
	rounds: rounds,
	score: [4, 8],
	liarOfTheWeek: 'Ronnie Corbett'
} as const satisfies StandardEpisode<typeof cast>
