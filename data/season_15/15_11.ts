import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './15_1'
import e2 from './15_2'
import e3 from './15_3'
import e4 from './15_4'
import e5 from './15_5'
import e6 from './15_6'
import e7 from './15_7'
import e8 from './15_8'
import e9 from './15_9'
import e10 from './15_10'

const compilationCast = {
	1: e1.cast,
	2: e2.cast,
	3: e3.cast,
	4: e4.cast,
	5: e5.cast,
	6: e6.cast,
	7: e7.cast,
	8: e8.cast,
	9: e9.cast,
	10: e10.cast
} as const satisfies CompilationCast

const rounds = [
	{
		episode: 3,
		type: 'home_truths',
		statement: 'Believe it or not, my dog is called Suggs.',
		guessingTeam: 'David Mitchell',
		person: 'Angellica Bell',
		personGuesses: {
			'David Mitchell': 'truth',
			'Holly Willoughby': 'truth',
			'Suggs': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 5,
		type: 'home_truths',
		statement: 'I once accidentally swallowed a party hooter, and for five alarming minutes honked every time I breathed.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Gyles Brandreth': 'lie',
			'Lou Sanders': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 7,
		type: 'home_truths',
		statement: 'To get to the very core of someone\'s personality, I always ask myself one simple question - are they a Tom or a Jerry?',
		guessingTeam: 'Lee Mack',
		person: 'Philippa Perry',
		personGuesses: {
			'Alan Titchmarsh': 'lie',
			'Lady Leshurr': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 5,
		type: 'home_truths',
		statement: 'I once rode a moped straight off a cliff.',
		guessingTeam: 'David Mitchell',
		person: 'Yung Filly',
		personGuesses: {
			'David Mitchell': 'truth',
			'Gyles Brandreth': 'unknown',
			'Lou Sanders': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 1,
		type: 'home_truths',
		statement: 'Sometimes when life gets a little too much, I like to lie on the floor and imagine how much simpler things would be if only I was a worm.',
		guessingTeam: 'David Mitchell',
		person: 'Ardal O\'Hanlon',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jim Broadbent': 'lie',
			'Rose Matafeo': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 2,
		type: 'home_truths',
		statement: 'I hate the sea so much, if ever I\'m forced to go to the beach, I sit with my back to it.',
		guessingTeam: 'David Mitchell',
		person: 'John Cooper Clarke',
		personGuesses: {
			'Chris McCausland': 'lie',
			'David Mitchell': 'lie',
			'Judi Love': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 5,
		type: 'home_truths',
		statement: 'I once broke up with a boyfriend because he insisted on sleeping in a cupboard.',
		guessingTeam: 'Lee Mack',
		person: 'Lou Sanders',
		personGuesses: {
			'Lee Mack': 'truth',
			'Sarah Millican': 'truth',
			'Yung Filly': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: 'I\'ve put a toaster on my bedside table, and the last thing I do at night is pop two slices of bread in it, ready for the morning.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'lie',
			'Holly Willoughby': 'truth',
			'Suggs': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 15,
	episode: 11,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
