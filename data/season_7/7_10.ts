import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Miranda Hart',
			wiki: 'https://en.wikipedia.org/wiki/Miranda_Hart',
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
			name: 'Barry Cryer',
			wiki: 'https://en.wikipedia.org/wiki/Barry_Cryer',
			gender: 'male'
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
		statement: 'One Christmas, my wife bought me a dog. Rather than think up a name for it, I took him for a walk in a cemetery and named him after the first gravestone he showed an interest in.',
		guessingTeam: 'Lee Mack',
		person: 'Stephen Mangan',
		personGuesses: {
			'Barry Cryer': 'lie',
			'Lee Mack': 'lie',
			'Miles Jupp': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I\'m in a four-man quiz team with a butcher, a baker, and a candlestick maker.',
		guessingTeam: 'David Mitchell',
		person: 'Barry Cryer',
		personGuesses: {
			'David Mitchell': 'lie',
			'Miranda Hart': 'lie',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'Every morning, I eat one of those mini multipack cereals but to save time in washing up, I pour the milk straight into the packet.',
		guessingTeam: 'David Mitchell',
		person: 'Miles Jupp',
		personGuesses: {
			'David Mitchell': 'lie',
			'Miranda Hart': 'truth',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Mike',
		connections: {
			'Barry Cryer': 'He was one of the three kings who came to visit me at Christmas.',
			'Lee Mack': 'Last year, I ordered my Christmas turkey from his farm but I never got to eat it because I formed an unbreakable bond with the bird.',
			'Miles Jupp': 'We were once told off by our neighbour because our snowman was using up too much snow.'
		},
		personGuesses: {
			'David Mitchell': 'Barry Cryer',
			'Miranda Hart': 'Miles Jupp',
			'Stephen Mangan': 'Miles Jupp'
		},
		teamGuess: 'Barry Cryer',
		truth: 'Barry Cryer'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'This is my cape. I used to put it on, pretend I was Doctor Who and head into my TARDIS, or as my parents called it, the airing cupboard.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Barry Cryer': 'lie',
			'Lee Mack': 'truth',
			'Miles Jupp': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I will not get out of bed on Christmas morning until I have smoked a full cigar.',
		guessingTeam: 'Lee Mack',
		person: 'Miranda Hart',
		personGuesses: {
			'Barry Cryer': 'truth',
			'Lee Mack': 'truth',
			'Miles Jupp': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I have perfect pitch, so I can listen to any noise and tell you what musical note it is.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Miranda Hart': 'lie',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'special',
	cast: cast,
	season: 7,
	episode: 10,
	rounds: rounds,
	score: [5, 2],
	liarOfTheWeek: 'Miles Jupp'
} as const satisfies StandardEpisode<typeof cast>
