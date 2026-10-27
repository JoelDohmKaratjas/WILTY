import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Desiree Burch',
			wiki: 'https://en.wikipedia.org/wiki/Desiree_Burch',
			gender: 'female'
		},
		{
			name: 'Anton Du Beke',
			wiki: 'https://en.wikipedia.org/wiki/Anton_Du_Beke',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Lucy Beaumont',
			wiki: 'https://en.wikipedia.org/wiki/Lucy_Beaumont',
			gender: 'female'
		},
		{
			name: 'Ralf Little',
			wiki: 'https://en.wikipedia.org/wiki/Ralf_Little',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I was once asked to host an awards ceremony after being mistaken for someone else.',
		guessingTeam: 'Lee Mack',
		person: 'Anton Du Beke',
		personGuesses: {
			'Lee Mack': 'lie',
			'Lucy Beaumont': 'lie',
			'Ralf Little': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'As an adult, I once accidentally took part in an under-12s swimming gala.',
		guessingTeam: 'David Mitchell',
		person: 'Lucy Beaumont',
		personGuesses: {
			'Anton Du Beke': 'lie',
			'David Mitchell': 'lie',
			'Desiree Burch': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'When New Kids on the Block announced they were splitting up, I was so distraught I was sent home from school for the day on compassionate leave.',
		guessingTeam: 'Lee Mack',
		person: 'Desiree Burch',
		personGuesses: {
			'Lee Mack': 'truth',
			'Lucy Beaumont': 'truth',
			'Ralf Little': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Helen',
		connections: {
			'Lee Mack': 'Helen is the teacher Lee had to apologise to after accidentally sending his daughter to school with a dead gerbil in her bag.',
			'Lucy Beaumont': 'Helen is Lucy\'s old neighbour. For two years, Lucy mistakenly called her Brenda.',
			'Ralf Little': 'Ralf got a kid sent off in a football match after using Helen as VAR (video assistant referee).'
		},
		personGuesses: {
			'Anton Du Beke': 'Lee Mack',
			'David Mitchell': 'Ralf Little',
			'Desiree Burch': 'Lee Mack'
		},
		teamGuess: 'Ralf Little',
		truth: 'Lucy Beaumont'
	},
	{
		type: 'quick_fire',
		statement: 'My local greasy spoon has named one of their all-day breakfasts after my regular order. Now for just £7.99 anyone can enjoy Hungry David\'s Mushroom Madness.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Lee Mack': 'lie',
			'Lucy Beaumont': 'lie',
			'Ralf Little': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 16,
	episode: 8,
	rounds: rounds,
	score: [2, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
