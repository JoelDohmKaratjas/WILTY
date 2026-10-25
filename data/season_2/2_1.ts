import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Rob Brydon',
			wiki: 'https://en.wikipedia.org/wiki/Rob_Brydon',
			gender: 'male'
		},
		{
			name: 'Krishnan Guru-Murthy',
			wiki: 'https://en.wikipedia.org/wiki/Krishnan_Guru-Murthy',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Gabby Logan',
			wiki: 'https://en.wikipedia.org/wiki/Gabby_Logan',
			gender: 'female'
		},
		{
			name: 'Robert Webb',
			wiki: 'https://en.wikipedia.org/wiki/Robert_Webb',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I have stolen sweets from Madonna\'s dressing room.',
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
		statement: 'I once simultaneously worked as both the DJ and the newsreader on local radio using a different accent for each job.',
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
		statement: 'My nickname at school was Mr. Custard.',
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
		statement: 'José Mourinho is about to release his own range of air fresheners.',
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
		statement: 'Ann Widdecombe relaxes by listening to an LP of lion and tiger noises from the jungle.',
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
		guest: 'Viva',
		connections: {
			'Gabby Logan': 'Her archrival in rhythmic gymnastics.',
			'Lee Mack': 'His swimming teacher who taught him when he was 30 but it didn\'t work.',
			'Robert Webb': 'His ex-girlfriend who dumped him when he brought her a torch for Christmas.'
		},
		personGuesses: {
			'David Mitchell': 'Robert Webb',
			'Krishnan Guru-Murthy': 'Robert Webb',
			'Rob Brydon': 'Robert Webb'
		},
		teamGuess: 'Robert Webb',
		truth: 'Gabby Logan'
	},
	{
		type: 'quick_fire',
		statement: 'I believe disaster will occur if I don\'t adhere to my special alarm clock system.',
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
		statement: 'I check for monsters before I go to bed because I\'m afraid of the dark.',
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
		statement: 'I was voted the 47th sexiest man in Wales.',
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
		statement: 'I was voted the 88th sexiest man in the world.',
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
	score: [7, 6],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
