import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Jason Manford',
			wiki: 'https://en.wikipedia.org/wiki/Jason_Manford',
			gender: 'male'
		},
		{
			name: 'Nick Robinson',
			wiki: 'https://en.wikipedia.org/wiki/Nick_Robinson_(journalist)',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Sara Cox',
			wiki: 'https://en.wikipedia.org/wiki/Sara_Cox',
			gender: 'female'
		},
		{
			name: 'Harry Shearer',
			wiki: 'https://en.wikipedia.org/wiki/Harry_Shearer',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once wet myself while babysitting a toddler.',
		guessingTeam: 'Lee Mack',
		person: 'Jason Manford',
		personGuesses: {
			'Harry Shearer': 'lie',
			'Lee Mack': 'lie',
			'Sara Cox': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I know how to properly wash a cow.',
		guessingTeam: 'David Mitchell',
		person: 'Sara Cox',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jason Manford': 'lie',
			'Nick Robinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Claire',
		connections: {
			'David Mitchell': 'She is my dentist whose earring I swallowed mid-procedure.',
			'Jason Manford': 'I once called her to drive my car from the roof of a multi-storey carpark because I was too scared to.',
			'Nick Robinson': 'I was once so peckish that I broke into her cottage to steal a tube of Pringles.'
		},
		personGuess: {
			'Harry Shearer': 'Jason Manford',
			'Lee Mack': 'Jason Manford',
			'Sara Cox': 'Nick Robinson'
		},
		teamGuess: 'Jason Manford',
		truth: 'Nick Robinson'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'When I ran out of petrol with my kids in the car, the only way I could get to the nearest garage quickly was on this.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jason Manford': 'lie',
			'Nick Robinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'At a White House drinks reception, I was asked to judge who could do the best Mr. Burns impression out of Barack Obama, Bill Clinton, and Bono.',
		guessingTeam: 'David Mitchell',
		person: 'Harry Shearer',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jason Manford': 'truth',
			'Nick Robinson': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 10,
	episode: 3,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
