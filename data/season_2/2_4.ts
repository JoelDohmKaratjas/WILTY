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
		statement: 'Before any TV appearance I shadow box in my dressing room.',
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
		statement: 'At my wedding I walked down the aisle to the Big Brother theme tune.',
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
		statement: 'I co-own a racehorse with Sir Alex Ferguson.',
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
		statement: 'David Furnish has an \'Elton tracker\' sat nav so he can see exactly where Elton John is at any time.',
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
		guest: 'Lee',
		connections: {
			'Dara Ó Briain': 'Lee is his gardener who was introduced to him by Andrew Lloyd Webber.',
			'David Mitchell': 'Lee has been teaching him how to improve his memory for six months.',
			'Michael Aspel': 'Lee is his driver and has also appeared in Minder.'
		},
		personGuesses: {
			'Davina McCall': 'Michael Aspel',
			'Jason Manford': 'Michael Aspel',
			'Lee Mack': 'Michael Aspel'
		},
		teamGuess: 'Michael Aspel',
		truth: 'Michael Aspel'
	},
	{
		type: 'quick_fire',
		statement: 'My first word was hoover',
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
		statement: 'These [pictured right] are the wig and glasses I wear if I want to pop to the shops unnoticed',
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
		statement: 'I applied for Mastermind with the specialist subject Columbo',
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
