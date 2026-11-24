import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Jimmy Carr',
			wiki: 'https://en.wikipedia.org/wiki/Jimmy_Carr',
			gender: 'male'
		},
		{
			name: 'Laura Smyth',
			wiki: 'https://en.wikipedia.org/wiki/Laura_Smyth_(comedian)',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Rustie Lee',
			wiki: 'https://en.wikipedia.org/wiki/Rustie_Lee',
			gender: 'female'
		},
		{
			name: 'Lenny Rush',
			wiki: 'https://en.wikipedia.org/wiki/Lenny_Rush',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'In our house, we don\'t have turkey for Christmas dinner. Instead I treat my family to a dish I call Santa\'s Sausage Surprise.',
		guessingTeam: 'David Mitchell',
		person: 'Rustie Lee',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jimmy Carr': 'lie',
			'Laura Smyth': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'Whilst test driving a car as a potential present for myself, I crashed it.',
		guessingTeam: 'Lee Mack',
		person: 'Jimmy Carr',
		personGuesses: {
			'Lee Mack': 'lie',
			'Lenny Rush': 'lie',
			'Rustie Lee': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once accidentally made my nan eat something she shouldn\'t have.',
		guessingTeam: 'David Mitchell',
		person: 'Lenny Rush',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jimmy Carr': 'unknown',
			'Laura Smyth': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'My kids once built a snowman that looked so creepy I went out in the middle of the night and flattened it with a hammer.',
		guessingTeam: 'Lee Mack',
		person: 'Laura Smyth',
		personGuesses: {
			'Lee Mack': 'truth',
			'Lenny Rush': 'lie',
			'Rustie Lee': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Jane and Phil',
		connections: {
			'Lee Mack': 'When Phil was stung by a jellyfish, he asked me to wee on him and the Jane asked me to stop.',
			'Lenny Rush': 'This is my Auntie Jane and my Uncle Phil. I bought them here tonight because they\'re trying to get on as many TV shows as possible.',
			'Rustie Lee': 'I went to what I thought was their wedding, only to discover it wasn\'t.'
		},
		personGuesses: {
			'David Mitchell': 'Rustie Lee',
			'Jimmy Carr': 'Rustie Lee',
			'Laura Smyth': 'Rustie Lee'
		},
		teamGuess: 'Rustie Lee',
		truth: 'Rustie Lee'
	},
	{
		type: 'quick_fire',
		statement: 'As a child, I once de-bearded the Father Christmas in Oxford Debenhams because I believed him to be my dad in disguise.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Lee Mack': 'lie',
			'Lenny Rush': 'unknown',
			'Rustie Lee': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'special',
	cast: cast,
	season: 18,
	episode: 1,
	rounds: rounds,
	score: [4, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
