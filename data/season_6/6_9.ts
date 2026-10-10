import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './6_1'
import e2 from './6_2'
import e3 from './6_3'
import e4 from './6_4'
import e5 from './6_5'
import e6 from './6_6'
import e7 from './6_7'
import e8 from './6_8'

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
		guessingTeam: 'Lee Mack',
		person: 'Richard Madeley',
		personGuesses: {
			'Kate Humble': 'lie',
			'Lee Mack': 'lie',
			'Miles Jupp': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'lie',
			'Greg Davies': 'lie',
			'Richard Osman': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 5,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Dr. Christian Jessen',
		personGuesses: {
			'Andy Hamilton': 'truth',
			'David Mitchell': 'truth',
			'Gabby Logan': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 1,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Alexander Armstrong',
		personGuesses: {
			'Chris Tarrant': 'lie',
			'David Mitchell': 'lie',
			'Mel Giedroyc': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 5,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Diane Parish': 'lie', // originally truth
			'Dr. Christian Jessen': 'lie', // originally truth
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 8,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Jim Carter',
		personGuesses: {
			'David Mitchell': 'truth',
			'Emily Maitlis': 'truth',
			'Jack Whitehall': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'truth',
			'Greg Davies': 'truth',
			'Richard Osman': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: '',
		guessingTeam: 'David Mitchell',
		person: 'Clare Baldain',
		personGuesses: {
			'Dale Winton': 'truth',
			'David Mitchell': 'lie',
			'Richard Bacon': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 5,
		type: 'host',
		statement: '',
		personGuesses: {
			david: {
				'Andy Hamilton': 'truth',
				'David Mitchell': 'truth',
				'Gabby Logan': 'truth'
			},
			lee: {
				'Diane Parish': 'unknown',
				'Dr. Christian Jessen': 'unknown',
				'Lee Mack': 'lie'
			}
		},
		teamGuess: {
			david: 'truth',
			lee: 'lie'
		},
		truth: 'lie'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 6,
	episode: 9,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
