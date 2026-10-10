import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Duncan Bannatyne',
			wiki: 'https://en.wikipedia.org/wiki/Duncan_Bannatyne',
			gender: 'male'
		},
		{
			name: 'Frankie Boyle',
			wiki: 'https://en.wikipedia.org/wiki/Frankie_Boyle',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Natalie Cassidy',
			wiki: 'https://en.wikipedia.org/wiki/Natalie_Cassidy',
			gender: 'female'
		},
		{
			name: 'Dom Joly',
			wiki: 'https://en.wikipedia.org/wiki/Dom_Joly',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I was at school with Osama bin Laden.',
		guessingTeam: 'David Mitchell',
		person: 'Dom Joly',
		personGuesses: {
			'David Mitchell': 'lie',
			'Duncan Bannatyne': 'truth',
			'Frankie Boyle': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'When I ran my last public company, I banned all my staff from buying paper clips.',
		guessingTeam: 'Lee Mack',
		person: 'Duncan Bannatyne',
		personGuesses: {
			'Dom Joly': 'truth',
			'Lee Mack': 'truth',
			'Natalie Cassidy': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I have passed toilet roll under a cubical wall to Madonna.',
		guessingTeam: 'David Mitchell',
		person: 'Natalie Cassidy',
		personGuesses: {
			'David Mitchell': 'lie',
			'Duncan Bannatyne': 'lie',
			'Frankie Boyle': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		statement: 'Jeffrey Archer writes all of his stories with a felt-tip pen.',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Dom Joly': 'truth',
			'Lee Mack': 'truth',
			'Natalie Cassidy': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		statement: 'Jodie Marsh won nearly £6 on a Weakest Link quiz machine.',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'lie',
			'Duncan Bannatyne': 'truth',
			'Frankie Boyle': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Ina',
		connections: {
			'Dom Joly': 'His Greek aunt who was a Greek voiceover for Helen Mirren in her last four films that has been translated into Greek.',
			'Lee Mack': 'His local newsagent who sold him a scratch card that won him £2000.',
			'Natalie Cassidy': 'Worked on EastEnders for 21 years as an extra, running the lampshade store.'
		},
		personGuess: {
			'David Mitchell': 'Natalie Cassidy',
			'Duncan Bannatyne': 'Natalie Cassidy',
			'Frankie Boyle': 'Natalie Cassidy'
		},
		teamGuess: 'Natalie Cassidy',
		truth: 'Natalie Cassidy'
	},
	{
		type: 'telly_tales',
		statement: 'To avoid confusion on the set of Doctor Who when they\'re filming it, the medical doctor on set is called the magician.',
		guessingTeam: 'Lee Mack',
		statementOwner: 'Frankie Boyle',
		personGuesses: {
			'Dom Joly': 'lie',
			'Lee Mack': 'lie',
			'Natalie Cassidy': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I have been on a camping trip with Derren Brown.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Duncan Bannatyne': 'lie',
			'Frankie Boyle': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'Aged 5, I wrote to Play School to suggest how the BBC should resolve their union conflict.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Dom Joly': 'truth',
			'Lee Mack': 'truth',
			'Natalie Cassidy': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'For six months I worked as Trevor McDonald\'s driver.',
		guessingTeam: 'David Mitchell',
		person: 'Dom Joly',
		personGuesses: {
			'David Mitchell': 'lie',
			'Duncan Bannatyne': 'lie',
			'Frankie Boyle': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I am allergic to coins.',
		guessingTeam: 'Lee Mack',
		person: 'Frankie Boyle',
		personGuesses: {
			'Dom Joly': 'truth',
			'Lee Mack': 'lie',
			'Natalie Cassidy': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I fainted in the cinema during Kill Bill.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Dom Joly': 'lie',
			'Lee Mack': 'lie',
			'Natalie Cassidy': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 1,
	episode: 1,
	rounds: rounds,
	score: [11, 11],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
