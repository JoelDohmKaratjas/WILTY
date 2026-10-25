import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Vernon Kay',
			wiki: 'https://en.wikipedia.org/wiki/Vernon_Kay',
			gender: 'male'
		},
		{
			name: 'Dara Ó Briain',
			wiki: 'https://en.wikipedia.org/wiki/Dara_%C3%93_Briain',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Rhod Gilbert',
			wiki: 'https://en.wikipedia.org/wiki/Rhod_Gilbert',
			gender: 'male'
		},
		{
			name: 'Denise van Outen',
			wiki: 'https://en.wikipedia.org/wiki/Denise_van_Outen',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'In nightclubs, in order to impress the ladies, I used to break into my special catwalk move.',
		guessingTeam: 'Lee Mack',
		person: 'Dara Ó Briain',
		personGuesses: {
			'Denise van Outen': 'truth',
			'Lee Mack': 'truth',
			'Rhod Gilbert': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once got a tattoo because I was told that it would disappear after three years.',
		guessingTeam: 'David Mitchell',
		person: 'Denise van Outen',
		personGuesses: {
			'Dara Ó Briain': 'lie',
			'David Mitchell': 'lie',
			'Vernon Kay': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Mel',
		connections: {
			'Dara Ó Briain': 'They were stargazing, when they were quizzed by the police, who thought they were \'Peeping Toms\'.',
			'David Mitchell': 'Postman who retrieved his phone from postbox.',
			'Vernon Kay': 'Was rescued from almost blowing up a Banana factory.'
		},
		personGuesses: {
			'Denise van Outen': 'Dara Ó Briain',
			'Lee Mack': 'Dara Ó Briain',
			'Rhod Gilbert': 'Vernon Kay'
		},
		teamGuess: 'Dara Ó Briain',
		truth: 'Vernon Kay'
	},
	{
		type: 'quick_fire',
		statement: 'One of the codes I live my life by is that my appearance should be in no way noteworthy. But then again, not so unnoteworthy as to be, in itself, noteworthy.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Denise van Outen': 'truth',
			'Lee Mack': 'truth',
			'Rhod Gilbert': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I once dug up my dead hamster and gave it a wash.',
		guessingTeam: 'David Mitchell',
		person: 'Rhod Gilbert',
		personGuesses: {
			'Dara Ó Briain': 'lie',
			'David Mitchell': 'lie',
			'Vernon Kay': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 7,
	episode: 1,
	rounds: rounds,
	score: [1, 4],
	liarOfTheWeek: 'Dara Ó Briain'
} as const satisfies StandardEpisode<typeof cast>
