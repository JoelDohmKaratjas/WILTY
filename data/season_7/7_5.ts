import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Susan Calman',
			wiki: 'https://en.wikipedia.org/wiki/Susan_Calman'
		},
		{
			name: 'Richard Osman',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Osman'
		}
	],
	lee: [
		{
			name: 'Carol Kirkwood',
			wiki: 'https://en.wikipedia.org/wiki/Carol_Kirkwood'
		},
		{
			name: 'David O\'Doherty',
			wiki: 'https://en.wikipedia.org/wiki/David_O\'Doherty'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
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
		personGuess: {
			'David Mitchell': 'David O\'Doherty',
			'Richard Osman': 'Carol Kirkwood',
			'Susan Calman': 'David O\'Doherty'
		},
		teamGuess: 'David O\'Doherty',
		truth: 'Carol Kirkwood'
	},
	{
		type: 'quick_fire',
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
