import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'David O\'Doherty',
			wiki: 'https://en.wikipedia.org/wiki/David_O\'Doherty'
		},
		{
			name: 'Katherine Parkinson',
			wiki: 'https://en.wikipedia.org/wiki/Katherine_Parkinson'
		}
	],
	lee: [
		{
			name: 'Louie Spence',
			wiki: 'https://en.wikipedia.org/wiki/Louie_Spence'
		},
		{
			name: 'Bill Turnbull',
			wiki: 'https://en.wikipedia.org/wiki/Bill_Turnbull'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Katherine Parkinson',
		personGuesses: {
			'Bill Turnbull': 'lie',
			'Lee Mack': 'truth',
			'Louie Spence': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'David O\'Doherty',
		personGuesses: {
			'Bill Turnbull': 'lie',
			'Lee Mack': 'lie',
			'Louie Spence': 'undecided'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: {
			'Bill Turnbull': 'David O\'Doherty',
			'Lee Mack': 'David O\'Doherty',
			'Louie Spence': 'David O\'Doherty'
		},
		teamGuess: 'David O\'Doherty',
		truth: 'David O\'Doherty'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Louie Spence',
		personGuesses: {
			'David Mitchell': 'lie',
			'David O\'Doherty': 'lie',
			'Katherine Parkinson': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'David O\'Doherty': 'lie',
			'Katherine Parkinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 5,
	episode: 3,
	rounds: rounds,
	score: [6, 3],
	liarOfTheWeek: 'David O\'Doherty'
} as const satisfies StandardEpisode<typeof cast>
