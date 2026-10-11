import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Nigel Havers',
			wiki: 'https://en.wikipedia.org/wiki/Nigel_Havers',
			gender: 'male'
		},
		{
			name: 'Gregg Wallace',
			wiki: 'https://en.wikipedia.org/wiki/Gregg_Wallace',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Charlie Brooker',
			wiki: 'https://en.wikipedia.org/wiki/Charlie_Brooker',
			gender: 'male'
		},
		{
			name: 'Nina Wadia',
			wiki: 'https://en.wikipedia.org/wiki/Nina_Wadia',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I always make toast by ironing the bread, it tastes much better that way.',
		guessingTeam: 'Lee Mack',
		person: 'Gregg Wallace',
		personGuesses: {
			'Charlie Brooker': 'lie',
			'Lee Mack': 'lie',
			'Nina Wadia': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once refused to pick up my girlfriend from the station because I couldn\'t bear to step over a spider that was between me and my front door.',
		guessingTeam: 'David Mitchell',
		person: 'Charlie Brooker',
		personGuesses: {
			'David Mitchell': 'lie',
			'Gregg Wallace': 'lie',
			'Nigel Havers': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once went on a date with a flamenco dancer who turned out to be a man.',
		guessingTeam: 'Lee Mack',
		person: 'Nigel Havers',
		personGuesses: {
			'Charlie Brooker': 'lie',
			'Lee Mack': 'lie',
			'Nina Wadia': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'John',
		connections: {
			'Charlie Brooker': 'When he was 17, he presented John with a dustbin on Valentine\'s Day for John\'s daughter.',
			'Lee Mack': 'Previous owner of Lee\'s house, who still comes around with his deck chair to sit in his garden on sunny days.',
			'Nina Wadia': 'First person to have a drink at the Vic, and the first person ever to have a curry at the Argee Bhajee.'
		},
		personGuess: {
			'David Mitchell': 'Nina Wadia',
			'Gregg Wallace': 'unknown',
			'Nigel Havers': 'unknown'
		},
		teamGuess: 'Nina Wadia',
		truth: 'Charlie Brooker'
	},
	{
		type: 'quick_fire',
		statement: 'Every Sunday, I treat myself to a relaxing bath with 3 squirts of Fairy Liquid in it.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Gregg Wallace': 'lie',
			'Nigel Havers': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'My parents recently forced me to have a new kitchen fitted because my flat embarrassed them.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Charlie Brooker': 'truth',
			'Lee Mack': 'truth',
			'Nina Wadia': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'This is one of my history books. I read them in the sauna to make them look old.',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'Gregg Wallace',
		personGuesses: {
			'Charlie Brooker': 'lie',
			'Lee Mack': 'lie',
			'Nina Wadia': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 5,
	episode: 4,
	rounds: rounds,
	score: [6, 6],
	liarOfTheWeek: 'Nigel Havers'
} as const satisfies StandardEpisode<typeof cast>
