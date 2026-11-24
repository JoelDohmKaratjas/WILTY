import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './18_1'
import e2 from './18_2'
import e3 from './18_3'
import e4 from './18_4'
import e5 from './18_5'
import e6 from './18_6'
import e7 from './18_7'
import e8 from './18_8'
import e9 from './18_9'
import e10 from './18_10'

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
		episode: 6,
		type: 'home_truths',
		statement: 'To make sure I get to the Radio 2 Breakfast Show on time, I always eat my Shreddies in the shower.',
		guessingTeam: 'Lee Mack',
		person: 'Richie Anderson',
		personGuesses: {
			'Chris McCausland': 'lie',
			'Lee Mack': 'lie',
			'Taj Atwal': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 5,
		type: 'home_truths',
		statement: 'I once couldn\'t go to the loo because someone famous was in the cubicle next to me.',
		guessingTeam: 'David Mitchell',
		person: 'Cush Jumbo',
		personGuesses: {
			'David Mitchell': 'lie',
			'Judi Love': 'truth',
			'Sir Grayson Perry': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 2,
		type: 'home_truths',
		statement: 'My middle name is Gary.',
		guessingTeam: 'Lee Mack',
		person: 'Stacey Solomon',
		personGuesses: {
			'Harry Hill': 'truth',
			'Jill Scott': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 9,
		type: 'home_truths',
		statement: 'I love being a Gladiator so much, I\'m having building work done so I can play Gladiators at home.',
		guessingTeam: 'David Mitchell',
		person: 'Matt Morsia',
		personGuesses: {
			'David Mitchell': 'truth',
			'Josh Jones': 'unknown',
			'Rosie Ramsey': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 4,
		type: 'home_truths',
		statement: 'I once kicked Harold Pinter in the privates.',
		guessingTeam: 'Lee Mack',
		person: 'Eddie Marsan',
		personGuesses: {
			'Ivo Graham': 'lie',
			'Kadeena Cox': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 2,
		type: 'home_truths',
		statement: 'I have what I call happy trousers and sad trousers, and I choose which ones to wear depending on my mood.',
		guessingTeam: 'Lee Mack',
		person: 'Kojey Radical',
		personGuesses: {
			'Harry Hill': 'lie',
			'Jill Scott': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 9,
		type: 'home_truths',
		statement: 'I hated a shirt of my husband\'s so much, I secretly gave it to a charity shop, then had to come clean when he saw it on a mannequin in the window.',
		guessingTeam: 'Lee Mack',
		person: 'Rosie Ramsey',
		personGuesses: {
			'Lee Mack': 'truth',
			'Matt Morsia': 'truth',
			'Shazia Mirza': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 4,
		type: 'home_truths',
		statement: 'When I was on I\'m A Celebrity, I managed to smuggle two banned items into the jungle.',
		guessingTeam: 'David Mitchell',
		person: 'Kadeena Cox',
		personGuesses: {
			'David Mitchell': 'truth',
			'Eddie Marsan': 'truth',
			'Harriet Kemsley': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 10,
		type: 'home_truths',
		statement: 'Last year, I won this hat on a plane for being the only person to find all the words in the in-flight magazine wordsearch.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Bob Mortimer': 'lie',
			'Lee Mack': 'lie',
			'Sara Davies': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 18,
	episode: 11,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
