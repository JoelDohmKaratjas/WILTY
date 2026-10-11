import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Greg Davies',
			wiki: 'https://en.wikipedia.org/wiki/Greg_Davies',
			gender: 'male'
		},
		{
			name: 'Richard Osman',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Osman',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Patsy Kensit',
			wiki: 'https://en.wikipedia.org/wiki/Patsy_Kensit',
			gender: 'female'
		},
		{
			name: 'Bob Mortimer',
			wiki: 'https://en.wikipedia.org/wiki/Bob_Mortimer',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'At school, I invented a game called Snorkel Parka Music Practice Room.',
		guessingTeam: 'Lee Mack',
		person: 'Greg Davies',
		personGuesses: {
			'Bob Mortimer': 'unknown',
			'Lee Mack': 'truth',
			'Patsy Kensit': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once buried a badger with The Banker from Deal Or No Deal.',
		guessingTeam: 'Lee Mack',
		person: 'Richard Osman',
		personGuesses: {
			'Bob Mortimer': 'truth',
			'Lee Mack': 'truth',
			'Patsy Kensit': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'When I was younger I was regularly paid to babysit Marvin, my neighbour\'s pet dog, who had died and been stuffed.',
		guessingTeam: 'David Mitchell',
		person: 'Patsy Kensit',
		personGuesses: {
			'David Mitchell': 'truth',
			'Greg Davies': 'lie',
			'Richard Osman': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Pauline',
		connections: {
			'David Mitchell': 'When he was a cub, she was the Akela and she had David taken out of the scout hut once for asking too many questions while being given a talk by the police',
			'Greg Davies': 'She is his Mum, who passed Greg fighting another person and got out of her car to cheer him on.',
			'Richard Osman': 'They met at a Snoop Dogg gig and bonded over being the two oldest fans in the room.'
		},
		personGuess: {
			'Bob Mortimer': 'Richard Osman',
			'Lee Mack': 'David Mitchell', // originally Richard but changed last second
			'Patsy Kensit': 'undecided' // originally David but then undecided between Richard and Greg
		},
		teamGuess: 'David Mitchell',
		truth: 'Greg Davies'
	},
	{
		type: 'quick_fire',
		statement: 'I can break an apple in half with my bare hands.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'lie',
			'Greg Davies': 'lie',
			'Richard Osman': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 6,
	episode: 6,
	rounds: rounds,
	score: [1, 4],
	liarOfTheWeek: 'Richard Osman'
} as const satisfies StandardEpisode<typeof cast>
