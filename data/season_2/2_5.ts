import { type Episode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Olivia Colman',
			wiki: 'https://en.wikipedia.org/wiki/Olivia_Colman'
		},
		{
			name: 'Peter Serafinowicz',
			wiki: 'https://en.wikipedia.org/wiki/Peter_Serafinowicz'
		}
	],
	lee: [
		{
			name: 'Hugh Dennis',
			wiki: 'https://en.wikipedia.org/wiki/Hugh_Dennis'
		},
		{
			name: 'Eamonn Holmes',
			wiki: 'https://en.wikipedia.org/wiki/Eamonn_Holmes'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Eamonn Holmes',
		personGuesses: {
			'David Mitchell': 'lie',
			'Olivia Colman': 'lie',
			'Peter Serafinowicz': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Peter Serafinowicz',
		personGuesses: {
			'Eamonn Holmes': 'truth',
			'Hugh Dennis': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Hugh Dennis',
		personGuesses: {
			'David Mitchell': 'truth',
			'Olivia Colman': 'truth',
			'Peter Serafinowicz': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'truth',
			'Olivia Colman': 'truth',
			'Peter Serafinowicz': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Mitchell': 'Hugh Dennis',
			'Olivia Colman': 'Eamonn Holmes',
			'Peter Serafinowicz': 'Hugh Dennis'
		},
		teamGuess: 'Hugh Dennis',
		truth: 'Eamonn Holmes'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Eamonn Holmes': 'truth',
			'Hugh Dennis': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Olivia Colman',
		personGuesses: {
			'Eamonn Holmes': 'truth',
			'Hugh Dennis': 'lie',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Hugh Dennis',
		personGuesses: {
			'David Mitchell': 'truth',
			'Olivia Colman': 'truth',
			'Peter Serafinowicz': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	cast: cast,
	season: 2,
	episode: 5,
	rounds: rounds,
	score: [6, 8]
} as const satisfies Episode
