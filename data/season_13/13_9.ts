import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Jo Brand',
			wiki: 'https://en.wikipedia.org/wiki/Jo_Brand',
			gender: 'female'
		},
		{
			name: 'Kiri Pritchard-McLean',
			wiki: 'https://en.wikipedia.org/wiki/Kiri_Pritchard-McLean',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Simon Day',
			wiki: 'https://en.wikipedia.org/wiki/Simon_Day',
			gender: 'male'
		},
		{
			name: 'Henning Wehn',
			wiki: 'https://en.wikipedia.org/wiki/Henning_Wehn',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once ignored a fireman\'s order to evacuate a building because I assumed he was just a bloke in fancy dress.',
		guessingTeam: 'Lee Mack',
		person: 'Jo Brand',
		personGuesses: {
			'Henning Wehn': 'lie',
			'Lee Mack': 'lie',
			'Simon Day': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I consider myself a train vigilante and enjoy clamping down on passengers who break my strict code of conduct.',
		guessingTeam: 'David Mitchell',
		person: 'Henning Wehn',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jo Brand': 'lie',
			'Kiri Pritchard-McLean': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Before being allowed out to play, my mum used to write my address on my forehead in felt-tip pen.',
		guessingTeam: 'David Mitchell',
		person: 'Simon Day',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jo Brand': 'truth',
			'Kiri Pritchard-McLean': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Christina',
		connections: {
			'David Mitchell': 'David\'s list of implausible things that happened to him that he could talk about on Would I Lie to You? blew away and Christina returned it to him.',
			'Jo Brand': 'Jo borrowed her car but later watched it get crushed by a Frenchman\'s lorry.',
			'Kiri Pritchard-McLean': 'Kiri\'s dog ate the tip of Christina\'s finger.'
		},
		personGuess: {
			'Henning Wehn': 'Kiri Pritchard-McLean',
			'Lee Mack': 'Kiri Pritchard-McLean',
			'Simon Day': 'Kiri Pritchard-McLean'
		},
		teamGuess: 'Kiri Pritchard-McLean',
		truth: 'Jo Brand'
	},
	{
		type: 'quick_fire',
		statement: 'I\'ve devised a simple mnemonic to help me remember everything I need to pack when going on holiday. I won\'t leave the house until I\'ve ticked off everything on my flip-flop list.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jo Brand': 'lie',
			'Kiri Pritchard-McLean': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{ // A claim cut from this episode was later posted on the WILTY youtube channel. It most likely was cut because Acorah passed away the same month this episode aired.
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Henning Wehn',
		statement: 'I once refused to use a dressing room because I could feel the aura of Derek Acorah.',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jo Brand': 'lie',
			'Kiri Pritchard-McLean': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 13,
	episode: 9,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
