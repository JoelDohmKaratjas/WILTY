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
		statement: 'I have eaten a diamond.',
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
		statement: 'I can identify any breed of dog just by hearing it growl.',
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
		statement: 'Clouds were once removed from the sky so that Paul McCartney could perform "Good Day Sunshine" at a concert.',
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
		guest: 'Dave',
		connections: {
			'Tara Palmer-Tomkinson': 'Met him when she passed out at the top of Mont Blanc and he helped her down.',
			'Dave Spikey': 'A friend who makes approximately £40,000 a year on pub trivia machines.',
			'Lee Mack': 'His old boss who taught him how to call Bingo.'
		},
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
		statement: 'An episode of Tomorrow\'s World showcased a toaster connected to the internet that burnt a weather forecast into toast.',
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
		statement: 'I once pushed a man in a lake for following me shouting Only Me.',
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
		statement: 'I bunked off school to go to London with a boy called Dick Whittington.',
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
		statement: 'I wrote to Jim\'ll Fix It asking to meet ABBA, they wrote back offering the chance to see how the blue bits were made in cheese.',
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
