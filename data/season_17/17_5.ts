import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Jack Carroll',
			wiki: 'https://en.wikipedia.org/wiki/Jack_Carroll_(comedian)',
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
			name: 'Bridget Christie',
			wiki: 'https://en.wikipedia.org/wiki/Bridget_Christie',
			gender: 'female'
		},
		{
			name: 'Big Zuu',
			wiki: 'https://en.wikipedia.org/wiki/Big_Zuu',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'The morning after a party at my house, I went down to breakfast to find Harry Redknapp asleep in our utility room.',
		guessingTeam: 'Lee Mack',
		person: 'Gabby Logan',
		personGuesses: {
			'Big Zuu': 'lie',
			'Bridget Christie': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I recently wrote a rap about the benefits of sensible pension planning.',
		guessingTeam: 'David Mitchell',
		person: 'Big Zuu',
		personGuesses: {
			'David Mitchell': 'truth',
			'Gabby Logan': 'truth',
			'Jack Carroll': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once dropped and ruined the birthday cake at a kid\'s party, but told everyone a friend\'s three-year-old did it.',
		guessingTeam: 'David Mitchell',
		person: 'Bridget Christie',
		personGuesses: {
			'David Mitchell': 'truth',
			'Gabby Logan': 'truth',
			'Jack Carroll': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Alistair',
		connections: {
			'David Mitchell': 'Late at night, David crept out of his house to oil Alistair\'s squeaky gate.',
			'Gabby Logan': 'Gabby once texted Andrew a very embarrassing photograph.',
			'Jack Carroll': 'Alistair is the escapologist Jack helped on Britain\'s Got Talent after getting locked in his dressing room.'
		},
		personGuesses: {
			'Big Zuu': 'David Mitchell',
			'Bridget Christie': 'David Mitchell',
			'Lee Mack': 'David Mitchell'
		},
		teamGuess: 'David Mitchell',
		truth: 'Gabby Logan'
	},
	{
		type: 'quick_fire',
		statement: 'Because I kept arriving late, a mime artist once asked me to leave his mime class in mime.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'truth',
			'Gabby Logan': 'truth',
			'Jack Carroll': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 17,
	episode: 5,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
