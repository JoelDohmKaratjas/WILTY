import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Danny Baker',
			wiki: 'https://en.wikipedia.org/wiki/Danny_Baker',
			gender: 'male'
		},
		{
			name: 'Anton Du Beke',
			wiki: 'https://en.wikipedia.org/wiki/Anton_Du_Beke',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Michael Buerk',
			wiki: 'https://en.wikipedia.org/wiki/Michael_Buerk',
			gender: 'male'
		},
		{
			name: 'Russell Howard',
			wiki: 'https://en.wikipedia.org/wiki/Russell_Howard',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I recently helped Bruce Forsyth hang a picture in his bathroom.',
		guessingTeam: 'Lee Mack',
		person: 'Anton Du Beke',
		personGuesses: {
			'Lee Mack': 'lie',
			'Michael Buerk': 'lie',
			'Russell Howard': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I was Argos Nationwide Employee of the Year 1997.',
		guessingTeam: 'David Mitchell',
		person: 'Russell Howard',
		personGuesses: {
			'Anton Du Beke': 'lie',
			'Danny Baker': 'lie',
			'David Mitchell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I used to share a house with Sue Lawley',
		guessingTeam: 'David Mitchell',
		person: 'Michael Buerk',
		personGuesses: {
			'Anton Du Beke': 'lie',
			'Danny Baker': 'lie',
			'David Mitchell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		statement: 'Alan Titchmarsh\'s waxwork at Madame Tussaud\'s gets kissed so often that it has to have lipstick washed from its face twice a week.',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'Anton Du Beke': 'truth',
			'Danny Baker': 'truth',
			'David Mitchell': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Chris and Jill',
		connections: {
			'Lee Mack': 'Lee slept in their shed for a whole summer.',
			'Michael Buerk': 'Chris and Jill were fellow members of the Guildford Walking and Dining Club.',
			'Russell Howard': 'Chris and Jill were interviewed on his radio show because they claimed to have been abducted by aliens.'
		},
		personGuesses: {
			'Anton Du Beke': 'Lee Mack',
			'Danny Baker': 'Lee Mack',
			'David Mitchell': 'Lee Mack'
		},
		teamGuess: 'Lee Mack',
		truth: 'Michael Buerk'
	},
	{
		type: 'quick_fire',
		statement: 'My parents had to change my name to Lee because I couldn\'t pronounce my real name.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Anton Du Beke': 'lie',
			'Danny Baker': 'lie',
			'David Mitchell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'This [pictured right] is an ashtray that I stole from 10 Downing Street.',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Michael Buerk',
		personGuesses: {
			'Anton Du Beke': 'truth',
			'Danny Baker': 'lie',
			'David Mitchell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I was a teenage boxer, but I quit because I had a mouth ulcer.',
		guessingTeam: 'Lee Mack',
		person: 'Anton Du Beke',
		personGuesses: {
			'Lee Mack': 'truth',
			'Michael Buerk': 'truth',
			'Russell Howard': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I won a jukebox off Vinnie Jones in a game of poker.',
		guessingTeam: 'Lee Mack',
		person: 'Danny Baker',
		personGuesses: {
			'Lee Mack': 'truth',
			'Michael Buerk': 'lie',
			'Russell Howard': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 2,
	episode: 6,
	rounds: rounds,
	score: [6, 7],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
