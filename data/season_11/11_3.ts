import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Melvin Odoom',
			wiki: 'https://en.wikipedia.org/wiki/Melvin_Odoom',
			gender: 'male'
		},
		{
			name: 'Fay Ripley',
			wiki: 'https://en.wikipedia.org/wiki/Fay_Ripley',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'James Acaster',
			wiki: 'https://en.wikipedia.org/wiki/James_Acaster',
			gender: 'male'
		},
		{
			name: 'Gabby Logan',
			wiki: 'https://en.wikipedia.org/wiki/Gabby_Logan',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once spent the night in a bush in Basingstoke.',
		guessingTeam: 'David Mitchell',
		person: 'James Acaster',
		personGuesses: {
			'David Mitchell': 'truth',
			'Fay Ripley': 'truth',
			'Melvin Odoom': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'At school, I used to regularly pay my friend to clean my rubbers.',
		guessingTeam: 'Lee Mack',
		person: 'Melvin Odoom',
		personGuesses: {
			'Gabby Logan': 'truth',
			'James Acaster': 'truth', // thinks it's true but wants to say lie
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Mick',
		connections: {
			'Gabby Logan': 'I deliberately tripped him up during the wheelbarrow race at my son\'s sports day.',
			'James Acaster': 'For six months, he was my sworn enemy when a practical joke got out of hand.',
			'Lee Mack': 'I once took him home from nursery instead of my own son.'
		},
		personGuesses: {
			'David Mitchell': 'James Acaster',
			'Fay Ripley': 'Gabby Logan',
			'Melvin Odoom': 'James Acaster'
		},
		teamGuess: 'James Acaster',
		truth: 'James Acaster'
	},
	{
		type: 'quick_fire',
		statement: 'I recently ended up in A&E after attempting to use a sledgehammer to crack a nut.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Gabby Logan': 'lie',
			'James Acaster': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 11,
	episode: 3,
	rounds: rounds,
	score: [2, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
