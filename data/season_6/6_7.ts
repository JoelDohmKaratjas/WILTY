import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Huw Edwards',
			wiki: 'https://en.wikipedia.org/wiki/Huw_Edwards',
			gender: 'male'
		},
		{
			name: 'Sarah Millican',
			wiki: 'https://en.wikipedia.org/wiki/Sarah_Millican',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Josie Lawrence',
			wiki: 'https://en.wikipedia.org/wiki/Josie_Lawrence',
			gender: 'female'
		},
		{
			name: 'Bradley Walsh',
			wiki: 'https://en.wikipedia.org/wiki/Bradley_Walsh',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'When I\'m feeling tired I photograph myself to see how tired I look. I then compare this photograph with other photographs I\'ve taken of myself when I felt tired to see how tired I really am.',
		guessingTeam: 'Lee Mack',
		person: 'Sarah Millican',
		personGuesses: {
			'Bradley Walsh': 'lie',
			'Josie Lawrence': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I have an evil eye that I use on my colleagues during broadcasts when I want them to move on.',
		guessingTeam: 'Lee Mack',
		person: 'Huw Edwards',
		personGuesses: {
			'Bradley Walsh': 'lie',
			'Josie Lawrence': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Whilst fulfilling a lifelong dream of swimming with dolphins, I had to punch one of them on the nose because I firmly believed it was trying to remove my trunks.',
		guessingTeam: 'David Mitchell',
		person: 'Bradley Walsh',
		personGuesses: {
			'David Mitchell': 'truth',
			'Huw Edwards': 'truth',
			'Sarah Millican': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Paul',
		connections: {
			'Bradley Walsh': 'His friend who liked mashed potatoes so much, Bradley decided to steal some from the teachers plates for him.',
			'Josie Lawrence': 'He taught her how to give up smoking through a carrot technique.',
			'Lee Mack': 'His milkman, who left 88 pints of milk on his doorstep.'
		},
		personGuesses: {
			'David Mitchell': 'Bradley Walsh',
			'Huw Edwards': 'Bradley Walsh',
			'Sarah Millican': 'Bradley Walsh'
		},
		teamGuess: 'Bradley Walsh',
		truth: 'Bradley Walsh'
	},
	{
		type: 'quick_fire',
		statement: 'I can tell if someone drinks mainly tea or coffee just by listening to (the rumble in) their stomach.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Huw Edwards': 'lie',
			'Sarah Millican': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 6,
	episode: 7,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: 'Huw Edwards'
} as const satisfies StandardEpisode<typeof cast>
