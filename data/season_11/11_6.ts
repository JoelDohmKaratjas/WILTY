import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Craig Parkinson',
			wiki: 'https://en.wikipedia.org/wiki/Craig_Parkinson',
			gender: 'male'
		},
		{
			name: 'Claudia Winkleman',
			wiki: 'https://en.wikipedia.org/wiki/Claudia_Winkleman',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Steve Davis',
			wiki: 'https://en.wikipedia.org/wiki/Steve_Davis',
			gender: 'male'
		},
		{
			name: 'Sara Pascoe',
			wiki: 'https://en.wikipedia.org/wiki/Sara_Pascoe',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once booked a holiday to Costa Rica because I thought it was in Spain. I only realised my mistake when I sat down on the plane.',
		guessingTeam: 'David Mitchell',
		person: 'Sara Pascoe',
		personGuesses: {
			'Claudia Winkleman': 'lie',
			'Craig Parkinson': 'lie',
			'David Mitchell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'When I was eight, for about a year I insisted my parents set an extra place at the dinner table for Steve Davis.',
		guessingTeam: 'Lee Mack',
		person: 'Craig Parkinson',
		personGuesses: {
			'Lee Mack': 'truth',
			'Sara Pascoe': 'truth',
			'Steve Davis': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Aubrey',
		connections: {
			'Lee Mack': 'We were once threatened with eviction after we stole and fried our housemate\'s socks.',
			'Sara Pascoe': 'He once followed me home for ten miles just to return my jar of mango chutney.',
			'Steve Davis': 'When he goes on holiday, I look after his pet snail.'
		},
		personGuesses: {
			'Claudia Winkleman': 'unknown',
			'Craig Parkinson': 'unknown',
			'David Mitchell': 'Lee Mack'
		},
		teamGuess: 'Lee Mack',
		truth: 'Lee Mack'
	},
	{
		type: 'quick_fire',
		statement: 'Whist trying to take a picture on a ramble, a big horse bent my selfie stick.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Lee Mack': 'lie',
			'Sara Pascoe': 'lie',
			'Steve Davis': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I once returned a t-shirt to a shop furious that it had shrunk in the wash only to discover mid-complaint that it was in fact my seven-year-old son\'s.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Claudia Winkleman': 'unknown',
			'Craig Parkinson': 'unknown',
			'David Mitchell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 11,
	episode: 6,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
