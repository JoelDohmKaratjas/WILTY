import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Jo Brand',
			wiki: 'https://en.wikipedia.org/wiki/Jo_Brand',
			gender: 'female'
		},
		{
			name: 'Paul Foot',
			wiki: 'https://en.wikipedia.org/wiki/Paul_Foot_(comedian)',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Roisin Conaty',
			wiki: 'https://en.wikipedia.org/wiki/Roisin_Conaty',
			gender: 'female'
		},
		{
			name: 'Ray Mears',
			wiki: 'https://en.wikipedia.org/wiki/Ray_Mears',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Once on Christmas day I was forced to hitchhike my way home and was picked up by four different drivers.',
		guessingTeam: 'Lee Mack',
		person: 'Jo Brand',
		personGuesses: {
			'Lee Mack': 'truth',
			'Ray Mears': 'truth',
			'Roisin Conaty': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I am absolutely repulsed by beards. When my friend grew a beard, I changed my phone number so he couldn\'t contact me.',
		guessingTeam: 'Lee Mack',
		person: 'Paul Foot',
		personGuesses: {
			'Lee Mack': 'truth',
			'Ray Mears': 'lie',
			'Roisin Conaty': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'To hone my tracking skills, I used to secretly follow lone joggers in the woods.',
		guessingTeam: 'David Mitchell',
		person: 'Ray Mears',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jo Brand': 'truth',
			'Paul Foot': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Andy',
		connections: {
			'David Mitchell': 'I once accidentally nudged him into a fountain whilst trying to take a photo of a tank.',
			'Jo Brand': 'He once helped me break into an ex-boyfriend\'s house through the dog flap so I could steal all his pants.',
			'Paul Foot': 'He is a great believer in telekinesis and together we conduct experiments to try and move objects with the power of our minds.'
		},
		personGuess: {
			'Lee Mack': 'Jo Brand',
			'Ray Mears': 'David Mitchell',
			'Roisin Conaty': 'David Mitchell'
		},
		teamGuess: 'David Mitchell',
		truth: 'Jo Brand'
	},
	{
		type: 'quick_fire',
		statement: 'A man from Brazil once taught me a very simple noise you can make that will always stop a fox in its tracks.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jo Brand': 'unknown',
			'Paul Foot': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 8,
	episode: 7,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: 'Jo Brand'
} as const satisfies StandardEpisode<typeof cast>
