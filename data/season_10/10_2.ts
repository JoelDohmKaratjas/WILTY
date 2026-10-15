import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Nadiya Hussain',
			wiki: 'https://en.wikipedia.org/wiki/Nadiya_Hussain',
			gender: 'female'
		},
		{
			name: 'Michael Smiley',
			wiki: 'https://en.wikipedia.org/wiki/Michael_Smiley',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Diane Morgan',
			wiki: 'https://en.wikipedia.org/wiki/Diane_Morgan',
			gender: 'female'
		},
		{
			name: 'Bob Mortimer',
			wiki: 'https://en.wikipedia.org/wiki/Bob_Mortimer',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I have developed a technique to help me deal with annoying idiots.',
		guessingTeam: 'Lee Mack',
		person: 'Michael Smiley',
		personGuesses: {
			'Bob Mortimer': 'lie',
			'Diane Morgan': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once dumped a boyfriend because I didn\'t like the way he fell down the stairs.',
		guessingTeam: 'David Mitchell',
		person: 'Diane Morgan',
		personGuesses: {
			'David Mitchell': 'truth',
			'Michael Smiley': 'lie',
			'Nadiya Hussain': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'To celebrate her last birthday, Mary Berry and I went tenpin bowling.',
		guessingTeam: 'Lee Mack',
		person: 'Nadiya Hussain',
		personGuesses: {
			'Bob Mortimer': 'lie',
			'Diane Morgan': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Michael',
		connections: {
			'Bob Mortimer': 'After cutting his hair, I got a job on a campsite as a hairdresser.',
			'Diane Morgan': 'I once punched him in the face because I thought he was a ghost.',
			'Lee Mack': 'Together, we helped free a donkey that had trapped itself in the cubicle of a seaside toilet.'
		},
		personGuess: {
			'David Mitchell': 'Diane Morgan',
			'Michael Smiley': 'Bob Mortimer',
			'Nadiya Hussain': 'Diane Morgan'
		},
		teamGuess: 'Diane Morgan',
		truth: 'Bob Mortimer'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'I\'ve recently got into baking and here is a cake I made just yesterday, specially for David.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'truth',
			'Michael Smiley': 'truth',
			'Nadiya Hussain': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 10,
	episode: 2,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
