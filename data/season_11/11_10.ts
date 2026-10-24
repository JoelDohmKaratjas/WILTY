import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './11_1'
import e2 from './11_2'
import e3 from './11_3'
import e4 from './11_4'
import e5 from './11_5'
import e6 from './11_6'
import e7 from './11_7'
import e8 from './11_8'
import e9 from './11_9'

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
		statement: 'I once got on the tube with a live pigeon in my pocket.',
		guessingTeam: 'David Mitchell',
		person: 'Jo Brand',
		personGuesses: {
			'David Baddiel': 'lie',
			'David Mitchell': 'lie',
			'Kimberly Wyatt': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: 'It once took four people to rescue me after I got stuck in a baby\'s cot.',
		guessingTeam: 'Lee Mack',
		person: 'Claudia Winkleman',
		personGuesses: {
			'Lee Mack': 'truth',
			'Sara Pascoe': 'unknown',
			'Steve Davis': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 8,
		type: 'home_truths',
		statement: 'At a recent party, I rendered Lord Sugar\'s pet parrot mute after I pinged it on the beak with a champagne cork.',
		guessingTeam: 'Lee Mack',
		person: 'Claude Littner',
		personGuesses: {
			'Ade Edmondson': 'lie',
			'Cariad Lloyd': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: 'I used to coach the Sultan of Brunei\'s son until he sacked me over an incident with a cheese sandwich.',
		guessingTeam: 'David Mitchell',
		person: 'Steve Davis',
		personGuesses: {
			'Claudia Winkleman': 'truth',
			'Craig Parkinson': 'truth',
			'David Mitchell': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 4,
		type: 'home_truths',
		statement: 'I\'m frightened of rainbows, and I refuse to go outside when sunshine immediately follows the rain.',
		guessingTeam: 'Lee Mack',
		person: 'Stacey Solomon',
		personGuesses: {
			'Bob Mortimer': 'truth',
			'Lee Mack': 'truth',
			'Ore Oduba': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: 'I was once investigated by Interpol after a holiday romance with a water-skiing instructor.',
		guessingTeam: 'Lee Mack',
		person: 'Fay Ripley',
		personGuesses: {
			'Gabby Logan': 'truth',
			'James Acaster': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 2,
		type: 'home_truths',
		statement: 'One Halloween, I was quizzed by the police while dressed as a caveman, because another caveman had just robbed an off-licence around the corner.',
		guessingTeam: 'David Mitchell',
		person: 'Mark Bonnar',
		personGuesses: {
			'David Mitchell': 'lie',
			'Sheila Hancock': 'lie',
			'Stephen Mangan': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 8,
		type: 'home_truths',
		statement: 'I missed Kanye West\'s entire set at Glastonbury because I was trapped in my sleeping bag.',
		guessingTeam: 'Lee Mack',
		person: 'Jordan Stephens',
		personGuesses: {
			'Ade Edmondson': 'lie',
			'Cariad Lloyd': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 11,
	episode: 10,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
