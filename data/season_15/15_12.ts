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
		episode: 9,
		repeat: true,
		type: 'home_truths',
		statement: 'Very few people know this, but for five months in 1998, I appeared every week on Noel\'s House Party as the man inside Mr Blobby.',
		guessingTeam: 'David Mitchell',
		person: 'Stephen Mulhern',
		personGuesses: {
			'David Mitchell': 'truth',
			'Deborah Frances-White': 'truth',
			'Raj Bisram': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 2,
		repeat: true,
		type: 'home_truths',
		statement: 'For three months, I shared a flat with a monkey.',
		guessingTeam: 'David Mitchell',
		person: 'John Cooper Clarke',
		personGuesses: {
			'Chris McCausland': 'truth',
			'David Mitchell': 'truth',
			'Judi Love': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 3,
		repeat: true,
		type: 'home_truths',
		possession: true,
		statement: 'This is Jeff. Every Thursday, our floor manager hides him somewhere on the set of This Morning for me and Phillip to find during the show. The first one to spot him is the winner.',
		guessingTeam: 'Lee Mack',
		person: 'Holly Willoughby',
		personGuesses: {
			'Angellica Bell': 'truth',
			'Bob Mortimer': 'unknown',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 7,
		repeat: true,
		type: 'home_truths',
		possession: true,
		statement: 'These are three items from my doll\'s house. I have meticulously furnished it with everything I\'d put in my real house if only I was allowed.',
		guessingTeam: 'David Mitchell',
		person: 'Alan Titchmarsh',
		personGuesses: {
			'David Mitchell': 'truth',
			'Mike Wozniak': 'truth',
			'Philippa Perry': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 2,
		repeat: true,
		type: 'home_truths',
		statement: 'An ex-boyfriend once dumped me after he found a list of pros and cons I\'d made about him.',
		guessingTeam: 'Lee Mack',
		person: 'Judi Love',
		personGuesses: {
			'Caroline Quentin': 'lie',
			'John Cooper Clarke': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 5,
		repeat: true,
		type: 'home_truths',
		statement: 'Every morning, to aid my diction, I stand in front of the bathroom mirror and say my special phrase.',
		guessingTeam: 'Lee Mack',
		person: 'Gyles Brandreth',
		personGuesses: {
			'Lee Mack': 'truth',
			'Sarah Millican': 'truth',
			'Yung Filly': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 3,
		repeat: true,
		type: 'home_truths',
		statement: 'On a dark winter\'s night, I once broke into the garden of the local witch\'s house and was shocked by what I found there.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'lie',
			'Holly Willoughby': 'lie',
			'Suggs': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 15,
	episode: 12,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
