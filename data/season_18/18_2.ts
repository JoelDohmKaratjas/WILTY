import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Kojey Radical',
			wiki: 'https://en.wikipedia.org/wiki/Kojey_Radical',
			gender: 'male'
		},
		{
			name: 'Stacey Solomon',
			wiki: 'https://en.wikipedia.org/wiki/Stacey_Solomon',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Harry Hill',
			wiki: 'https://en.wikipedia.org/wiki/Harry_Hill',
			gender: 'male'
		},
		{
			name: 'Jill Scott',
			wiki: 'https://en.wikipedia.org/wiki/Jill_Scott_(footballer)',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I nearly broke up with my husband while he was trying to propose to me.',
		guessingTeam: 'Lee Mack',
		person: 'Stacey Solomon',
		personGuesses: {
			'Harry Hill': 'lie',
			'Jill Scott': 'lie',
			'Lee Mack': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I was sick into the FA Cup.',
		guessingTeam: 'David Mitchell',
		person: 'Jill Scott',
		personGuesses: {
			'David Mitchell': 'truth',
			'Kojey Radical': 'truth',
			'Stacey Solomon': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'When I was a doctor, I accidentally sent two patients for procedures they didn\'t need because I\'d got their forms mixed up.',
		guessingTeam: 'David Mitchell',
		person: 'Harry Hill',
		personGuesses: {
			'David Mitchell': 'truth',
			'Kojey Radical': 'lie',
			'Stacey Solomon': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Adam',
		connections: {
			'Harry Hill': 'Together we set up a business selling home-made explosives.',
			'Jill Scott': 'When Adam sold me a car, he actually gave me £1,000 off if I did some football skills.',
			'Lee Mack': 'I had him disqualified from a knobbly knees competition after discovering he was using bulldog clips on the back of his knees.'
		},
		personGuesses: {
			'David Mitchell': 'Jill Scott',
			'Kojey Radical': 'Jill Scott',
			'Stacey Solomon': 'Harry Hill'
		},
		teamGuess: 'Harry Hill',
		truth: 'Harry Hill'
	},
	{
		type: 'quick_fire',
		statement: 'I have diagnosed myself as suffering from a condition I call HPS.',
		guessingTeam: 'Lee Mack',
		person: 'Kojey Radical',
		personGuesses: {
			'Harry Hill': 'lie',
			'Jill Scott': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 18,
	episode: 2,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
