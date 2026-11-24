import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Harriet Kemsley',
			wiki: 'https://en.wikipedia.org/wiki/Harriet_Kemsley',
			gender: 'female'
		},
		{
			name: 'Eddie Marsan',
			wiki: 'https://en.wikipedia.org/wiki/Eddie_Marsan',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Kadeena Cox',
			wiki: 'https://en.wikipedia.org/wiki/Kadeena_Cox',
			gender: 'female'
		},
		{
			name: 'Ivo Graham',
			wiki: 'https://en.wikipedia.org/wiki/Ivo_Graham',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once organised a stag do, but my poor admin skills meant I couldn\'t join in with all the fun.',
		guessingTeam: 'David Mitchell',
		person: 'Ivo Graham',
		personGuesses: {
			'David Mitchell': 'lie',
			'Eddie Marsan': 'lie',
			'Harriet Kemsley': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Once, while camping, I lost my tent, then took desperate measures to find somewhere else to stay.',
		guessingTeam: 'Lee Mack',
		person: 'Harriet Kemsley',
		personGuesses: {
			'Ivo Graham': 'lie',
			'Kadeena Cox': 'lie',
			'Lee Mack': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Andrew',
		connections: {
			'Ivo Graham': 'Andrew\'s the decorator that I had to hose down in my parents\' garden after he tipped five litres of paint over his own head.',
			'Kadeena Cox': 'I gave him a medal for winning a race running on all fours.',
			'Lee Mack': 'For the past eight years, I\'ve been making him hang on to a celebrity\'s loo seat on the off-chance they come on this show.'
		},
		personGuesses: {
			'David Mitchell': 'Kadeena Cox',
			'Eddie Marsan': 'Kadeena Cox',
			'Harriet Kemsley': 'Kadeena Cox'
		},
		teamGuess: 'Kadeena Cox',
		truth: 'Lee Mack'
	},
	{
		type: 'quick_fire',
		statement: 'I once humiliated myself while trying to impress my in-laws.',
		guessingTeam: 'Lee Mack',
		person: 'Eddie Marsan',
		personGuesses: {
			'Ivo Graham': 'truth',
			'Kadeena Cox': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'Recently, I amuised myself in the bath by making a face on my kneecap out of bubbles and talking to it for five minutes.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Ivo Graham': 'truth',
			'Kadeena Cox': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 18,
	episode: 4,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
