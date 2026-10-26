import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Rosie Jones',
			wiki: 'https://en.wikipedia.org/wiki/Rosie_Jones',
			gender: 'female'
		},
		{
			name: 'Jamali Maddix',
			wiki: 'https://en.wikipedia.org/wiki/Jamali_Maddix',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Victoria Derbyshire',
			wiki: 'https://en.wikipedia.org/wiki/Victoria_Derbyshire',
			gender: 'female'
		},
		{
			name: 'Rhod Gilbert',
			wiki: 'https://en.wikipedia.org/wiki/Rhod_Gilbert',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once had to share flip-flops with a friend after losing one of mine on a hike.',
		guessingTeam: 'David Mitchell',
		person: 'Rhod Gilbert',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jamali Maddix': 'lie',
			'Rosie Jones': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Last month, I got a tattoo of Lee Mack so I could mention it on the show.',
		guessingTeam: 'Lee Mack',
		person: 'Rosie Jones',
		personGuesses: {
			'Lee Mack': 'lie',
			'Rhod Gilbert': 'lie',
			'Victoria Derbyshire': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once broke Bob Marley\'s toilet.',
		guessingTeam: 'Lee Mack',
		person: 'Jamali Maddix',
		personGuesses: {
			'Lee Mack': 'truth',
			'Rhod Gilbert': 'truth',
			'Victoria Derbyshire': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Pam',
		connections: {
			'Lee Mack': 'She once walked into her hotel room to find him in her bath.',
			'Rhod Gilbert': 'He had to apologise to her for throwing his welly at her owls.',
			'Victoria Derbyshire': 'Pam returned her missing cat only for her actual cat to show up two days later.'
		},
		personGuesses: {
			'David Mitchell': 'Rhod Gilbert',
			'Jamali Maddix': 'Victoria Derbyshire',
			'Rosie Jones': 'Victoria Derbyshire'
		},
		teamGuess: 'Victoria Derbyshire',
		truth: 'Rhod Gilbert'
	},
	{
		type: 'quick_fire',
		statement: 'I once came to blows with someone over the correct way to pronounce the word \'scone.\'',
		guessingTeam: 'David Mitchell',
		person: 'Victoria Derbyshire',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jamali Maddix': 'truth',
			'Rosie Jones': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 15,
	episode: 8,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
