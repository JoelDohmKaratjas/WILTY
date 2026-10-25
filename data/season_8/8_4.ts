import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Heston Blumenthal',
			wiki: 'https://en.wikipedia.org/wiki/Heston_Blumenthal',
			gender: 'male'
		},
		{
			name: 'Miles Jupp',
			wiki: 'https://en.wikipedia.org/wiki/Miles_Jupp',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Ed Byrne',
			wiki: 'https://en.wikipedia.org/wiki/Ed_Byrne_(comedian)',
			gender: 'male'
		},
		{
			name: 'Emilia Fox',
			wiki: 'https://en.wikipedia.org/wiki/Emilia_Fox',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'After a visit to a school fate, I had to tell my neighbour that their cat had been run over while my face was painted like a kitten.',
		guessingTeam: 'Lee Mack',
		person: 'Miles Jupp',
		personGuesses: {
			'Ed Byrne': 'lie',
			'Emilia Fox': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once found a steak pie down my trousers.',
		guessingTeam: 'David Mitchell',
		person: 'Ed Byrne',
		personGuesses: {
			'David Mitchell': 'truth',
			'Heston Blumenthal': 'unknown',
			'Miles Jupp': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Rodney',
		connections: {
			'David Mitchell': 'He had to retrieve my shoe when a drunk man threw it at the skittles in a bowling alley.',
			'Heston Blumenthal': 'He helped me break the world record for the most sit-ups in two minutes.',
			'Miles Jupp': 'I was so excited to see him driving my old car that I gave him a cheery honk and he drove into a ledge.'
		},
		personGuesses: {
			'Ed Byrne': 'Heston Blumenthal',
			'Emilia Fox': 'undecided', // Heston or David
			'Lee Mack': 'Heston Blumenthal'
		},
		teamGuess: 'Heston Blumenthal',
		truth: 'Heston Blumenthal'
	},
	{
		type: 'quick_fire',
		statement: 'Every time I make a cup of tea, I pretend I\'m in the world darts final and test out my skill at throwing the teabag in the cup.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'truth',
			'Heston Blumenthal': 'undecided',
			'Miles Jupp': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'There is something about me that elephants like. Every time I visit a zoo, they thunder towards me and point their trunks in my direction.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Ed Byrne': 'lie',
			'Emilia Fox': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 8,
	episode: 4,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: 'Miles Jupp'
} as const satisfies StandardEpisode<typeof cast>
