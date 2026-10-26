import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Raj Bisram',
			wiki: 'https://en.wikipedia.org/wiki/Raj_Bisram',
			gender: 'male'
		},
		{
			name: 'Gemma Cairney',
			wiki: 'https://en.wikipedia.org/wiki/Gemma_Cairney',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Sophie Hermann',
			wiki: 'https://en.wikipedia.org/wiki/List_of_Made_in_Chelsea_cast_members#Former_cast',
			gender: 'female'
		},
		{
			name: 'Josh Widdicombe',
			wiki: 'https://en.wikipedia.org/wiki/Josh_Widdicombe',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		possession: true,
		statement: 'This is my woolly hat. I can\'t wear it because whenever my ears get warm, I fall asleep.',
		guessingTeam: 'David Mitchell',
		person: 'Josh Widdicombe',
		personGuesses: {
			'David Mitchell': 'truth',
			'Gemma Cairney': 'lie',
			'Raj Bisram': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I used to practise skiing by strapping myself to the roof of a speeding car.',
		guessingTeam: 'Lee Mack',
		person: 'Raj Bisram',
		personGuesses: {
			'Josh Widdicombe': 'lie',
			'Lee Mack': 'lie',
			'Sophie Hermann': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Last year at a charity dinner, I asked Prince William to fetch me a drink because I thought he was a waiter.',
		guessingTeam: 'David Mitchell',
		person: 'Sophie Hermann',
		personGuesses: {
			'David Mitchell': 'lie',
			'Gemma Cairney': 'lie',
			'Raj Bisram': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Sean',
		connections: {
			'David Mitchell': 'As a boy, I would only allow Sean to cut my hair dressed as Zorro.',
			'Gemma Cairney': 'Sean blew up my Wotsits at school.',
			'Raj Bisram': 'I used to whip off Sean\'s shirt in public for money.'
		},
		personGuesses: {
			'Josh Widdicombe': 'Gemma Cairney',
			'Lee Mack': 'Gemma Cairney',
			'Sophie Hermann': 'Gemma Cairney'
		},
		teamGuess: 'Gemma Cairney',
		truth: 'Raj Bisram'
	},
	{
		type: 'quick_fire',
		statement: 'I was pecked in the eye twice while closely inspecting a cuckoo clock at precisely 2pm.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Gemma Cairney': 'lie',
			'Raj Bisram': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'Even though we use the same brand, I insist my wife and I have separate tubes of toothpaste because the way she squeezes hers is just plain wrong.',
		guessingTeam: 'David Mitchell',
		person: 'Josh Widdicombe',
		personGuesses: {
			'David Mitchell': 'truth',
			'Gemma Cairney': 'truth',
			'Raj Bisram': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 14,
	episode: 4,
	rounds: rounds,
	score: [4, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
