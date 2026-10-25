import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Kian Egan',
			wiki: 'https://en.wikipedia.org/wiki/Kian_Egan',
			gender: 'male'
		},
		{
			name: 'Adil Ray',
			wiki: 'https://en.wikipedia.org/wiki/Adil_Ray',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Mel Giedroyc',
			wiki: 'https://en.wikipedia.org/wiki/Mel_Giedroyc',
			gender: 'female'
		},
		{
			name: 'Bob Mortimer',
			wiki: 'https://en.wikipedia.org/wiki/Bob_Mortimer',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Mel Giedroyc',
		personGuesses: {
			'Adil Ray': 'truth',
			'David Mitchell': 'lie',
			'Kian Egan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'Adil Ray': 'truth',
			'David Mitchell': 'lie',
			'Kian Egan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'Kian Egan',
		personGuesses: {
			'Bob Mortimer': 'truth',
			'Lee Mack': 'lie',
			'Mel Giedroyc': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: '',
		connections: {
			'Adil Ray': '',
			'David Mitchell': '',
			'Kian Egan': ''
		},
		personGuesses: {
			'Bob Mortimer': 'Adil Ray',
			'Lee Mack': 'Adil Ray',
			'Mel Giedroyc': 'Adil Ray'
		},
		teamGuess: 'Adil Ray',
		truth: 'Adil Ray'
	},
	{
		type: 'quick_fire',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Adil Ray': 'lie',
			'David Mitchell': 'lie',
			'Kian Egan': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 8,
	episode: 3,
	rounds: rounds,
	score: [0, 5],
	liarOfTheWeek: 'Bob Mortimer'
} as const satisfies StandardEpisode<typeof cast>
