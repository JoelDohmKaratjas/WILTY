import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Susan Calman',
			wiki: 'https://en.wikipedia.org/wiki/Susan_Calman',
			gender: 'female'
		},
		{
			name: 'Richard Osman',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Osman',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Carol Kirkwood',
			wiki: 'https://en.wikipedia.org/wiki/Carol_Kirkwood',
			gender: 'female'
		},
		{
			name: 'David O\'Doherty',
			wiki: 'https://en.wikipedia.org/wiki/David_O\'Doherty',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I have a 40% stake in a prize-winning racing pigeon.',
		guessingTeam: 'Lee Mack',
		person: 'Richard Osman',
		personGuesses: {
			'Carol Kirkwood': 'truth',
			'David O\'Doherty': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I was rumbled at a dinner party after serving up a shop-bought pie and pretending I\'d made it myself.',
		guessingTeam: 'David Mitchell',
		person: 'Carol Kirkwood',
		personGuesses: {
			'David Mitchell': 'truth',
			'Richard Osman': 'unknown',
			'Susan Calman': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'The day before I need to make a journey, I often make the journey, so when it comes to making the actual journey, I\'ll know what the journey involves.',
		guessingTeam: 'Lee Mack',
		person: 'Susan Calman',
		personGuesses: {
			'Carol Kirkwood': 'truth',
			'David O\'Doherty': 'lie',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Ian',
		connections: {
			'Carol Kirkwood': 'They hid a ram inside a classroom cupboard to scare a teacher.',
			'David O\'Doherty': 'Skydiver who got blown off-course and almost knocked David off his bike.',
			'Lee Mack': 'Supermarket delivery driver who accidentally trapped Lee in the back of his van.'
		},
		personGuesses: {
			'David Mitchell': 'David O\'Doherty',
			'Richard Osman': 'Carol Kirkwood',
			'Susan Calman': 'David O\'Doherty'
		},
		teamGuess: 'David O\'Doherty',
		truth: 'Carol Kirkwood'
	},
	{
		type: 'quick_fire',
		statement: 'I once sent out 30 professional photographs of myself to try and get an agent. I got just one reply, advising me to destroy all copies of the photograph.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Carol Kirkwood': 'truth',
			'David O\'Doherty': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'This is one of the pairs of leg-warmers for birds that I have made. I would have brought more, but birds are using them.',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'David O\'Doherty',
		personGuesses: {
			'David Mitchell': 'lie',
			'Richard Osman': 'unknown',
			'Susan Calman': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 7,
	episode: 5,
	rounds: rounds,
	score: [2, 4],
	liarOfTheWeek: 'David O\'Doherty'
} as const satisfies StandardEpisode<typeof cast>
