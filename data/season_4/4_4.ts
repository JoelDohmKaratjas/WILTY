import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Ben Fogle',
			wiki: 'https://en.wikipedia.org/wiki/Ben_Fogle'
		},
		{
			name: 'Craig Revel Horwood',
			wiki: 'https://en.wikipedia.org/wiki/Craig_Revel_Horwood'
		}
	],
	lee: [
		{
			name: 'Hugh Dennis',
			wiki: 'https://en.wikipedia.org/wiki/Hugh_Dennis'
		},
		{
			name: 'Kate Silverton',
			wiki: 'https://en.wikipedia.org/wiki/Kate_Silverton'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Hugh Dennis',
		personGuesses: {
			'Ben Fogle': 'lie',
			'Craig Revel Horwood': 'lie',
			'David Mitchell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Ben Fogle',
		personGuesses: {
			'Hugh Dennis': 'lie',
			'Kate Silverton': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Kate Silverton',
		personGuesses: {
			'Ben Fogle': 'truth',
			'Craig Revel Horwood': 'truth',
			'David Mitchell': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_dual',
		personGuesses: {
			david: {
				'Ben Fogle': 'lie',
				'Craig Revel Horwood': 'truth',
				'David Mitchell': 'lie'
			},
			lee: {
				'Hugh Dennis': 'unknown',
				'Kate Silverton': 'truth',
				'Lee Mack': 'unknown'
			}
		},
		teamGuess: {
			david: 'lie',
			lee: 'truth'
		},
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: {
			'Hugh Dennis': 'Ben Fogle',
			'Kate Silverton': 'undecided',
			'Lee Mack': 'David Mitchell'
		},
		teamGuess: 'David Mitchell',
		truth: 'Ben Fogle'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Ben Fogle': 'unknown',
			'Craig Revel Horwood': 'unknown',
			'David Mitchell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Hugh Dennis': 'lie',
			'Kate Silverton': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'host',
		personGuesses: {
			david: {
				'Ben Fogle': 'truth',
				'Craig Revel Horwood': 'truth',
				'David Mitchell': 'truth'
			},
			lee: {
				'Hugh Dennis': 'lie',
				'Kate Silverton': 'lie',
				'Lee Mack': 'lie'
			}
		},
		teamGuess: {
			david: 'truth',
			lee: 'lie'
		},
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 4,
	episode: 4,
	rounds: rounds,
	score: [3, 8],
	liarOfTheWeek: 'Ben Fogle'
} as const satisfies StandardEpisode<typeof cast>
