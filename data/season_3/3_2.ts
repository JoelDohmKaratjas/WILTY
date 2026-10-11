import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Fern Britton',
			wiki: 'https://en.wikipedia.org/wiki/Fern_Britton',
			gender: 'female'
		},
		{
			name: 'Stephen Mangan',
			wiki: 'https://en.wikipedia.org/wiki/Stephen_Mangan',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Reginald D. Hunter',
			wiki: 'https://en.wikipedia.org/wiki/Reginald_D._Hunter',
			gender: 'male'
		},
		{
			name: 'Ken Livingstone',
			wiki: 'https://en.wikipedia.org/wiki/Ken_Livingstone',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'The D in my name stands for Delicious.',
		guessingTeam: 'David Mitchell',
		person: 'Reginald D. Hunter',
		personGuesses: {
			'David Mitchell': 'lie',
			'Fern Britton': 'lie',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once guessed the exact number of sweets in a Mini Cooper and was awarded a prize by Britain\'s tallest man.',
		guessingTeam: 'Lee Mack',
		person: 'Stephen Mangan',
		personGuesses: {
			'Ken Livingstone': 'lie',
			'Lee Mack': 'lie',
			'Reginald D. Hunter': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I was the first person in the world to breed the Congolese frog Hymenochirus Curtipes in captivity.',
		guessingTeam: 'David Mitchell',
		person: 'Ken Livingstone',
		personGuesses: {
			'David Mitchell': 'truth',
			'Fern Britton': 'truth', // originally lie but asked the audience
			'Stephen Mangan': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		statement: 'The Archbishop of Canterbury once endorsed a Cockney version of the Bible.',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'lie',
			'Fern Britton': 'lie',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Gordon',
		connections: {
			'David Mitchell': 'He recently sold me a hamster that died the very next day.',
			'Fern Britton': 'He\'s the subject of my life drawing class and I have painted him naked 3 times.',
			'Stephen Mangan': 'We were in a prog rock band called Aragorn and recorded an album called the Wizard\'s Dream.'
		},
		personGuess: {
			'Ken Livingstone': 'Stephen Mangan',
			'Lee Mack': 'Stephen Mangan',
			'Reginald D. Hunter': 'Stephen Mangan'
		},
		teamGuess: 'Stephen Mangan',
		truth: 'Stephen Mangan'
	},
	{
		type: 'quick_fire',
		statement: 'Last year I was ordered to leave Blackpool Tower after I threw a sausage roll off the top.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Fern Britton': 'lie',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'As a child at my grandparents\' house I had a little bell I would ring if I wanted anything.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Ken Livingstone': 'truth',
			'Lee Mack': 'truth',
			'Reginald D. Hunter': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'This is my tea cosy. I take it absolutely everywhere with me because I can\'t stand a cold teapot.',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'Fern Britton',
		personGuesses: {
			'Ken Livingstone': 'lie',
			'Lee Mack': 'lie',
			'Reginald D. Hunter': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 3,
	episode: 2,
	rounds: rounds,
	score: [5, 5],
	liarOfTheWeek: 'Fern Britton'
} as const satisfies StandardEpisode<typeof cast>
