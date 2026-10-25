import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './13_1'
import e2 from './13_2'
import e3 from './13_3'
import e4 from './13_4'
import e5 from './13_5'
import e6 from './13_6'
import e7 from './13_7'
import e8 from './13_8'
import e9 from './13_9'
import e10 from './13_10'

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
		episode: 2,
		type: 'home_truths',
		statement: 'I once ruined a date when I punched myself in the face.',
		guessingTeam: 'David Mitchell',
		person: 'Asim Chaudhry',
		personGuesses: {
			'David Mitchell': 'truth',
			'Greg James': 'truth',
			'Victoria Coren Mitchell': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 5,
		type: 'home_truths',
		statement: 'Not a lot of people know this, but I am a qualified dog masseur.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jay Blades': 'lie',
			'Sue Johnston': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 7,
		type: 'home_truths',
		statement: 'My weekday breakfast regime is always as follows - Monday, cornflakes, Tuesday, cornflakes, Wednesday, cornflakes, Thursday, cornflakes, and on Friday, jazzy cornflakes.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Joe Sugg': 'lie',
			'Lee Mack': 'lie',
			'Steph McGovern': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 2,
		type: 'home_truths',
		statement: 'After accidentally spilling red wine on my dress on the way to Ascot, I deliberately spilt more wine on it and pretended it was part of the pattern.',
		guessingTeam: 'David Mitchell',
		person: 'Clare Balding',
		personGuesses: {
			'David Mitchell': 'truth',
			'Greg James': 'lie',
			'Victoria Coren Mitchell': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 5,
		type: 'home_truths',
		statement: 'I once taped over a rare recording of one of the Beatles\' biggest hits.',
		guessingTeam: 'Lee Mack',
		person: 'Sue Johnston',
		personGuesses: {
			'Alice Levine': 'truth',
			'Bob Mortimer': 'unknown',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: 'I once revived a tortoise by giving it the kiss of life.',
		guessingTeam: 'David Mitchell',
		person: 'Dr. Ranj Singh',
		personGuesses: {
			'David Mitchell': 'lie',
			'Liz Bonnin': 'lie',
			'Stephen Merchant': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 5,
		type: 'home_truths',
		possession: true,
		statement: 'This is the mug I use to silently signal to my wife if I think a tradesman is trustworthy or not.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jay Blades': 'lie',
			'Sue Johnston': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 4,
		type: 'home_truths',
		possession: true,
		statement: 'The object in this box is on display in my bathroom, but I\'m too scared to touch it. For that reason, David will now reveal it.',
		guessingTeam: 'Lee Mack',
		person: 'Claudia Winkleman',
		personGuesses: {
			'Greg Davies': 'lie',
			'Lee Mack': 'lie',
			'Lucy Worsley': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 13,
	episode: 11,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
