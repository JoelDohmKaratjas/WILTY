import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Alex Brooker',
			wiki: 'https://en.wikipedia.org/wiki/Alex_Brooker',
			gender: 'male'
		},
		{
			name: 'Doon Mackichan',
			wiki: 'https://en.wikipedia.org/wiki/Doon_Mackichan',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Ben Miller',
			wiki: 'https://en.wikipedia.org/wiki/Ben_Miller',
			gender: 'male'
		},
		{
			name: 'Henning Wehn',
			wiki: 'https://en.wikipedia.org/wiki/Henning_Wehn',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Aside from my friend Mark Park, I have three other good friends whose names rhyme.',
		guessingTeam: 'David Mitchell',
		person: 'Ben Miller',
		personGuesses: {
			'Alex Brooker': 'lie',
			'David Mitchell': 'lie',
			'Doon Mackichan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I was once arrested by border guards for illegally entering another country.',
		guessingTeam: 'David Mitchell',
		person: 'Henning Wehn',
		personGuesses: {
			'Alex Brooker': 'truth',
			'David Mitchell': 'truth',
			'Doon Mackichan': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Nicola',
		connections: {
			'Ben Miller': 'She taught me how to talk to crows.',
			'Henning Wehn': 'I told my parents to sack her as my babysitter because she failed to read my bedtime stories with enough emotion.',
			'Lee Mack': 'I once chased her for forty miles down the M3 because I thought she\'d stolen my phone.'
		},
		personGuesses: {
			'Alex Brooker': 'Lee Mack',
			'David Mitchell': 'Henning Wehn',
			'Doon Mackichan': 'Lee Mack'
		},
		teamGuess: 'Ben Miller',
		truth: 'Ben Miller'
	},
	{
		type: 'quick_fire',
		statement: 'I recently shooed a fox out of the garden by squirting it with water. Five minutes later I watched in horror as it returned with its brother and ate my plimsoll.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Ben Miller': 'lie',
			'Henning Wehn': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'On the advice of an optician, I often walk with one eye open and one eye shut. That way, one of my eyes is always having a rest.',
		guessingTeam: 'Lee Mack',
		person: 'Doon Mackichan',
		personGuesses: {
			'Ben Miller': 'lie',
			'Henning Wehn': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 9,
	episode: 9,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: 'Ben Miller'
} as const satisfies StandardEpisode<typeof cast>
