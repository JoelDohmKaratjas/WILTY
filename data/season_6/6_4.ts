import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Rhod Gilbert',
			wiki: 'https://en.wikipedia.org/wiki/Rhod_Gilbert',
			gender: 'male'
		},
		{
			name: 'Sally Philips',
			wiki: 'https://en.wikipedia.org/wiki/Sally_Phillips',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Tess Daly',
			wiki: 'https://en.wikipedia.org/wiki/Tess_Daly',
			gender: 'female'
		},
		{
			name: 'Des O\'Connor',
			wiki: 'https://en.wikipedia.org/wiki/Des_O\'Connor',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'For three days running, I accidentally ate cat food for dinner.',
		guessingTeam: 'David Mitchell',
		person: 'Des O\'Connor',
		personGuesses: {
			'David Mitchell': 'truth',
			'Rhod Gilbert': 'truth',
			'Sally Philips': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I cannot go on airport travelators. The one and only time I did, I got so freaked out by how super-humanly fast I was walking that I had to be taken to the sick bay to calm down.',
		guessingTeam: 'Lee Mack',
		person: 'Rhod Gilbert',
		personGuesses: {
			'Des O\'Connor': 'truth',
			'Lee Mack': 'truth',
			'Tess Daly': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Tony',
		connections: {
			'David Mitchell': 'Tony, his old neighbour, used to help him get to sleep by telling him bedtime stories about the war.',
			'Rhod Gilbert': 'For five years, Tony was his badminton doubles partner.',
			'Sally Philips': 'He is her uncle, and last year, she drove his mobility scooter into a pond and wrote it off (paid for another one).'
		},
		personGuess: { // all agreed on Sally in the end
			'Des O\'Connor': 'David Mitchell',
			'Lee Mack': 'Rhod Gilbert',
			'Tess Daly': 'Sally Philips'
		},
		teamGuess: 'Sally Philips',
		truth: 'Rhod Gilbert'
	},
	{
		type: 'quick_fire',
		statement: 'In Thailand, I paid £200 to have my portrait painted by a monkey. This is that portrait.',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Rhod Gilbert': 'lie',
			'Sally Philips': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'Because he swims in our local pool, my husband and I play a game over text called \'I\'ve Just Been In The Water With Trevor McDonald\'. I\'m currently beating him 3-2.',
		guessingTeam: 'Lee Mack',
		person: 'Sally Philips',
		personGuesses: {
			'Des O\'Connor': 'lie',
			'Lee Mack': 'truth',
			'Tess Daly': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'On a wall in my flat there is a mysterious red switch. I have no idea what it does because I have never pressed it and refuse to do so.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Des O\'Connor': 'lie',
			'Lee Mack': 'truth',
			'Tess Daly': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 6,
	episode: 4,
	rounds: rounds,
	score: [5, 1],
	liarOfTheWeek: 'Sally Philips'
} as const satisfies StandardEpisode<typeof cast>
