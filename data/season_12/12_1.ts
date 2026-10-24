import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Dion Dublin',
			wiki: 'https://en.wikipedia.org/wiki/Dion_Dublin',
			gender: 'male'
		},
		{
			name: 'Lucy Porter',
			wiki: 'https://en.wikipedia.org/wiki/Lucy_Porter',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Debbie McGee',
			wiki: 'https://en.wikipedia.org/wiki/Debbie_McGee',
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
		statement: 'The police once surrounded my house after I set off an alarm in my bikini bottoms.',
		guessingTeam: 'David Mitchell',
		person: 'Debbie McGee',
		personGuesses: {
			'David Mitchell': 'truth',
			'Dion Dublin': 'truth',
			'Lucy Porter': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once sneezed so hard in my car I set off the airbag.',
		guessingTeam: 'Lee Mack',
		person: 'Dion Dublin',
		personGuesses: {
			'Bob Mortimer': 'truth',
			'Debbie McGee': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Jonathan',
		connections: {
			'Bob Mortimer': 'I have brewed three award-winning beers with him.',
			'Debbie McGee': 'When he was a baby, I used to pull him out of a top hat.',
			'Lee Mack': 'One Sunday, the two of us spend three hours trapped in an automatic car wash.'
		},
		personGuess: {
			'David Mitchell': 'Bob Mortimer',
			'Dion Dublin': 'Bob Mortimer',
			'Lucy Porter': 'Bob Mortimer'
		},
		teamGuess: 'Bob Mortimer',
		truth: 'Bob Mortimer'
	},
	{
		type: 'quick_fire',
		statement: 'Following advice from Chris Rea, I always crack an egg into my bath.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'truth',
			'Dion Dublin': 'truth',
			'Lucy Porter': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 12,
	episode: 1,
	rounds: rounds,
	score: [2, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
