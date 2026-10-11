import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Adrian Chiles',
			wiki: 'https://en.wikipedia.org/wiki/Adrian_Chiles',
			gender: 'male'
		},
		{
			name: 'Seann Walsh',
			wiki: 'https://en.wikipedia.org/wiki/Seann_Walsh',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Aisling Bea',
			wiki: 'https://en.wikipedia.org/wiki/Aisling_Bea',
			gender: 'female'
		},
		{
			name: 'June Brown',
			wiki: 'https://en.wikipedia.org/wiki/June_Brown',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I find nothing more relaxing than making scented candles.',
		guessingTeam: 'Lee Mack',
		person: 'Adrian Chiles',
		personGuesses: {
			'Aisling Bea': 'truth',
			'June Brown': 'lie',
			'Lee Mack': 'undecided'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once went skinny dipping with Sharon from EastEnders.',
		guessingTeam: 'David Mitchell',
		person: 'June Brown',
		personGuesses: {
			'Adrian Chiles': 'lie',
			'David Mitchell': 'lie',
			'Seann Walsh': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Marie',
		connections: {
			'Aisling Bea': 'She once booked me a stripper and it went so badly that I spend the rest of the night trying to cheer him up.',
			'June Brown': 'She is going to play the young Dot in a spinoff of EastEnders called "Dot Cotton: The Motorbike Years".',
			'Lee Mack': 'She once asked me to pop into her house to get rid of a spider. Ten minutes later, she asked me to leave because I was making matters worse.'
		},
		personGuess: {
			'Adrian Chiles': 'Aisling Bea',
			'David Mitchell': 'Aisling Bea',
			'Seann Walsh': 'Aisling Bea'
		},
		teamGuess: 'Aisling Bea',
		truth: 'Aisling Bea'
	},
	{
		type: 'quick_fire',
		statement: 'I once accidentally left a goldfish on top of a petrol pump.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Aisling Bea': 'lie',
			'June Brown': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I found out my girlfriend was cheating on me while I was bouncing on a trampoline and spotted her over the fence with another man.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Adrian Chiles': 'unknown',
			'David Mitchell': 'lie',
			'Seann Walsh': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 8,
	episode: 9,
	rounds: rounds,
	score: [4, 1],
	liarOfTheWeek: 'June Brown'
} as const satisfies StandardEpisode<typeof cast>
