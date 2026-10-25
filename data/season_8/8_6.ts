import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

// Lee was unable to attend so was replaced with Greg Davies
// For simplicity, Lee is Greg for this episode
const cast = {
	david: [
		{
			name: 'Amanda Abbington',
			wiki: 'https://en.wikipedia.org/wiki/Amanda_Abbington',
			gender: 'female'
		},
		{
			name: 'Phill Jupitus',
			wiki: 'https://en.wikipedia.org/wiki/Phill_Jupitus',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Gareth Malone',
			wiki: 'https://en.wikipedia.org/wiki/Gareth_Malone',
			gender: 'male'
		},
		{
			name: 'Richard Osman',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Osman',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'A quick technique I often use to see if someone has singing potential is to get them singing \'Ba Ba Black Sheep\' as if they are frightened.',
		guessingTeam: 'David Mitchell',
		person: 'Gareth Malone',
		personGuesses: {
			'Amanda Abbington': 'truth',
			'David Mitchell': 'truth',
			'Phill Jupitus': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I am addicted to rescuing loose trolleys at my local supermarket.',
		guessingTeam: 'Lee Mack',
		person: 'Phill Jupitus',
		personGuesses: {
			'Gareth Malone': 'truth',
			'Lee Mack': 'lie',
			'Richard Osman': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Gareth',
		connections: {
			'Gareth Malone': 'He is my next door neighbour and when I was learning a song, he would distract me by singing the same song in his own flat, but in a different language.',
			'Lee Mack': 'He was the rickshaw driver I once paid to pedal me home. By the time we got home, he was so exhausted I let him stay on my sofa.',
			'Richard Osman': 'When he came to watch a recording of Pointless, I had to ask for him to be moved away from the front row because his behaviour was putting me off my statistics.'
		},
		personGuesses: {
			'Amanda Abbington': 'undecided', // originally Lee/Greg
			'David Mitchell': 'Lee Mack',
			'Phill Jupitus': 'Lee Mack' // originally Richard
		},
		teamGuess: 'Lee Mack',
		truth: 'Gareth Malone'
	},
	{
		type: 'quick_fire',
		statement: 'Every time I lock my front door, I squawk like a parrot. That way, if I later worry that I didn\'t lock it, I remember the squawk and know that I did.',
		guessingTeam: 'David Mitchell',
		person: 'Richard Osman',
		personGuesses: {
			'Amanda Abbington': 'lie',
			'David Mitchell': 'lie',
			'Phill Jupitus': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I spent years making sure that I didn\'t step on my imaginary pet rabbit. When I finally got a real rabbit, I did just that with disastrous consequences.',
		guessingTeam: 'Lee Mack',
		person: 'Amanda Abbington',
		personGuesses: {
			'Gareth Malone': 'truth',
			'Lee Mack': 'lie',
			'Richard Osman': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I once invented a language so I could speak to my sister in secret. I even gave this language its own name.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Amanda Abbington': 'lie',
			'David Mitchell': 'lie',
			'Phill Jupitus': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 8,
	episode: 6,
	rounds: rounds,
	score: [2, 4],
	liarOfTheWeek: 'Gareth Malone'
} as const satisfies StandardEpisode<typeof cast>
