import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Jason Manford',
			wiki: 'https://en.wikipedia.org/wiki/Jason_Manford',
			gender: 'male'
		},
		{
			name: 'Briony May Williams',
			wiki: 'https://en.wikipedia.org/wiki/Briony_May_Williams',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Sophie Ellis-Bextor',
			wiki: 'https://en.wikipedia.org/wiki/Sophie_Ellis-Bextor',
			gender: 'female'
		},
		{
			name: 'Loyiso Gola',
			wiki: 'https://en.wikipedia.org/wiki/Loyiso_Gola',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I taught my kids the alphabet by singing it to the EastEnders theme tune.',
		guessingTeam: 'Lee Mack',
		person: 'Jason Manford',
		personGuesses: {
			'Lee Mack': 'lie',
			'Loyiso Gola': 'lie',
			'Sophie Ellis-Bextor': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'When Paul Hollywood fell asleep in the tent at the Bake Off wrap party, Prue and I piped icing on his face and sprinkled him with hundreds and thousands.',
		guessingTeam: 'Lee Mack',
		person: 'Briony May Williams',
		personGuesses: {
			'Lee Mack': 'lie',
			'Loyiso Gola': 'lie',
			'Sophie Ellis-Bextor': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'Once, while staying in a hotel, I was accused of keeping a baby in my suitcase.',
		guessingTeam: 'David Mitchell',
		person: 'Loyiso Gola',
		personGuesses: {
			'Briony May Williams': 'lie',
			'David Mitchell': 'truth',
			'Jason Manford': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'During lockdown, I cut my son\'s hair so badly, I gave him £20 to tell his dad he\'d done it himself.',
		guessingTeam: 'David Mitchell',
		person: 'Sophie Ellis-Bextor',
		personGuesses: {
			'Briony May Williams': 'truth',
			'David Mitchell': 'lie',
			'Jason Manford': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Kath',
		connections: {
			'Briony May Williams': 'She had to take away Kath\'s first prize for a baking competition after discovering Kath had not made her cake.',
			'David Mitchell': 'They rode five miles together on a tandem.',
			'Jason Manford': 'Kath is the cafe owner from where Jason kept eating the sausages put out for dogs.'
		},
		personGuesses: {
			'Lee Mack': 'Briony May Williams',
			'Loyiso Gola': 'Jason Manford',
			'Sophie Ellis-Bextor': 'Briony May Williams'
		},
		teamGuess: 'Briony May Williams',
		truth: 'Jason Manford'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'These are my uncle\'s bagpipes. Years ago, I used to go busking and would pretend to play them while miming along to a speaker hidden under my kilt.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Briony May Williams': 'lie',
			'David Mitchell': 'lie',
			'Jason Manford': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 15,
	episode: 4,
	rounds: rounds,
	score: [4, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
