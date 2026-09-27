import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Rob Brydon',
			wiki: 'https://en.wikipedia.org/wiki/Rob_Brydon'
		},
		{
			name: 'Krishnan Guru-Murthy',
			wiki: 'https://en.wikipedia.org/wiki/Krishnan_Guru-Murthy'
		}
	],
	lee: [
		{
			name: 'Gabby Logan',
			wiki: 'https://en.wikipedia.org/wiki/Gabby_Logan'
		},
		{
			name: 'Robert Webb',
			wiki: 'https://en.wikipedia.org/wiki/Robert_Webb'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Gabby Logan',
		personGuesses: {
			'David Mitchell': 'lie',
			'Krishnan Guru-Murthy': 'lie',
			'Rob Brydon': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Rob Brydon',
		personGuesses: {
			'Gabby Logan': 'lie',
			'Lee Mack': 'lie',
			'Robert Webb': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Robert Webb',
		personGuesses: {
			'David Mitchell': 'lie',
			'Krishnan Guru-Murthy': 'lie',
			'Rob Brydon': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Gabby Logan': 'truth',
			'Lee Mack': 'lie',
			'Robert Webb': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'truth',
			'Krishnan Guru-Murthy': 'lie',
			'Rob Brydon': 'lie' // originally true
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Mitchell': 'Robert Webb',
			'Krishnan Guru-Murthy': 'Robert Webb',
			'Rob Brydon': 'Robert Webb'
		},
		teamGuess: 'Robert Webb',
		truth: 'Gabby Logan'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Gabby Logan': 'truth',
			'Lee Mack': 'truth',
			'Robert Webb': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Krishnan Guru-Murthy',
		personGuesses: {
			'Gabby Logan': 'lie',
			'Lee Mack': 'lie',
			'Robert Webb': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Rob Brydon',
		personGuesses: {
			'Gabby Logan': 'lie',
			'Lee Mack': 'lie',
			'Robert Webb': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Robert Webb',
		personGuesses: {
			'David Mitchell': 'truth',
			'Krishnan Guru-Murthy': 'unknown',
			'Rob Brydon': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 2,
	episode: 1,
	rounds: rounds,
	score: [7, 6]
} as const satisfies StandardEpisode
