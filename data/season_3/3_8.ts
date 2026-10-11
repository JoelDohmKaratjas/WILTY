import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Reece Shearsmith',
			wiki: 'https://en.wikipedia.org/wiki/Reece_Shearsmith',
			gender: 'male'
		},
		{
			name: 'Trinny Woodall',
			wiki: 'https://en.wikipedia.org/wiki/Trinny_Woodall',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Michael Ball',
			wiki: 'https://en.wikipedia.org/wiki/Michael_Ball',
			gender: 'male'
		},
		{
			name: 'Charlie Brooker',
			wiki: 'https://en.wikipedia.org/wiki/Charlie_Brooker',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I have a three-part ritual I have to adhere to before I go on stage.',
		guessingTeam: 'David Mitchell',
		person: 'Michael Ball',
		personGuesses: {
			'David Mitchell': 'lie',
			'Reece Shearsmith': 'lie',
			'Trinny Woodall': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Marks & Spencer\'s mannequins are based on my body.',
		guessingTeam: 'Lee Mack',
		person: 'Trinny Woodall',
		personGuesses: {
			'Charlie Brooker': 'unknown',
			'Lee Mack': 'lie',
			'Michael Ball': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'For a summer, I worked at a funeral director\'s that offered themed funerals.',
		guessingTeam: 'Lee Mack',
		person: 'Reece Shearsmith',
		personGuesses: {
			'Charlie Brooker': 'lie',
			'Lee Mack': 'lie',
			'Michael Ball': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'For six years, I pretended to a girlfriend that I was partially deaf.',
		guessingTeam: 'David Mitchell',
		person: 'Charlie Brooker',
		personGuesses: {
			'David Mitchell': 'truth',
			'Reece Shearsmith': 'truth',
			'Trinny Woodall': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		statement: 'Christina Aguilera once followed a strict diet where every meal had 4 food items: 1 crunchy, 1 soft, 1 hot, 1 cold.',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Charlie Brooker': 'truth',
			'Lee Mack': 'truth',
			'Michael Ball': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Donna',
		connections: {
			'Charlie Brooker': 'This is Donna who\'s teaching me basic home maintenance.',
			'Lee Mack': 'This is Donna and she saved my life when she threw me a lifebelt after I fell off my boat.',
			'Michael Ball': 'This is Donna; she has been my no. 1 super fan since she was 17 - she even has a toilet seat cover with my face on it.'
		},
		personGuess: {
			'David Mitchell': 'Lee Mack',
			'Reece Shearsmith': 'Lee Mack',
			'Trinny Woodall': 'Lee Mack'
		},
		teamGuess: 'Lee Mack',
		truth: 'Michael Ball'
	},
	{
		type: 'quick_fire',
		statement: 'Three members of the Cabinet subscribe to my Twitter feed.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Charlie Brooker': 'lie',
			'Lee Mack': 'truth',
			'Michael Ball': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I kept my car running for two months by cracking my egg into it every day.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Reece Shearsmith': 'lie',
			'Trinny Woodall': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 3,
	episode: 8,
	rounds: rounds,
	score: [2, 9],
	liarOfTheWeek: 'Michael Ball'
} as const satisfies StandardEpisode<typeof cast>
