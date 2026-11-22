import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Will Mellor',
			wiki: 'https://en.wikipedia.org/wiki/Will_Mellor',
			gender: 'male'
		},
		{
			name: 'Kimberley Walsh',
			wiki: 'https://en.wikipedia.org/wiki/Kimberley_Walsh',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Sam Campbell',
			wiki: 'https://en.wikipedia.org/wiki/Sam_Campbell_(comedian)',
			gender: 'male'
		},
		{
			name: 'Charlene White',
			wiki: 'https://en.wikipedia.org/wiki/Charlene_White',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'For three weeks, I had a job dancing in a shop window.',
		guessingTeam: 'Lee Mack',
		person: 'Will Mellor',
		personGuesses: {
			'Charlene White': 'truth',
			'Lee Mack': 'truth',
			'Sam Campbell': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Bono once fixed the flush on my downstairs loo.',
		guessingTeam: 'Lee Mack',
		person: 'Kimberley Walsh',
		personGuesses: {
			'Charlene White': 'lie',
			'Lee Mack': 'lie',
			'Sam Campbell': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Michael',
		connections: {
			'Charlene White': 'Michael once buttered my finger when I got Lorraine Kelly\'s wedding ring stuck on it.',
			'Lee Mack': 'Michael is a master watchmaker, and I am his apprentice.',
			'Sam Campbell': 'Michael\'s the cab driver who made me late because he stopped mid-journey to play the trumpet.'
		},
		personGuesses: {
			'David Mitchell': 'Lee Mack',
			'Kimberley Walsh': 'Lee Mack',
			'Will Mellor': 'Charlene White'
		},
		teamGuess: 'Lee Mack',
		truth: 'Lee Mack'
	},
	{
		type: 'quick_fire',
		statement: 'I have taken to watching television in the evenings, whilst holding a tambourine. That way, when I inevitably nod off, it hits the floor and wakes me up.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Charlene White': 'lie',
			'Lee Mack': 'lie',
			'Sam Campbell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I was once a body double for a head lice advert.',
		guessingTeam: 'David Mitchell',
		person: 'Sam Campbell',
		personGuesses: {
			'David Mitchell': 'lie',
			'Kimberley Walsh': 'lie',
			'Will Mellor': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 17,
	episode: 10,
	rounds: rounds,
	score: [1, 4],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
