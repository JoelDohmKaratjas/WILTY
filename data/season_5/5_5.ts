import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Greg Davies',
			wiki: 'https://en.wikipedia.org/wiki/Greg_Davies',
			gender: 'male'
		},
		{
			name: 'Konnie Huq',
			wiki: 'https://en.wikipedia.org/wiki/Konnie_Huq',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Marcus Brigstocke',
			wiki: 'https://en.wikipedia.org/wiki/Marcus_Brigstocke',
			gender: 'male'
		},
		{
			name: 'Phil Tufnell',
			wiki: 'https://en.wikipedia.org/wiki/Phil_Tufnell',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'For my first term at university, I rented a bathroom in a student house and slept in the bathtub every night.',
		guessingTeam: 'Lee Mack',
		person: 'Greg Davies',
		personGuesses: { // Greg said "this is true" which made them agree with Lee but i'm not sure it counts
			'Lee Mack': 'truth',
			'Marcus Brigstocke': 'lie',
			'Phil Tufnell': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I am haunted by a recurring dream in which I\'m a potato.',
		guessingTeam: 'David Mitchell',
		person: 'Phil Tufnell',
		personGuesses: {
			'David Mitchell': 'undecided',
			'Greg Davies': 'lie',
			'Konnie Huq': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Ian',
		connections: {
			'David Mitchell': 'Had to hold Ian\'s hand on a plane throughout takeoff and landing because Ian was very scared of flying.',
			'Greg Davies': 'After a drunken night he woke up to Ian telling him he had been wrongly arrested on suspicion of murder.',
			'Konnie Huq': 'He brought lizards to Blue Peter and lost one which she later found in her handbag.'
		},
		personGuess: {
			'Lee Mack': 'Greg Davies',
			'Marcus Brigstocke': 'Konnie Huq',
			'Phil Tufnell': 'Konnie Huq'
		},
		teamGuess: 'Konnie Huq',
		truth: 'Greg Davies'
	},
	{
		type: 'quick_fire',
		statement: 'I once had to show my boss an intimate area of my body to prove why I was late for work.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'truth',
			'Greg Davies': 'truth',
			'Konnie Huq': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I recently bought a cat, but took it back a day later because our personalities clashed.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Lee Mack': 'lie',
			'Marcus Brigstocke': 'lie',
			'Phil Tufnell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I used to try and scare school friends by planting a particular drawing in their pocket signifying death.',
		guessingTeam: 'Lee Mack',
		person: 'Greg Davies',
		personGuesses: {
			'Lee Mack': 'lie',
			'Marcus Brigstocke': 'lie',
			'Phil Tufnell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 5,
	episode: 5,
	rounds: rounds,
	score: [7, 3],
	liarOfTheWeek: 'Greg Davies'
} as const satisfies StandardEpisode<typeof cast>
