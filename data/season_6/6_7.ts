import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Huw Edwards',
			wiki: 'https://en.wikipedia.org/wiki/Huw_Edwards',
			gender: 'male'
		},
		{
			name: 'Sarah Millican',
			wiki: 'https://en.wikipedia.org/wiki/Sarah_Millican',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Josie Lawrence',
			wiki: 'https://en.wikipedia.org/wiki/Josie_Lawrence',
			gender: 'female'
		},
		{
			name: 'Bradley Walsh',
			wiki: 'https://en.wikipedia.org/wiki/Bradley_Walsh',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Sarah Millican',
		personGuesses: {
			'Bradley Walsh': 'lie',
			'Josie Lawrence': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Huw Edwards',
		personGuesses: {
			'Bradley Walsh': 'lie',
			'Josie Lawrence': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Bradley Walsh',
		personGuesses: {
			'David Mitchell': 'truth',
			'Huw Edwards': 'truth',
			'Sarah Millican': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Mitchell': 'Bradley Walsh',
			'Huw Edwards': 'Bradley Walsh',
			'Sarah Millican': 'Bradley Walsh'
		},
		teamGuess: 'Bradley Walsh',
		truth: 'Bradley Walsh'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Huw Edwards': 'lie',
			'Sarah Millican': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 6,
	episode: 7,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: 'Huw Edwards'
} as const satisfies StandardEpisode<typeof cast>
