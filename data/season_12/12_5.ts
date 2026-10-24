import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Jonnie Peacock',
			wiki: 'https://en.wikipedia.org/wiki/Jonnie_Peacock',
			gender: 'male'
		},
		{
			name: 'Shaun Williamson',
			wiki: 'https://en.wikipedia.org/wiki/Shaun_Williamson',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Jo Brand',
			wiki: 'https://en.wikipedia.org/wiki/Jo_Brand',
			gender: 'female'
		},
		{
			name: 'Emma Bunton',
			wiki: 'https://en.wikipedia.org/wiki/Emma_Bunton',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'At school, I once rubbed stinging nettles all over my face and told my teacher I was ill so I could go and meet a boy in a graveyard.',
		guessingTeam: 'David Mitchell',
		person: 'Jo Brand',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jonnie Peacock': 'unknown',
			'Shaun Williamson': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once stole the shirt off a scarecrow in order to get into a nightclub.',
		guessingTeam: 'Lee Mack',
		person: 'Shaun Williamson',
		personGuesses: {
			'Emma Bunton': 'lie',
			'Jo Brand': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'When the Spice Girls stayed in hotels, we played a special game to test who was the bravest.',
		guessingTeam: 'David Mitchell',
		person: 'Emma Bunton',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jonnie Peacock': 'truth',
			'Shaun Williamson': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Shabs',
		connections: {
			'David Mitchell': 'He\'s taught his parrot to say \'Nice shoes, Dave\' whenever I enter his cobblers\'.',
			'Jonnie Peacock': 'He used to regularly park cars on my foot to stop me going anywhere.',
			'Shaun Williamson': 'I keep my chicken drumsticks in his nuclear bunker.'
		},
		personGuess: {
			'Emma Bunton': 'Jonnie Peacock',
			'Jo Brand': 'Jonnie Peacock',
			'Lee Mack': 'Jonnie Peacock'
		},
		teamGuess: 'Jonnie Peacock',
		truth: 'Jonnie Peacock'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'This is my lucky dice. I can always roll a six with it in three goes.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jonnie Peacock': 'lie',
			'Shaun Williamson': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 12,
	episode: 5,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
