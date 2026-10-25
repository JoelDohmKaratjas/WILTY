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
		statement: 'I was once unable to wave at Prince Charles because I was holding a wounded seagull.',
		guessingTeam: 'Lee Mack',
		person: 'Victoria Coren Mitchell',
		personGuesses: {
			'Asim Chaudhry': 'undecided',
			'Clare Balding': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 4,
		type: 'home_truths',
		statement: 'I was once dragged into the headmaster\'s office after I was caught leaning out of a window and firing a Creme Egg into my friend\'s mouth with a catapult.',
		guessingTeam: 'David Mitchell',
		person: 'Greg Davies',
		personGuesses: {
			'Claudia Winkleman': 'lie',
			'David Mitchell': 'lie',
			'Guz Khan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 1,
		type: 'home_truths',
		statement: 'Because I\'m so scared of cutting my fingernails, once a month, I\'ll have a large glug of Night Nurse and ask my wife to do it while I\'m asleep.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Gabby Logan': 'unknown',
			'John Simm': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 4,
		type: 'home_truths',
		statement: 'To give myself 15 minutes\' peace, I once put my child on one end of a seesaw and a bag of potatoes on the other.',
		guessingTeam: 'Lee Mack',
		person: 'Claudia Winkleman',
		personGuesses: {
			'Greg Davies': 'lie',
			'Lee Mack': 'lie',
			'Lucy Worsley': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 9,
		type: 'home_truths',
		statement: 'I always answer the front door with a spanner in my hand, so if it\'s someone I don\'t want to talk to, I can tell them that I\'m busy fixing the sink.',
		guessingTeam: 'Lee Mack',
		person: 'Kiri Pritchard-McLean',
		personGuesses: {
			'Henning Wehn': 'lie',
			'Lee Mack': 'lie',
			'Simon Day': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: 'I once had to present a segment of Blue Planet Live with one arm hidden behind my back because my hand was stuck in a tube of Pringles.',
		guessingTeam: 'Lee Mack',
		person: 'Liz Bonnin',
		personGuesses: {
			'Dr. Ranj Singh': 'lie',
			'Lee Mack': 'lie',
			'Sharon Osbourne': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 2,
		type: 'home_truths',
		statement: '11 years ago, I did a very bad thing in the kitchen. The time has finally come to confess all to my wife.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'truth',
			'Greg James': 'lie',
			'Victoria Coren Mitchell': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 13,
	episode: 12,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
