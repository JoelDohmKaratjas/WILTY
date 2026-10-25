import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Dani Dyer',
			wiki: 'https://en.wikipedia.org/wiki/Dani_Dyer',
			gender: 'female'
		},
		{
			name: 'Fred Sirieix',
			wiki: 'https://en.wikipedia.org/wiki/Fred_Sirieix',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'James Acaster',
			wiki: 'https://en.wikipedia.org/wiki/James_Acaster',
			gender: 'male'
		},
		{
			name: 'Oti Mabuse',
			wiki: 'https://en.wikipedia.org/wiki/Oti_Mabuse',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once thought a slug was trying to send me a message.',
		guessingTeam: 'Lee Mack',
		person: 'Dani Dyer',
		personGuesses: {
			'James Acaster': 'truth',
			'Lee Mack': 'truth',
			'Oti Mabuse': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once had to break into my own flat, halfway through a haircut.',
		guessingTeam: 'David Mitchell',
		person: 'James Acaster',
		personGuesses: {
			'Dani Dyer': 'lie',
			'David Mitchell': 'lie',
			'Fred Sirieix': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Jake',
		connections: {
			'James Acaster': 'When he split up with his girlfriend, everyone blamed me instead of him.',
			'Lee Mack': 'I once knocked him into a grave with a frisbee.',
			'Oti Mabuse': 'On the German version of Strictly, I knocked his tooth out with a high kick.'
		},
		personGuess: {
			'Dani Dyer': 'James Acaster',
			'David Mitchell': 'James Acaster',
			'Fred Sirieix': 'James Acaster'
		},
		teamGuess: 'James Acaster',
		truth: 'James Acaster'
	},
	{
		type: 'quick_fire',
		statement: 'Last winter, I watched in horror as the train Tube doors trapped the pompom of my bobble hat and carried it off into the darkness of the Underground.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'James Acaster': 'lie',
			'Lee Mack': 'lie',
			'Oti Mabuse': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'After asking a friend how he kept his dog\'s coat looking so lustrous, I have now taken to washing my own hair with dog shampoo.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Dani Dyer': 'unknown',
			'David Mitchell': 'lie',
			'Fred Sirieix': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Fred Sirieix',
		statement: 'I hate using towels so instead I dry myself everyday with a hair dryer.',
		personGuesses: {
			'James Acaster': 'truth',
			'Lee Mack': 'truth',
			'Oti Mabuse': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 13,
	episode: 10,
	rounds: rounds,
	score: [3, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
