import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Joan Bakewell',
			wiki: 'https://en.wikipedia.org/wiki/Joan_Bakewell',
			gender: 'female'
		},
		{
			name: 'Jason Manford',
			wiki: 'https://en.wikipedia.org/wiki/Jason_Manford',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Warwick Davis',
			wiki: 'https://en.wikipedia.org/wiki/Warwick_Davis',
			gender: 'male'
		},
		{
			name: 'Paul Hollywood',
			wiki: 'https://en.wikipedia.org/wiki/Paul_Hollywood',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'When I got my first car, a friend and I would pretend to be cops; park up, eat burgers, and tail cars we\'d picked out of the traffic.',
		guessingTeam: 'David Mitchell',
		person: 'Warwick Davis',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jason Manford': 'truth',
			'Joan Bakewell': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I was gutted when I first saw Rob Brydon\'s small-man-in-a-box routine, as for years I\'d been entertaining my pals with my own man-trapped-in-my-mouth.',
		guessingTeam: 'Lee Mack',
		person: 'Jason Manford',
		personGuesses: {
			'Lee Mack': 'truth',
			'Paul Hollywood': 'lie',
			'Warwick Davis': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Neil',
		connections: {
			'Lee Mack': 'To prove his manhood, he destroyed his womble in front of Neil.',
			'Paul Hollywood': 'Looks after Neil\'s parrot when Neil\'s on holiday and walks the parrot.',
			'Warwick Davis': 'Paid by Neil to propose to Neil\'s girlfriend while dressed as an Ewok.'
		},
		personGuess: {
			'David Mitchell': 'Warwick Davis',
			'Jason Manford': 'Warwick Davis',
			'Joan Bakewell': 'Warwick Davis'
		},
		teamGuess: 'Warwick Davis',
		truth: 'Lee Mack'
	},
	{
		type: 'quick_fire',
		statement: 'For the last 30 years my breakfast regime has never altered. I have one bowl of porridge, one large banana, and half a pint of lager.',
		guessingTeam: 'Lee Mack',
		person: 'Joan Bakewell',
		personGuesses: {
			'Lee Mack': 'lie',
			'Paul Hollywood': 'lie',
			'Warwick Davis': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I can smell if there\'s a dead fly in the room.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jason Manford': 'lie',
			'Joan Bakewell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 7,
	episode: 3,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: 'Warwick Davis'
} as const satisfies StandardEpisode<typeof cast>
