import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'John Bishop',
			wiki: 'https://en.wikipedia.org/wiki/John_Bishop',
			gender: 'male'
		},
		{
			name: 'Joanna Page',
			wiki: 'https://en.wikipedia.org/wiki/Joanna_Page',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Chris Addison',
			wiki: 'https://en.wikipedia.org/wiki/Chris_Addison',
			gender: 'male'
		},
		{
			name: 'Patsy Palmer',
			wiki: 'https://en.wikipedia.org/wiki/Patsy_Palmer',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I got Wellard, the dog, drunk on the set of EastEnders.',
		guessingTeam: 'David Mitchell',
		person: 'Patsy Palmer',
		personGuesses: {
			'David Mitchell': 'truth',
			'Joanna Page': 'truth',
			'John Bishop': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I recite my times tables every night before bed.',
		guessingTeam: 'Lee Mack',
		person: 'Joanna Page',
		personGuesses: {
			'Chris Addison': 'lie',
			'Lee Mack': 'truth',
			'Patsy Palmer': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I had a job where we started each day with a motivational song.',
		guessingTeam: 'Lee Mack',
		person: 'John Bishop',
		personGuesses: {
			'Chris Addison': 'lie',
			'Lee Mack': 'lie',
			'Patsy Palmer': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Mark',
		connections: {
			'Chris Addison': 'Next door neighbor who lost a bet of £200 on whether In the Loop would win an Oscar, Chris gave him a wheelbarrow.',
			'Lee Mack': 'He started the pub\'s dart team that Lee plays in, but Lee asked him to leave because he was so bad.',
			'Patsy Palmer': 'Swim teacher, teaching her to overcome her fear of water.'
		},
		personGuess: {
			'David Mitchell': 'Patsy Palmer',
			'Joanna Page': 'Patsy Palmer',
			'John Bishop': 'Patsy Palmer'
		},
		teamGuess: 'Patsy Palmer',
		truth: 'Patsy Palmer'
	},
	{
		type: 'quick_fire',
		statement: 'This is my special travel dressing gown. It\'s the one item I always pack when I go on holiday.',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Chris Addison': 'truth',
			'Lee Mack': 'truth',
			'Patsy Palmer': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I once lost a game of swingball to a chimpanzee.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Joanna Page': 'lie',
			'John Bishop': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 4,
	episode: 8,
	rounds: rounds,
	score: [5, 7],
	liarOfTheWeek: 'Joanna Page'
} as const satisfies StandardEpisode<typeof cast>
