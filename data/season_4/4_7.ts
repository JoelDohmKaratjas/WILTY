import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Bernard Cribbins',
			wiki: 'https://en.wikipedia.org/wiki/Bernard_Cribbins',
			gender: 'male'
		},
		{
			name: 'Patrick Kielty',
			wiki: 'https://en.wikipedia.org/wiki/Patrick_Kielty',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Deborah Meaden',
			wiki: 'https://en.wikipedia.org/wiki/Deborah_Meaden',
			gender: 'female'
		},
		{
			name: 'Mark Watson',
			wiki: 'https://en.wikipedia.org/wiki/Mark_Watson',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once punched Muhammad Ali in the face.',
		guessingTeam: 'Lee Mack',
		person: 'Patrick Kielty',
		personGuesses: {
			'Deborah Meaden': 'lie',
			'Lee Mack': 'lie',
			'Mark Watson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I recently had my house exorcised after several weird occurrences spooked me.',
		guessingTeam: 'David Mitchell',
		person: 'Deborah Meaden',
		personGuesses: {
			'Bernard Cribbins': 'truth',
			'David Mitchell': 'truth',
			'Patrick Kielty': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'When I was 6 years old, I wrote a will after losing a game of Connect Four to my Dad.',
		guessingTeam: 'David Mitchell',
		person: 'Mark Watson',
		personGuesses: {
			'Bernard Cribbins': 'truth',
			'David Mitchell': 'truth',
			'Patrick Kielty': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once sold my wife\'s car, but told her it was stolen.',
		guessingTeam: 'Lee Mack',
		person: 'Bernard Cribbins',
		personGuesses: {
			'Deborah Meaden': 'lie',
			'Lee Mack': 'lie',
			'Mark Watson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Molly',
		connections: {
			'Deborah Meaden': 'Dragons Den contestant who was too nervous to say anything and left after 20 minutes.',
			'Lee Mack': 'Ice skating teacher, teaching him for a wedding on ice where he\'s the best man.',
			'Mark Watson': 'Cast her in a school play he wrote and directed about a murder.'
		},
		personGuess: {
			'Bernard Cribbins': 'Deborah Meaden',
			'David Mitchell': 'Deborah Meaden',
			'Patrick Kielty': 'Mark Watson'
		},
		teamGuess: 'Deborah Meaden',
		truth: 'Mark Watson'
	},
	{
		type: 'quick_fire',
		statement: 'As a child I had a special way (two ways) of communicating with Captain Kirk during Star Trek episodes.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Deborah Meaden': 'unknown',
			'Lee Mack': 'truth',
			'Mark Watson': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'host',
		statement: 'This is a prototype invention of mine that I\'m hoping to release one day.',
		possession: true,
		personGuesses: {
			david: {
				'Bernard Cribbins': 'lie',
				'David Mitchell': 'lie',
				'Patrick Kielty': 'truth'
			},
			lee: {
				'Deborah Meaden': 'lie',
				'Lee Mack': 'truth',
				'Mark Watson': 'unknown'
			}
		},
		teamGuess: {
			david: 'lie',
			lee: 'truth'
		},
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 4,
	episode: 7,
	rounds: rounds,
	score: [7, 5],
	liarOfTheWeek: 'Deborah Meaden'
} as const satisfies StandardEpisode<typeof cast>
