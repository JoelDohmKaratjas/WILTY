import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Sarah Kendall',
			wiki: 'https://en.wikipedia.org/wiki/Sarah_Kendall',
			gender: 'female'
		},
		{
			name: 'Richard Osman',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Osman',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Pam Ayres',
			wiki: 'https://en.wikipedia.org/wiki/Pam_Ayres',
			gender: 'female'
		},
		{
			name: 'Kiell Smith-Bynoe',
			wiki: 'https://en.wikipedia.org/wiki/Kiell_Smith-Bynoe',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Two years ago, after losing my keys at a fancy dress party, I had to break into my house while dressed as Darth Vader.',
		guessingTeam: 'Lee Mack',
		person: 'Richard Osman',
		personGuesses: {
			'Kiell Smith-Bynoe': 'lie',
			'Lee Mack': 'lie',
			'Pam Ayres': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once did a parachute jump just because I fancied the instructor.',
		guessingTeam: 'David Mitchell',
		person: 'Pam Ayres',
		personGuesses: {
			'David Mitchell': 'truth',
			'Richard Osman': 'truth',
			'Sarah Kendall': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once survived being lost in a forest by eating a whole tin of cat food.',
		guessingTeam: 'Lee Mack',
		person: 'Sarah Kendall',
		personGuesses: {
			'Kiell Smith-Bynoe': 'lie',
			'Lee Mack': 'truth',
			'Pam Ayres': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Lee',
		connections: {
			'Kiell Smith-Bynoe': 'They pretended to be 50 Cent\'s support act to get into a club.',
			'Lee Mack': 'Lee single-handedly held Lee\'s five-a-side team to a draw when all Lee\'s teammates were sent off.',
			'Pam Ayres': 'He busted Pam putting her books on top of Richard\'s books.'
		},
		personGuesses: {
			'David Mitchell': 'Kiell Smith-Bynoe',
			'Richard Osman': 'Lee Mack',
			'Sarah Kendall': 'Lee Mack'
		},
		teamGuess: 'Kiell Smith-Bynoe',
		truth: 'Kiell Smith-Bynoe'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'This is my penguin. When I used him to play a prank, it got out of hand.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Kiell Smith-Bynoe': 'truth',
			'Lee Mack': 'truth',
			'Pam Ayres': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'A girl once dumped me after she heard me talking in my sleep about how much I fancied her best friend.',
		guessingTeam: 'David Mitchell',
		person: 'Kiell Smith-Bynoe',
		personGuesses: {
			'David Mitchell': 'lie',
			'Richard Osman': 'lie',
			'Sarah Kendall': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 15,
	episode: 6,
	rounds: rounds,
	score: [3, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
