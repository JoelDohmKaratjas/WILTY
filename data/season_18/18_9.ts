import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Josh Jones',
			wiki: 'https://en.wikipedia.org/wiki/Josh_Jones_(comedian)',
			gender: 'male'
		},
		{
			name: 'Rosie Ramsey',
			wiki: 'https://en.wikipedia.org/wiki/Rosie_Ramsey',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Shazia Mirza',
			wiki: 'https://en.wikipedia.org/wiki/Shazia_Mirza',
			gender: 'female'
		},
		{
			name: 'Matt Morsia',
			wiki: 'https://en.wikipedia.org/wiki/Matt_Morsia',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once jumped in a canal because a goose honked at me.',
		guessingTeam: 'Lee Mack',
		person: 'Josh Jones',
		personGuesses: {
			'Lee Mack': 'lie',
			'Matt Morsia': 'truth',
			'Shazia Mirza': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Whenever I eat a banana, I eat everything. Including the skin.',
		guessingTeam: 'David Mitchell',
		person: 'Matt Morsia',
		personGuesses: {
			'David Mitchell': 'truth',
			'Josh Jones': 'truth',
			'Rosie Ramsey': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once got into big trouble at work after my boss saw what I was doing on CCTV.',
		guessingTeam: 'David Mitchell',
		person: 'Shazia Mirza',
		personGuesses: {
			'David Mitchell': 'truth',
			'Josh Jones': 'lie',
			'Rosie Ramsey': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Ryan',
		connections: {
			'David Mitchell': 'Ryan let me have a go at painting a parking space with his special contraption.',
			'Josh Jones': 'I was forced to take part in a hot dog eating contest with him.',
			'Rosie Ramsey': 'Ryan went viral after I secretly filmed him singing in the car.'
		},
		personGuesses: {
			'Lee Mack': 'Josh Jones',
			'Matt Morsia': 'Josh Jones',
			'Shazia Mirza': 'Josh Jones'
		},
		teamGuess: 'Josh Jones',
		truth: 'Josh Jones'
	},
	{
		type: 'quick_fire',
		statement: 'I briefly dated a girl from the circus after she flew too far out of a cannon and landed in my lap.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Josh Jones': 'lie',
			'Rosie Ramsey': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 18,
	episode: 9,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
