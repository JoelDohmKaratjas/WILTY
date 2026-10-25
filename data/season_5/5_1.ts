import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Rebecca Front',
			wiki: 'https://en.wikipedia.org/wiki/Rebecca_Front',
			gender: 'female'
		},
		{
			name: 'Jack Whitehall',
			wiki: 'https://en.wikipedia.org/wiki/Jack_Whitehall',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Miranda Hart',
			wiki: 'https://en.wikipedia.org/wiki/Miranda_Hart',
			gender: 'female'
		},
		{
			name: 'Nick Hewer',
			wiki: 'https://en.wikipedia.org/wiki/Nick_Hewer',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'When filming is over for the day, Lord Sugar and I sometimes wind down, by playing ping-pong on the boardroom table.',
		guessingTeam: 'David Mitchell',
		person: 'Nick Hewer',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jack Whitehall': 'lie',
			'Rebecca Front': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I was once commissioned to paint a portrait of Gyles Brandreth\'s cat.',
		guessingTeam: 'Lee Mack',
		person: 'Jack Whitehall',
		personGuesses: {
			'Lee Mack': 'undecided',
			'Miranda Hart': 'truth',
			'Nick Hewer': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Zazzy',
		connections: {
			'Lee Mack': 'Cut off her pony tail on the school bus thinking she was his friend, Paul.',
			'Miranda Hart': 'Had a trial with her for a professional ladies football team.',
			'Nick Hewer': 'Neighbours daughter, who offered to mend his computer and inadvertently emailed everyone in his contacts a picture of his big toe.'
		},
		personGuesses: {
			'David Mitchell': 'Lee Mack',
			'Jack Whitehall': 'Nick Hewer',
			'Rebecca Front': 'Nick Hewer'
		},
		teamGuess: 'Nick Hewer',
		truth: 'Miranda Hart'
	},
	{
		type: 'quick_fire',
		statement: 'I killed a rat with my BAFTA',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Lee Mack': 'lie',
			'Miranda Hart': 'undecided',
			'Nick Hewer': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'host',
		statement: 'This is the sweatshirt that my wife and I put on together when we are cosying up on a chilly evening, we call it "The Cuddle Jumper".',
		personGuesses: {
			david: {
				'David Mitchell': 'truth',
				'Jack Whitehall': 'truth',
				'Rebecca Front': 'truth'
			},
			lee: {
				'Lee Mack': 'lie',
				'Miranda Hart': 'lie',
				'Nick Hewer': 'lie'
			}
		},
		teamGuess: {
			david: 'truth',
			lee: 'lie'
		},
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 5,
	episode: 1,
	rounds: rounds,
	score: [3, 5],
	liarOfTheWeek: 'Nick Hewer'
} as const satisfies StandardEpisode<typeof cast>
