import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Mel Giedroyc',
			wiki: 'https://en.wikipedia.org/wiki/Mel_Giedroyc',
			gender: 'female'
		},
		{
			name: 'Dermot O\'Leary',
			wiki: 'https://en.wikipedia.org/wiki/Dermot_O\'Leary',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Matt Dawson',
			wiki: 'https://en.wikipedia.org/wiki/Matt_Dawson',
			gender: 'male'
		},
		{
			name: 'Josh Widdicombe',
			wiki: 'https://en.wikipedia.org/wiki/Josh_Widdicombe',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: '',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Josh Widdicombe',
		personGuesses: {
			'David Mitchell': 'lie',
			'Dermot O\'Leary': 'lie',
			'Mel Giedroyc': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'Mel Giedroyc',
		personGuesses: {
			'Josh Widdicombe': 'lie',
			'Lee Mack': 'truth',
			'Matt Dawson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: '',
		connections: {
			'Mel Giedroyc': '',
			'Dermot O\'Leary': '',
			'David Mitchell': ''
		},
		personGuess: {
			'Josh Widdicombe': 'Mel Giedroyc',
			'Lee Mack': 'Mel Giedroyc',
			'Matt Dawson': 'Mel Giedroyc'
		},
		teamGuess: 'Mel Giedroyc',
		truth: 'Dermot O\'Leary'
	},
	{
		type: 'quick_fire',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Dermot O\'Leary': 'lie',
			'Mel Giedroyc': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 7,
	episode: 4,
	rounds: rounds,
	score: [3, 1],
	liarOfTheWeek: 'Mel Giedroyc'
} as const satisfies StandardEpisode<typeof cast>
