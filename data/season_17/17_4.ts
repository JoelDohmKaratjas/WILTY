import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Charlie Brooker',
			wiki: 'https://en.wikipedia.org/wiki/Charlie_Brooker',
			gender: 'male'
		},
		{
			name: 'Shaparak Khorsandi',
			wiki: 'https://en.wikipedia.org/wiki/Shaparak_Khorsandi',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Prof. Hannah Fry',
			wiki: 'https://en.wikipedia.org/wiki/Hannah_Fry',
			gender: 'female'
		},
		{
			name: 'Danny Jones',
			wiki: 'https://en.wikipedia.org/wiki/Danny_Jones',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'On an American tour, I was repeatedly stopped by customs officials because I\'d been pranked by Rod Stewart.',
		guessingTeam: 'David Mitchell',
		person: 'Danny Jones',
		personGuesses: {
			'Charlie Brooker': 'lie',
			'David Mitchell': 'truth',
			'Shaparak Khorsandi': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once unwittingly dated an international drug smuggler.',
		guessingTeam: 'David Mitchell',
		person: 'Prof. Hannah Fry',
		personGuesses: {
			'Charlie Brooker': 'truth',
			'David Mitchell': 'undecided',
			'Shaparak Khorsandi': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Andrew',
		connections: {
			'Charlie Brooker': 'Andrew offered to cryogenically freeze Charlie after his death.',
			'David Mitchell': 'David, last year, had such fun riding a zip wire that Andrew got him a T-shirt with his beaming face on it.',
			'Shaparak Khorsandi': 'Andrew\'d assumed Shaparak had run off from their date but she actually got stuck in the toilet.'
		},
		personGuesses: {
			'Danny Jones': 'Charlie Brooker',
			'Lee Mack': 'Charlie Brooker',
			'Prof. Hannah Fry': 'Shaparak Khorsandi'
		},
		teamGuess: 'Charlie Brooker',
		truth: 'Shaparak Khorsandi'
	},
	{
		type: 'quick_fire',
		statement: 'I was 40 before I realised that raisins are in fact grapes.',
		guessingTeam: 'Lee Mack',
		person: 'Charlie Brooker',
		personGuesses: {
			'Danny Jones': 'lie',
			'Lee Mack': 'truth',
			'Prof. Hannah Fry': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'This is a Rubik\'s Cube. Since last series, I\'ve learned to solve it in under a minute. If you don\'t believe me, I\'ll do it now with my hands concealed beneath the desk, as soon as Rob says "Go."',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Charlie Brooker': 'truth',
			'David Mitchell': 'truth',
			'Shaparak Khorsandi': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 17,
	episode: 4,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
