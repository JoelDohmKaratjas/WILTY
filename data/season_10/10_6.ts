import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Rhod Gilbert',
			wiki: 'https://en.wikipedia.org/wiki/Rhod_Gilbert',
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
			name: 'Jamie Laing',
			wiki: 'https://en.wikipedia.org/wiki/Jamie_Laing',
			gender: 'male'
		},
		{
			name: 'Tracy-Ann Oberman',
			wiki: 'https://en.wikipedia.org/wiki/Tracy-Ann_Oberman',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'When I meet someone for the very first time, I automatically make a mental note of what animal I think they are. Once it\'s in, I never forget it.',
		guessingTeam: 'Lee Mack',
		person: 'Claudia Winkleman',
		personGuesses: {
			'Jamie Laing': 'truth',
			'Lee Mack': 'lie',
			'Tracy-Ann Oberman': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once set a sauna on fire.',
		guessingTeam: 'David Mitchell',
		person: 'Jamie Laing',
		personGuesses: {
			'Claudia Winkleman': 'truth',
			'David Mitchell': 'truth',
			'Rhod Gilbert': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'A mistake I made in France meant someone in England got hospitalised.',
		guessingTeam: 'Lee Mack',
		person: 'Rhod Gilbert',
		personGuesses: {
			'Jamie Laing': 'truth',
			'Lee Mack': 'truth',
			'Tracy-Ann Oberman': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Tony',
		connections: {
			'Claudia Winkleman': 'He is my builder. He drove for an hour to come to my house to fix my TV and it turned out that all I needed to do was change the batteries in the remote control.',
			'David Mitchell': 'I regularly go round to his house to play with his Lego.',
			'Rhod Gilbert': 'We played in a band together where we both played guitar except only his was plugged in because I can\'t play a note.'
		},
		personGuesses: {
			'Jamie Laing': 'Claudia Winkleman',
			'Lee Mack': 'Rhod Gilbert',
			'Tracy-Ann Oberman': 'David Mitchell'
		},
		teamGuess: 'David Mitchell',
		truth: 'Claudia Winkleman'
	},
	{
		type: 'quick_fire',
		statement: 'I can\'t wear normal gloves because I have an unusual hand.',
		guessingTeam: 'Lee Mack',
		person: 'Rhod Gilbert',
		personGuesses: {
			'Jamie Laing': 'truth',
			'Lee Mack': 'lie',
			'Tracy-Ann Oberman': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 10,
	episode: 6,
	rounds: rounds,
	score: [4, 1],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
