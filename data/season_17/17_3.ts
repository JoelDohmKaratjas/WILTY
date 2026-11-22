import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Frankie Boyle',
			wiki: 'https://en.wikipedia.org/wiki/Frankie_Boyle',
			gender: 'male'
		},
		{
			name: 'Abby Cook',
			wiki: 'https://en.wikipedia.org/wiki/Abby_Cook_(television_presenter)',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Lucy Beaumont',
			wiki: 'https://en.wikipedia.org/wiki/Lucy_Beaumont_(comedian)',
			gender: 'female'
		},
		{
			name: 'Mo Gilligan',
			wiki: 'https://en.wikipedia.org/wiki/Mo_Gilligan',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once had to urgently edit my Wikipedia page to back up a lie I\'d just told.',
		guessingTeam: 'David Mitchell',
		person: 'Lucy Beaumont',
		personGuesses: {
			'Abby Cook': 'lie',
			'David Mitchell': 'lie',
			'Frankie Boyle': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'As a child, I had a pet brick.',
		guessingTeam: 'Lee Mack',
		person: 'Frankie Boyle',
		personGuesses: {
			'Lee Mack': 'truth',
			'Lucy Beaumont': 'lie',
			'Mo Gilligan': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'Age 11, I got my first-ever detention for secretly watching "Would I Lie To You?" on my phone in class.',
		guessingTeam: 'Lee Mack',
		person: 'Abby Cook',
		personGuesses: {
			'Lee Mack': 'lie',
			'Lucy Beaumont': 'lie',
			'Mo Gilligan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Oliver',
		connections: {
			'Lee Mack': 'Oliver was the electrician Lee had to disguise as his granddad to avoid a fight.',
			'Lucy Beaumont': 'Lucy bitterly regrets booking Oliver for a friend\'s 40th birthday.',
			'Mo Gilligan': 'Oliver spent 36 hours in a queue to get Mo some trainers.'
		},
		personGuesses: {
			'Abby Cook': 'Mo Gilligan',
			'David Mitchell': 'Mo Gilligan',
			'Frankie Boyle': 'Lucy Beaumont'
		},
		teamGuess: 'Mo Gilligan',
		truth: 'Lucy Beaumont'
	},
	{
		type: 'quick_fire',
		statement: 'Last Saturday, I had my first-ever bag of pickled onion Monster Munch. By Sunday evening, I\'d eaten my ninth packet.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Lee Mack': 'lie',
			'Lucy Beaumont': 'lie',
			'Mo Gilligan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 17,
	episode: 3,
	rounds: rounds,
	score: [1, 4],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
