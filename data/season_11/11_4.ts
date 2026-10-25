import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Susie Dent',
			wiki: 'https://en.wikipedia.org/wiki/Susie_Dent',
			gender: 'female'
		},
		{
			name: 'Stacey Solomon',
			wiki: 'https://en.wikipedia.org/wiki/Stacey_Solomon',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Bob Mortimer',
			wiki: 'https://en.wikipedia.org/wiki/Bob_Mortimer',
			gender: 'male'
		},
		{
			name: 'Ore Oduba',
			wiki: 'https://en.wikipedia.org/wiki/Ore_Oduba',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'My dad once broke my leg during a particularly vigorous bout of gargalesis.',
		guessingTeam: 'Lee Mack',
		person: 'Susie Dent',
		personGuesses: {
			'Bob Mortimer': 'lie',
			'Lee Mack': 'lie',
			'Ore Oduba': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'For the past fifteen years, I have performed my own dentistry.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'truth',
			'Stacey Solomon': 'unknown',
			'Susie Dent': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'John',
		connections: {
			'David Mitchell': 'He is the locksmith who came to rescue my locksmith after that locksmith got locked out of his van.',
			'Stacey Solomon': 'He once booked me to sing \'Happy Birthday\' to his tortoise.',
			'Susie Dent': 'He came to my rescue when I once got stuck in a tree.'
		},
		personGuesses: {
			'Bob Mortimer': 'Susie Dent',
			'Lee Mack': 'Susie Dent',
			'Ore Oduba': 'unknown'
		},
		teamGuess: 'Susie Dent',
		truth: 'Susie Dent'
	},
	{
		type: 'quick_fire',
		statement: 'On route to a meeting at the BBC, I gave CPR to an OAP.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Stacey Solomon': 'lie',
			'Susie Dent': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 11,
	episode: 4,
	rounds: rounds,
	score: [3, 1],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
