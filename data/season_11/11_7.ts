import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Nish Kumar',
			wiki: 'https://en.wikipedia.org/wiki/Nish_Kumar',
			gender: 'male'
		},
		{
			name: 'Joe Lycett',
			wiki: 'https://en.wikipedia.org/wiki/Joe_Lycett',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Nikki Fox',
			wiki: 'https://en.wikipedia.org/wiki/Nikki_Fox',
			gender: 'female'
		},
		{
			name: 'Miles Jupp',
			wiki: 'https://en.wikipedia.org/wiki/Miles_Jupp',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Whilst on holiday in South Africa, I had a two-minute conversation with what I thought was my wife, only to discover that a small hippo had wandered into the bedroom.',
		guessingTeam: 'David Mitchell',
		person: 'Miles Jupp',
		personGuesses: {
			'David Mitchell': 'lie',
			'Joe Lycett': 'lie',
			'Nish Kumar': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'At the end of my first driving lesson, my instructor told me I\'d done pretty well but that I didn\'t need to make the noises of the car engine as I drove along.',
		guessingTeam: 'Lee Mack',
		person: 'Joe Lycett',
		personGuesses: {
			'Lee Mack': 'truth',
			'Miles Jupp': 'truth',
			'Nikki Fox': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Amy',
		connections: {
			'David Mitchell': 'She is the charity shop worker who sold my shoes whilst I was otherwise engaged trying on a pair of cowboy boots.',
			'Joe Lycett': 'I grossly offended her when I made a less than perfect sculpture of her head.',
			'Nish Kumar': 'We became friends after I found her asleep in a box of volleyballs.'
		},
		personGuesses: {
			'Lee Mack': 'Joe Lycett',
			'Miles Jupp': 'Nish Kumar',
			'Nikki Fox': 'Nish Kumar'
		},
		teamGuess: 'Joe Lycett',
		truth: 'Joe Lycett'
	},
	{
		type: 'quick_fire',
		statement: 'I love gravy so much that I freeze it into ice lollies to suck in the summertime.',
		guessingTeam: 'David Mitchell',
		person: 'Nikki Fox',
		personGuesses: {
			'David Mitchell': 'lie',
			'Joe Lycett': 'truth',
			'Nish Kumar': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'On a recent train journey under cover of darkness in a tunnel, I secretly switched bananas with the stranger opposite because his looked better than mine.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Joe Lycett': 'lie',
			'Nish Kumar': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 11,
	episode: 7,
	rounds: rounds,
	score: [4, 1],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
