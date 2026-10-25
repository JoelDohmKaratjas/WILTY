import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Keeley Hawes',
			wiki: 'https://en.wikipedia.org/wiki/Keeley_Hawes',
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
			name: 'Kevin Bridges',
			wiki: 'https://en.wikipedia.org/wiki/Kevin_Bridges',
			gender: 'male'
		},
		{
			name: 'Prof. Brain Cox',
			wiki: 'https://en.wikipedia.org/wiki/Brian_Cox_(physicist)',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I have nicknames for both my big toes.',
		guessingTeam: 'Lee Mack',
		person: 'Stephen Mangan',
		personGuesses: {
			'Kevin Bridges': 'truth',
			'Lee Mack': 'truth',
			'Prof. Brain Cox': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I lied to my husband that I was good at tennis, and had to have secret lessons when he arranged a doubles match.',
		guessingTeam: 'Lee Mack',
		person: 'Keeley Hawes',
		personGuesses: {
			'Kevin Bridges': 'truth',
			'Lee Mack': 'truth',
			'Prof. Brain Cox': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once accidentally bought a horse.',
		guessingTeam: 'David Mitchell',
		person: 'Kevin Bridges',
		personGuesses: {
			'David Mitchell': 'lie',
			'Keeley Hawes': 'lie',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Drac',
		connections: {
			'Kevin Bridges': 'Drac took him out for a driving lesson and he reversed through a chip shop window.',
			'Lee Mack': 'Lee presented Drac with first prize at the national pie awards, 2009.',
			'Prof. Brain Cox': 'Drac left Brian gaffer-taped to a lighting rig for over an hour.'
		},
		personGuesses: {
			'David Mitchell': 'Prof. Brain Cox',
			'Keeley Hawes': 'Prof. Brain Cox',
			'Stephen Mangan': 'Prof. Brain Cox'
		},
		teamGuess: 'Prof. Brain Cox',
		truth: 'Prof. Brain Cox'
	},
	{
		type: 'quick_fire',
		statement: 'I\'ve had to prise open my bedroom door for the last two years ever since the door handle fell off.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Kevin Bridges': 'lie',
			'Lee Mack': 'lie',
			'Prof. Brain Cox': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'This is the children\'s cutlery I used when I went on a special diet. It helped to make the portions on my plate seem bigger.',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Keeley Hawes': 'lie',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 4,
	episode: 3,
	rounds: rounds,
	score: [7, 4],
	liarOfTheWeek: 'Kevin Bridges'
} as const satisfies StandardEpisode<typeof cast>
