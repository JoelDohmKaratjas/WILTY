import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Geoff Norcott',
			wiki: 'https://en.wikipedia.org/wiki/Geoff_Norcott',
			gender: 'male'
		},
		{
			name: 'Esme Young',
			wiki: 'https://en.wikipedia.org/wiki/Esme_Young',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Tom Allen',
			wiki: 'https://en.wikipedia.org/wiki/Tom_Allen_(comedian)',
			gender: 'male'
		},
		{
			name: 'Vicki Pepperdine',
			wiki: 'https://en.wikipedia.org/wiki/Vicki_Pepperdine',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I have a folder on my laptop containing flattering photos of me that I have asked my family to give to the police should I ever go missing.',
		guessingTeam: 'David Mitchell',
		person: 'Tom Allen',
		personGuesses: {
			'David Mitchell': 'lie',
			'Esme Young': 'lie',
			'Geoff Norcott': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once spent a pleasant afternoon riding around topless in a motorbike.',
		guessingTeam: 'Lee Mack',
		person: 'Esme Young',
		personGuesses: {
			'Lee Mack': 'truth',
			'Tom Allen': 'truth',
			'Vicki Pepperdine': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Eamonn',
		connections: {
			'Lee Mack': 'He caught me climbing out the boot of my car after I had smuggled myself into his safari park.',
			'Tom Allen': 'After a night out on the tiles with me, he was unable to walk for two days.',
			'Vicki Pepperdine': 'This is my neighbour, Eamonn. For about a month, we each thought we were conversing with an owl when in reality, we were each hooting at the other.'
		},
		personGuesses: {
			'David Mitchell': 'Tom Allen',
			'Esme Young': 'Vicki Pepperdine',
			'Geoff Norcott': 'Tom Allen'
		},
		teamGuess: 'Tom Allen',
		truth: 'Tom Allen'
	},
	{
		type: 'quick_fire',
		statement: 'I once crashed my car because I was driving cross-legged.',
		guessingTeam: 'Lee Mack',
		person: 'Geoff Norcott',
		personGuesses: {
			'Lee Mack': 'lie',
			'Tom Allen': 'lie',
			'Vicki Pepperdine': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I once got so drunk, I whipped out my laptop, thought \'What the hell\', and ordered a Latin phrasebook.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Lee Mack': 'truth',
			'Tom Allen': 'truth',
			'Vicki Pepperdine': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 13,
	episode: 8,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
