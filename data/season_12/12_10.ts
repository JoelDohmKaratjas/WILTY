import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './12_1'
import e2 from './12_2'
import e3 from './12_3'
import e4 from './12_4'
import e5 from './12_5'
import e6 from './12_6'
import e7 from './12_7'
import e8 from './12_8'
import e9 from './12_9'

const compilationCast = {
	1: e1.cast,
	2: e2.cast,
	3: e3.cast,
	4: e4.cast,
	5: e5.cast,
	6: e6.cast,
	7: e7.cast,
	8: e8.cast,
	9: e9.cast
} as const satisfies CompilationCast

const rounds = [
	{
		episode: 3,
		type: 'home_truths',
		statement: 'At home, if I need to remember to do something, I will put my slippers on the wrong feet and won\'t swap them back until I\'ve done it.',
		guessingTeam: 'David Mitchell',
		person: 'Jon Richardson',
		personGuesses: {
			'Aston Merrygold': 'truth',
			'David Mitchell': 'truth',
			'Olivia Colman': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 6,
		type: 'home_truths',
		possession: true,
		statement: 'Every time I lose a tooth, I put it in a pot. This is that pot.',
		guessingTeam: 'Lee Mack',
		person: 'Diane Morgan',
		personGuesses: {
			'Daisy May Cooper': 'truth',
			'Lee Mack': 'truth',
			'Rory Reid': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 1,
		type: 'home_truths',
		statement: 'My first taste of fame was when the local newspaper dubbed me the Cockroach King.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'truth',
			'Dion Dublin': 'truth',
			'Lucy Porter': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 5,
		type: 'home_truths',
		statement: 'When I was Baby Spice I mainly just ate baby food.',
		guessingTeam: 'David Mitchell',
		person: 'Emma Bunton',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jonnie Peacock': 'lie',
			'Shaun Williamson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 1,
		type: 'home_truths',
		statement: 'I can walk from my house to the corner shop on only one gulp of air, and regularly do so, just for fun.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Bob Mortimer': 'lie',
			'Debbie McGee': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 9,
		type: 'home_truths',
		statement: 'I once presented a woman at work with what I now realise was a deeply inappropriate gift.',
		guessingTeam: 'David Mitchell',
		person: 'Henning Wehn',
		personGuesses: {
			'Alex Jones': 'truth',
			'David Mitchell': 'truth',
			'Rachel Parris': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 5,
		type: 'home_truths',
		statement: 'I was once favourite to win an athletics event, but ended up coming last after an incident in a toilet cubicle.',
		guessingTeam: 'David Mitchell',
		person: 'Jo Brand',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jonnie Peacock': 'truth',
			'Shaun Williamson': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 1,
		type: 'home_truths',
		statement: 'I once continued with a first date even though I\'d been sick in my handbag.',
		guessingTeam: 'Lee Mack',
		person: 'Lucy Porter',
		personGuesses: {
			'Bob Mortimer': 'truth',
			'Debbie McGee': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 12,
	episode: 10,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
