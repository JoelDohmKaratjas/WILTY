import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Victoria Coren Mitchell',
			wiki: 'https://en.wikipedia.org/wiki/Victoria_Coren_Mitchell',
			gender: 'female'
		},
		{
			name: 'Naga Munchetty',
			wiki: 'https://en.wikipedia.org/wiki/Naga_Munchetty',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Alex Brooker',
			wiki: 'https://en.wikipedia.org/wiki/Alex_Brooker',
			gender: 'male'
		},
		{
			name: 'Melvyn Hayes',
			wiki: 'https://en.wikipedia.org/wiki/Melvyn_Hayes',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'One Christmas, I had to ask the bin men for some of their tip back after I accidentally gave them an envelope containing 500 quid meant for my builder.',
		guessingTeam: 'David Mitchell',
		person: 'Alex Brooker',
		personGuesses: {
			'David Mitchell': 'lie',
			'Naga Munchetty': 'lie',
			'Victoria Coren Mitchell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'For our first Christmas together as husband and wife, David was startled by one of the gifts I got him.',
		guessingTeam: 'Lee Mack',
		person: 'Victoria Coren Mitchell',
		personGuesses: {
			'Alex Brooker': 'truth',
			'Lee Mack': 'truth',
			'Melvyn Hayes': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I was once given just half an hour to learn how to drive a double-decker bus along the edge of a cliff.',
		guessingTeam: 'David Mitchell',
		person: 'Melvyn Hayes',
		personGuesses: {
			'David Mitchell': 'truth',
			'Naga Munchetty': 'truth',
			'Victoria Coren Mitchell': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Patti Boulaye',
		connections: {
			'David Mitchell': 'At a Christmas concert, Patti gave David a mince pie to stop his rumbly tummy because he was ruining Silent Night.',
			'Naga Munchetty': 'When they appeared on the Pointless Celebrities Christmas special, we both failed to identify someone from a picture who\'s in this room.',
			'Victoria Coren Mitchell': 'Victoria was in a pantomime of Aladdin with Patti as the starring role.'
		},
		personGuesses: {
			'Alex Brooker': 'Naga Munchetty',
			'Lee Mack': 'Naga Munchetty',
			'Melvyn Hayes': 'undecided'
		},
		teamGuess: 'Naga Munchetty',
		truth: 'Victoria Coren Mitchell'
	},
	{
		type: 'quick_fire',
		statement: 'One Christmas, after spotting them stranded at the side of the road, I let a couple called Mary and Joseph stay the night, because there was no room at the Premier Inn.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Naga Munchetty': 'lie',
			'Victoria Coren Mitchell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'special',
	cast: cast,
	season: 17,
	episode: 1,
	rounds: rounds,
	score: [4, 1],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
