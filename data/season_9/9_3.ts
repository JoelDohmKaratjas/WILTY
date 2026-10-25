import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Greg Davies',
			wiki: 'https://en.wikipedia.org/wiki/Greg_Davies',
			gender: 'male'
		},
		{
			name: 'Rick Edwards',
			wiki: 'https://en.wikipedia.org/wiki/Rick_Edwards',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'John Cooper Clarke',
			wiki: 'https://en.wikipedia.org/wiki/John_Cooper_Clarke',
			gender: 'male'
		},
		{
			name: 'Alex Jones',
			wiki: 'https://en.wikipedia.org/wiki/Alex_Jones_(Welsh_presenter)',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'The first time I used eBay, I accidentally bought a canoe instead of a handbag.',
		guessingTeam: 'David Mitchell',
		person: 'Alex Jones',
		personGuesses: {
			'David Mitchell': 'lie',
			'Greg Davies': 'lie',
			'Rick Edwards': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once caused an injury to one man whilst getting a different man to say the word \'vegetables\'.',
		guessingTeam: 'Lee Mack',
		person: 'Greg Davies',
		personGuesses: {
			'Alex Jones': 'lie',
			'John Cooper Clarke': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Mary',
		connections: {
			'Alex Jones': 'I had to spend an entire episode of The One Show covering up the fact that she\'d been sick on me.',
			'John Cooper Clarke': 'I recited a poem at her wedding.',
			'Lee Mack': 'When she was pining for her owners, I sat up with her all night and tried to comfort her with a song.'
		},
		personGuesses: {
			'David Mitchell': 'John Cooper Clarke',
			'Greg Davies': 'John Cooper Clarke',
			'Rick Edwards': 'John Cooper Clarke'
		},
		teamGuess: 'John Cooper Clarke',
		truth: 'Alex Jones'
	},
	{
		type: 'quick_fire',
		statement: 'I once took my trunks off in the communal area of a ladies changing room after getting out of the pool and misreading the sign through my foggy goggles.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Greg Davies': 'lie',
			'Rick Edwards': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie' // faked truth
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 9,
	episode: 3,
	rounds: rounds,
	score: [2, 2],
	liarOfTheWeek: 'John Cooper Clarke'
} as const satisfies StandardEpisode<typeof cast>
