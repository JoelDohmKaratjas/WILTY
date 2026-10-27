import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Lucy Martin',
			wiki: 'https://en.wikipedia.org/wiki/Lucy_Martin',
			gender: 'female'
		},
		{
			name: 'Joe Wilkinson',
			wiki: 'https://en.wikipedia.org/wiki/Joe_Wilkinson',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Jo Brand',
			wiki: 'https://en.wikipedia.org/wiki/Jo_Brand',
			gender: 'female'
		},
		{
			name: 'Amol Rajan',
			wiki: 'https://en.wikipedia.org/wiki/Amol_Rajan',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'After a misunderstanding, I once became a chauffeur for one of The Jackson 5.',
		guessingTeam: 'David Mitchell',
		person: 'Jo Brand',
		personGuesses: {
			'David Mitchell': 'lie',
			'Joe Wilkinson': 'lie',
			'Lucy Martin': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once shared a tent in Kent with Susie Dent.',
		guessingTeam: 'Lee Mack',
		person: 'Joe Wilkinson',
		personGuesses: {
			'Amol Rajan': 'lie',
			'Jo Brand': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I used to star in an agony aunt\'s photo casebook, playing a series of inadequate men.',
		guessingTeam: 'David Mitchell',
		person: 'Amol Rajan',
		personGuesses: {
			'David Mitchell': 'truth',
			'Joe Wilkinson': 'truth',
			'Lucy Martin': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Lee',
		connections: {
			'David Mitchell': 'Lee is the hotel receptionist who confirmed David\'s suspicion that another guest had stolen his toast.',
			'Joe Wilkinson': 'They once managed to run themselves over.',
			'Lucy Martin': 'Lee walked behind Lucy during a live weather forecast and fell down a big hole.'
		},
		personGuesses: {
			'Amol Rajan': 'Lucy Martin',
			'Jo Brand': 'Lucy Martin',
			'Lee Mack': 'Joe Wilkinson'
		},
		teamGuess: 'Lucy Martin',
		truth: 'Joe Wilkinson'
	},
	{
		type: 'quick_fire',
		statement: 'I don\'t know why she does it, but every time Lee Mack appears on the telly, my cat hides under the sofa.',
		guessingTeam: 'Lee Mack',
		person: 'Lucy Martin',
		personGuesses: {
			'Amol Rajan': 'truth',
			'Jo Brand': 'lie',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 16,
	episode: 6,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
