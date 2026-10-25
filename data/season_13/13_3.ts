import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Miles Jupp',
			wiki: 'https://en.wikipedia.org/wiki/Miles_Jupp',
			gender: 'male'
		},
		{
			name: 'Samson Kayo',
			wiki: 'https://en.wikipedia.org/wiki/Samson_Kayo',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Liz Carr',
			wiki: 'https://en.wikipedia.org/wiki/Liz_Carr',
			gender: 'female'
		},
		{
			name: 'Anneka Rice',
			wiki: 'https://en.wikipedia.org/wiki/Anneka_Rice',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once dumped my boyfriend on a plane then parachuted straight out of the door to avoid dealing with the aftermath.',
		guessingTeam: 'David Mitchell',
		person: 'Anneka Rice',
		personGuesses: {
			'David Mitchell': 'truth',
			'Miles Jupp': 'truth',
			'Samson Kayo': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I have just signed a publishing deal for my gritty debut crime novel featuring the exploits of detective duo, Nice and Spicy.',
		guessingTeam: 'Lee Mack',
		person: 'Miles Jupp',
		personGuesses: {
			'Anneka Rice': 'lie',
			'Lee Mack': 'lie',
			'Liz Carr': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Roy',
		connections: {
			'Anneka Rice': 'I like to paint him naked in my kitchen.',
			'Lee Mack': 'I once spent the night in his petrol station wearing nothing but my wife\'s dressing gown.',
			'Liz Carr': 'He used to play the lottery every week until I convinced him not to and that week, his numbers came up.'
		},
		personGuess: {
			'David Mitchell': 'Anneka Rice',
			'Miles Jupp': 'Anneka Rice',
			'Samson Kayo': 'Anneka Rice'
		},
		teamGuess: 'Anneka Rice',
		truth: 'Anneka Rice'
	},
	{
		type: 'quick_fire',
		statement: 'Last month, I had a frightening dream in which I was locked in the stocks of a medieval town. When I awoke, I was disturbed to discover that my arms were through the leg holes of my pyjama bottoms.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Anneka Rice': 'lie',
			'Lee Mack': 'lie',
			'Liz Carr': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I once got stopped as customs for carrying a suitcase full of biscuits.',
		guessingTeam: 'Lee Mack',
		person: 'Samson Kayo',
		personGuesses: {
			'Anneka Rice': 'lie',
			'Lee Mack': 'lie',
			'Liz Carr': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I had to retake one of my first ever scenes in Silent Witness because I looked far too happy to be watching an anthrax attack.',
		guessingTeam: 'David Mitchell',
		person: 'Liz Carr',
		personGuesses: {
			'David Mitchell': 'truth',
			'Miles Jupp': 'truth',
			'Samson Kayo': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 13,
	episode: 3,
	rounds: rounds,
	score: [3, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
