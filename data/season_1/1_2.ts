import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Patrick McGuinness',
			wiki: 'https://en.wikipedia.org/wiki/Paddy_McGuinness',
			gender: 'male'
		},
		{
			name: 'Fay Ripley',
			wiki: 'https://en.wikipedia.org/wiki/Fay_Ripley',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'John Barrowman',
			wiki: 'https://en.wikipedia.org/wiki/John_Barrowman',
			gender: 'male'
		},
		{
			name: 'Dominic Wood',
			wiki: 'https://en.wikipedia.org/wiki/Dominic_Wood',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I was caught short in Prince Charles\' garden',
		guessingTeam: 'David Mitchell',
		person: 'John Barrowman',
		personGuesses: {
			'David Mitchell': 'lie',
			'Fay Ripley': 'lie',
			'Patrick McGuinness': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I\'ve snogged Paris Hilton',
		guessingTeam: 'Lee Mack',
		person: 'Patrick McGuinness',
		personGuesses: {
			'Dominic Wood': 'truth',
			'John Barrowman': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'My nickname at school was Ear Sniffer',
		guessingTeam: 'David Mitchell',
		person: 'Dominic Wood',
		personGuesses: {
			'David Mitchell': 'lie',
			'Fay Ripley': 'lie',
			'Patrick McGuinness': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		statement: 'Madonna has her toilet seat removed from every venue she performs at so that no one sells it on eBay.',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'lie',
			'Fay Ripley': 'lie',
			'Patrick McGuinness': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'ring_of_truth_single',
		statement: 'Tony Blair proposed to Cherie in a bumper car.',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Dominic Wood': 'lie',
			'John Barrowman': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Mark',
		connections: {
			'John Barrowman': 'Cut the ribbon at the opening of Mark\'s karaoke superstore.',
			'Dominic Wood': 'Him and Mark were in a magical double act called "Mysterio and Mark".',
			'Lee Mack': 'Employs Mark to manage his iPod.'
		},
		personGuess: {
			'David Mitchell': 'Dominic Wood',
			'Fay Ripley': 'Dominic Wood',
			'Patrick McGuinness': 'Dominic Wood'
		},
		teamGuess: 'Dominic Wood',
		truth: 'John Barrowman'
	},
	{
		type: 'telly_tales',
		statement: 'Pam St. Clement is a member of the British Abseiling Association and has abseiled down Mount Rushmore.',
		guessingTeam: 'Lee Mack',
		statementOwner: 'Patrick McGuinness',
		personGuesses: {
			'Dominic Wood': 'truth',
			'John Barrowman': 'lie',
			'Lee Mack': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'When we were first dating, I collected my husband\'s belly button fluff',
		guessingTeam: 'Lee Mack',
		person: 'Fay Ripley',
		personGuesses: {
			'Dominic Wood': 'lie',
			'John Barrowman': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'In a restaurant in China, I unwittingly ordered and ate dog',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'truth',
			'Fay Ripley': 'truth',
			'Patrick McGuinness': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I have wrestled Andy McNab for money',
		guessingTeam: 'Lee Mack',
		person: 'Patrick McGuinness',
		personGuesses: {
			'Dominic Wood': 'truth',
			'John Barrowman': 'lie',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 1,
	episode: 2,
	rounds: rounds,
	score: [6, 10],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
