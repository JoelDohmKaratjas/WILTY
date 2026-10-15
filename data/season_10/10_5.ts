import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Josh Widdicombe',
			wiki: 'https://en.wikipedia.org/wiki/Josh_Widdicombe',
			gender: 'male'
		},
		{
			name: 'Prof. Kate Williams',
			wiki: 'https://en.wikipedia.org/wiki/Kate_Williams_(historian)',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Kevin Bishop',
			wiki: 'https://en.wikipedia.org/wiki/Kevin_Bishop',
			gender: 'male'
		},
		{
			name: 'Brian Blessed',
			wiki: 'https://en.wikipedia.org/wiki/Brian_Blessed',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'To keep fit every morning, I do just one press-up, one sit-up, and one star jump.',
		guessingTeam: 'Lee Mack',
		person: 'Josh Widdicombe',
		personGuesses: {
			'Brian Blessed': 'truth',
			'Kevin Bishop': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'While searching for a mythical beast in the jungle, my boat was skippered by an orangutan.',
		guessingTeam: 'David Mitchell',
		person: 'Brian Blessed',
		personGuesses: {
			'David Mitchell': 'truth',
			'Josh Widdicombe': 'lie', // maybe changed to truth?
			'Prof. Kate Williams': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once found my postman\'s finger.',
		guessingTeam: 'David Mitchell',
		person: 'Kevin Bishop',
		personGuesses: {
			'David Mitchell': 'lie',
			'Josh Widdicombe': 'lie',
			'Prof. Kate Williams': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Jenna, Thomas, and Joana',
		connections: {
			'David Mitchell': 'I nudged them into a canal when I lost control of my Boris bike.',
			'Josh Widdicombe': 'Together we made up my entire school year.',
			'Prof. Kate Williams': 'They let me sleep in their tent in Glastonbury when I couldn\'t find mine.'
		},
		personGuess: {
			'Brian Blessed': 'Josh Widdicombe',
			'Kevin Bishop': 'Josh Widdicombe',
			'Lee Mack': 'Josh Widdicombe'
		},
		teamGuess: 'Josh Widdicombe',
		truth: 'Josh Widdicombe'
	},
	{
		type: 'quick_fire',
		statement: 'Because it irritates me so much, I am always correcting people when they wrongly call fog, mist and mist, fog.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Josh Widdicombe': 'unknown',
			'Prof. Kate Williams': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 10,
	episode: 5,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
