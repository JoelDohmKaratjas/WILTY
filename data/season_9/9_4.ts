import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Alan Davies',
			wiki: 'https://en.wikipedia.org/wiki/Alan_Davies',
			gender: 'male'
		},
		{
			name: 'Germaine Greer',
			wiki: 'https://en.wikipedia.org/wiki/Germaine_Greer',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Jermaine Jenas',
			wiki: 'https://en.wikipedia.org/wiki/Jermaine_Jenas',
			gender: 'male'
		},
		{
			name: 'Richard Osman',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Osman',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Last year at a party, I shared a jacuzzi with three of the Eggheads.',
		guessingTeam: 'David Mitchell',
		person: 'Richard Osman',
		personGuesses: {
			'Alan Davies': 'lie',
			'David Mitchell': 'lie',
			'Germaine Greer': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'Whenever I travel by Tube, I look around the carriage to decide who I\'d eat first if we were a group of people stranded on a desert island.',
		guessingTeam: 'Lee Mack',
		person: 'Germaine Greer',
		personGuesses: {
			'Jermaine Jenas': 'truth',
			'Lee Mack': 'lie',
			'Richard Osman': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Wally',
		connections: {
			'Alan Davies': 'During one of his driving lessons, I crashed into the Co-Op.',
			'David Mitchell': 'He intervened when I got into a whispered row with a woman in a library.',
			'Germaine Greer': 'He is the crane driver who once let me sit in his cabin fifty feet above my house.'
		},
		personGuess: {
			'Jermaine Jenas': 'David Mitchell',
			'Lee Mack': 'Germaine Greer',
			'Richard Osman': 'Alan Davies'
		},
		teamGuess: 'David Mitchell',
		truth: 'Alan Davies'
	},
	{
		type: 'quick_fire',
		statement: 'After an incident last year, I have a fear that some of my neighbours think I hunt ducklings.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Alan Davies': 'unknown',
			'David Mitchell': 'truth',
			'Germaine Greer': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'The night before the biggest game of my career, a teammate woke me up by practising his trumpet.',
		guessingTeam: 'David Mitchell',
		person: 'Jermaine Jenas',
		personGuesses: {
			'Alan Davies': 'truth',
			'David Mitchell': 'truth',
			'Germaine Greer': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 9,
	episode: 4,
	rounds: rounds,
	score: [5, 0],
	liarOfTheWeek: 'Germaine Greer'
} as const satisfies StandardEpisode<typeof cast>
