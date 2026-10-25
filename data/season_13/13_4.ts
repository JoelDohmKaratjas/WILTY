import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Guz Khan',
			wiki: 'https://en.wikipedia.org/wiki/Guz_Khan',
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
			name: 'Greg Davies',
			wiki: 'https://en.wikipedia.org/wiki/Greg_Davies',
			gender: 'male'
		},
		{
			name: 'Lucy Worsley',
			wiki: 'https://en.wikipedia.org/wiki/Lucy_Worsley',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'While on a camping holiday in France, I invented a game my family and I couldn\'t stop playing. I called this game \'Milky Cow\'.',
		guessingTeam: 'David Mitchell',
		person: 'Greg Davies',
		personGuesses: {
			'Claudia Winkleman': 'lie',
			'David Mitchell': 'lie',
			'Guz Khan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'When I worked in a school, I locked another teacher in a cupboard to teach him a lesson.',
		guessingTeam: 'Lee Mack',
		person: 'Guz Khan',
		personGuesses: {
			'Greg Davies': 'truth',
			'Lee Mack': 'truth',
			'Lucy Worsley': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Lumboo',
		connections: {
			'Claudia Winkleman': 'Despite the car being the only one in an otherwise empty car park, I still managed to hit it.',
			'David Mitchell': 'Whilst strolling through Ancient Rome in his virtual reality headset, I tripped over a footstool and fell into a fireplace.',
			'Guz Khan': 'When I work away from home, he sleeps in the same room as me to protect me from ghosts.'
		},
		personGuess: {
			'Greg Davies': 'Claudia Winkleman',
			'Lee Mack': 'Claudia Winkleman',
			'Lucy Worsley': 'Claudia Winkleman'
		},
		teamGuess: 'Claudia Winkleman',
		truth: 'Guz Khan'
	},
	{
		type: 'quick_fire',
		statement: 'Ahead of a forthcoming beach holiday, I\'ve been practising my snorkeling in the bath. Last week, I managed to stay under for the entirety of The Archers.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Claudia Winkleman': 'lie',
			'David Mitchell': 'lie',
			'Guz Khan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'Once, while trying to bring history to life, I reduced a child to tears.',
		guessingTeam: 'David Mitchell',
		person: 'Lucy Worsley',
		personGuesses: {
			'Claudia Winkleman': 'truth',
			'David Mitchell': 'truth',
			'Guz Khan': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 13,
	episode: 4,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
