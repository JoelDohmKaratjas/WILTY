import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Rob Beckett',
			wiki: 'https://en.wikipedia.org/wiki/Rob_Beckett',
			gender: 'male'
		},
		{
			name: 'Kirsty Wark',
			wiki: 'https://en.wikipedia.org/wiki/Kirsty_Wark',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Adam Buxton',
			wiki: 'https://en.wikipedia.org/wiki/Adam_Buxton',
			gender: 'male'
		},
		{
			name: 'Bruno Tonioli',
			wiki: 'https://en.wikipedia.org/wiki/Bruno_Tonioli',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Bruno Tonioli',
		personGuesses: {
			'David Mitchell': 'truth',
			'Kirsty Wark': 'truth',
			'Rob Beckett': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Adam Buxton',
		personGuesses: {
			'David Mitchell': 'undecided',
			'Kirsty Wark': 'truth',
			'Rob Beckett': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: '',
		connections: {
			'Adam Buxton': '',
			'Bruno Tonioli': '',
			'Lee Mack': ''
		},
		personGuess: {
			'David Mitchell': 'Bruno Tonioli',
			'Kirsty Wark': 'Bruno Tonioli',
			'Rob Beckett': 'Bruno Tonioli'
		},
		teamGuess: 'Bruno Tonioli',
		truth: 'Bruno Tonioli'
	},
	{
		type: 'quick_fire',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Adam Buxton': 'truth',
			'Bruno Tonioli': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'Kirsty Wark',
		personGuesses: {
			'Adam Buxton': 'lie',
			'Bruno Tonioli': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 8,
	episode: 2,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: 'Adam Buxton'
} as const satisfies StandardEpisode<typeof cast>
