import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Shirley Ballas',
			wiki: 'https://en.wikipedia.org/wiki/Shirley_Ballas',
			gender: 'female'
		},
		{
			name: 'Chris McCausland',
			wiki: 'https://en.wikipedia.org/wiki/Chris_McCausland',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Steven Bartlett',
			wiki: 'https://en.wikipedia.org/wiki/Steven_Bartlett_(businessman)',
			gender: 'male'
		},
		{
			name: 'Josie Gibson',
			wiki: 'https://en.wikipedia.org/wiki/Josie_Gibson',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Tom Cruise owes me 600 quid.',
		guessingTeam: 'Lee Mack',
		person: 'Shirley Ballas',
		personGuesses: {
			'Josie Gibson': 'truth',
			'Lee Mack': 'lie',
			'Steven Bartlett': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'When I used to go out drinking, I would often hide a sausage roll in a tree near the pub so I could have a tasty snack for the walk home.',
		guessingTeam: 'Lee Mack',
		person: 'Chris McCausland',
		personGuesses: {
			'Josie Gibson': 'lie',
			'Lee Mack': 'lie',
			'Steven Bartlett': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Vil',
		connections: {
			'Josie Gibson': 'When she knocked on the wrong front door, live on This Morning, Vil opened the door in his wife\'s nightie.',
			'Lee Mack': 'Of all the guys in Lee\'s synchronised swimming team, he\'s the one he likes the best.',
			'Steven Bartlett': 'Vil is the teacher who un-expelled Steven because he was making the school lots money.'
		},
		personGuesses: {
			'Chris McCausland': 'Josie Gibson',
			'David Mitchell': 'Josie Gibson',
			'Shirley Ballas': 'Josie Gibson'
		},
		teamGuess: 'Josie Gibson',
		truth: 'Steven Bartlett'
	},
	{
		type: 'quick_fire',
		statement: 'I am not and will never be a member of any WhatsApp group.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Josie Gibson': 'truth',
			'Lee Mack': 'truth',
			'Steven Bartlett': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I only found out last year that you\'re not supposed to eat the red bit on the Babybels.',
		guessingTeam: 'David Mitchell',
		person: 'Josie Gibson',
		personGuesses: {
			'Chris McCausland': 'truth',
			'David Mitchell': 'truth',
			'Shirley Ballas': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 16,
	episode: 4,
	rounds: rounds,
	score: [0, 5],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
