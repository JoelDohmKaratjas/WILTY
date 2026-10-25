import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Liz Bonnin',
			wiki: 'https://en.wikipedia.org/wiki/Liz_Bonnin',
			gender: 'female'
		},
		{
			name: 'Stephen Merchant',
			wiki: 'https://en.wikipedia.org/wiki/Stephen_Merchant',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Sharon Osbourne',
			wiki: 'https://en.wikipedia.org/wiki/Sharon_Osbourne',
			gender: 'female'
		},
		{
			name: 'Dr. Ranj Singh',
			wiki: 'https://en.wikipedia.org/wiki/Ranj_Singh',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once concealed a serious injury because I didn\'t want a builder to think I wasn\'t one of the boys.',
		guessingTeam: 'Lee Mack',
		person: 'Stephen Merchant',
		personGuesses: {
			'Dr. Ranj Singh': 'lie',
			'Lee Mack': 'truth',
			'Sharon Osbourne': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once sacked a member of my staff because he showed absolutely no sense of humour during a house fire.',
		guessingTeam: 'David Mitchell',
		person: 'Sharon Osbourne',
		personGuesses: {
			'David Mitchell': 'truth',
			'Liz Bonnin': 'truth',
			'Stephen Merchant': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Nolan',
		connections: {
			'David Mitchell': 'I once spent New Year\'s Day comforting his drunk sheep.',
			'Liz Bonnin': 'When we were at school together, he refused to remove a spider from under my desk until I agreed to pay him a fee.',
			'Stephen Merchant': 'We once caused a genuine accident whilst filming a fake one for You\'ve Been Framed!.'
		},
		personGuesses: {
			'Dr. Ranj Singh': 'Liz Bonnin',
			'Lee Mack': 'Liz Bonnin',
			'Sharon Osbourne': 'Stephen Merchant'
		},
		teamGuess: 'Liz Bonnin',
		truth: 'Stephen Merchant'
	},
	{
		type: 'quick_fire',
		statement: 'One New Year\'s Eve, a group of strangers used me as a living landmark.',
		guessingTeam: 'Lee Mack',
		person: 'Stephen Merchant',
		personGuesses: {
			'Dr. Ranj Singh': 'truth',
			'Lee Mack': 'truth',
			'Sharon Osbourne': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'This is Big Bertha, every Christmas morning, I use it to wake my wife from her peaceful slumber by honking it in her face.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Liz Bonnin': 'unknown',
			'Stephen Merchant': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'special',
	cast: cast,
	season: 13,
	episode: 6,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
