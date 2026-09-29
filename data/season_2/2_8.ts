import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Phil Daniels',
			wiki: 'https://en.wikipedia.org/wiki/Phil_Daniels'
		},
		{
			name: 'Michael McIntyre',
			wiki: 'https://en.wikipedia.org/wiki/Michael_McIntyre'
		}
	],
	lee: [
		{
			name: 'Graeme Garden',
			wiki: 'https://en.wikipedia.org/wiki/Graeme_Garden'
		},
		{
			name: 'Lauren Laverne',
			wiki: 'https://en.wikipedia.org/wiki/Lauren_Laverne'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Phil Daniels',
		personGuesses: {
			'Graeme Garden': 'lie',
			'Lauren Laverne': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Graeme Garden',
		personGuesses: {
			'David Mitchell': 'lie',
			'Michael McIntyre': 'truth',
			'Phil Daniels': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Michael McIntyre',
		personGuesses: {
			'Graeme Garden': 'lie',
			'Lauren Laverne': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'lie',
			'Michael McIntyre': 'lie',
			'Phil Daniels': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Graeme Garden': 'truth',
			'Lauren Laverne': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Mitchell': 'Graeme Garden',
			'Michael McIntyre': 'Graeme Garden', // originally Lauren
			'Phil Daniels': 'Lauren Laverne'
		},
		teamGuess: 'Graeme Garden',
		truth: 'Graeme Garden'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Michael McIntyre': 'truth',
			'Phil Daniels': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Graeme Garden': 'truth',
			'Lauren Laverne': 'truth',
			'Lee Mack': 'truth' // didn't really think it was true
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lauren Laverne',
		personGuesses: {
			'David Mitchell': 'truth',
			'Michael McIntyre': 'unknown',
			'Phil Daniels': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Phil Daniels',
		personGuesses: {
			'Graeme Garden': 'truth',
			'Lauren Laverne': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 2,
	episode: 8,
	rounds: rounds,
	score: [9, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
