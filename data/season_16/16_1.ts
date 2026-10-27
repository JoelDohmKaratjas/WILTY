import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Gloria Hunniford',
			wiki: 'https://en.wikipedia.org/wiki/Gloria_Hunniford',
			gender: 'female'
		},
		{
			name: 'Guz Khan',
			wiki: 'https://en.wikipedia.org/wiki/Guz_Khan',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Christopher Eccleston',
			wiki: 'https://en.wikipedia.org/wiki/Christopher_Eccleston',
			gender: 'male'
		},
		{
			name: 'Sophie Willan',
			wiki: 'https://en.wikipedia.org/wiki/Sophie_Willan',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Every year, my family run a sweepstake on what time I will fall asleep in my chair on Christmas Day.',
		guessingTeam: 'Lee Mack',
		person: 'Gloria Hunniford',
		personGuesses: {
			'Christopher Eccleston': 'lie',
			'Lee Mack': 'lie',
			'Sophie Willan': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'When I was a teacher, I had one class that was so difficult, I played walk-on music to make my entrance more dramatic.',
		guessingTeam: 'Lee Mack',
		person: 'Guz Khan',
		personGuesses: {
			'Christopher Eccleston': 'truth',
			'Lee Mack': 'truth',
			'Sophie Willan': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Frank',
		connections: {
			'Christopher Eccleston': 'He brought Frank here because Frank is desperate to meet Gloria Hunniford.',
			'Lee Mack': 'Lee ruined Frank\'s rendition of Silent Night when he blocked his tuba with his satsuma.',
			'Sophie Willan': 'Frank kicked her out of school for arriving in a bikini.'
		},
		personGuesses: {
			'David Mitchell': 'Christopher Eccleston',
			'Gloria Hunniford': 'Christopher Eccleston',
			'Guz Khan': 'Sophie Willan'
		},
		teamGuess: 'Christopher Eccleston',
		truth: 'Sophie Willan'
	},
	{
		type: 'quick_fire',
		statement: 'I have finally given up cheering, because every time I did it, people always said I sounded sarcastic.',
		guessingTeam: 'David Mitchell',
		person: 'Christopher Eccleston',
		personGuesses: {
			'David Mitchell': 'lie',
			'Gloria Hunniford': 'lie',
			'Guz Khan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I once had a fight whilst dressed as a Christmas elf.',
		guessingTeam: 'David Mitchell',
		person: 'Sophie Willan',
		personGuesses: {
			'David Mitchell': 'truth',
			'Gloria Hunniford': 'lie',
			'Guz Khan': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'special',
	cast: cast,
	season: 16,
	episode: 1,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
