import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Babatunde Aléshé',
			wiki: 'https://en.wikipedia.org/wiki/Babatunde_Al%C3%A9sh%C3%A9',
			gender: 'male'
		},
		{
			name: 'Claudia Winkleman',
			wiki: 'https://en.wikipedia.org/wiki/Claudia_Winkleman',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Mike Bubbins',
			wiki: 'https://en.wikipedia.org/wiki/Mike_Bubbins',
			gender: 'male'
		},
		{
			name: 'Jessica Knappett',
			wiki: 'https://en.wikipedia.org/wiki/Jessica_Knappett',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'For one episode of the Traitors, I gave myself a fake tan using gravy granules.',
		guessingTeam: 'Lee Mack',
		person: 'Claudia Winkleman',
		personGuesses: {
			'Jessica Knappett': 'lie',
			'Lee Mack': 'lie',
			'Mike Bubbins': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I hated my boyfriend\'s moustache so much I got him drunk one night, then shaved it off while he slept',
		guessingTeam: 'David Mitchell',
		person: 'Jessica Knappett',
		personGuesses: {
			'Babatunde Aléshé': 'lie',
			'Claudia Winkleman': 'truth',
			'David Mitchell': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once went on an eight hour round trip to Wimbledon, but never got to see any tennis',
		guessingTeam: 'David Mitchell',
		person: 'Mike Bubbins',
		personGuesses: {
			'Babatunde Aléshé': 'truth',
			'Claudia Winkleman': 'unknown',
			'David Mitchell': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Darren',
		connections: {
			'Jessica Knappett': 'I went to his wedding dressed as Princess Leia, because I had been tricked into believing it was fancy dress.',
			'Lee Mack': 'Darren was going to take me up in his plane, but before we got off the runway I accidentally set off his ejector seat.',
			'Mike Bubbins': 'Darren beat me to the title of Best Welsh Evlis.'
		},
		personGuesses: {
			'Babatunde Aléshé': 'unknown',
			'Claudia Winkleman': 'unknown',
			'David Mitchell': 'Mike Bubbins'
		},
		teamGuess: 'Mike Bubbins',
		truth: 'Mike Bubbins'
	},
	{
		type: 'quick_fire',
		statement: 'I\'ve had to up security at my gigs, because old women won\'t stop kissing me.',
		guessingTeam: 'Lee Mack',
		person: 'Babatunde Aléshé',
		personGuesses: {
			'Jessica Knappett': 'lie',
			'Lee Mack': 'truth',
			'Mike Bubbins': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 17,
	episode: 9,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
