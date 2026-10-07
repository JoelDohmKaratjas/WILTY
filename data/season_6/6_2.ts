import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Sanjeev Bhaskar',
			wiki: 'https://en.wikipedia.org/wiki/Sanjeev_Bhaskar'
		},
		{
			name: 'Richard Madeley',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Madeley'
		}
	],
	lee: [
		{
			name: 'Kate Humble',
			wiki: 'https://en.wikipedia.org/wiki/Kate_Humble'
		},
		{
			name: 'Miles Jupp',
			wiki: 'https://en.wikipedia.org/wiki/Miles_Jupp'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Richard Madeley',
		personGuesses: {
			'Kate Humble': 'lie',
			'Lee Mack': 'truth',
			'Miles Jupp': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Miles Jupp',
		personGuesses: {
			'David Mitchell': 'lie',
			'Richard Madeley': 'truth',
			'Sanjeev Bhaskar': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Kate Humble',
		personGuesses: {
			'David Mitchell': 'lie',
			'Richard Madeley': 'lie',
			'Sanjeev Bhaskar': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Mitchell': 'Lee Mack',
			'Richard Madeley': 'Lee Mack',
			'Sanjeev Bhaskar': 'Kate Humble'
		},
		teamGuess: 'Lee Mack',
		truth: 'Miles Jupp'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Kate Humble': 'truth',
			'Lee Mack': 'lie',
			'Miles Jupp': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 6,
	episode: 2,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: 'Miles Jupp'
} as const satisfies StandardEpisode<typeof cast>
