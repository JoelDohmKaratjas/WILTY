import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Michael Aspel',
			wiki: 'https://en.wikipedia.org/wiki/Michael_Aspel',
			gender: 'male'
		},
		{
			name: 'Dara Ó Briain',
			wiki: 'https://en.wikipedia.org/wiki/Dara_%C3%93_Briain',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Jason Manford',
			wiki: 'https://en.wikipedia.org/wiki/Jason_Manford',
			gender: 'male'
		},
		{
			name: 'Davina McCall',
			wiki: 'https://en.wikipedia.org/wiki/Davina_McCall',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Michael Aspel',
		personGuesses: {
			'Davina McCall': 'lie',
			'Jason Manford': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Davina McCall',
		personGuesses: {
			'Dara Ó Briain': 'lie',
			'David Mitchell': 'lie',
			'Michael Aspel': 'lie' // changed his mind after Dara
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Dara Ó Briain',
		personGuesses: {
			'Davina McCall': 'truth',
			'Jason Manford': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'Dara Ó Briain': 'lie',
			'David Mitchell': 'lie',
			'Michael Aspel': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: {
			'Davina McCall': 'Michael Aspel',
			'Jason Manford': 'Michael Aspel',
			'Lee Mack': 'Michael Aspel'
		},
		teamGuess: 'Michael Aspel',
		truth: 'Michael Aspel'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Davina McCall': 'truth',
			'Jason Manford': 'undecided',
			'Lee Mack': 'undecided'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Davina McCall',
		personGuesses: {
			'Dara Ó Briain': 'lie', // originally truth
			'David Mitchell': 'lie', // originally truth
			'Michael Aspel': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Jason Manford',
		personGuesses: {
			'Dara Ó Briain': 'unknown',
			'David Mitchell': 'lie',
			'Michael Aspel': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 2,
	episode: 4,
	rounds: rounds,
	score: [7, 5],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
