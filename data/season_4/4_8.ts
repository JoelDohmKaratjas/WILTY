import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'John Bishop',
			wiki: 'https://en.wikipedia.org/wiki/John_Bishop'
		},
		{
			name: 'Joanna Page',
			wiki: 'https://en.wikipedia.org/wiki/Joanna_Page'
		}
	],
	lee: [
		{
			name: 'Chris Addison',
			wiki: 'https://en.wikipedia.org/wiki/Chris_Addison'
		},
		{
			name: 'Patsy Palmer',
			wiki: 'https://en.wikipedia.org/wiki/Patsy_Palmer'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Patsy Palmer',
		personGuesses: {
			'David Mitchell': 'truth',
			'Joanna Page': 'truth',
			'John Bishop': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Joanna Page',
		personGuesses: {
			'Chris Addison': 'lie',
			'Lee Mack': 'truth',
			'Patsy Palmer': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'John Bishop',
		personGuesses: {
			'Chris Addison': 'lie',
			'Lee Mack': 'lie',
			'Patsy Palmer': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Mitchell': 'Patsy Palmer',
			'Joanna Page': 'Patsy Palmer',
			'John Bishop': 'Patsy Palmer'
		},
		teamGuess: 'Patsy Palmer',
		truth: 'Patsy Palmer'
	},
	{
		type: 'quick_fire',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Chris Addison': 'truth',
			'Lee Mack': 'truth',
			'Patsy Palmer': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Joanna Page': 'lie',
			'John Bishop': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 4,
	episode: 8,
	rounds: rounds,
	score: [5, 7],
	liarOfTheWeek: 'Joanna Page'
} as const satisfies StandardEpisode<typeof cast>
