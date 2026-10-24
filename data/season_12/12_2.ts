import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Rylan Clark-Neal',
			wiki: 'https://en.wikipedia.org/wiki/Rylan_Clark',
			gender: 'male'
		},
		{
			name: 'Mary Portas',
			wiki: 'https://en.wikipedia.org/wiki/Mary_Portas',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Sara Pascoe',
			wiki: 'https://en.wikipedia.org/wiki/Sara_Pascoe',
			gender: 'female'
		},
		{
			name: 'Paul Sinha',
			wiki: 'https://en.wikipedia.org/wiki/Paul_Sinha',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I was once mugged by a fox.',
		guessingTeam: 'Lee Mack',
		person: 'Rylan Clark-Neal',
		personGuesses: {
			'Lee Mack': 'lie',
			'Paul Sinha': 'lie',
			'Sara Pascoe': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		possession: true,
		statement: 'I once bought a chest of drawers from my bedroom online. I realised I\'d made a terrible mistake when this arrived.',
		guessingTeam: 'David Mitchell',
		person: 'Sara Pascoe',
		personGuesses: {
			'David Mitchell': 'lie',
			'Mary Portas': 'lie',
			'Rylan Clark-Neal': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Every night, to cram in as much learning as possible, I read a book while simultaneously listening to a completely different audiobook.',
		guessingTeam: 'David Mitchell',
		person: 'Paul Sinha',
		personGuesses: {
			'David Mitchell': 'lie',
			'Mary Portas': 'truth',
			'Rylan Clark-Neal': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Paul',
		connections: {
			'David Mitchell': 'While browsing in a bathroom showroom, he persuade me to hop in a tub with him to test whether it would fit him and his wife.',
			'Mary Portas': 'Every Christmas, I sing carols to Paul\'s cows.',
			'Rylan Clark-Neal': 'Paul is my plumber and he came over to fix a leak, but ended up cutting my hair.'
		},
		personGuess: {
			'Lee Mack': 'Mary Portas',
			'Paul Sinha': 'Rylan Clark-Neal',
			'Sara Pascoe': 'Mary Portas'
		},
		teamGuess: 'Mary Portas',
		truth: 'Mary Portas'
	},
	{
		type: 'quick_fire',
		statement: 'I I have learnt one thing from my many years in business, it is this: never trust a man in a floral shirt.',
		guessingTeam: 'Lee Mack',
		person: 'Mary Portas',
		personGuesses: {
			'Lee Mack': 'lie',
			'Paul Sinha': 'lie',
			'Sara Pascoe': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 12,
	episode: 2,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
