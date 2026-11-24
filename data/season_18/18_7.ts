import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Darren Harriott',
			wiki: 'https://en.wikipedia.org/wiki/Darren_Harriott',
			gender: 'male'
		},
		{
			name: 'AJ Odudu',
			wiki: 'https://en.wikipedia.org/wiki/AJ_Odudu',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Sam Campbell',
			wiki: 'https://en.wikipedia.org/wiki/Sam_Campbell_(comedian)',
			gender: 'male'
		},
		{
			name: 'Diane Carson',
			wiki: 'https://en.wikipedia.org/wiki/The_Traitors_(British_TV_series)_series_2#Contestants',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once had to leave a hen do because the stripper turned up and it was my old English teacher.',
		guessingTeam: 'Lee Mack',
		person: 'AJ Odudu',
		personGuesses: {
			'Diane Carson': 'lie',
			'Lee Mack': 'lie',
			'Sam Campbell': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'Whenever I have a bath, I always sit in the empty tub first then turn on the taps.',
		guessingTeam: 'Lee Mack',
		person: 'Darren Harriott',
		personGuesses: {
			'Diane Carson': 'lie',
			'Lee Mack': 'lie',
			'Sam Campbell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Dawn',
		connections: {
			'Diane Carson': 'Dawn\'s the tarot card reader whose warnings I chose to ignore while I was in the Traitors house.',
			'Lee Mack': 'I accidentally set a frog loose in her chemist.',
			'Sam Campbell': 'Dawn\'s the reporter who hired me to work undercover in a disgusting restaurant kitchen. '
		},
		personGuesses: {
			'AJ Odudu': 'Diane Carson',
			'Darren Harriott': 'Diane Carson', // originally Sam
			'David Mitchell': 'Diane Carson'
		},
		teamGuess: 'Diane Carson',
		truth: 'Diane Carson'
	},
	{
		type: 'quick_fire',
		statement: 'I once unwittingly ran through my school naked.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Diane Carson': 'lie',
			'Lee Mack': 'truth',
			'Sam Campbell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I only found out this morning that David Bowie is dead.',
		guessingTeam: 'David Mitchell',
		person: 'Sam Campbell',
		personGuesses: {
			'AJ Odudu': 'lie',
			'Darren Harriott': 'lie',
			'David Mitchell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 18,
	episode: 7,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
