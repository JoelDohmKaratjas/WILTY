import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Miles Jupp',
			wiki: 'https://en.wikipedia.org/wiki/Miles_Jupp',
			gender: 'male'
		},
		{
			name: 'Samantha Morton',
			wiki: 'https://en.wikipedia.org/wiki/Samantha_Morton',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Sarah Hadland',
			wiki: 'https://en.wikipedia.org/wiki/Sarah_Hadland',
			gender: 'female'
		},
		{
			name: 'Bob Mortimer',
			wiki: 'https://en.wikipedia.org/wiki/Bob_Mortimer',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'As a child, my mum got so fed up with me wandering off, she made me wear a bell around my neck whenever we went shopping.',
		guessingTeam: 'Lee Mack',
		person: 'Miles Jupp',
		personGuesses: {
			'Bob Mortimer': 'lie',
			'Lee Mack': 'lie',
			'Sarah Hadland': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'When Tom Cruise came to England, I took him to Argos because he wanted to buy an extension lead.',
		guessingTeam: 'Lee Mack',
		person: 'Samantha Morton',
		personGuesses: {
			'Bob Mortimer': 'truth',
			'Lee Mack': 'truth',
			'Sarah Hadland': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once spent over an hour trapped in a bin.',
		guessingTeam: 'David Mitchell',
		person: 'Sarah Hadland',
		personGuesses: {
			'David Mitchell': 'lie',
			'Miles Jupp': 'lie',
			'Samantha Morton': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once helped Damon Hill to Grand Prix success by presenting him with a pre-race snack.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'lie',
			'Miles Jupp': 'lie',
			'Samantha Morton': 'undecided'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Lucy',
		connections: {
			'David Mitchell': 'They discovered I had the hearing of a rat.',
			'Miles Jupp': 'When I had to have an intimate medical examination, I inadvertently brought her with me.',
			'Samantha Morton': 'Lucy\'s pig delivered my Christmas card.'
		},
		personGuesses: {
			'Bob Mortimer': 'Miles Jupp',
			'Lee Mack': 'Miles Jupp',
			'Sarah Hadland': 'Samantha Morton'
		},
		teamGuess: 'Miles Jupp',
		truth: 'Miles Jupp'
	},
	{
		type: 'quick_fire',
		statement: 'Because I kept losing my bin shoes, I\'ve now tied them to my hall radiator with a length of elastic. They comfortably stretch to the end of the drive before the tension beckons me back.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Miles Jupp': 'lie',
			'Samantha Morton': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 14,
	episode: 5,
	rounds: rounds,
	score: [2, 4],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
