import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Ronan Keating',
			wiki: 'https://en.wikipedia.org/wiki/Ronan_Keating',
			gender: 'male'
		},
		{
			name: 'Georgia "Toff" Toffolo',
			wiki: 'https://en.wikipedia.org/wiki/Georgia_Toffolo',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Rhod Gilbert',
			wiki: 'https://en.wikipedia.org/wiki/Rhod_Gilbert',
			gender: 'male'
		},
		{
			name: 'Ellie Taylor',
			wiki: 'https://en.wikipedia.org/wiki/Ellie_Taylor',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I instructed Deliveroo to block my orders after bacon sandwich addiction got out of hand.',
		guessingTeam: 'Lee Mack',
		person: 'Georgia "Toff" Toffolo',
		personGuesses: {
			'Ellie Taylor': 'lie',
			'Lee Mack': 'truth',
			'Rhod Gilbert': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'As part of vocal warmup, in the hour before every Boyzone show, instead of speaking, I would insist on singing everything I had to say.',
		guessingTeam: 'Lee Mack',
		person: 'Ronan Keating',
		personGuesses: {
			'Ellie Taylor': 'truth',
			'Lee Mack': 'lie',
			'Rhod Gilbert': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'For one month, I chose to sleep on the streets rather than talk to the people I was supposed to be living with.',
		guessingTeam: 'David Mitchell',
		person: 'Rhod Gilbert',
		personGuesses: {
			'David Mitchell': 'truth',
			'Georgia "Toff" Toffolo': 'lie',
			'Ronan Keating': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Maria',
		connections: {
			'David Mitchell': 'She once gave me a ginger nut when I came over all queasy on a glass-bottomed boat.',
			'Georgia "Toff" Toffolo': 'She works for my new business venture selling clip-on earrings for dogs.',
			'Ronan Keating': 'She is the Boyzone competition winner twenty years ago won the duvet from my bed.'
		},
		personGuess: {
			'Ellie Taylor': 'Ronan Keating',
			'Lee Mack': 'Ronan Keating',
			'Rhod Gilbert': 'Ronan Keating'
		},
		teamGuess: 'Ronan Keating',
		truth: 'Ronan Keating'
	},
	{
		type: 'quick_fire',
		statement: 'When I worked as estate agent, if the person I was showing around the house didn\'t seem interested, I would tell them that Noel Edmonds was born there.',
		guessingTeam: 'David Mitchell',
		person: 'Ellie Taylor',
		personGuesses: {
			'David Mitchell': 'lie',
			'Georgia "Toff" Toffolo': 'lie',
			'Ronan Keating': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 12,
	episode: 8,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
