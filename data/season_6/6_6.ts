import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Greg Davies',
			wiki: 'https://en.wikipedia.org/wiki/Greg_Davies'
		},
		{
			name: 'Richard Osman',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Osman'
		}
	],
	lee: [
		{
			name: 'Patsy Kensit',
			wiki: 'https://en.wikipedia.org/wiki/Patsy_Kensit'
		},
		{
			name: 'Bob Mortimer',
			wiki: 'https://en.wikipedia.org/wiki/Bob_Mortimer'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Greg Davies',
		personGuesses: {
			'Bob Mortimer': 'unknown',
			'Lee Mack': 'truth',
			'Patsy Kensit': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Richard Osman',
		personGuesses: {
			'Bob Mortimer': 'truth',
			'Lee Mack': 'truth',
			'Patsy Kensit': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Patsy Kensit',
		personGuesses: {
			'David Mitchell': 'truth',
			'Greg Davies': 'lie',
			'Richard Osman': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: {
			'Bob Mortimer': 'Richard Osman',
			'Lee Mack': 'David Mitchell', // originally Richard but changed last second
			'Patsy Kensit': 'undecided' // originally David but then undecided between Richard and Greg
		},
		teamGuess: 'David Mitchell',
		truth: 'Greg Davies'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'lie',
			'Greg Davies': 'lie',
			'Richard Osman': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 6,
	episode: 6,
	rounds: rounds,
	score: [1, 4],
	liarOfTheWeek: 'Richard Osman'
} as const satisfies StandardEpisode<typeof cast>
