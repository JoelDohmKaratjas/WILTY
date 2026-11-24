import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Lucy Beaumont',
			wiki: 'https://en.wikipedia.org/wiki/Lucy_Beaumont_(comedian)',
			gender: 'female'
		},
		{
			name: 'Francesca Mills',
			wiki: 'https://en.wikipedia.org/wiki/Francesca_Mills',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Nabil Abdulrashid',
			wiki: 'https://en.wikipedia.org/wiki/Nabil_Abdulrashid',
			gender: 'male'
		},
		{
			name: 'Gethin Jones',
			wiki: 'https://en.wikipedia.org/wiki/Gethin_Jones',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once impressed a man in Hull with what I did with my Henry Hoover.',
		guessingTeam: 'Lee Mack',
		person: 'Lucy Beaumont',
		personGuesses: {
			'Gethin Jones': 'lie',
			'Lee Mack': 'undecided',
			'Nabil Abdulrashid': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once found a policeman passed out in my bedroom.',
		guessingTeam: 'David Mitchell',
		person: 'Gethin Jones',
		personGuesses: {
			'David Mitchell': 'truth',
			'Francesca Mills': 'lie',
			'Lucy Beaumont': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Jo',
		connections: {
			'David Mitchell': 'When I was her knight in shining armour, she rewarded me with a chocolate eclair.',
			'Francesca Mills': 'Jo once searched my bag and found a severed hand in it.',
			'Lucy Beaumont': 'I did a dodgy deal down a back alley to get some of her gravy.'
		},
		personGuesses: {
			'Gethin Jones': 'Lucy Beaumont',
			'Lee Mack': 'Francesca Mills',
			'Nabil Abdulrashid': 'Francesca Mills'
		},
		teamGuess: 'Francesca Mills',
		truth: 'Lucy Beaumont'
	},
	{
		type: 'quick_fire',
		statement: 'I once climbed into a crocodile enclosure because I wanted to get a closer look.',
		guessingTeam: 'David Mitchell',
		person: 'Nabil Abdulrashid',
		personGuesses: {
			'David Mitchell': 'truth',
			'Francesca Mills': 'truth',
			'Lucy Beaumont': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 18,
	episode: 3,
	rounds: rounds,
	score: [2, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
