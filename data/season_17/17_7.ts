import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Craig Charles',
			wiki: 'https://en.wikipedia.org/wiki/Craig_Charles',
			gender: 'male'
		},
		{
			name: 'Shazia Mirza',
			wiki: 'https://en.wikipedia.org/wiki/Shazia_Mirza',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Jeremy Vine',
			wiki: 'https://en.wikipedia.org/wiki/Jeremy_Vine',
			gender: 'male'
		},
		{
			name: 'Amy Gledhill',
			wiki: 'https://en.wikipedia.org/wiki/Amy_Gledhill',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once made a 72-hour round trip to Australia just to pick up a really rare record because I couldn\'t risk it getting damaged in the post.',
		guessingTeam: 'Lee Mack',
		person: 'Craig Charles',
		personGuesses: {
			'Amy Gledhill': 'truth',
			'Jeremy Vine': 'truth', // originally lie
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I was once grounded when my parents saw a picture of me in the local paper doing something I shouldn\'t.',
		guessingTeam: 'Lee Mack',
		person: 'Shazia Mirza',
		personGuesses: {
			'Amy Gledhill': 'lie',
			'Jeremy Vine': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Kate',
		connections: {
			'Amy Gledhill': 'Amy and Kate worked together in the same office for three months before realising they were living in the same house.',
			'Jeremy Vine': 'Jeremy has a unique way of calming Kate down on Eggheads.',
			'Lee Mack': 'Lee accidentally cut the trunk off her topiary elephant.'
		},
		personGuesses: {
			'Craig Charles': 'Amy Gledhill', // first Lee, then Jeremy
			'David Mitchell': 'Amy Gledhill',
			'Shazia Mirza': 'Amy Gledhill'
		},
		teamGuess: 'Amy Gledhill',
		truth: 'Jeremy Vine'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'This is Big Goose. I was given her by a fairground worker as an apology after I snagged my chinos riding his Helter-Skelter.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Amy Gledhill': 'lie',
			'Jeremy Vine': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 17,
	episode: 7,
	rounds: rounds,
	score: [2, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
