import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Alex Jones',
			wiki: 'https://en.wikipedia.org/wiki/Alex_Jones_(Welsh_presenter)',
			gender: 'female'
		},
		{
			name: 'Rachel Parris',
			wiki: 'https://en.wikipedia.org/wiki/Rachel_Parris',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Stacey Dooley',
			wiki: 'https://en.wikipedia.org/wiki/Stacey_Dooley',
			gender: 'female'
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
		statement: 'On a recent trip to the zoo, my bag was hijacked by a one-armed monkey.',
		guessingTeam: 'Lee Mack',
		person: 'Alex Jones',
		personGuesses: {
			'Henning Wehn': 'lie',
			'Lee Mack': 'lie',
			'Stacey Dooley': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'As a kid, my parents denied me chocolate. So, every Easter, I had to run around the garden and hunt the Easter Onion.',
		guessingTeam: 'David Mitchell',
		person: 'Henning Wehn',
		personGuesses: {
			'Alex Jones': 'lie',
			'David Mitchell': 'lie',
			'Rachel Parris': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Oliver',
		connections: {
			'Alex Jones': 'I once took a worm into a DIY store where he worked and asked him to colour-match some paint to it.',
			'David Mitchell': 'We\'ve become friends since he was cast as me in the German version of Peep Show.',
			'Rachel Parris': 'He once came to my rescue when I jumped off a bridge by mistake.'
		},
		personGuess: {
			'Henning Wehn': 'Alex Jones',
			'Lee Mack': 'Rachel Parris',
			'Stacey Dooley': 'Alex Jones'
		},
		teamGuess: 'Alex Jones',
		truth: 'Rachel Parris'
	},
	{
		type: 'quick_fire',
		statement: 'I was once so cold, I shivered my skirt off.',
		guessingTeam: 'David Mitchell',
		person: 'Stacey Dooley',
		personGuesses: {
			'Alex Jones': 'truth',
			'David Mitchell': 'truth',
			'Rachel Parris': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I once got my head stuck in a set of railings while trying to show my kids how I once got my head stuck in a set of railings.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Alex Jones': 'unknown', // "go with your heart"
			'David Mitchell': 'lie',
			'Rachel Parris': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 12,
	episode: 9,
	rounds: rounds,
	score: [5, 0],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
