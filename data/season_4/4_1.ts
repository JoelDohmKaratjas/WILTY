import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Fern Britton',
			wiki: 'https://en.wikipedia.org/wiki/Fern_Britton'
		},
		{
			name: 'Richard E. Grant',
			wiki: 'https://en.wikipedia.org/wiki/Richard_E._Grant'
		}
	],
	lee: [
		{
			name: 'Sanjeev Bhaskar',
			wiki: 'https://en.wikipedia.org/wiki/Sanjeev_Bhaskar'
		},
		{
			name: 'Martin Clunes',
			wiki: 'https://en.wikipedia.org/wiki/Martin_Clunes'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Sanjeev Bhaskar',
		personGuesses: {
			'David Mitchell': 'lie',
			'Fern Britton': 'truth',
			'Richard E. Grant': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Fern Britton',
		personGuesses: {
			'Lee Mack': 'lie',
			'Martin Clunes': 'truth',
			'Sanjeev Bhaskar': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Martin Clunes',
		personGuesses: {
			'David Mitchell': 'undecided',
			'Fern Britton': 'truth',
			'Richard E. Grant': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: {
			'Lee Mack': 'undecided', // doesn't think it's Fern
			'Martin Clunes': 'Fern Britton', // originally David
			'Sanjeev Bhaskar': 'Fern Britton'
		},
		teamGuess: 'Fern Britton',
		truth: 'Richard E. Grant'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Fern Britton': 'lie',
			'Richard E. Grant': 'lie'
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
			'Martin Clunes': 'lie',
			'Sanjeev Bhaskar': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 4,
	episode: 1,
	rounds: rounds,
	score: [5, 6],
	liarOfTheWeek: 'Martin Clunes'
} as const satisfies StandardEpisode<typeof cast>
