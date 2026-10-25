import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Ronni Ancona',
			wiki: 'https://en.wikipedia.org/wiki/Ronni_Ancona',
			gender: 'female'
		},
		{
			name: 'Sir Chris Hoy',
			wiki: 'https://en.wikipedia.org/wiki/Chris_Hoy',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Gabby Logan',
			wiki: 'https://en.wikipedia.org/wiki/Gabby_Logan',
			gender: 'female'
		},
		{
			name: 'Danny Wallace',
			wiki: 'https://en.wikipedia.org/wiki/Danny_Wallace_(humorist)',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I have been approached by NASA to be the first man to cycle on the moon.',
		guessingTeam: 'Lee Mack',
		person: 'Sir Chris Hoy',
		personGuesses: {
			'Danny Wallace': 'lie',
			'Gabby Logan': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'When I present a show for the first time, I like to wear red underwear.',
		guessingTeam: 'David Mitchell',
		person: 'Gabby Logan',
		personGuesses: {
			'David Mitchell': 'truth',
			'Ronni Ancona': 'lie',
			'Sir Chris Hoy': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Whenever someone recognises me, but can\'t place me, I tell them I\'m part of the Olympic Cycling Team.',
		guessingTeam: 'David Mitchell',
		person: 'Danny Wallace',
		personGuesses: {
			'David Mitchell': 'lie',
			'Ronni Ancona': 'lie',
			'Sir Chris Hoy': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		statement: 'Prince Charles became a member of the magic circle when he auditioned using his cup and balls trick.',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'truth',
			'Ronni Ancona': 'unknown',
			'Sir Chris Hoy': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		statement: 'Gary Barlow has a microphone installed in his downstairs bathroom to record new song ideas, as it\'s where he feels the most creative.',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Danny Wallace': 'lie',
			'Gabby Logan': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Silvan',
		connections: {
			'David Mitchell': 'This is Silvan, and he\'s my next-door neighbour, and I promised I\'d get him on tv, after he complained about an all-night party in my flat.',
			'Ronni Ancona': 'This is Silvan, and he designed a household robot that speaks with my voice.',
			'Sir Chris Hoy': 'This is Silvan, and he is my masseur, and he was also the guitarist in Simply Red.'
		},
		personGuesses: {
			'Danny Wallace': 'Sir Chris Hoy',
			'Gabby Logan': 'Sir Chris Hoy',
			'Lee Mack': 'Sir Chris Hoy'
		},
		teamGuess: 'Sir Chris Hoy',
		truth: 'Sir Chris Hoy'
	},
	{
		type: 'quick_fire',
		statement: 'I can\'t eat custard creams because they remind me of Spencer Whitfield who bullied me at school.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Ronni Ancona': 'lie',
			'Sir Chris Hoy': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'The only concert I have ever been to was by Shirley Bassey.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Danny Wallace': 'lie',
			'Gabby Logan': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'These are some of the birthday cards that I\'ve posted to my pets.',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Gabby Logan',
		personGuesses: {
			'David Mitchell': 'lie',
			'Ronni Ancona': 'lie',
			'Sir Chris Hoy': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 3,
	episode: 7,
	rounds: rounds,
	score: [5, 5],
	liarOfTheWeek: 'Gabby Logan'
} as const satisfies StandardEpisode<typeof cast>
