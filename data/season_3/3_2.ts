import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Fern Britton',
			wiki: 'https://en.wikipedia.org/wiki/Fern_Britton',
			gender: 'female'
		},
		{
			name: 'Stephen Mangan',
			wiki: 'https://en.wikipedia.org/wiki/Stephen_Mangan',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Reginald D. Hunter',
			wiki: 'https://en.wikipedia.org/wiki/Reginald_D._Hunter',
			gender: 'male'
		},
		{
			name: 'Ken Livingstone',
			wiki: 'https://en.wikipedia.org/wiki/Ken_Livingstone',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Reginald D. Hunter',
		personGuesses: {
			'David Mitchell': 'lie',
			'Fern Britton': 'lie',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'Stephen Mangan',
		personGuesses: {
			'Ken Livingstone': 'lie',
			'Lee Mack': 'lie',
			'Reginald D. Hunter': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Ken Livingstone',
		personGuesses: {
			'David Mitchell': 'truth',
			'Fern Britton': 'truth', // originally lie but asked the audience
			'Stephen Mangan': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		statement: '',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'lie',
			'Fern Britton': 'lie',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: '',
		connections: {
			'Fern Britton': '',
			'Stephen Mangan': '',
			'David Mitchell': ''
		},
		personGuess: {
			'Ken Livingstone': 'Stephen Mangan',
			'Lee Mack': 'Stephen Mangan',
			'Reginald D. Hunter': 'Stephen Mangan'
		},
		teamGuess: 'Stephen Mangan',
		truth: 'Stephen Mangan'
	},
	{
		type: 'quick_fire',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Fern Britton': 'lie',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Ken Livingstone': 'truth',
			'Lee Mack': 'truth',
			'Reginald D. Hunter': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: '',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'Fern Britton',
		personGuesses: {
			'Ken Livingstone': 'lie',
			'Lee Mack': 'lie',
			'Reginald D. Hunter': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 3,
	episode: 2,
	rounds: rounds,
	score: [5, 5],
	liarOfTheWeek: 'Fern Britton'
} as const satisfies StandardEpisode<typeof cast>
