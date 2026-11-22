import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Alex Jones',
			wiki: 'https://en.wikipedia.org/wiki/Alex_Jones_(Welsh_presenter)',
			gender: 'female'
		},
		{
			name: 'Rav Wilding',
			wiki: 'https://en.wikipedia.org/wiki/Rav_Wilding',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Chris McCausland',
			wiki: 'https://en.wikipedia.org/wiki/Chris_McCausland',
			gender: 'male'
		},
		{
			name: 'Su Pollard',
			wiki: 'https://en.wikipedia.org/wiki/Su_Pollard',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Every night I use an unusual technique to make sure I wake up on time in the morning.',
		guessingTeam: 'David Mitchell',
		person: 'Chris McCausland',
		personGuesses: {
			'Alex Jones': 'truth',
			'David Mitchell': 'truth',
			'Rav Wilding': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'During my driving test, the examiner made me pull over because he\'d spotted someone breaking into his house.',
		guessingTeam: 'Lee Mack',
		person: 'Rav Wilding',
		personGuesses: {
			'Chris McCausland': 'truth',
			'Lee Mack': 'truth',
			'Su Pollard': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once had to reprimand a pantomime cow when it started an argument with itself.',
		guessingTeam: 'David Mitchell',
		person: 'Su Pollard',
		personGuesses: {
			'Alex Jones': 'truth',
			'David Mitchell': 'truth',
			'Rav Wilding': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Raymond',
		connections: {
			'Alex Jones': 'When Alex went into labour, she rushed to Raymond\'s pet shop instead of the hospital.',
			'David Mitchell': 'Raymond is the bird expert who taught David how to make friends with the crow who was bullying me.',
			'Rav Wilding': 'Rav cost Raymond the £250,000 question on \'Who Wants to be a Millionaire?\''
		},
		personGuesses: {
			'Chris McCausland': 'Rav Wilding',
			'Lee Mack': 'Rav Wilding',
			'Su Pollard': 'David Mitchell'
		},
		teamGuess: 'Rav Wilding',
		truth: 'Alex Jones'
	},
	{
		type: 'quick_fire',
		statement: 'I never go anywhere without a party blower.',
		guessingTeam: 'David Mitchell',
		person: 'Su Pollard',
		personGuesses: {
			'Alex Jones': 'truth',
			'David Mitchell': 'truth',
			'Rav Wilding': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 17,
	episode: 2,
	rounds: rounds,
	score: [5, 0],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
