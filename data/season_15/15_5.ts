import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Gyles Brandreth',
			wiki: 'https://en.wikipedia.org/wiki/Gyles_Brandreth',
			gender: 'male'
		},
		{
			name: 'Lou Sanders',
			wiki: 'https://en.wikipedia.org/wiki/Lou_Sanders',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Yung Filly',
			wiki: 'https://en.wikipedia.org/wiki/Yung_Filly',
			gender: 'male'
		},
		{
			name: 'Sarah Millican',
			wiki: 'https://en.wikipedia.org/wiki/Sarah_Millican',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once did something truly dreadful in Canterbury Cathedral.',
		guessingTeam: 'Lee Mack',
		person: 'Gyles Brandreth',
		personGuesses: {
			'Lee Mack': 'lie',
			'Sarah Millican': 'lie',
			'Yung Filly': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I recently went to extreme lengths to deliver a sample to the vet\'s.',
		guessingTeam: 'David Mitchell',
		person: 'Sarah Millican',
		personGuesses: {
			'David Mitchell': 'lie',
			'Gyles Brandreth': 'lie',
			'Lou Sanders': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I failed my first driving test when I took a phone call during the three-point turn.',
		guessingTeam: 'Lee Mack',
		person: 'Lou Sanders',
		personGuesses: {
			'Lee Mack': 'lie',
			'Sarah Millican': 'truth',
			'Yung Filly': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I was once substituted midway through a school football match because I\'d fallen asleep in goal.',
		guessingTeam: 'David Mitchell',
		person: 'Yung Filly',
		personGuesses: {
			'David Mitchell': 'truth',
			'Gyles Brandreth': 'truth',
			'Lou Sanders': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Cheryl Baker',
		connections: {
			'David Mitchell': 'Cheryl brought him a bucket when he felt sick on the TV programme Saturday Superstore.',
			'Gyles Brandreth': 'They broke the world record for the longest ever on-screen kiss.',
			'Lou Sanders': 'Lou had to rip Cheryl\'s skirt off after her zip got stuck.'
		},
		personGuesses: { // Lee narrowed down to three, Filly down to two then Sarah picked one
			'Lee Mack': 'unknown',
			'Sarah Millican': 'David Mitchell',
			'Yung Filly': 'undecided' // David or Gyles
		},
		teamGuess: 'David Mitchell',
		truth: 'Gyles Brandreth'
	},
	{
		type: 'quick_fire',
		statement: 'Every morning, to aid my diction, I stand in front of the bathroom mirror and say my special phrase.',
		guessingTeam: 'Lee Mack',
		person: 'Gyles Brandreth',
		personGuesses: {
			'Lee Mack': 'truth',
			'Sarah Millican': 'truth',
			'Yung Filly': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 15,
	episode: 5,
	rounds: rounds,
	score: [3, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
