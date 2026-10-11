import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Phil Daniels',
			wiki: 'https://en.wikipedia.org/wiki/Phil_Daniels',
			gender: 'male'
		},
		{
			name: 'Michael McIntyre',
			wiki: 'https://en.wikipedia.org/wiki/Michael_McIntyre',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Graeme Garden',
			wiki: 'https://en.wikipedia.org/wiki/Graeme_Garden',
			gender: 'male'
		},
		{
			name: 'Lauren Laverne',
			wiki: 'https://en.wikipedia.org/wiki/Lauren_Laverne',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'In real life, my next door neighbour is called Ian Beale.',
		guessingTeam: 'Lee Mack',
		person: 'Phil Daniels',
		personGuesses: {
			'Graeme Garden': 'lie',
			'Lauren Laverne': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I have five pigs, all named after my favourite newsreaders.',
		guessingTeam: 'David Mitchell',
		person: 'Graeme Garden',
		personGuesses: {
			'David Mitchell': 'lie',
			'Michael McIntyre': 'truth',
			'Phil Daniels': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'For two weeks I drove a car that could only turn left.',
		guessingTeam: 'Lee Mack',
		person: 'Michael McIntyre',
		personGuesses: {
			'Graeme Garden': 'lie',
			'Lauren Laverne': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		statement: 'Bono once paid British Airways $1,700 to have his favourite trilby flown first class to a concert in Italy.',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'lie',
			'Michael McIntyre': 'lie',
			'Phil Daniels': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		statement: 'Mick Hucknall wears trousers called \'bum boosters\', which have a metal lining to add definition to his rear.',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Graeme Garden': 'truth',
			'Lauren Laverne': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Roger',
		connections: {
			'Graeme Garden': 'Roger was presented with a prize by Graeme in a giant vegetable competition.',
			'Lauren Laverne': 'Roger removed her tattoo of Fonzie (from Happy Days).',
			'Lee Mack': 'Roger rings the bells at the local church with Lee.'
		},
		personGuess: {
			'David Mitchell': 'Graeme Garden',
			'Michael McIntyre': 'Graeme Garden', // originally Lauren
			'Phil Daniels': 'Lauren Laverne'
		},
		teamGuess: 'Graeme Garden',
		truth: 'Graeme Garden'
	},
	{
		type: 'quick_fire',
		statement: 'For six months, I cleaned the windows of the Empire State Building.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Michael McIntyre': 'truth',
			'Phil Daniels': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'When I was little, I used to dress myself as an 18th century nobleman.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Graeme Garden': 'truth',
			'Lauren Laverne': 'truth',
			'Lee Mack': 'truth' // didn't really think it was true
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I got my head stuck in railings three times in the same week.',
		guessingTeam: 'David Mitchell',
		person: 'Lauren Laverne',
		personGuesses: {
			'David Mitchell': 'truth',
			'Michael McIntyre': 'unknown',
			'Phil Daniels': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'These [pictured right] are the slippers Sting sent me for my last birthday.',
		possession: true, // not officially a possession
		guessingTeam: 'Lee Mack',
		person: 'Phil Daniels',
		personGuesses: {
			'Graeme Garden': 'truth',
			'Lauren Laverne': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 2,
	episode: 8,
	rounds: rounds,
	score: [9, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
