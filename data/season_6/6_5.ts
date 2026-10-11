import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Andy Hamilton',
			wiki: 'https://en.wikipedia.org/wiki/Andy_Hamilton',
			gender: 'male'
		},
		{
			name: 'Gabby Logan',
			wiki: 'https://en.wikipedia.org/wiki/Gabby_Logan',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Dr. Christian Jessen',
			wiki: 'https://en.wikipedia.org/wiki/Christian_Jessen',
			gender: 'male'
		},
		{
			name: 'Diane Parish',
			wiki: 'https://en.wikipedia.org/wiki/Diane_Parish',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'When I want to remember something late at night, instead of writing it down, I just grab an object from my bedside table and throw it across the room.',
		guessingTeam: 'Lee Mack',
		person: 'Gabby Logan',
		personGuesses: {
			'Diane Parish': 'lie',
			'Dr. Christian Jessen': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I used to write and hand in homework for an imaginary class-mate.',
		guessingTeam: 'Lee Mack',
		person: 'Andy Hamilton',
		personGuesses: {
			'Diane Parish': 'lie',
			'Dr. Christian Jessen': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'When I travel by Tube I like to see how many strangers I can make yawn by yawning myself. My record is nine in one carriage.',
		guessingTeam: 'David Mitchell',
		person: 'Diane Parish',
		personGuesses: {
			'Andy Hamilton': 'lie',
			'David Mitchell': 'lie',
			'Gabby Logan': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Kevin',
		connections: {
			'Diane Parish': 'He is an EastEnders fan who changed his name to Albert Square.',
			'Dr. Christian Jessen': 'He is a surgeon who performed an operation after Christian swallowed one of the pieces from the board game Operation.',
			'Lee Mack': 'His butt double in Not Going Out.'
		},
		personGuess: {
			'Andy Hamilton': 'undecided',
			'David Mitchell': 'undecided',
			'Gabby Logan': 'undecided'
		},
		teamGuess: 'Lee Mack',
		truth: 'Lee Mack'
	},
	{
		type: 'quick_fire',
		statement: 'I shaved off a beard I had been growing for weeks because I didn\'t want David to think I was copying him.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Andy Hamilton': 'unknown',
			'David Mitchell': 'truth',
			'Gabby Logan': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'This is my monkey, Elsie. She watches over me while I sleep.',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Dr. Christian Jessen',
		personGuesses: {
			'Andy Hamilton': 'lie',
			'David Mitchell': 'lie',
			'Gabby Logan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 6,
	episode: 5,
	rounds: rounds,
	score: [4, 2],
	liarOfTheWeek: 'Andy Hamilton'
} as const satisfies StandardEpisode<typeof cast>
