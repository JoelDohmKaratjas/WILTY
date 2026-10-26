import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Roisin Conaty',
			wiki: 'https://en.wikipedia.org/wiki/Roisin_Conaty',
			gender: 'female'
		},
		{
			name: 'Roman Kemp',
			wiki: 'https://en.wikipedia.org/wiki/Roman_Kemp',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Maya Jama',
			wiki: 'https://en.wikipedia.org/wiki/Maya_Jama',
			gender: 'female'
		},
		{
			name: 'Dr. Xand van Tulleken',
			wiki: 'https://en.wikipedia.org/wiki/Xand_van_Tulleken',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Every morning, I wash my face with sparkling water.',
		guessingTeam: 'David Mitchell',
		person: 'Maya Jama',
		personGuesses: {
			'David Mitchell': 'lie',
			'Roisin Conaty': 'lie',
			'Roman Kemp': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once had a race with another medical student to see who could wheel their patient to X-ray first but, in doing so, I tripped and I broke my own finger.',
		guessingTeam: 'David Mitchell',
		person: 'Dr. Xand van Tulleken',
		personGuesses: {
			'David Mitchell': 'truth',
			'Roisin Conaty': 'lie', // originally truth but changed to lie
			'Roman Kemp': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once failed an acting exam after my plan to impress the teacher backfired.',
		guessingTeam: 'Lee Mack',
		person: 'Roisin Conaty',
		personGuesses: {
			'Dr. Xand van Tulleken': 'lie',
			'Lee Mack': 'lie',
			'Maya Jama': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Martin',
		connections: {
			'Dr. Xand van Tulleken': 'When I accidentally shaved off a chunk of my beard, Martin lent me some of his beard.',
			'Lee Mack': 'Martin freed me after I got my finger stuck in a bowling ball.',
			'Maya Jama': 'Martin once exorcised my car because I thought it was haunted.'
		},
		personGuesses: {
			'David Mitchell': 'Dr. Xand van Tulleken',
			'Roisin Conaty': 'Dr. Xand van Tulleken',
			'Roman Kemp': 'Dr. Xand van Tulleken'
		},
		teamGuess: 'Dr. Xand van Tulleken',
		truth: 'Dr. Xand van Tulleken'
	},
	{
		type: 'quick_fire',
		statement: 'I had to secretly put my clothes on during a Zoom call, so the pop star I was interviewing wouldn\'t realise I was naked.',
		guessingTeam: 'Lee Mack',
		person: 'Roman Kemp',
		personGuesses: {
			'Dr. Xand van Tulleken': 'lie',
			'Lee Mack': 'lie',
			'Maya Jama': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'Last year, I was asked to remove my jumper in a restaurant after the table next door complained that its bold pattern was ruining their photographs.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Dr. Xand van Tulleken': 'truth',
			'Lee Mack': 'truth',
			'Maya Jama': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 14,
	episode: 9,
	rounds: rounds,
	score: [5, 1],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
