import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Bill Bailey',
			wiki: 'https://en.wikipedia.org/wiki/Bill_Bailey',
			gender: 'male'
		},
		{
			name: 'Ruth Jones',
			wiki: 'https://en.wikipedia.org/wiki/Ruth_Jones',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Jo Brand',
			wiki: 'https://en.wikipedia.org/wiki/Jo_Brand',
			gender: 'female'
		},
		{
			name: 'Dame Kelly Holmes',
			wiki: 'https://en.wikipedia.org/wiki/Kelly_Holmes',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Last year, I ate my Christmas dinner in the bath.',
		guessingTeam: 'David Mitchell',
		person: 'Jo Brand',
		personGuesses: {
			'Bill Bailey': 'truth',
			'David Mitchell': 'truth',
			'Ruth Jones': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		possession: true,
		statement: 'This is Jakob. I once smuggled her into the cinema then had to pretend the noises she was making were coming from me.',
		guessingTeam: 'Lee Mack',
		person: 'Bill Bailey',
		personGuesses: {
			'Dame Kelly Holmes': 'lie',
			'Jo Brand': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Mick',
		connections: {
			'Dame Kelly Holmes': 'I have a photo of him in my car to stop me getting road rage.',
			'Jo Brand': 'When we were bell-ringing together in church, he was responsible for me being hoisted twenty foot up in the air.',
			'Lee Mack': 'His surname is Partridge and I once had to rescue him when he was stuck up a pear tree.'
		},
		personGuesses: {
			'Bill Bailey': 'Jo Brand',
			'David Mitchell': 'Jo Brand',
			'Ruth Jones': 'Jo Brand'
		},
		teamGuess: 'Jo Brand',
		truth: 'Jo Brand'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'These are two of the best gifts I was given last Christmas.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Dame Kelly Holmes': 'lie',
			'Jo Brand': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'Last Christmas Eve, my wife asked me to pop out and get four to five lemons and eight or nine limes. Unfortunately, I misheard her and came back with forty five lemons and eighty nine limes.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Bill Bailey': 'unknown',
			'David Mitchell': 'lie',
			'Ruth Jones': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'special',
	cast: cast,
	season: 9,
	episode: 8,
	rounds: rounds,
	score: [4, 1],
	liarOfTheWeek: 'Jo Brand'
} as const satisfies StandardEpisode<typeof cast>
