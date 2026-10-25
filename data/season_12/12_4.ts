import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Prue Leith',
			wiki: 'https://en.wikipedia.org/wiki/Prue_Leith',
			gender: 'female'
		},
		{
			name: 'Big Narstie',
			wiki: 'https://en.wikipedia.org/wiki/Big_Narstie',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Scarlett Moffatt',
			wiki: 'https://en.wikipedia.org/wiki/Scarlett_Moffatt',
			gender: 'female'
		},
		{
			name: 'Tomasz Schafernaker',
			wiki: 'https://en.wikipedia.org/wiki/Tomasz_Schafernaker',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once kept a fish in Ribena.',
		guessingTeam: 'David Mitchell',
		person: 'Scarlett Moffatt',
		personGuesses: {
			'Big Narstie': 'lie',
			'David Mitchell': 'lie',
			'Prue Leith': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Until my mid-thirties, I had no idea that lambs were in fact baby sheep.',
		guessingTeam: 'David Mitchell',
		person: 'Tomasz Schafernaker',
		personGuesses: {
			'Big Narstie': 'truth', // I can't really tell what he said
			'David Mitchell': 'lie',
			'Prue Leith': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Zoe',
		connections: {
			'Lee Mack': 'Together we formed a search party that scoured a campsite by torchlight for a missing cuddly frog.',
			'Scarlett Moffatt': 'This is my old flat mate Zoe. We once discovered we had been burgled when we arrived home dressed as burglars.',
			'Tomasz Schafernaker': 'While handling her prize at the UK weather awards, I was struck on the head by a Perspex lightning bolt.'
		},
		personGuesses: {
			'Big Narstie': 'Tomasz Schafernaker',
			'David Mitchell': 'Tomasz Schafernaker',
			'Prue Leith': 'Lee Mack'
		},
		teamGuess: 'Tomasz Schafernaker',
		truth: 'Scarlett Moffatt'
	},
	{
		type: 'quick_fire',
		statement: 'Last year at a village fête, I won a welly boot throwing competition and appeared in the local paper with the caption, \'Fling the Merciless\'.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Lee Mack': 'lie',
			'Scarlett Moffatt': 'lie',
			'Tomasz Schafernaker': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'This is an Ukabong. Me and my cousins would each make a Ukabong to play the Narstie family game Ukabong.',
		guessingTeam: 'Lee Mack',
		person: 'Big Narstie',
		personGuesses: {
			'Lee Mack': 'truth',
			'Scarlett Moffatt': 'truth',
			'Tomasz Schafernaker': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 12,
	episode: 4,
	rounds: rounds,
	score: [0, 5],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
