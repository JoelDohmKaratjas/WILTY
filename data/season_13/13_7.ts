import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Richard Osman',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Osman',
			gender: 'male'
		},
		{
			name: 'Jennifer Saunders',
			wiki: 'https://en.wikipedia.org/wiki/Jennifer_Saunders',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Steph McGovern',
			wiki: 'https://en.wikipedia.org/wiki/Steph_McGovern',
			gender: 'female'
		},
		{
			name: 'Joe Sugg',
			wiki: 'https://en.wikipedia.org/wiki/Joe_Sugg',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Last year, during a detox weekend at a health spa, I slipped three emergency chocolate bars into a plastic bag and hid them in the cistern of my loo.',
		guessingTeam: 'Lee Mack',
		person: 'Richard Osman',
		personGuesses: {
			'Joe Sugg': 'lie',
			'Lee Mack': 'lie',
			'Steph McGovern': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once broke into a convent and stole food from some nuns.',
		guessingTeam: 'Lee Mack',
		person: 'Jennifer Saunders',
		personGuesses: {
			'Joe Sugg': 'lie',
			'Lee Mack': 'truth',
			'Steph McGovern': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Matt',
		connections: {
			'Joe Sugg': 'Joe kept pranking Matt and Matt took revenge by gelling Joe\'s hair with Marmite.',
			'Lee Mack': 'When Matt broke both his arms, Lee popped round his house and scratch his itches with a knitting needle.',
			'Steph McGovern': 'Together, they once threw some knickers at Jennifer Saunders.'
		},
		personGuesses: {
			'David Mitchell': 'Steph McGovern',
			'Jennifer Saunders': 'Steph McGovern',
			'Richard Osman': 'Steph McGovern'
		},
		teamGuess: 'Steph McGovern',
		truth: 'Steph McGovern'
	},
	{
		type: 'quick_fire',
		statement: 'To avoid being disturbed backstage on Pointless, I have a fake name on my dressing room door.',
		guessingTeam: 'Lee Mack',
		person: 'Richard Osman',
		personGuesses: {
			'Joe Sugg': 'lie',
			'Lee Mack': 'lie',
			'Steph McGovern': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'To prove I could handle owning my dream pet, I first had to look after a series of other creatures each one bigger than the last.',
		guessingTeam: 'David Mitchell',
		person: 'Joe Sugg',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jennifer Saunders': 'truth',
			'Richard Osman': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I deliberately bump into people who are walking around staring at their phones, because I think they need to be taught a lesson.',
		guessingTeam: 'Lee Mack',
		person: 'Jennifer Saunders',
		personGuesses: {
			'Joe Sugg': 'unknown',
			'Lee Mack': 'truth',
			'Steph McGovern': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 13,
	episode: 7,
	rounds: rounds,
	score: [5, 1],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
