import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './5_1'
import e2 from './5_2'
import e3 from './5_3'
import e4 from './5_4'
import e5 from './5_5'
import e6 from './5_6'
import e7 from './5_7'
import e8 from './5_8'

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
		episode: 7,
		type: 'home_truths',
		statement: 'When I won the Pirates of the Caribbean Sandcastle Competition, Keith Richards was so angry he stamped on my drawbridge and threw Johnny Depp\'s bucket in the sea.',
		guessingTeam: 'Lee Mack',
		person: 'Mackenzie Crook',
		personGuesses: {
			'Lee Mack': 'truth',
			'Rhod Gilbert': 'truth',
			'Victoria Coren': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 1,
		type: 'home_truths',
		statement: 'Last year whilst house-sitting for friends, I had to shout for help for two hours when I got stuck in their children\'s Wendy house.',
		guessingTeam: 'David Mitchell',
		person: 'Miranda Hart',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jack Whitehall': 'lie',
			'Rebecca Front': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: 'I have drunk rum from a human skull.',
		guessingTeam: 'David Mitchell',
		person: 'Bill Turnbull',
		personGuesses: {
			'David Mitchell': 'lie',
			'David O\'Doherty': 'lie',
			'Katherine Parkinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 1,
		type: 'home_truths',
		statement: 'I have vomited in Cliff Richard\'s hedge.',
		guessingTeam: 'Lee Mack',
		person: 'Rebecca Front',
		personGuesses: {
			'Lee Mack': 'truth',
			'Miranda Hart': 'truth',
			'Nick Hewer': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: 'I once ruined a christening party when I was overheard calling the baby ugly on a baby monitor.',
		guessingTeam: 'David Mitchell',
		person: 'Sarah Millican',
		personGuesses: {
			'Bill Oddie': 'truth',
			'David Mitchell': 'truth',
			'Frank Skinner': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 1,
		type: 'home_truths',
		statement: 'This is a hat from my hat collection. I wear one whenever I throw a dinner party.',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Nick Hewer',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jack Whitehall': 'unknown',
			'Rebecca Front': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: 'Me and my husband have a fake laugh that we do at parties to signal when it\'s time to leave.',
		guessingTeam: 'Lee Mack',
		person: 'Katherine Parkinson',
		personGuesses: {
			'Bill Turnbull': 'truth',
			'Lee Mack': 'truth',
			'Louie Spence': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: 'This is my conversation book. In it I\'ve written a list of topics that I refer to should I ever run out of things to talk about.',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Bill Turnbull',
		personGuesses: {
			'David Mitchell': 'lie',
			'David O\'Doherty': 'truth',
			'Katherine Parkinson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 8,
		type: 'host',
		statement: 'For one week I appeared in a Dear Deidre photo casebook in The Sun newspaper.',
		personGuesses: {
			david: {
				'Dara Ó Briain': 'lie',
				'David Mitchell': 'lie',
				'Lorraine Kelly': 'lie'
			},
			lee: {
				'Barry Cryer': 'lie',
				'Lee Mack': 'lie',
				'Sue Perkins': 'lie'
			}
		},
		teamGuess: {
			david: 'lie',
			lee: 'lie'
		},
		truth: 'lie'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 5,
	episode: 9,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
