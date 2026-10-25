import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Kelvin MacKenzie',
			wiki: 'https://en.wikipedia.org/wiki/Kelvin_MacKenzie',
			gender: 'male'
		},
		{
			name: 'Jack Whitehall',
			wiki: 'https://en.wikipedia.org/wiki/Jack_Whitehall',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Christine Bleakley',
			wiki: 'https://en.wikipedia.org/wiki/Christine_Lampard',
			gender: 'female'
		},
		{
			name: 'Frankie Boyle',
			wiki: 'https://en.wikipedia.org/wiki/Frankie_Boyle',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Anton du Beke and I danced our way out of a parking ticket.',
		guessingTeam: 'David Mitchell',
		person: 'Christine Bleakley',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jack Whitehall': 'truth',
			'Kelvin MacKenzie': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'Every Christmas, my dad makes the whole family stand up to watch the Queen\'s speech.',
		guessingTeam: 'Lee Mack',
		person: 'Jack Whitehall',
		personGuesses: {
			'Christine Bleakley': 'truth',
			'Frankie Boyle': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'When I was a child, I was scared that my entire life was a book, being read by a bear, and one day the bear would close the book, and my life would end.',
		guessingTeam: 'David Mitchell',
		person: 'Frankie Boyle',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jack Whitehall': 'truth',
			'Kelvin MacKenzie': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		statement: 'Mick Jagger has been asked by a company if they can sell his ashes in collectable egg timers when he dies.',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jack Whitehall': 'truth',
			'Kelvin MacKenzie': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Terry',
		connections: {
			'David Mitchell': 'This is Terry and he\'s the policeman who was called out when I was caught trying to break into the window of my own flat.',
			'Jack Whitehall': 'This is Terry \'The Mean Machine\' Frazier and he is teaching me to wrestle.',
			'Kelvin MacKenzie': 'This is Terry and he built the nuclear bunker in my garden.'
		},
		personGuesses: {
			'Christine Bleakley': 'Kelvin MacKenzie',
			'Frankie Boyle': 'Kelvin MacKenzie',
			'Lee Mack': 'Jack Whitehall'
		},
		teamGuess: 'Kelvin MacKenzie',
		truth: 'Jack Whitehall'
	},
	{
		type: 'quick_fire',
		statement: 'If you give me any date before the year 2000 I can instantly tell you what day of the week it was.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jack Whitehall': 'unknown',
			'Kelvin MacKenzie': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'A Coronation Street star once made me remove all the red M&Ms from a bowl for him.',
		guessingTeam: 'David Mitchell',
		person: 'Christine Bleakley',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jack Whitehall': 'lie',
			'Kelvin MacKenzie': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 3,
	episode: 5,
	rounds: rounds,
	score: [5, 5],
	liarOfTheWeek: 'Kelvin MacKenzie'
} as const satisfies StandardEpisode<typeof cast>
