import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Jay Blades',
			wiki: 'https://en.wikipedia.org/wiki/Jay_Blades',
			gender: 'male'
		},
		{
			name: 'Sue Johnston',
			wiki: 'https://en.wikipedia.org/wiki/Sue_Johnston',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Alice Levine',
			wiki: 'https://en.wikipedia.org/wiki/Alice_Levine',
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
		statement: 'I once fled a swimming pool after accidentally assaulting an old man.',
		guessingTeam: 'David Mitchell',
		person: 'Alice Levine',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jay Blades': 'lie',
			'Sue Johnston': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		possession: true,
		statement: 'This lives in my workshop and I watered it every day for a month before somebody pointed out that it was plastic.',
		guessingTeam: 'Lee Mack',
		person: 'Jay Blades',
		personGuesses: {
			'Alice Levine': 'lie',
			'Bob Mortimer': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Francis',
		connections: {
			'David Mitchell': 'He told me to tone it down a bit when I got a tad too bouncy on his bouncy castle.',
			'Jay Blades': 'We got a speeding ticket together whilst test-driving a motorised sofa.',
			'Sue Johnston': 'Together, we hid a body in a coffin to spook the cast of Brookside.'
		},
		personGuess: {
			'Alice Levine': 'Sue Johnston',
			'Bob Mortimer': 'Sue Johnston',
			'Lee Mack': 'Sue Johnston'
		},
		teamGuess: 'Sue Johnston',
		truth: 'Sue Johnston'
	},
	{
		type: 'quick_fire',
		statement: 'I once masterminded a daring heist on a campsite tuck shop.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jay Blades': 'lie',
			'Sue Johnston': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 13,
	episode: 5,
	rounds: rounds,
	score: [0, 4],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
