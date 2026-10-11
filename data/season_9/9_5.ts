import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Rhod Gilbert',
			wiki: 'https://en.wikipedia.org/wiki/Rhod_Gilbert',
			gender: 'male'
		},
		{
			name: 'Nick Grimshaw',
			wiki: 'https://en.wikipedia.org/wiki/Nick_Grimshaw',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Clare Balding',
			wiki: 'https://en.wikipedia.org/wiki/Clare_Balding',
			gender: 'female'
		},
		{
			name: 'Rob Delaney',
			wiki: 'https://en.wikipedia.org/wiki/Rob_Delaney',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'One Friday after school, I swapped our family cat for a scotch egg and a smurf. When my mother found out on Monday morning, she made me swap them back.',
		guessingTeam: 'Lee Mack',
		person: 'Rhod Gilbert',
		personGuesses: {
			'Clare Balding': 'lie',
			'Lee Mack': 'lie',
			'Rob Delaney': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once called a friend in New York and asked her to call the police in London because I thought there was a burglar at my house in London.',
		guessingTeam: 'Lee Mack',
		person: 'Nick Grimshaw',
		personGuesses: {
			'Clare Balding': 'truth',
			'Lee Mack': 'truth',
			'Rob Delaney': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Greg',
		connections: {
			'Clare Balding': 'He is the RSPCA officer who came to my aid when a squirrel climbed into my handbag and wouldn\'t get out.',
			'Lee Mack': 'I was so nervous about appearing on TV for the first time that I made him come with me and pretend we were a double act.',
			'Rob Delaney': 'We once stayed up all night together holding on to a fence when a game of "Who can hold on to the fence the longest" got out of hand.'
		},
		personGuess: {
			'David Mitchell': 'Rob Delaney',
			'Nick Grimshaw': 'Rob Delaney',
			'Rhod Gilbert': 'Lee Mack'
		},
		teamGuess: 'Lee Mack',
		truth: 'Lee Mack'
	},
	{
		type: 'quick_fire',
		statement: 'The night before the bin men come, I go to bed with earmuffs. That way, I am spared their irritating early morning clank of trash.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Clare Balding': 'lie',
			'Lee Mack': 'lie',
			'Rob Delaney': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'Because I can never remember the phonetic alphabet, I have invented one of my own based on things I can see from my bedroom window. Now, I never forget it.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Nick Grimshaw': 'truth',
			'Rhod Gilbert': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 9,
	episode: 5,
	rounds: rounds,
	score: [1, 4],
	liarOfTheWeek: 'Rob Delaney'
} as const satisfies StandardEpisode<typeof cast>
