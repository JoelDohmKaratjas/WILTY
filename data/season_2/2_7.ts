import { type Episode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Vic Reeves',
			wiki: 'https://en.wikipedia.org/wiki/Jim_Moir'
		},
		{
			name: 'Shane Richie',
			wiki: 'https://en.wikipedia.org/wiki/Shane_Richie'
		}
	],
	lee: [
		{
			name: 'Tara Palmer-Tomkinson',
			wiki: 'https://en.wikipedia.org/wiki/Tara_Palmer-Tomkinson'
		},
		{
			name: 'Rhys Thomas',
			wiki: 'https://en.wikipedia.org/wiki/Rhys_Thomas_(comedian)'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Shane Richie',
		personGuesses: {
			'Lee Mack': 'truth',
			'Rhys Thomas': 'truth',
			'Tara Palmer-Tomkinson': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Rhys Thomas',
		personGuesses: {
			'David Mitchell': 'lie',
			'Shane Richie': 'unknown',
			'Vic Reeves': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Vic Reeves',
		personGuesses: {
			'Lee Mack': 'lie',
			'Rhys Thomas': 'lie',
			'Tara Palmer-Tomkinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Lee Mack': 'truth',
			'Rhys Thomas': 'lie',
			'Tara Palmer-Tomkinson': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'truth',
			'Shane Richie': 'lie',
			'Vic Reeves': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: {
			'Lee Mack': 'David Mitchell',
			'Rhys Thomas': 'Shane Richie',
			'Tara Palmer-Tomkinson': 'Shane Richie'
		},
		teamGuess: 'Shane Richie',
		truth: 'Vic Reeves'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Lee Mack': 'lie',
			'Rhys Thomas': 'lie',
			'Tara Palmer-Tomkinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Tara Palmer-Tomkinson',
		personGuesses: {
			'David Mitchell': 'truth',
			'Shane Richie': 'truth',
			'Vic Reeves': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Shane Richie': 'lie',
			'Vic Reeves': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Shane Richie',
		personGuesses: {
			'Lee Mack': 'lie',
			'Rhys Thomas': 'lie',
			'Tara Palmer-Tomkinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	cast: cast,
	season: 2,
	episode: 7,
	rounds: rounds,
	score: [10, 3]
} as const satisfies Episode
