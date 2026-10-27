import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Michelle Visage',
			wiki: 'https://en.wikipedia.org/wiki/Michelle_Visage',
			gender: 'female'
		},
		{
			name: 'Henning Wehn',
			wiki: 'https://en.wikipedia.org/wiki/Henning_Wehn',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Chizzy Akudolu',
			wiki: 'https://en.wikipedia.org/wiki/Chizzy_Akudolu',
			gender: 'female'
		},
		{
			name: 'Simon Gregson',
			wiki: 'https://en.wikipedia.org/wiki/Simon_Gregson',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'After seeing a regression therapist, I genuinely believe that in a past life, I used to be a medieval Frenchman.',
		guessingTeam: 'David Mitchell',
		person: 'Chizzy Akudolu',
		personGuesses: {
			'David Mitchell': 'truth',
			'Henning Wehn': 'truth',
			'Michelle Visage': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once opened my curtains in what I thought was Manchester, only to see Denmark outside.',
		guessingTeam: 'David Mitchell',
		person: 'Simon Gregson',
		personGuesses: {
			'David Mitchell': 'truth',
			'Henning Wehn': 'truth',
			'Michelle Visage': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Ben',
		connections: {
			'David Mitchell': 'Ben accused him of fly-tipping when I was actually tidying up someone else\'s fly-tipping.',
			'Henning Wehn': 'Ben regularly sends Henning photos to remind him of the day he went to a railway station and fell down the gap.',
			'Michelle Visage': 'She judged a dogs in drag contest and Ben\'s dog took first prize.'
		},
		personGuesses: {
			'Chizzy Akudolu': 'Henning Wehn',
			'Lee Mack': 'Henning Wehn',
			'Simon Gregson': 'Henning Wehn'
		},
		teamGuess: 'Henning Wehn',
		truth: 'Henning Wehn'
	},
	{
		type: 'quick_fire',
		statement: 'When I was trying to sell my house, I once put on a disguise and viewed it undercover, so I could see if the estate agent was any good.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Henning Wehn': 'lie',
			'Michelle Visage': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 16,
	episode: 3,
	rounds: rounds,
	score: [3, 1],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
