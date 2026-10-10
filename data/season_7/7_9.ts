import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './7_1'
import e2 from './7_2'
import e3 from './7_3'
import e4 from './7_4'
import e5 from './7_5'
import e6 from './7_6'
import e7 from './7_7'
import e8 from './7_8'

const compilationCast = {
	1: e1.cast,
	2: e2.cast,
	3: e3.cast,
	4: e4.cast,
	5: e5.cast,
	6: e6.cast,
	7: e7.cast,
	8: e8.cast
} as const satisfies CompilationCast

const rounds = [
	{
		episode: 2,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Charles Dance',
		personGuesses: {
			'David Mitchell': 'lie',
			'Isy Suttie': 'lie',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'Joan Bakewell',
		personGuesses: {
			'Lee Mack': 'lie',
			'Paul Hollywood': 'lie',
			'Warwick Davis': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 4,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'Dermot O\'Leary',
		personGuesses: {
			'Josh Widdicombe': 'truth',
			'Lee Mack': 'truth',
			'Matt Dawson': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 5,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'David O\'Doherty',
		personGuesses: {
			'David Mitchell': 'lie',
			'Richard Osman': 'truth',
			'Susan Calman': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Bob Mortimer': 'lie',
			'David Harewood': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 7,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Joanna Scanlan',
		personGuesses: {
			'David Mitchell': 'truth',
			'Greg Rutherford': 'truth',
			'Kirsty Young': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 2,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Gok Wan',
		personGuesses: {
			'David Mitchell': 'lie',
			'Isy Suttie': 'truth',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 5,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'Richard Osman',
		personGuesses: {
			'Carol Kirkwood': 'lie',
			'David O\'Doherty': 'unknown',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'Jon Richardson',
		personGuesses: {
			'Bob Mortimer': 'truth',
			'David Harewood': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 7,
	episode: 9,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
