import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Raj Bisram',
			wiki: 'https://en.wikipedia.org/wiki/Raj_Bisram',
			gender: 'male'
		},
		{
			name: 'Deborah Frances-White',
			wiki: 'https://en.wikipedia.org/wiki/Deborah_Frances-White',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Stephen Mulhern',
			wiki: 'https://en.wikipedia.org/wiki/Stephen_Mulhern',
			gender: 'male'
		},
		{
			name: 'Jenny Ryan',
			wiki: 'https://en.wikipedia.org/wiki/Jenny_Ryan',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Very few people know this, but for five months in 1998, I appeared every week on Noel\'s House Party as the man inside Mr Blobby.',
		guessingTeam: 'David Mitchell',
		person: 'Stephen Mulhern',
		personGuesses: {
			'David Mitchell': 'truth',
			'Deborah Frances-White': 'truth',
			'Raj Bisram': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'When an earthquake struck the restaurant I was in, I mistook the shaking people for excitable diners.',
		guessingTeam: 'David Mitchell',
		person: 'Jenny Ryan',
		personGuesses: {
			'David Mitchell': 'truth',
			'Deborah Frances-White': 'truth',
			'Raj Bisram': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Melissa',
		connections: {
			'David Mitchell': 'She sprayed him with a Super Soaker when she mistook him for a fox.',
			'Deborah Frances-White': 'They recently discovered they shared the same naked cleaner.',
			'Raj Bisram': 'She caught him cuddling her car.'
		},
		personGuesses: {
			'Jenny Ryan': 'Deborah Frances-White',
			'Lee Mack': 'David Mitchell',
			'Stephen Mulhern': 'Raj Bisram'
		},
		teamGuess: 'Deborah Frances-White',
		truth: 'Deborah Frances-White'
	},
	{
		type: 'quick_fire',
		statement: 'Last year, after getting lost on a ramble, I got so thirsty I was forced to drink puddle water, which I purified by filtering through my hiking sock.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Deborah Frances-White': 'lie',
			'Raj Bisram': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I once turned down £1,000 to eat a spoonful of Spam.',
		guessingTeam: 'David Mitchell',
		person: 'Stephen Mulhern',
		personGuesses: {
			'David Mitchell': 'truth',
			'Deborah Frances-White': 'truth',
			'Raj Bisram': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 15,
	episode: 9,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
