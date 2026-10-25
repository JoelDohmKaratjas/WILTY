import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Lily Allen',
			wiki: 'https://en.wikipedia.org/wiki/Lily_Allen',
			gender: 'female'
		},
		{
			name: 'Noddy Holder',
			wiki: 'https://en.wikipedia.org/wiki/Noddy_Holder',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'James Acaster',
			wiki: 'https://en.wikipedia.org/wiki/James_Acaster',
			gender: 'male'
		},
		{
			name: 'Sian Gibson',
			wiki: 'https://en.wikipedia.org/wiki/Sian_Gibson',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'One December night while dressed as Joseph, I had to shove a donkey off a country lane.',
		guessingTeam: 'Lee Mack',
		person: 'Noddy Holder',
		personGuesses: {
			'James Acaster': 'truth',
			'Lee Mack': 'truth',
			'Sian Gibson': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'One Christmas, on hearing I wasn\'t going to get the present I wanted, I tried to drown myself in protest.',
		guessingTeam: 'David Mitchell',
		person: 'James Acaster',
		personGuesses: {
			'David Mitchell': 'lie',
			'Lily Allen': 'lie',
			'Noddy Holder': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Jerry',
		connections: {
			'James Acaster': 'He is the fireman soaks me with water during a festive game of squirt.',
			'Lee Mack': 'He is the paramedic who ticked me off last Christmas after I landed my drone in his ambulance.',
			'Sian Gibson': 'He is the policeman who came round to investigate when I was heard screaming during a Christmas game of Twister.'
		},
		personGuesses: {
			'David Mitchell': 'James Acaster',
			'Lily Allen': 'James Acaster',
			'Noddy Holder': 'Sian Gibson'
		},
		teamGuess: 'James Acaster',
		truth: 'James Acaster'
	},
	{
		type: 'quick_fire',
		statement: 'Until last year, I believed that reindeer were fictional creatures like unicorns until my six year-old daughter told the truth.',
		guessingTeam: 'Lee Mack',
		person: 'Lily Allen',
		personGuesses: {
			'James Acaster': 'lie',
			'Lee Mack': 'lie',
			'Sian Gibson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'Last Christmas, my brother bought me this iPad. I have never turned it on, but I have used it to kill a wasp and carry three mugs of hot chocolate.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'James Acaster': 'lie',
			'Lee Mack': 'lie',
			'Sian Gibson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'special',
	cast: cast,
	season: 12,
	episode: 7,
	rounds: rounds,
	score: [1, 4],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
