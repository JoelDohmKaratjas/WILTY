import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Stephen Mangan',
			wiki: 'https://en.wikipedia.org/wiki/Stephen_Mangan',
			gender: 'male'
		},
		{
			name: 'Isy Suttie',
			wiki: 'https://en.wikipedia.org/wiki/Isy_Suttie',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Charles Dance',
			wiki: 'https://en.wikipedia.org/wiki/Charles_Dance',
			gender: 'male'
		},
		{
			name: 'Gok Wan',
			wiki: 'https://en.wikipedia.org/wiki/Gok_Wan',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Whenever I eat beans-on-toast, I always imagine I\'m a rescue helicopter and with every forkful I\'m airlifting tiny bald men on a raft to safety.',
		guessingTeam: 'Lee Mack',
		person: 'Stephen Mangan',
		personGuesses: {
			'Charles Dance': 'truth',
			'Gok Wan': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'A little chimpanzee once came to my house for tea.',
		guessingTeam: 'David Mitchell',
		person: 'Charles Dance',
		personGuesses: {
			'David Mitchell': 'truth',
			'Isy Suttie': 'undecided',
			'Stephen Mangan': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Every Sunday I spend four hours planning the 20 outfits I\'ll wear the coming week.',
		guessingTeam: 'David Mitchell',
		person: 'Gok Wan',
		personGuesses: {
			'David Mitchell': 'truth',
			'Isy Suttie': 'truth',
			'Stephen Mangan': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Because my mum deemed Scooby-Doo too scary to watch, I was only ever allowed to listen to it.',
		guessingTeam: 'Lee Mack',
		person: 'Isy Suttie',
		personGuesses: {
			'Charles Dance': 'lie',
			'Gok Wan': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Hannah',
		connections: {
			'David Mitchell': 'Pub owner who named her pub "Mitchell and Glove," and he allowed her to use his face on the pub sign.',
			'Isy Suttie': 'They competed to eat the most ants to impress a boy.',
			'Stephen Mangan': 'Together, pranked their neighbour by added an item of clothing to his washing line after he put his laundry out.'
		},
		personGuess: {
			'Charles Dance': 'Stephen Mangan',
			'Gok Wan': 'Stephen Mangan',
			'Lee Mack': 'Isy Suttie'
		},
		teamGuess: 'Stephen Mangan',
		truth: 'Isy Suttie'
	},
	{
		type: 'quick_fire',
		statement: 'When I was seven, I had to be a bridesmaid at my auntie\'s wedding, as one of the girls who was supposed to do it was ill and the dress was a perfect fit.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Isy Suttie': 'lie',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 7,
	episode: 2,
	rounds: rounds,
	score: [5, 1],
	liarOfTheWeek: 'Stephen Mangan'
} as const satisfies StandardEpisode<typeof cast>
