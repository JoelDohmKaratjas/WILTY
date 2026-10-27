import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Bez',
			wiki: 'https://en.wikipedia.org/wiki/Bez_(dancer)',
			gender: 'male'
		},
		{
			name: 'Motsi Mabuse',
			wiki: 'https://en.wikipedia.org/wiki/Motsi_Mabuse',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Shazia Mirza',
			wiki: 'https://en.wikipedia.org/wiki/Shazia_Mirza',
			gender: 'female'
		},
		{
			name: 'Steve Pemberton',
			wiki: 'https://en.wikipedia.org/wiki/Steve_Pemberton',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I wrote a text moaning about my Strictly dance partner, then accidentally sent it to my Strictly dance partner.',
		guessingTeam: 'Lee Mack',
		person: 'Motsi Mabuse',
		personGuesses: {
			'Lee Mack': 'lie',
			'Shazia Mirza': 'lie',
			'Steve Pemberton': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'As a child, my parents would only let me watch ITV if I put a blanket over my head when the adverts came on.',
		guessingTeam: 'David Mitchell',
		person: 'Steve Pemberton',
		personGuesses: {
			'Bez': 'truth',
			'David Mitchell': 'lie',
			'Motsi Mabuse': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once spent eight hours at Glastonbury searching for my teeth.',
		guessingTeam: 'Lee Mack',
		person: 'Bez',
		personGuesses: {
			'Lee Mack': 'lie',
			'Shazia Mirza': 'lie',
			'Steve Pemberton': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Louise',
		connections: {
			'Lee Mack': 'They once modelled as a happy, carefree couple in a sales brochure for caravans.',
			'Shazia Mirza': 'Shazia gave a black eye to Louise the bride on her wedding day.',
			'Steve Pemberton': 'One morning, Louise thought she\'d discovered Steve\'s corpse.'
		},
		personGuesses: {
			'Bez': 'Lee Mack',
			'David Mitchell': 'Steve Pemberton',
			'Motsi Mabuse': 'Shazia Mirza'
		},
		teamGuess: 'Steve Pemberton',
		truth: 'Steve Pemberton'
	},
	{
		type: 'quick_fire',
		statement: 'When I worked as a teacher, I got called to the headmaster\'s office for bunking off school.',
		guessingTeam: 'David Mitchell',
		person: 'Shazia Mirza',
		personGuesses: {
			'Bez': 'lie',
			'David Mitchell': 'lie',
			'Motsi Mabuse': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 16,
	episode: 2,
	rounds: rounds,
	score: [4, 1],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
