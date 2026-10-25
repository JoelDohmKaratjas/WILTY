import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Greg Rutherford',
			wiki: 'https://en.wikipedia.org/wiki/Greg_Rutherford',
			gender: 'male'
		},
		{
			name: 'Kirsty Young',
			wiki: 'https://en.wikipedia.org/wiki/Kirsty_Young',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Joanna Scanlan',
			wiki: 'https://en.wikipedia.org/wiki/Joanna_Scanlan',
			gender: 'female'
		},
		{
			name: 'Henning Wehn',
			wiki: 'https://en.wikipedia.org/wiki/Henning_Wehn',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I have five chickens all named after my favourite newsreaders.',
		guessingTeam: 'Lee Mack',
		person: 'Kirsty Young',
		personGuesses: {
			'Henning Wehn': 'lie',
			'Joanna Scanlan': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'For three weeks, I was listed as a missing person by Interpol.',
		guessingTeam: 'David Mitchell',
		person: 'Henning Wehn',
		personGuesses: {
			'David Mitchell': 'truth',
			'Greg Rutherford': 'truth',
			'Kirsty Young': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Andy',
		connections: {
			'David Mitchell': 'Gave David a surfing lesson and said he\'d never seen a novice display such natural ability.',
			'Greg Rutherford': 'Greg beat him in a speed-eating competition where Greg ate more than a kilo of ribs..',
			'Kirsty Young': 'Played a handbag snatcher in a Crimewatch reconstruction, only got nine calls and all said Andy was the snatcher.'
		},
		personGuesses: {
			'Henning Wehn': 'Greg Rutherford',
			'Joanna Scanlan': 'Greg Rutherford',
			'Lee Mack': 'Greg Rutherford'
		},
		teamGuess: 'Greg Rutherford',
		truth: 'Greg Rutherford'
	},
	{
		type: 'quick_fire',
		statement: 'I\'ve had to stop listening to a classic 1980\'s pop song, because every time I play it, it makes my baby daughter cry.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'truth',
			'Greg Rutherford': 'lie',
			'Kirsty Young': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'host',
		statement: 'I was recently bounced off a bouncy castle whilst trying to prevent a bouncident.',
		personGuesses: {
			david: {
				'David Mitchell': 'lie',
				'Greg Rutherford': 'unknown',
				'Kirsty Young': 'unknown'
			},
			lee: {
				'Henning Wehn': 'truth',
				'Joanna Scanlan': 'truth',
				'Lee Mack': 'truth'
			}
		},
		teamGuess: {
			david: 'lie',
			lee: 'truth'
		},
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 7,
	episode: 7,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: 'Henning Wehn'
} as const satisfies StandardEpisode<typeof cast>
