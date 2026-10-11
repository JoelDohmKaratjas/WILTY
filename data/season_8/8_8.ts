import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Josh Widdicombe',
			wiki: 'https://en.wikipedia.org/wiki/Josh_Widdicombe',
			gender: 'male'
		},
		{
			name: 'Ray Winstone',
			wiki: 'https://en.wikipedia.org/wiki/Ray_Winstone',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Rachel Riley',
			wiki: 'https://en.wikipedia.org/wiki/Rachel_Riley',
			gender: 'female'
		},
		{
			name: 'Ricky Tomlinson',
			wiki: 'https://en.wikipedia.org/wiki/Ricky_Tomlinson',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I qualified as a football referee but quit after six matches because the abuse became too much.',
		guessingTeam: 'Lee Mack',
		person: 'Josh Widdicombe',
		personGuesses: {
			'Lee Mack': 'truth',
			'Rachel Riley': 'truth',
			'Ricky Tomlinson': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'At the bottom of my garden, I built a replica Stonehenge.',
		guessingTeam: 'Lee Mack',
		person: 'Ray Winstone',
		personGuesses: {
			'Lee Mack': 'lie',
			'Rachel Riley': 'truth',
			'Ricky Tomlinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'John',
		connections: {
			'Lee Mack': 'After my mate John was involved in an accident, I went to visit him in hospital but I mistakenly sat next to this John\'s bed and spoke to him for two hours.',
			'Rachel Riley': 'He comes to Countdown every single day and presents me with a freshly-baked cake.',
			'Ricky Tomlinson': 'If he hadn\'t decided to join my band, he could have been in the Beatles.'
		},
		personGuess: {
			'David Mitchell': 'Rachel Riley',
			'Josh Widdicombe': 'Ricky Tomlinson',
			'Ray Winstone': 'Ricky Tomlinson'
		},
		teamGuess: 'Ricky Tomlinson',
		truth: 'Ricky Tomlinson'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'This is my frog lamp. I pop it on when I go down to the bottom of the garden to check on the frogs.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Lee Mack': 'lie',
			'Rachel Riley': 'truth',
			'Ricky Tomlinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'Whenever I eat a boiled egg, I say \'Sorry Mr. Egg\' as I bash its head in with a spoon.',
		guessingTeam: 'Lee Mack',
		person: 'Ray Winstone',
		personGuesses: {
			'Lee Mack': 'lie',
			'Rachel Riley': 'lie',
			'Ricky Tomlinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I can write so well with my right foot that to save time writing Christmas cards, I simultaneously write one card with my hand and one card with my foot.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Josh Widdicombe': 'lie',
			'Ray Winstone': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'special',
	cast: cast,
	season: 8,
	episode: 8,
	rounds: rounds,
	score: [3, 3],
	liarOfTheWeek: 'Ray Winstone'
} as const satisfies StandardEpisode<typeof cast>
