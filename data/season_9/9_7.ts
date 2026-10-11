import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Jack Dee',
			wiki: 'https://en.wikipedia.org/wiki/Jack_Dee',
			gender: 'male'
		},
		{
			name: 'Tinchy Stryder',
			wiki: 'https://en.wikipedia.org/wiki/Tinchy_Stryder',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Romesh Ranganathan',
			wiki: 'https://en.wikipedia.org/wiki/Romesh_Ranganathan',
			gender: 'male'
		},
		{
			name: 'Gaby Roslin',
			wiki: 'https://en.wikipedia.org/wiki/Gaby_Roslin',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'When I was a teacher, whilst trying to explain a tricky concept, I accidentally locked a pupil in a cupboard.',
		guessingTeam: 'David Mitchell',
		person: 'Romesh Ranganathan',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jack Dee': 'lie',
			'Tinchy Stryder': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Sometimes I pretend to have broken something in my house so that when a man comes round to fix it, I can play him at pingpong.',
		guessingTeam: 'Lee Mack',
		person: 'Tinchy Stryder',
		personGuesses: {
			'Gaby Roslin': 'truth',
			'Lee Mack': 'lie',
			'Romesh Ranganathan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Georgia',
		connections: {
			'Gaby Roslin': 'When she fell down a manhole, I was unable to help her because I couldn\'t stop laughing.',
			'Lee Mack': 'After spending a weekend at her hotel, I drove home only to find her cat asleep in the boot of my car.',
			'Romesh Ranganathan': 'I have an irrational fear of sock puppets and last year, I had to leave a children\'s party when she put one on.'
		},
		personGuess: {
			'David Mitchell': 'Gaby Roslin',
			'Jack Dee': 'Gaby Roslin',
			'Tinchy Stryder': 'Gaby Roslin'
		},
		teamGuess: 'Gaby Roslin',
		truth: 'Gaby Roslin'
	},
	{
		type: 'quick_fire',
		statement: 'I had to reprimand my builder after I came home early one day and caught him eating doughnuts in the bath.',
		guessingTeam: 'Lee Mack',
		person: 'Jack Dee',
		personGuesses: {
			'Gaby Roslin': 'lie',
			'Lee Mack': 'lie',
			'Romesh Ranganathan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'If I\'m ever worried about something silly, I write it on a sheet of loo roll and eat it and the worry goes away.',
		guessingTeam: 'David Mitchell',
		person: 'Gaby Roslin',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jack Dee': 'lie',
			'Tinchy Stryder': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 9,
	episode: 7,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: 'Tinchy Stryder'
} as const satisfies StandardEpisode<typeof cast>
