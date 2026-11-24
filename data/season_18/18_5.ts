import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Judi Love',
			wiki: 'https://en.wikipedia.org/wiki/Judi_Love',
			gender: 'female'
		},
		{
			name: 'Sir Grayson Perry',
			wiki: 'https://en.wikipedia.org/wiki/Grayson_Perry',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Cush Jumbo',
			wiki: 'https://en.wikipedia.org/wiki/Cush_Jumbo',
			gender: 'female'
		},
		{
			name: 'Tim Vine',
			wiki: 'https://en.wikipedia.org/wiki/Tim_Vine',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'As a schoolgirl, I got a free can of Coke every day from my newsagent in exchange for keeping quiet about his affair.',
		guessingTeam: 'Lee Mack',
		person: 'Judi Love',
		personGuesses: {
			'Cush Jumbo': 'truth',
			'Lee Mack': 'truth',
			'Tim Vine': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once wrote a love song for a girl I saw in a shop.',
		guessingTeam: 'David Mitchell',
		person: 'Tim Vine',
		personGuesses: {
			'David Mitchell': 'lie',
			'Judi Love': 'lie',
			'Sir Grayson Perry': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Whenever I drive the car, I can\'t help but make vroom-vroom noises.',
		guessingTeam: 'Lee Mack',
		person: 'Sir Grayson Perry',
		personGuesses: {
			'Cush Jumbo': 'truth',
			'Lee Mack': 'truth',
			'Tim Vine': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Paul',
		connections: {
			'Cush Jumbo': 'I left my OBE in his chip shop.',
			'Lee Mack': 'Paul\'s the monk that I got drunk.',
			'Tim Vine': 'We got together to launch a brand-new snack, Tim Vine\'s bendy biscuits.'
		},
		personGuesses: {
			'David Mitchell': 'Cush Jumbo',
			'Judi Love': 'unknown',
			'Sir Grayson Perry': 'Cush Jumbo'
		},
		teamGuess: 'Cush Jumbo',
		truth: 'Tim Vine'
	},
	{
		type: 'quick_fire',
		statement: 'I once went to the opera, but found it so unbearable, I spent the last hour secretly listening to an audiobook.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Cush Jumbo': 'lie',
			'Lee Mack': 'lie',
			'Tim Vine': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'Aside from Mr McKee, who taught PE, three other teachers at my school taught subjects that rhymed with their surnames.',
		guessingTeam: 'David Mitchell',
		person: 'Tim Vine',
		personGuesses: {
			'David Mitchell': 'lie',
			'Judi Love': 'lie',
			'Sir Grayson Perry': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 18,
	episode: 5,
	rounds: rounds,
	score: [2, 4],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
