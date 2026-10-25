import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Mel Giedroyc',
			wiki: 'https://en.wikipedia.org/wiki/Mel_Giedroyc',
			gender: 'female'
		},
		{
			name: 'Dermot O\'Leary',
			wiki: 'https://en.wikipedia.org/wiki/Dermot_O\'Leary',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Matt Dawson',
			wiki: 'https://en.wikipedia.org/wiki/Matt_Dawson',
			gender: 'male'
		},
		{
			name: 'Josh Widdicombe',
			wiki: 'https://en.wikipedia.org/wiki/Josh_Widdicombe',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'These are my favourite boxer shorts. Despite the fact they\'ve seen better days, we have such a strong bond I still wear them.',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Josh Widdicombe',
		personGuesses: {
			'David Mitchell': 'lie',
			'Dermot O\'Leary': 'lie',
			'Mel Giedroyc': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once had a snog with one of the people here on Would I Lie to You tonight.',
		guessingTeam: 'Lee Mack',
		person: 'Mel Giedroyc',
		personGuesses: {
			'Josh Widdicombe': 'lie',
			'Lee Mack': 'truth',
			'Matt Dawson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Shaylene',
		connections: {
			'David Mitchell': 'Lifeguard who talked him into letting go of the diving board.',
			'Dermot O\'Leary': 'Asked her out 156 times.',
			'Mel Giedroyc': 'Cut Shaylene\'s hair to put in the stuffing of her teddy bear.'
		},
		personGuesses: {
			'Josh Widdicombe': 'Mel Giedroyc',
			'Lee Mack': 'Mel Giedroyc',
			'Matt Dawson': 'Mel Giedroyc'
		},
		teamGuess: 'Mel Giedroyc',
		truth: 'Dermot O\'Leary'
	},
	{
		type: 'quick_fire',
		statement: 'At school, I was given the nickname "The Charmer", because I was the only one who could console the school snake whenever it got agitated.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Dermot O\'Leary': 'lie',
			'Mel Giedroyc': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 7,
	episode: 4,
	rounds: rounds,
	score: [3, 1],
	liarOfTheWeek: 'Mel Giedroyc'
} as const satisfies StandardEpisode<typeof cast>
