import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Steve Backshall',
			wiki: 'https://en.wikipedia.org/wiki/Steve_Backshall',
			gender: 'male'
		},
		{
			name: 'Gabby Logan',
			wiki: 'https://en.wikipedia.org/wiki/Gabby_Logan',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Bob Mortimer',
			wiki: 'https://en.wikipedia.org/wiki/Bob_Mortimer',
			gender: 'male'
		},
		{
			name: 'Katherine Parkinson',
			wiki: 'https://en.wikipedia.org/wiki/Katherine_Parkinson',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once had to give Alan Hansen a piggyback across a muddy carpark because he didn\'t want to ruin his new suede shoes.',
		guessingTeam: 'Lee Mack',
		person: 'Gabby Logan',
		personGuesses: {
			'Bob Mortimer': 'lie',
			'Katherine Parkinson': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'As a teenager, I used to terrorise my neighbourhood with a game I invented called \'Theft and Shrubbery\'.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'truth',
			'Gabby Logan': 'truth',
			'Steve Backshall': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Miller',
		connections: {
			'David Mitchell': 'I accidentally outbid him for a cuckoo clock when I sneezed at an auction.',
			'Gabby Logan': 'We often take one of my dogs flying.',
			'Steve Backshall': 'He presented me with a trophy after I rode two miles down a river in an inflatable rhino.'
		},
		personGuess: {
			'Bob Mortimer': 'Steve Backshall',
			'Katherine Parkinson': 'Gabby Logan',
			'Lee Mack': 'Gabby Logan'
		},
		teamGuess: 'Gabby Logan',
		truth: 'Steve Backshall'
	},
	{
		type: 'quick_fire',
		statement: 'Last month, I was honoured to be made captain of my netball team.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Gabby Logan': 'lie',
			'Steve Backshall': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'No matter how hard I try, I can never properly pronounce the name Mick Hucknall.',
		guessingTeam: 'David Mitchell',
		person: 'Katherine Parkinson',
		personGuesses: {
			'David Mitchell': 'lie',
			'Gabby Logan': 'lie',
			'Steve Backshall': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 9,
	episode: 2,
	rounds: rounds,
	score: [4, 1],
	liarOfTheWeek: 'Gabby Logan'
} as const satisfies StandardEpisode<typeof cast>
