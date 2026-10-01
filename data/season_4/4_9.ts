import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './4_1'
import e2 from './4_2'
import e3 from './4_3'
import e4 from './4_4'
import e5 from './4_5'
import e6 from './4_6'
import e7 from './4_7'
import e8 from './4_8'

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
		episode: 3,
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Prof. Brain Cox',
		personGuesses: {
			'David Mitchell': 'lie',
			'Keeley Hawes': 'lie',
			'Stephen Mangan': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 1,
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Martin Clunes',
		personGuesses: {
			'David Mitchell': 'truth',
			'Fern Britton': 'lie',
			'Richard E. Grant': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 5,
		type: 'ring_of_truth_dual',
		personGuesses: {
			david: {
				'David Mitchell': 'lie',
				'Ronnie Corbett': 'lie',
				'Sarah Millican': 'lie'
			},
			lee: {
				'Holly Walsh': 'truth',
				'Julian Clary': 'truth',
				'Lee Mack': 'truth'
			}
		},
		teamGuess: {
			david: 'lie',
			lee: 'truth'
		},
		truth: 'lie'
	},
	{
		episode: 8,
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'John Bishop',
		personGuesses: {
			'Chris Addison': 'lie',
			'Lee Mack': 'lie',
			'Patsy Palmer': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 3,
		type: 'host',
		personGuesses: {
			david: {
				'David Mitchell': 'truth',
				'Keeley Hawes': 'truth',
				'Stephen Mangan': 'truth'
			},
			lee: {
				'Kevin Bridges': 'truth',
				'Lee Mack': 'truth',
				'Prof. Brain Cox': 'truth'
			}
		},
		teamGuess: {
			david: 'truth',
			lee: 'truth'
		},
		truth: 'truth'
	},
	{
		episode: 2,
		type: 'quick_fire_possession',
		guessingTeam: 'David Mitchell',
		person: 'Jack Dee',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jason Manford': 'lie',
			'Ruth Jones': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 7,
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Bernard Cribbins': 'lie',
			'David Mitchell': 'lie',
			'Patrick Kielty': 'lie' // jokingly said true
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 4,
	episode: 9,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
