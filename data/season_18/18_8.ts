import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Kadiff Kirwan',
			wiki: 'https://en.wikipedia.org/wiki/Kadiff_Kirwan',
			gender: 'male'
		},
		{
			name: 'Sara Pascoe',
			wiki: 'https://en.wikipedia.org/wiki/Sara_Pascoe',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'John Cooper Clarke',
			wiki: 'https://en.wikipedia.org/wiki/John_Cooper_Clarke',
			gender: 'male'
		},
		{
			name: 'Lucia Keskin',
			wiki: 'https://en.wikipedia.org/wiki/Lucia_Keskin',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I recently booked a sleep consultant, but stood them down when they told me what they were planning to do.',
		guessingTeam: 'Lee Mack',
		person: 'Sara Pascoe',
		personGuesses: {
			'John Cooper Clarke': 'lie',
			'Lee Mack': 'lie',
			'Lucia Keskin': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once got fired from an advertising campaign for being too honest about the product.',
		guessingTeam: 'David Mitchell',
		person: 'John Cooper Clarke',
		personGuesses: {
			'David Mitchell': 'truth',
			'Kadiff Kirwan': 'truth',
			'Sara Pascoe': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once accidentally gate-crashed the BBC News.',
		guessingTeam: 'David Mitchell',
		person: 'Lucia Keskin',
		personGuesses: {
			'David Mitchell': 'truth',
			'Kadiff Kirwan': 'truth',
			'Sara Pascoe': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Mary',
		connections: {
			'David Mitchell': 'I was responsible for breaking one park of Mary\'s ankle, and you, Lee, were responsible for breaking another.',
			'Kadiff Kirwan': 'When I pretended to deliver a baby, she actually passed out.',
			'Sara Pascoe': 'As a schoolgirl, I thought that my magical powers had made Mary fall into a lake.'
		},
		personGuesses: {
			'John Cooper Clarke': 'David Mitchell',
			'Lee Mack': 'Kadiff Kirwan',
			'Lucia Keskin': 'undecided'
		},
		teamGuess: 'Kadiff Kirwan',
		truth: 'David Mitchell'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'This is my poster. I bought it to remind me of the time I was asked to leave my local pool for breaking all nine rules in one visit.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Kadiff Kirwan': 'lie',
			'Sara Pascoe': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 18,
	episode: 8,
	rounds: rounds,
	score: [5, 0],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
