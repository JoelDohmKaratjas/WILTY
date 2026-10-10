import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Robert Webb',
			wiki: 'https://en.wikipedia.org/wiki/Robert_Webb',
			gender: 'male'
		},
		{
			name: 'Sir Terry Wogan',
			wiki: 'https://en.wikipedia.org/wiki/Terry_Wogan',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Kevin Bridges',
			wiki: 'https://en.wikipedia.org/wiki/Kevin_Bridges',
			gender: 'male'
		},
		{
			name: 'Katy Wix',
			wiki: 'https://en.wikipedia.org/wiki/Katy_Wix',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Sir Terry Wogan',
		personGuesses: {
			'Katy Wix': 'lie',
			'Kevin Bridges': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Kevin Bridges',
		personGuesses: {
			'David Mitchell': 'lie',
			'Robert Webb': 'lie',
			'Sir Terry Wogan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Robert Webb',
		personGuesses: {
			'Katy Wix': 'truth',
			'Kevin Bridges': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Mitchell': 'undecided',
			'Robert Webb': 'Kevin Bridges',
			'Sir Terry Wogan': 'Katy Wix'
		},
		teamGuess: 'Katy Wix',
		truth: 'Kevin Bridges'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Katy Wix': 'truth',
			'Kevin Bridges': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Robert Webb': 'lie',
			'Sir Terry Wogan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Sir Terry Wogan',
		personGuesses: {
			'Katy Wix': 'lie',
			'Kevin Bridges': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 5,
	episode: 2,
	rounds: rounds,
	score: [6, 3],
	liarOfTheWeek: 'Sir Terry Wogan'
} as const satisfies StandardEpisode<typeof cast>
