import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Munya Chawawa',
			wiki: 'https://en.wikipedia.org/wiki/Munya_Chawawa',
			gender: 'male'
		},
		{
			name: 'Snoochie Shy',
			wiki: 'https://en.wikipedia.org/wiki/Snoochie_Shy',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Bob Mortimer',
			wiki: 'https://en.wikipedia.org/wiki/Bob_Mortimer',
			gender: 'male'
		},
		{
			name: 'Prof. Alice Roberts',
			wiki: 'https://en.wikipedia.org/wiki/Alice_Roberts',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Because I assumed it was my mate making a prank call, I put the phone down twice on Stevie Wonder.',
		guessingTeam: 'Lee Mack',
		person: 'Snoochie Shy',
		personGuesses: {
			'Bob Mortimer': 'lie',
			'Lee Mack': 'lie',
			'Prof. Alice Roberts': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'As a child, I struck up a friendship with the nine men who lived in my garden.',
		guessingTeam: 'Lee Mack',
		person: 'Munya Chawawa',
		personGuesses: {
			'Bob Mortimer': 'truth',
			'Lee Mack': 'truth',
			'Prof. Alice Roberts': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Steve',
		connections: {
			'Bob Mortimer': 'Bob won Steve\'s appendix off him in a bet.',
			'Lee Mack': 'Steve landed his helicopter to tell Lee off because he saw Lee shushing him whilst he was in the sky.',
			'Prof. Alice Roberts': 'For over 17 years, they\'ve been having an argument about a courgette.'
		},
		personGuesses: {
			'David Mitchell': 'Prof. Alice Roberts',
			'Munya Chawawa': 'Prof. Alice Roberts',
			'Snoochie Shy': 'Prof. Alice Roberts'
		},
		teamGuess: 'Prof. Alice Roberts',
		truth: 'Prof. Alice Roberts'
	},
	{
		type: 'quick_fire',
		statement: 'I recently had to pull out of a TV show because my teeth fell out.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'lie',
			'Munya Chawawa': 'lie',
			'Snoochie Shy': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 16,
	episode: 7,
	rounds: rounds,
	score: [1, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
