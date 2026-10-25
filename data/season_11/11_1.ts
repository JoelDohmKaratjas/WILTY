import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'David Baddiel',
			wiki: 'https://en.wikipedia.org/wiki/David_Baddiel',
			gender: 'male'
		},
		{
			name: 'Kimberly Wyatt',
			wiki: 'https://en.wikipedia.org/wiki/Kimberly_Wyatt',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Ed Balls',
			wiki: 'https://en.wikipedia.org/wiki/Ed_Balls',
			gender: 'male'
		},
		{
			name: 'Jo Brand',
			wiki: 'https://en.wikipedia.org/wiki/Jo_Brand',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once negotiated the Home Office budget whilst crawling through a children\'s ball pit.',
		guessingTeam: 'David Mitchell',
		person: 'Ed Balls',
		personGuesses: {
			'David Baddiel': 'truth',
			'David Mitchell': 'lie',
			'Kimberly Wyatt': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'My ability to do the splits proved invaluable when my car broke down.',
		guessingTeam: 'Lee Mack',
		person: 'Kimberly Wyatt',
		personGuesses: {
			'Ed Balls': 'lie',
			'Jo Brand': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Billy',
		connections: {
			'Ed Balls': 'This is Billy, my karaoke partner. When I let rip as Lionel Richie, he was my Diana Ross.',
			'Jo Brand': 'This is my neighbour Billy, and I once stole his wheelie-bin then texted him instead of my husband to tell him what I\'d done.',
			'Lee Mack': 'He drives a barge and once whilst I was enjoying a view from a bridge, I accidentally dropped my ice-cream on his head.'
		},
		personGuesses: {
			'David Baddiel': 'Jo Brand',
			'David Mitchell': 'Jo Brand',
			'Kimberly Wyatt': 'Jo Brand' // Kinda Ed but agreed with David
		},
		teamGuess: 'Jo Brand',
		truth: 'Ed Balls'
	},
	{
		type: 'quick_fire',
		statement: 'In a quest to improve my jawline, I once bought myself a chin gym.',
		guessingTeam: 'Lee Mack',
		person: 'David Baddiel',
		personGuesses: {
			'Ed Balls': 'truth',
			'Jo Brand': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 11,
	episode: 1,
	rounds: rounds,
	score: [2, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
