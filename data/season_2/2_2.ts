import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Trisha Goddard',
			wiki: 'https://en.wikipedia.org/wiki/Trisha_Goddard',
			gender: 'female'
		},
		{
			name: 'Rich Hall',
			wiki: 'https://en.wikipedia.org/wiki/Rich_Hall',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Frankie Boyle',
			wiki: 'https://en.wikipedia.org/wiki/Frankie_Boyle',
			gender: 'male'
		},
		{
			name: 'Ben Shephard',
			wiki: 'https://en.wikipedia.org/wiki/Ben_Shephard',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Trisha Goddard',
		personGuesses: {
			'Ben Shephard': 'lie',
			'Frankie Boyle': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Ben Shephard',
		personGuesses: {
			'David Mitchell': 'lie',
			'Rich Hall': 'lie',
			'Trisha Goddard': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Frankie Boyle',
		personGuesses: {
			'David Mitchell': 'truth',
			'Rich Hall': 'unknown',
			'Trisha Goddard': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Ben Shephard': 'truth', // "going for a lie but think it's true"?
			'Frankie Boyle': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'truth',
			'Rich Hall': 'truth',
			'Trisha Goddard': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: {
			'Ben Shephard': 'David Mitchell',
			'Frankie Boyle': 'Rich Hall',
			'Lee Mack': 'Trisha Goddard'
		},
		teamGuess: 'Trisha Goddard',
		truth: 'Trisha Goddard'
	},
	{
		type: 'quick_fire',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Ben Shephard': 'truth',
			'Frankie Boyle': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Frankie Boyle',
		personGuesses: {
			'David Mitchell': 'lie',
			'Rich Hall': 'unknown',
			'Trisha Goddard': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Rich Hall': 'lie',
			'Trisha Goddard': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 2,
	episode: 2,
	rounds: rounds,
	score: [7, 5],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
