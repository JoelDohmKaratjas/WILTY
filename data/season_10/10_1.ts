import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'David Haye',
			wiki: 'https://en.wikipedia.org/wiki/David_Haye',
			gender: 'male'
		},
		{
			name: 'Romesh Ranganathan',
			wiki: 'https://en.wikipedia.org/wiki/Romesh_Ranganathan',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Mel Giedroyc',
			wiki: 'https://en.wikipedia.org/wiki/Mel_Giedroyc',
			gender: 'female'
		},
		{
			name: 'Martin Kemp',
			wiki: 'https://en.wikipedia.org/wiki/Martin_Kemp',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I refuse to play my son at tennis ever since he beat me at the age of five.',
		guessingTeam: 'Lee Mack',
		person: 'David Haye',
		personGuesses: {
			'Lee Mack': 'truth',
			'Martin Kemp': 'truth',
			'Mel Giedroyc': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'When I was a child, the only thing that would get me to sleep was my parents reading me the takeaway menu from our local Chinese restaurant, The Flying Chopstick.',
		guessingTeam: 'David Mitchell',
		person: 'Mel Giedroyc',
		personGuesses: {
			'David Haye': 'unknown',
			'David Mitchell': 'lie',
			'Romesh Ranganathan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Carlos',
		connections: {
			'David Haye': 'I accidentally knocked him down in a boxing demonstration.',
			'David Mitchell': 'He came to my house to deliver a pizza but we ended up building a bed together.',
			'Romesh Ranganathan': 'I once broke my strict vegan diet because I didn\'t want to offend him.'
		},
		personGuesses: {
			'Lee Mack': 'David Haye',
			'Martin Kemp': 'David Haye',
			'Mel Giedroyc': 'David Haye'
		},
		teamGuess: 'David Haye',
		truth: 'Romesh Ranganathan'
	},
	{
		type: 'quick_fire',
		statement: 'In the last year, I have broken not one, but two world records.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Haye': 'unknown',
			'David Mitchell': 'lie',
			'Romesh Ranganathan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I was once hospitalised after fooling around with a blowup toy.',
		guessingTeam: 'David Mitchell',
		person: 'Martin Kemp',
		personGuesses: {
			'David Haye': 'lie',
			'David Mitchell': 'lie',
			'Romesh Ranganathan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 10,
	episode: 1,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
