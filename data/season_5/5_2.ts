import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Robert Webb',
			wiki: 'https://en.wikipedia.org/wiki/Robert_Webb',
			gender: 'male'
		},
		{
			name: 'Sir Terry Wogan',
			wiki: 'https://en.wikipedia.org/wiki/Terry_Wogan',
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
			name: 'Katy Wix',
			wiki: 'https://en.wikipedia.org/wiki/Katy_Wix',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I deliberately set fire to my colleague\'s script, whilst they were live on air.',
		guessingTeam: 'Lee Mack',
		person: 'Sir Terry Wogan',
		personGuesses: {
			'Katy Wix': 'lie',
			'Kevin Bridges': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once found a suitcase and took it to the police station, when they opened it, it contained 34 bunches of bananas.',
		guessingTeam: 'David Mitchell',
		person: 'Kevin Bridges',
		personGuesses: {
			'David Mitchell': 'lie',
			'Robert Webb': 'lie',
			'Sir Terry Wogan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'As a child, I had so many imaginary friends, we formed an imaginary gang.',
		guessingTeam: 'Lee Mack',
		person: 'Robert Webb',
		personGuesses: {
			'Katy Wix': 'truth',
			'Kevin Bridges': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Tony',
		connections: {
			'Katy Wix': 'He freed her from a vending machine because she got her foot stuck in the opening compartment.',
			'Kevin Bridges': 'They were questioned by the police, for stealing a life sized cardboard cutout of Hugh Grant.',
			'Lee Mack': 'He is a stand-in for the person who was supposed to turn up. His connection was Graham, self-defense instructor, who couldn\'t come.'
		},
		personGuess: {
			'David Mitchell': 'undecided',
			'Robert Webb': 'Kevin Bridges',
			'Sir Terry Wogan': 'Katy Wix'
		},
		teamGuess: 'Katy Wix',
		truth: 'Kevin Bridges'
	},
	{
		type: 'quick_fire',
		statement: 'When I was 12, I saved up all my pocket money and bought a rowing boat that I never used.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Katy Wix': 'truth',
			'Kevin Bridges': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'After an incident with a permanent marker, I had to go to my son\'s Parents\' Evening, with a moustache and glasses drawn on me.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Robert Webb': 'lie',
			'Sir Terry Wogan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'Every year, I signal the start of Christmas dinner, by taking my seat opposite Mrs. Wogan, and firing a pistol loaded with a blank or blanks.',
		guessingTeam: 'Lee Mack',
		person: 'Sir Terry Wogan',
		personGuesses: {
			'Katy Wix': 'lie',
			'Kevin Bridges': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 5,
	episode: 2,
	rounds: rounds,
	score: [6, 3],
	liarOfTheWeek: 'Sir Terry Wogan'
} as const satisfies StandardEpisode<typeof cast>
