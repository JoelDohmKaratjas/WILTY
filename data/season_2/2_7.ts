import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Vic Reeves',
			wiki: 'https://en.wikipedia.org/wiki/Jim_Moir',
			gender: 'male'
		},
		{
			name: 'Shane Richie',
			wiki: 'https://en.wikipedia.org/wiki/Shane_Richie',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Tara Palmer-Tomkinson',
			wiki: 'https://en.wikipedia.org/wiki/Tara_Palmer-Tomkinson',
			gender: 'female'
		},
		{
			name: 'Rhys Thomas',
			wiki: 'https://en.wikipedia.org/wiki/Rhys_Thomas_(comedian)',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I missed a visit from George Michael because I was eating at a harvester.',
		guessingTeam: 'Lee Mack',
		person: 'Shane Richie',
		personGuesses: {
			'Lee Mack': 'truth',
			'Rhys Thomas': 'truth',
			'Tara Palmer-Tomkinson': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'My bed used to belong to John Nettles [from Bergerac and Midsomer Murders].',
		guessingTeam: 'David Mitchell',
		person: 'Rhys Thomas',
		personGuesses: {
			'David Mitchell': 'lie',
			'Shane Richie': 'unknown',
			'Vic Reeves': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I have patented a device that stops cats jumping on your lap.',
		guessingTeam: 'Lee Mack',
		person: 'Vic Reeves',
		personGuesses: {
			'Lee Mack': 'lie',
			'Rhys Thomas': 'lie',
			'Tara Palmer-Tomkinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		statement: 'Sting has recorded an album, using only vegetables for instruments. It\'s called \'The Sound of the Ground\'.',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Lee Mack': 'truth',
			'Rhys Thomas': 'lie',
			'Tara Palmer-Tomkinson': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'ring_of_truth_single',
		statement: 'Al Gore can hypnotise chickens.',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'truth',
			'Shane Richie': 'lie',
			'Vic Reeves': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Richard',
		connections: {
			'David Mitchell': 'Richard is illustrating his upcoming book The Lonely Lighthouse.',
			'Shane Richie': 'Richard is his cousin and this is the first time he has been out of Cornwell.',
			'Vic Reeves': 'Richard is his butcher and Vic is his official sausage taster.'
		},
		personGuess: {
			'Lee Mack': 'David Mitchell',
			'Rhys Thomas': 'Shane Richie',
			'Tara Palmer-Tomkinson': 'Shane Richie'
		},
		teamGuess: 'Shane Richie',
		truth: 'Vic Reeves'
	},
	{
		type: 'quick_fire',
		statement: 'This [pictured right]...is the only gift I\'ve ever been sent by a fan.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Lee Mack': 'lie',
			'Rhys Thomas': 'lie',
			'Tara Palmer-Tomkinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I have been shopping in Sainsbury\'s wearing nothing but a trench coat.',
		guessingTeam: 'David Mitchell',
		person: 'Tara Palmer-Tomkinson',
		personGuesses: {
			'David Mitchell': 'truth',
			'Shane Richie': 'truth',
			'Vic Reeves': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I once had a full body search at Miami Airport after making a joke about Ronald Reagan.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Shane Richie': 'lie',
			'Vic Reeves': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'Female admirers used to send me timetables showing when their husbands would be out.',
		guessingTeam: 'Lee Mack',
		person: 'Shane Richie',
		personGuesses: {
			'Lee Mack': 'lie',
			'Rhys Thomas': 'lie',
			'Tara Palmer-Tomkinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 2,
	episode: 7,
	rounds: rounds,
	score: [10, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
