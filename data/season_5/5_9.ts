import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './5_1'
import e2 from './5_2'
import e3 from './5_3'
import e4 from './5_4'
import e5 from './5_5'
import e6 from './5_6'
import e7 from './5_7'
import e8 from './5_8'

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
		episode: 7,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'Mackenzie Crook',
		personGuesses: {
			'Lee Mack': 'truth',
			'Rhod Gilbert': 'truth',
			'Victoria Coren': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 1,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Miranda Hart',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jack Whitehall': 'lie',
			'Rebecca Front': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Bill Turnbull',
		personGuesses: {
			'David Mitchell': 'lie',
			'David O\'Doherty': 'lie',
			'Katherine Parkinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 1,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'Rebecca Front',
		personGuesses: {
			'Lee Mack': 'truth',
			'Miranda Hart': 'truth',
			'Nick Hewer': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Sarah Millican',
		personGuesses: {
			'Bill Oddie': 'truth',
			'David Mitchell': 'truth',
			'Frank Skinner': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 1,
		type: 'home_truths',
		statement: '',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Nick Hewer',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jack Whitehall': 'unknown',
			'Rebecca Front': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'Katherine Parkinson',
		personGuesses: {
			'Bill Turnbull': 'truth',
			'Lee Mack': 'truth',
			'Louie Spence': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: '',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Bill Turnbull',
		personGuesses: {
			'David Mitchell': 'lie',
			'David O\'Doherty': 'truth',
			'Katherine Parkinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 8,
		type: 'host',
		statement: '',
		personGuesses: {
			david: {
				'Dara Ó Briain': 'lie',
				'David Mitchell': 'lie',
				'Lorraine Kelly': 'lie'
			},
			lee: {
				'Barry Cryer': 'lie',
				'Lee Mack': 'lie',
				'Sue Perkins': 'lie'
			}
		},
		teamGuess: {
			david: 'lie',
			lee: 'lie'
		},
		truth: 'lie'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 5,
	episode: 9,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
