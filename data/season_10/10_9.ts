import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './10_1'
import e2 from './10_2'
import e3 from './10_3'
import e4 from './10_4'
import e5 from './10_5'
import e6 from './10_6'
import e7 from './10_7'
import e8 from './10_8'

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
		episode: 1,
		type: 'home_truths',
		possession: true,
		statement: 'This is a dog toy I chew to release tension before a fight.',
		guessingTeam: 'Lee Mack',
		person: 'David Haye',
		personGuesses: {
			'Lee Mack': 'lie',
			'Martin Kemp': 'lie',
			'Mel Giedroyc': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 2,
		type: 'home_truths',
		statement: 'I recently had to charm a spider out of my shoe by tooting a flute at it.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'lie',
			'Michael Smiley': 'lie',
			'Nadiya Hussain': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 4,
		type: 'home_truths',
		statement: 'I once saw a six-foot goldfish in the jungles of South America.',
		guessingTeam: 'Lee Mack',
		person: 'John Simpson',
		personGuesses: {
			'Hugh Dennis': 'truth',
			'Lee Mack': 'lie',
			'Warwick Davis': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 5,
		type: 'home_truths',
		statement: 'I used to eat so many carrots that I began to turn orange.',
		guessingTeam: 'Lee Mack',
		person: 'Prof. Kate Williams',
		personGuesses: {
			'Brian Blessed': 'truth',
			'Kevin Bishop': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 1,
		type: 'home_truths',
		statement: 'I was once rescued by London Underground staff after my new-romantic pantaloons got trapped in an escalator.',
		guessingTeam: 'David Mitchell',
		person: 'Martin Kemp',
		personGuesses: {
			'David Haye': 'lie',
			'David Mitchell': 'lie',
			'Romesh Ranganathan': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 2,
		type: 'home_truths',
		statement: 'I\'ve yet to find the courage to make a contactless card payment. I considered it once, but decided that full PIN entry was a safer method.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Bob Mortimer': 'truth',
			'Diane Morgan': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: 'I have never ever drunk a can of fizzy drink in my life.',
		guessingTeam: 'David Mitchell',
		person: 'Tracy-Ann Oberman',
		personGuesses: {
			'Claudia Winkleman': 'unknown',
			'David Mitchell': 'lie',
			'Rhod Gilbert': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 4,
		type: 'home_truths',
		statement: 'As a child, my family weren\'t able to have a dog, so instead we got a cat and treated it like a dog.',
		guessingTeam: 'David Mitchell',
		person: 'Hugh Dennis',
		personGuesses: {
			'David Mitchell': 'lie',
			'John Simpson': 'lie',
			'Katherine Ryan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: 'I\'m the BBC newsroom\'s rock-paper-scissors champion, having recently stolen the crown from George Alagiah.',
		guessingTeam: 'Lee Mack',
		person: 'Nick Robinson',
		personGuesses: {
			'Harry Shearer': 'unknown',
			'Lee Mack': 'lie',
			'Sara Cox': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 10,
	episode: 9,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
