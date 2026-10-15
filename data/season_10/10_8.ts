import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Jason Watkins',
			wiki: 'https://en.wikipedia.org/wiki/Jason_Watkins',
			gender: 'male'
		},
		{
			name: 'Adam Woodyatt',
			wiki: 'https://en.wikipedia.org/wiki/Adam_Woodyatt',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Dr. Maggie Aderin-Pocock',
			wiki: 'https://en.wikipedia.org/wiki/Maggie_Aderin',
			gender: 'female'
		},
		{
			name: 'Phil Wang',
			wiki: 'https://en.wikipedia.org/wiki/Phil_Wang',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Once a week, I go for a walk on my hands.',
		guessingTeam: 'Lee Mack',
		person: 'Jason Watkins',
		personGuesses: {
			'Dr. Maggie Aderin-Pocock': 'truth',
			'Lee Mack': 'truth',
			'Phil Wang': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		possession: true,
		statement: 'This is a piece of rock taken from the surface of the moon and given to me by Buzz Aldrin. I am currently using it to wedge my kitchen door open.',
		guessingTeam: 'David Mitchell',
		person: 'Dr. Maggie Aderin-Pocock',
		personGuesses: {
			'Adam Woodyatt': 'lie',
			'David Mitchell': 'lie',
			'Jason Watkins': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I now practice mindfulness, and for ten minutes every day, I empty my mind of all other thoughts and I do nothing but stare at a carrot.',
		guessingTeam: 'Lee Mack',
		person: 'Adam Woodyatt',
		personGuesses: {
			'Dr. Maggie Aderin-Pocock': 'lie',
			'Lee Mack': 'lie',
			'Phil Wang': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Matt',
		connections: {
			'Adam Woodyatt': 'He was my window cleaner but I had to let him go when I found out that he was afraid of ladders.',
			'David Mitchell': 'This is my car dealer, I once made him change the colour of our car twice because I was offended by its hue.',
			'Jason Watkins': 'This is my estate agent and we once were meant to look at a property but instead we watched a dog give birth.'
		},
		personGuess: {
			'Dr. Maggie Aderin-Pocock': 'Jason Watkins',
			'Lee Mack': 'Jason Watkins',
			'Phil Wang': 'Jason Watkins'
		},
		teamGuess: 'Jason Watkins',
		truth: 'David Mitchell'
	},
	{
		type: 'quick_fire',
		statement: 'On the first day of my holiday, I lost my glasses so I was forced to read an entire book through a set of binoculars I found in the villa.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Adam Woodyatt': 'lie',
			'David Mitchell': 'lie',
			'Jason Watkins': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I can no longer drink orange squash because it sends me berserk.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Dr. Maggie Aderin-Pocock': 'lie',
			'Lee Mack': 'truth',
			'Phil Wang': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 10,
	episode: 8,
	rounds: rounds,
	score: [4, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
