import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Gabby Logan',
			wiki: 'https://en.wikipedia.org/wiki/Gabby_Logan',
			gender: 'female'
		},
		{
			name: 'John Simm',
			wiki: 'https://en.wikipedia.org/wiki/John_Simm',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Chris McCausland',
			wiki: 'https://en.wikipedia.org/wiki/Chris_McCausland',
			gender: 'male'
		},
		{
			name: 'Angela Scanlon',
			wiki: 'https://en.wikipedia.org/wiki/Angela_Scanlon',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'For a whole month, I thought my neighbour was ignoring me and he thought I was ignoring him until he found out I was blind and I found out he was deaf.',
		guessingTeam: 'David Mitchell',
		person: 'Chris McCausland',
		personGuesses: {
			'David Mitchell': 'truth',
			'Gabby Logan': 'lie',
			'John Simm': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once stripped naked then accidentally climbed into bed with my father-in-law.',
		guessingTeam: 'Lee Mack',
		person: 'John Simm',
		personGuesses: {
			'Angela Scanlon': 'truth',
			'Chris McCausland': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Richard',
		connections: {
			'David Mitchell': 'He came to my aid at the local tip when I lost my specs in his great big skip.',
			'Gabby Logan': 'He is the flight attendant who convinced me I wasn\'t dying when I had trapped wind.',
			'John Simm': 'He is the stunt horse rider who galloped me through a moonlit forest so I wouldn\'t miss a Man United-Bolton game.'
		},
		personGuesses: {
			'Angela Scanlon': 'unknown',
			'Chris McCausland': 'unknown',
			'Lee Mack': 'John Simm'
		},
		teamGuess: 'John Simm',
		truth: 'Gabby Logan'
	},
	{
		type: 'quick_fire',
		statement: 'I once chatted to an old man because I felt sorry for him only to find out later he was a global megastar.',
		guessingTeam: 'David Mitchell',
		person: 'Angela Scanlon',
		personGuesses: {
			'David Mitchell': 'lie',
			'Gabby Logan': 'unknown',
			'John Simm': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 13,
	episode: 1,
	rounds: rounds,
	score: [2, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
