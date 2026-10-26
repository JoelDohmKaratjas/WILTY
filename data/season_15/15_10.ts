import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Sam Quek',
			wiki: 'https://en.wikipedia.org/wiki/Sam_Quek',
			gender: 'female'
		},
		{
			name: 'Joe Thomas',
			wiki: 'https://en.wikipedia.org/wiki/Joe_Thomas_(actor)',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Jo Brand',
			wiki: 'https://en.wikipedia.org/wiki/Jo_Brand',
			gender: 'female'
		},
		{
			name: 'Bobby Seagull',
			wiki: 'https://en.wikipedia.org/wiki/Bobby_Seagull',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'My husband and I have agreed that the hour between 7 and 8pm is the only time we\'re allowed to gripe about our various aches and pains. We call this hour The Moan Zone.',
		guessingTeam: 'David Mitchell',
		person: 'Jo Brand',
		personGuesses: {
			'David Mitchell': 'truth',
			'Joe Thomas': 'truth',
			'Sam Quek': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'The morning after winning Olympic gold, I woke up with a cheeseburger down my bra.',
		guessingTeam: 'Lee Mack',
		person: 'Sam Quek',
		personGuesses: {
			'Bobby Seagull': 'lie',
			'Jo Brand': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Whenever I go to a nightclub, I always take a book with me. So when the dancing gets a bit much, I can enjoy a good read.',
		guessingTeam: 'David Mitchell',
		person: 'Bobby Seagull',
		personGuesses: {
			'David Mitchell': 'lie',
			'Joe Thomas': 'lie',
			'Sam Quek': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'It once took me five-and-a-half hours to cook macaroni cheese.',
		guessingTeam: 'Lee Mack',
		person: 'Joe Thomas',
		personGuesses: {
			'Bobby Seagull': 'truth',
			'Jo Brand': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Graham',
		connections: {
			'Bobby Seagull': 'When Bobby won his competition, his prize was a trolley dash through a pound shop.',
			'Jo Brand': 'When her landlady was trying to sell Jo\'s flat, she asked Graham to bang a bongo to ward off any potential buyers.',
			'Lee Mack': 'All Graham\'s bees flew away while Lee was looking after them.'
		},
		personGuesses: {
			'David Mitchell': 'Jo Brand',
			'Joe Thomas': 'Jo Brand',
			'Sam Quek': 'Jo Brand'
		},
		teamGuess: 'Jo Brand',
		truth: 'Bobby Seagull'
	},
	{
		type: 'quick_fire',
		statement: 'I once ordered myself a cake and, in doing so, ruined a complete stranger\'s party.',
		guessingTeam: 'David Mitchell',
		person: 'Jo Brand',
		personGuesses: {
			'David Mitchell': 'truth',
			'Joe Thomas': 'truth',
			'Sam Quek': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 15,
	episode: 10,
	rounds: rounds,
	score: [1, 5],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
