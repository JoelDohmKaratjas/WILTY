import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Sarah Greene',
			wiki: 'https://en.wikipedia.org/wiki/Sarah_Greene',
			gender: 'female'
		},
		{
			name: 'Ugo Monye',
			wiki: 'https://en.wikipedia.org/wiki/Ugo_Monye',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Tom Allen',
			wiki: 'https://en.wikipedia.org/wiki/Tom_Allen_(comedian)',
			gender: 'male'
		},
		{
			name: 'Morgana Robinson',
			wiki: 'https://en.wikipedia.org/wiki/Morgana_Robinson',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		possession: true,
		statement: 'This was my lucky mascot, Thumper. When I played for England, he had his own seat on the coach next to me and was always the last person I looked in the eye before leaving the dressing room.',
		guessingTeam: 'Lee Mack',
		person: 'Ugo Monye',
		personGuesses: {
			'Lee Mack': 'lie',
			'Morgana Robinson': 'lie',
			'Tom Allen': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'As a teenager, I could do such a good impression of my mum, I used to phone my school and tell them I was sick so I could bunk off for the day.',
		guessingTeam: 'David Mitchell',
		person: 'Morgana Robinson',
		personGuesses: {
			'David Mitchell': 'lie',
			'Sarah Greene': 'lie',
			'Ugo Monye': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'My boxing coach tells me I have a very strong left hook.',
		guessingTeam: 'David Mitchell',
		person: 'Tom Allen',
		personGuesses: {
			'David Mitchell': 'lie',
			'Sarah Greene': 'truth',
			'Ugo Monye': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Emma',
		connections: {
			'David Mitchell': 'Emma let him sound the foghorn on Britain\'s tallest lighthouse.',
			'Sarah Greene': 'After Sarah accidentally dropped Gordon the Gopher in the River Thames, Emma had to make an emergency replacement.',
			'Ugo Monye': 'When Ugo broke his arm doing something he shouldn\'t, he told Emma he just had a headache.'
		},
		personGuesses: {
			'Lee Mack': 'Ugo Monye',
			'Morgana Robinson': 'Sarah Greene',
			'Tom Allen': 'Sarah Greene'
		},
		teamGuess: 'Sarah Greene',
		truth: 'Ugo Monye'
	},
	{
		type: 'quick_fire',
		statement: 'I once caused carnage at a local dog show when I stopped to watch it, forgetting I was carrying a bag of sausages.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Sarah Greene': 'lie',
			'Ugo Monye': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 16,
	episode: 10,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
