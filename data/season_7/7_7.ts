import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Greg Rutherford',
			wiki: 'https://en.wikipedia.org/wiki/Greg_Rutherford'
		},
		{
			name: 'Kirsty Young',
			wiki: 'https://en.wikipedia.org/wiki/Kirsty_Young'
		}
	],
	lee: [
		{
			name: 'Joanna Scanlan',
			wiki: 'https://en.wikipedia.org/wiki/Joanna_Scanlan'
		},
		{
			name: 'Henning Wehn',
			wiki: 'https://en.wikipedia.org/wiki/Henning_Wehn'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Kirsty Young',
		personGuesses: {
			'Henning Wehn': 'lie',
			'Joanna Scanlan': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Henning Wehn',
		personGuesses: {
			'David Mitchell': 'truth',
			'Greg Rutherford': 'truth',
			'Kirsty Young': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: {
			'Henning Wehn': 'Greg Rutherford',
			'Joanna Scanlan': 'Greg Rutherford',
			'Lee Mack': 'Greg Rutherford'
		},
		teamGuess: 'Greg Rutherford',
		truth: 'Greg Rutherford'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'truth',
			'Greg Rutherford': 'lie',
			'Kirsty Young': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'host',
		personGuesses: {
			david: {
				'David Mitchell': 'lie',
				'Greg Rutherford': 'unknown',
				'Kirsty Young': 'unknown'
			},
			lee: {
				'Henning Wehn': 'truth',
				'Joanna Scanlan': 'truth',
				'Lee Mack': 'truth'
			}
		},
		teamGuess: {
			david: 'lie',
			lee: 'truth'
		},
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 7,
	episode: 7,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: 'Henning Wehn'
} as const satisfies StandardEpisode<typeof cast>
