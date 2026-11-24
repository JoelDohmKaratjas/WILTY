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
		episode: 2,
		repeat: true,
		type: 'home_truths',
		statement: 'When I was a doctor, I accidentally sent two patients for procedures they didn\'t need because I\'d got their forms mixed up.',
		guessingTeam: 'David Mitchell',
		person: 'Harry Hill',
		personGuesses: {
			'David Mitchell': 'truth',
			'Kojey Radical': 'lie',
			'Stacey Solomon': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 9,
		repeat: true,
		type: 'home_truths',
		statement: 'Whenever I eat a banana, I eat everything. Including the skin.',
		guessingTeam: 'David Mitchell',
		person: 'Matt Morsia',
		personGuesses: {
			'David Mitchell': 'truth',
			'Josh Jones': 'truth',
			'Rosie Ramsey': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 5,
		repeat: true,
		type: 'home_truths',
		statement: 'As a schoolgirl, I got a free can of Coke every day from my newsagent in exchange for keeping quiet about his affair.',
		guessingTeam: 'Lee Mack',
		person: 'Judi Love',
		personGuesses: {
			'Cush Jumbo': 'truth',
			'Lee Mack': 'truth',
			'Tim Vine': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 2,
		repeat: true,
		type: 'home_truths',
		statement: 'I was sick into the FA Cup.',
		guessingTeam: 'David Mitchell',
		person: 'Jill Scott',
		personGuesses: {
			'David Mitchell': 'truth',
			'Kojey Radical': 'truth',
			'Stacey Solomon': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 3,
		repeat: true,
		type: 'quick_fire',
		statement: 'I once climbed into a crocodile enclosure because I wanted to get a closer look.',
		guessingTeam: 'David Mitchell',
		person: 'Nabil Abdulrashid',
		personGuesses: {
			'David Mitchell': 'truth',
			'Francesca Mills': 'truth',
			'Lucy Beaumont': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 4,
		repeat: true,
		type: 'home_truths',
		statement: 'Once, while camping, I lost my tent, then took desperate measures to find somewhere else to stay.',
		guessingTeam: 'Lee Mack',
		person: 'Harriet Kemsley',
		personGuesses: {
			'Ivo Graham': 'lie',
			'Kadeena Cox': 'lie',
			'Lee Mack': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 5,
		repeat: true,
		type: 'quick_fire',
		statement: 'Aside from Mr McKee, who taught PE, three other teachers at my school taught subjects that rhymed with their surnames.',
		guessingTeam: 'David Mitchell',
		person: 'Tim Vine',
		personGuesses: {
			'David Mitchell': 'lie',
			'Judi Love': 'lie',
			'Sir Grayson Perry': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 18,
	episode: 12,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
