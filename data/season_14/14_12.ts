import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './14_1'
import e2 from './14_2'
import e3 from './14_3'
import e4 from './14_4'
import e5 from './14_5'
import e6 from './14_6'
import e7 from './14_7'
import e8 from './14_8'
import e9 from './14_9'
import e10 from './14_10'

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
		episode: 3,
		repeat: true,
		type: 'home_truths',
		statement: 'Before every World Championship final, I used to give a motivational team talk to my snooker cue, or as I called him, Sir Potsalot.',
		guessingTeam: 'David Mitchell',
		person: 'Stephen Hendry',
		personGuesses: {
			'Chris McCausland': 'truth',
			'David Mitchell': 'truth',
			'Laura Whitmore': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 8,
		repeat: true,
		type: 'home_truths',
		statement: 'I once had to interview Lady Gaga using an American accent because her manager told me there was no way she\'d be able to understand my Northern voice.',
		guessingTeam: 'Lee Mack',
		person: 'AJ Odudu',
		personGuesses: {
			'Alex Horne': 'truth',
			'Lee Mack': 'undecided',
			'Sindhu Vee': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 5,
		repeat: true,
		type: 'home_truths',
		statement: 'I once helped Damon Hill to Grand Prix success by presenting him with a pre-race snack.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'lie',
			'Miles Jupp': 'lie',
			'Samantha Morton': 'undecided'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 7,
		repeat: true,
		type: 'home_truths',
		statement: 'Every day, I do one press-up for each year I\'ve been alive.',
		guessingTeam: 'David Mitchell',
		person: 'Mr. Motivator',
		personGuesses: {
			'Dan Walker': 'truth',
			'David Mitchell': 'truth',
			'Nicola Coughlan': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 6,
		repeat: true,
		type: 'home_truths',
		statement: 'One Sunday, I embarrassed myself in front of the entire congregation after too many cups of communion wine.',
		guessingTeam: 'David Mitchell',
		person: 'The Rev. Kate Bottley',
		personGuesses: {
			'Claudia Winkleman': 'lie',
			'David Mitchell': 'lie',
			'Sara Barron': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 5,
		repeat: true,
		type: 'home_truths',
		statement: 'When Tom Cruise came to England, I took him to Argos because he wanted to buy an extension lead.',
		guessingTeam: 'Lee Mack',
		person: 'Samantha Morton',
		personGuesses: {
			'Bob Mortimer': 'truth',
			'Lee Mack': 'truth',
			'Sarah Hadland': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 2,
		repeat: true,
		type: 'home_truths',
		statement: 'I like to keep my old fingernail clippings, so I can use them later on.',
		guessingTeam: 'David Mitchell',
		person: 'Les Dennis',
		personGuesses: {
			'David Mitchell': 'lie',
			'Lou Sanders': 'lie',
			'Richard Osman': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 4,
		repeat: true,
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Sean',
		connections: {
			'David Mitchell': 'As a boy, I would only allow Sean to cut my hair dressed as Zorro.',
			'Gemma Cairney': 'Sean blew up my Wotsits at school.',
			'Raj Bisram': 'I used to whip off Sean\'s shirt in public for money.'
		},
		personGuesses: {
			'Josh Widdicombe': 'Gemma Cairney',
			'Lee Mack': 'Gemma Cairney',
			'Sophie Hermann': 'Gemma Cairney'
		},
		teamGuess: 'Gemma Cairney',
		truth: 'Raj Bisram'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 14,
	episode: 12,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
