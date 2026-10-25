import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'David O\'Doherty',
			wiki: 'https://en.wikipedia.org/wiki/David_O\'Doherty',
			gender: 'male'
		},
		{
			name: 'Katherine Parkinson',
			wiki: 'https://en.wikipedia.org/wiki/Katherine_Parkinson',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Louie Spence',
			wiki: 'https://en.wikipedia.org/wiki/Louie_Spence',
			gender: 'male'
		},
		{
			name: 'Bill Turnbull',
			wiki: 'https://en.wikipedia.org/wiki/Bill_Turnbull',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I was so sure that Wombles were real, I used one in an example of a mammal in a GCSE Biology exam.',
		guessingTeam: 'Lee Mack',
		person: 'Katherine Parkinson',
		personGuesses: {
			'Bill Turnbull': 'lie',
			'Lee Mack': 'truth',
			'Louie Spence': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I am currently seeing a hypnotist to cure me of my compulsion to visit hypnotists.',
		guessingTeam: 'Lee Mack',
		person: 'David O\'Doherty',
		personGuesses: {
			'Bill Turnbull': 'lie',
			'Lee Mack': 'lie',
			'Louie Spence': 'undecided'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Mark',
		connections: {
			'David Mitchell': 'He saved David from choking in Argos, after David swallowed one of Argos\' little pens.',
			'David O\'Doherty': 'They started a lost animals detective agency.',
			'Katherine Parkinson': 'Recycling man who put a note through her door telling her he thought she was eating too many takeaways.'
		},
		personGuesses: {
			'Bill Turnbull': 'David O\'Doherty',
			'Lee Mack': 'David O\'Doherty',
			'Louie Spence': 'David O\'Doherty'
		},
		teamGuess: 'David O\'Doherty',
		truth: 'David O\'Doherty'
	},
	{
		type: 'quick_fire',
		statement: 'I make myself cry before every big dance performance to get rid of any excess water weight.',
		guessingTeam: 'David Mitchell',
		person: 'Louie Spence',
		personGuesses: {
			'David Mitchell': 'lie',
			'David O\'Doherty': 'lie',
			'Katherine Parkinson': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I can tell the circumference of someone\'s head just by looking at them.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'David O\'Doherty': 'lie',
			'Katherine Parkinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 5,
	episode: 3,
	rounds: rounds,
	score: [6, 3],
	liarOfTheWeek: 'David O\'Doherty'
} as const satisfies StandardEpisode<typeof cast>
