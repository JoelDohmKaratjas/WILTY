import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Jessica Hynes',
			wiki: 'https://en.wikipedia.org/wiki/Jessica_Hynes',
			gender: 'female'
		},
		{
			name: 'Romesh Ranganathan',
			wiki: 'https://en.wikipedia.org/wiki/Romesh_Ranganathan',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Wilfred Webster',
			wiki: 'https://en.wikipedia.org/wiki/Wilfred_Webster',
			gender: 'male'
		},
		{
			name: 'Gina Yashere',
			wiki: 'https://en.wikipedia.org/wiki/Gina_Yashere',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'My first-ever voice-over job was making extra pig, sheep and horse noises for a documentary about a Yorkshire farm.',
		guessingTeam: 'Lee Mack',
		person: 'Jessica Hynes',
		personGuesses: {
			'Gina Yashere': 'truth',
			'Lee Mack': 'truth',
			'Wilfred Webster': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once faked a school trip to fool my mum into letting me go to France.',
		guessingTeam: 'David Mitchell',
		person: 'Gina Yashere',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jessica Hynes': 'truth',
			'Romesh Ranganathan': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Last year, I had to walk home from a swimming pool in my trunks after someone stole my clothes from the locker whilst I was in the water.',
		guessingTeam: 'David Mitchell',
		person: 'Wilfred Webster',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jessica Hynes': 'lie',
			'Romesh Ranganathan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Kai',
		connections: {
			'David Mitchell': 'I had to borrow his fingers in order to order my Big Mac.',
			'Jessica Hynes': 'Kai painted my front door with 73 bottles of nail varnish.',
			'Romesh Ranganathan': 'Kai once told me off when I discussed his private parts on a podcast.'
		},
		personGuesses: {
			'Gina Yashere': 'Romesh Ranganathan',
			'Lee Mack': 'Romesh Ranganathan',
			'Wilfred Webster': 'Romesh Ranganathan'
		},
		teamGuess: 'Romesh Ranganathan',
		truth: 'Romesh Ranganathan'
	},
	{
		type: 'quick_fire',
		statement: 'Next week I am due to appear before a disciplinary panel at my clay pigeon shooting club after I accidentally shot the owner\'s wife in the knee.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jessica Hynes': 'lie',
			'Romesh Ranganathan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 17,
	episode: 6,
	rounds: rounds,
	score: [4, 1],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
