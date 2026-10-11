import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Richard Hammond',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Hammond',
			gender: 'male'
		},
		{
			name: 'Sean Lock',
			wiki: 'https://en.wikipedia.org/wiki/Sean_Lock',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Judy Murray',
			wiki: 'https://en.wikipedia.org/wiki/Judy_Murray',
			gender: 'female'
		},
		{
			name: 'Trevor Noah',
			wiki: 'https://en.wikipedia.org/wiki/Trevor_Noah',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I used to call strangers on the telephone and convince them that they were talking to Nelson Mandela.',
		guessingTeam: 'David Mitchell',
		person: 'Trevor Noah',
		personGuesses: {
			'David Mitchell': 'truth',
			'Richard Hammond': 'truth',
			'Sean Lock': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'While travelling around Europe, my friend and I came up with a scheme to make money on the beach.',
		guessingTeam: 'Lee Mack',
		person: 'Sean Lock',
		personGuesses: {
			'Judy Murray': 'lie',
			'Lee Mack': 'lie',
			'Trevor Noah': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Ben',
		connections: {
			'David Mitchell': 'He very recently took me to my first ever football match and was disappointed that I nodded off for a bit in the second half.',
			'Richard Hammond': 'I once convinced him that he\'d been spooked by a ghost in a country house.',
			'Sean Lock': 'I had to talk to him for over an hour to keep him calm when trapped in a portaloo.'
		},
		personGuess: {
			'Judy Murray': 'David Mitchell',
			'Lee Mack': 'David Mitchell',
			'Trevor Noah': 'David Mitchell'
		},
		teamGuess: 'David Mitchell',
		truth: 'Richard Hammond'
	},
	{
		type: 'quick_fire',
		statement: 'One Saturday morning, I lay on my back in the garden and pretended I had fallen off a ladder so that I could get out of a family trip to IKEA.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Richard Hammond': 'lie',
			'Sean Lock': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I used to be in a South African boy band but we split up after three of us were kicked by a horse on a video shoot.',
		guessingTeam: 'David Mitchell',
		person: 'Trevor Noah',
		personGuesses: {
			'David Mitchell': 'truth',
			'Richard Hammond': 'truth',
			'Sean Lock': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 9,
	episode: 6,
	rounds: rounds,
	score: [4, 1],
	liarOfTheWeek: 'Trevor Noah'
} as const satisfies StandardEpisode<typeof cast>
