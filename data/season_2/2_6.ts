import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Danny Baker',
			wiki: 'https://en.wikipedia.org/wiki/Danny_Baker'
		},
		{
			name: 'Anton Du Beke',
			wiki: 'https://en.wikipedia.org/wiki/Anton_Du_Beke'
		}
	],
	lee: [
		{
			name: 'Michael Buerk',
			wiki: 'https://en.wikipedia.org/wiki/Michael_Buerk'
		},
		{
			name: 'Russell Howard',
			wiki: 'https://en.wikipedia.org/wiki/Russell_Howard'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Anton Du Beke',
		personGuesses: {
			'Lee Mack': 'lie',
			'Michael Buerk': 'lie',
			'Russell Howard': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Russell Howard',
		personGuesses: {
			'Anton Du Beke': 'lie',
			'Danny Baker': 'lie',
			'David Mitchell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Michael Buerk',
		personGuesses: {
			'Anton Du Beke': 'lie',
			'Danny Baker': 'lie',
			'David Mitchell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'Anton Du Beke': 'truth',
			'Danny Baker': 'truth',
			'David Mitchell': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'Anton Du Beke': 'Lee Mack',
			'Danny Baker': 'Lee Mack',
			'David Mitchell': 'Lee Mack'
		},
		teamGuess: 'Lee Mack',
		truth: 'Michael Buerk'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Anton Du Beke': 'lie',
			'Danny Baker': 'lie',
			'David Mitchell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Michael Buerk',
		personGuesses: {
			'Anton Du Beke': 'truth',
			'Danny Baker': 'lie',
			'David Mitchell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Anton Du Beke',
		personGuesses: {
			'Lee Mack': 'truth',
			'Michael Buerk': 'truth',
			'Russell Howard': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Danny Baker',
		personGuesses: {
			'Lee Mack': 'truth',
			'Michael Buerk': 'lie',
			'Russell Howard': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 2,
	episode: 6,
	rounds: rounds,
	score: [6, 7],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
