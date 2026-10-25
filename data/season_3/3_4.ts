import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Jason Manford',
			wiki: 'https://en.wikipedia.org/wiki/Jason_Manford',
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
			name: 'Clive Anderson',
			wiki: 'https://en.wikipedia.org/wiki/Clive_Anderson',
			gender: 'male'
		},
		{
			name: 'Miranda Hart',
			wiki: 'https://en.wikipedia.org/wiki/Miranda_Hart',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once put nail polish remover in my fishtank to give my goldfish more energy.',
		guessingTeam: 'Lee Mack',
		person: 'Claudia Winkleman',
		personGuesses: {
			'Clive Anderson': 'lie',
			'Lee Mack': 'lie',
			'Miranda Hart': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once had my wallet stolen by a walrus.',
		guessingTeam: 'David Mitchell',
		person: 'Clive Anderson',
		personGuesses: {
			'Claudia Winkleman': 'lie',
			'David Mitchell': 'lie',
			'Jason Manford': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'One of my best friends at school was a little man I\'d made from a slice of toast that I always kept in my bag.',
		guessingTeam: 'David Mitchell',
		person: 'Miranda Hart',
		personGuesses: {
			'Claudia Winkleman': 'truth',
			'David Mitchell': 'undecided',
			'Jason Manford': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		statement: 'David Beckham gave a copy of his own autobiography to Nelson Mandela as a Christmas present',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Clive Anderson': 'lie',
			'Lee Mack': 'truth',
			'Miranda Hart': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Owen',
		connections: {
			'Clive Anderson': 'He\'s my builder and once fell through my roof while I was watching television.',
			'Lee Mack': 'He\'s a professional juggler and is teaching me to juggle.',
			'Miranda Hart': 'He stopped me attending his yoga classes because I couldn\'t stop laughing.'
		},
		personGuesses: {
			'Claudia Winkleman': 'Clive Anderson',
			'David Mitchell': 'Clive Anderson',
			'Jason Manford': 'Clive Anderson'
		},
		teamGuess: 'Clive Anderson',
		truth: 'Lee Mack'
	},
	{
		type: 'quick_fire',
		statement: 'I was thrown out of a nightclub for refusing to stop dancing on a table.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Clive Anderson': 'lie',
			'Lee Mack': 'lie',
			'Miranda Hart': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I once put out a fire using my neighbour\'s milk.',
		guessingTeam: 'Lee Mack',
		person: 'Jason Manford',
		personGuesses: {
			'Clive Anderson': 'lie',
			'Lee Mack': 'truth',
			'Miranda Hart': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'In here is my pet cat from when I was little and my dad had her stuffed for me when she died.',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'Claudia Winkleman',
		personGuesses: {
			'Clive Anderson': 'truth',
			'Lee Mack': 'truth',
			'Miranda Hart': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 3,
	episode: 4,
	rounds: rounds,
	score: [3, 7],
	liarOfTheWeek: 'Claudia Winkleman'
} as const satisfies StandardEpisode<typeof cast>
