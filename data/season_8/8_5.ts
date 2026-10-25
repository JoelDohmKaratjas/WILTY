import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Rhod Gilbert',
			wiki: 'https://en.wikipedia.org/wiki/Rhod_Gilbert',
			gender: 'male'
		},
		{
			name: 'Carol Vorderman',
			wiki: 'https://en.wikipedia.org/wiki/Carol_Vorderman',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Hal Cruttenden',
			wiki: 'https://en.wikipedia.org/wiki/Hal_Cruttenden',
			gender: 'male'
		},
		{
			name: 'Kelly Hoppen',
			wiki: 'https://en.wikipedia.org/wiki/Kelly_Hoppen',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Rather than use a flannel or a sponge, I wash with an orange.',
		guessingTeam: 'David Mitchell',
		person: 'Kelly Hoppen',
		personGuesses: {
			'Carol Vorderman': 'lie',
			'David Mitchell': 'lie',
			'Rhod Gilbert': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once had a holiday in a Frenchman\'s garage.',
		guessingTeam: 'Lee Mack',
		person: 'Rhod Gilbert',
		personGuesses: {
			'Hal Cruttenden': 'lie',
			'Kelly Hoppen': 'lie',
			'Lee Mack': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Gary',
		connections: {
			'Hal Cruttenden': 'Last year I kicked a football through my kitchen window and Gary agreed to take the blame.',
			'Kelly Hoppen': 'He is a Feng shui expert and in order to improve the energy flow in my home, he advised me to get rid of my cat litter tray.',
			'Lee Mack': 'Together we were involved in a low-speed pedalo chase when a Spaniard nicked Gary\'s towel.'
		},
		personGuesses: {
			'Carol Vorderman': 'Kelly Hoppen',
			'David Mitchell': 'Hal Cruttenden',
			'Rhod Gilbert': 'Hal Cruttenden'
		},
		teamGuess: 'Hal Cruttenden',
		truth: 'Kelly Hoppen'
	},
	{
		type: 'quick_fire',
		statement: 'I used to have a job in a safari park gift shop and regularly shared my bed with a lion cub.',
		guessingTeam: 'Lee Mack',
		person: 'Carol Vorderman',
		personGuesses: {
			'Hal Cruttenden': 'truth', // originally lie
			'Kelly Hoppen': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'Whenever I see my postman Roy he shouts \'Oggy Oggy Oggy\', and won\'t move on until I have replied \'Roy, Roy, Roy\'.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Hal Cruttenden': 'lie',
			'Kelly Hoppen': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 8,
	episode: 5,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: 'Kelly Hoppen'
} as const satisfies StandardEpisode<typeof cast>
