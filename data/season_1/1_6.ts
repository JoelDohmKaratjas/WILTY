import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Harry Enfield',
			wiki: 'https://en.wikipedia.org/wiki/Harry_Enfield',
			gender: 'male'
		},
		{
			name: 'Claudia Winkleman',
			wiki: 'https://en.wikipedia.org/wiki/Claudia_Winkleman',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Tara Palmer-Tomkinson',
			wiki: 'https://en.wikipedia.org/wiki/Tara_Palmer-Tomkinson',
			gender: 'female'
		},
		{
			name: 'Dave Spikey',
			wiki: 'https://en.wikipedia.org/wiki/Dave_Spikey',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Tara Palmer-Tomkinson',
		personGuesses: {
			'Claudia Winkleman': 'truth',
			'David Mitchell': 'lie',
			'Harry Enfield': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Harry Enfield',
		personGuesses: {
			'Dave Spikey': 'lie',
			'Lee Mack': 'lie',
			'Tara Palmer-Tomkinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_dual',
		personGuesses: {
			david: {
				'Claudia Winkleman': 'unknown',
				'David Mitchell': 'truth',
				'Harry Enfield': 'undecided'
			},
			lee: {
				'Dave Spikey': 'lie',
				'Lee Mack': 'truth',
				'Tara Palmer-Tomkinson': 'truth'
			}
		},
		teamGuess: {
			david: 'truth',
			lee: 'truth'
		},
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'Claudia Winkleman': 'Dave Spikey',
			'David Mitchell': 'Lee Mack',
			'Harry Enfield': 'unknown'
		},
		teamGuess: 'Lee Mack',
		truth: 'Lee Mack'
	},
	{
		type: 'telly_tales',
		guessingTeam: 'Lee Mack',
		statementOwner: 'Harry Enfield',
		personGuesses: {
			'Dave Spikey': 'unknown',
			'Lee Mack': 'truth',
			'Tara Palmer-Tomkinson': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Harry Enfield',
		personGuesses: {
			'Dave Spikey': 'lie',
			'Lee Mack': 'lie',
			'Tara Palmer-Tomkinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Dave Spikey',
		personGuesses: {
			'Claudia Winkleman': 'undecided', // originally said truth
			'David Mitchell': 'undecided',
			'Harry Enfield': 'lie' // originally said truth
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Claudia Winkleman',
		personGuesses: {
			'Dave Spikey': 'lie',
			'Lee Mack': 'lie',
			'Tara Palmer-Tomkinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 1,
	episode: 6,
	rounds: rounds,
	score: [9, 8],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
