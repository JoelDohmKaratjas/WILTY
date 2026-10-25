import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Victoria Coren Mitchell',
			wiki: 'https://en.wikipedia.org/wiki/Victoria_Coren_Mitchell',
			gender: 'female'
		},
		{
			name: 'Greg James',
			wiki: 'https://en.wikipedia.org/wiki/Greg_James',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Clare Balding',
			wiki: 'https://en.wikipedia.org/wiki/Clare_Balding',
			gender: 'female'
		},
		{
			name: 'Asim Chaudhry',
			wiki: 'https://en.wikipedia.org/wiki/Asim_Chaudhry',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'To help me relax, there is nothing I like more than spending up to four hours in what I like to call my special baths.',
		guessingTeam: 'Lee Mack',
		person: 'Greg James',
		personGuesses: {
			'Asim Chaudhry': 'lie',
			'Clare Balding': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'To make sure I went down as an all-time school legend, I deliberately scored a spectacular own goal in our end-of-term school cup final.',
		guessingTeam: 'David Mitchell',
		person: 'Asim Chaudhry',
		personGuesses: {
			'David Mitchell': 'truth',
			'Greg James': 'truth',
			'Victoria Coren Mitchell': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		possession: true,
		statement: 'This is Dexter, and when I judged a \'Dogs who look like celebrities\' competition, he was the winner.',
		guessingTeam: 'David Mitchell',
		person: 'Clare Balding',
		personGuesses: {
			'David Mitchell': 'truth',
			'Greg James': 'truth',
			'Victoria Coren Mitchell': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Stewart',
		connections: {
			'David Mitchell': 'He is the lollipop man whose lollipop I held when he was suddenly called away on non-lollipop related business.',
			'Greg James': 'When I opened his butcher shop, he paid me in sausages.',
			'Victoria Coren Mitchell': 'He once laughed so hard at something I said on Only Connect, he passed out.'
		},
		personGuess: {
			'Asim Chaudhry': 'Victoria Coren Mitchell',
			'Clare Balding': 'Greg James',
			'Lee Mack': 'Victoria Coren Mitchell'
		},
		teamGuess: 'Victoria Coren Mitchell',
		truth: 'Victoria Coren Mitchell'
	},
	{
		type: 'quick_fire',
		statement: 'Victoria doesn\'t know this, but on those very rare occasions that she does something that annoys me, I get my own back by sneaking upstairs and moving her bookmarks.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Asim Chaudhry': 'truth',
			'Clare Balding': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 13,
	episode: 2,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
