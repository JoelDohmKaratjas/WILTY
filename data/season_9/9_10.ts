import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './9_1'
import e2 from './9_2'
import e3 from './9_3'
import e4 from './9_4'
import e5 from './9_5'
import e6 from './9_6'
import e7 from './9_7'
import e8 from './9_8'
import e9 from './9_9'

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
		episode: 1,
		type: 'home_truths',
		statement: 'I\'ve buried a thousand pounds in cash in a secret location in case I ever have to go on the run.',
		guessingTeam: 'Lee Mack',
		person: 'Danny Dyer',
		personGuesses: {
			'Joe Lycett': 'lie',
			'Lee Mack': 'lie',
			'Moira Stuart': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 5,
		type: 'home_truths',
		statement: 'The first time I went to Germany, I knew only one German phrase and bizarrely, an accident occurred which required me to use it.',
		guessingTeam: 'David Mitchell',
		person: 'Clare Balding',
		personGuesses: {
			'David Mitchell': 'lie',
			'Nick Grimshaw': 'lie',
			'Rhod Gilbert': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: 'I find it incredibly irritating when other people fiddle with my jigsaws.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Alex Jones': 'lie',
			'John Cooper Clarke': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 2,
		type: 'home_truths',
		possession: true,
		statement: 'This is the cushion I use to carry my pet owl around on. I would have brought the owl but he escaped last week.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'lie',
			'Gabby Logan': 'lie',
			'Steve Backshall': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 4,
		type: 'home_truths',
		possession: true,
		statement: 'This is the bag I wear on my head to carry my shopping home.',
		guessingTeam: 'Lee Mack',
		person: 'Germaine Greer',
		personGuesses: {
			'Jermaine Jenas': 'truth',
			'Lee Mack': 'lie',
			'Richard Osman': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: 'When I was a teenager, I used to have to butter my legs in order to squeeze into tight leather trousers.',
		guessingTeam: 'Lee Mack',
		person: 'Greg Davies',
		personGuesses: {
			'Alex Jones': 'truth',
			'John Cooper Clarke': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 4,
		type: 'home_truths',
		statement: 'If ever I took a penalty, I would choose to place the ball in the left or right depending on which of my socks was the muddiest.',
		guessingTeam: 'David Mitchell',
		person: 'Jermaine Jenas',
		personGuesses: {
			'Alan Davies': 'truth',
			'David Mitchell': 'truth',
			'Germaine Greer': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 9,
	episode: 10,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
