import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Patrick McGuinness',
			wiki: 'https://en.wikipedia.org/wiki/Paddy_McGuinness',
			gender: 'male'
		},
		{
			name: 'Fay Ripley',
			wiki: 'https://en.wikipedia.org/wiki/Fay_Ripley',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'John Barrowman',
			wiki: 'https://en.wikipedia.org/wiki/John_Barrowman',
			gender: 'male'
		},
		{
			name: 'Dominic Wood',
			wiki: 'https://en.wikipedia.org/wiki/Dominic_Wood',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'John Barrowman',
		personGuesses: {
			'David Mitchell': 'lie',
			'Fay Ripley': 'lie',
			'Patrick McGuinness': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Patrick McGuinness',
		personGuesses: {
			'Dominic Wood': 'truth',
			'John Barrowman': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Dominic Wood',
		personGuesses: {
			'David Mitchell': 'lie',
			'Fay Ripley': 'lie',
			'Patrick McGuinness': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'lie',
			'Fay Ripley': 'lie',
			'Patrick McGuinness': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Dominic Wood': 'lie',
			'John Barrowman': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		personGuess: {
			'David Mitchell': 'Dominic Wood',
			'Fay Ripley': 'Dominic Wood',
			'Patrick McGuinness': 'Dominic Wood'
		},
		teamGuess: 'Dominic Wood',
		truth: 'John Barrowman'
	},
	{
		type: 'telly_tales',
		guessingTeam: 'Lee Mack',
		statementOwner: 'Patrick McGuinness',
		personGuesses: {
			'Dominic Wood': 'truth',
			'John Barrowman': 'lie',
			'Lee Mack': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Fay Ripley',
		personGuesses: {
			'Dominic Wood': 'lie',
			'John Barrowman': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'truth',
			'Fay Ripley': 'truth',
			'Patrick McGuinness': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Patrick McGuinness',
		personGuesses: {
			'Dominic Wood': 'truth',
			'John Barrowman': 'lie',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 1,
	episode: 2,
	rounds: rounds,
	score: [6, 10],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
