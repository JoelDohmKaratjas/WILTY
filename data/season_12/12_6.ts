import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Diane Morgan',
			wiki: 'https://en.wikipedia.org/wiki/Diane_Morgan',
			gender: 'female'
		},
		{
			name: 'Richard Osman',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Osman',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Daisy May Cooper',
			wiki: 'https://en.wikipedia.org/wiki/Daisy_May_Cooper',
			gender: 'female'
		},
		{
			name: 'Rory Reid',
			wiki: 'https://en.wikipedia.org/wiki/Rory_Reid_(journalist)',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Instead of rock, paper, scissors, I prefer to play my own version of the game which is worm, pigeon, shotgun.',
		guessingTeam: 'Lee Mack',
		person: 'Richard Osman',
		personGuesses: {
			'Daisy May Cooper': 'truth',
			'Lee Mack': 'truth',
			'Rory Reid': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I am in an ongoing feud with a cat who walked a hundred miles to torment me.',
		guessingTeam: 'David Mitchell',
		person: 'Rory Reid',
		personGuesses: {
			'David Mitchell': 'truth',
			'Diane Morgan': 'truth',
			'Richard Osman': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Jamie',
		connections: {
			'Daisy May Cooper': 'He is my ex-boyfriend and I used to put sleeping pill in my parents\' tea to slip him into the house.',
			'Lee Mack': 'Whilst staying at an Airbnb, I mistook him for an intruder and attacked him with a whisk.',
			'Rory Reid': 'After a mix-up in a tattoo parlour, we now have each other\'s tattoo.'
		},
		personGuesses: {
			'David Mitchell': 'Daisy May Cooper',
			'Diane Morgan': 'Daisy May Cooper',
			'Richard Osman': 'Daisy May Cooper'
		},
		teamGuess: 'Daisy May Cooper',
		truth: 'Daisy May Cooper'
	},
	{
		type: 'quick_fire',
		statement: 'I was genuinely invited to Harry and Meghan\'s wedding today, but I said no because I had to come here and do this.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Diane Morgan': 'lie',
			'Richard Osman': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 12,
	episode: 6,
	rounds: rounds,
	score: [4, 0],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
