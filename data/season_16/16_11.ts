import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './16_1'
import e2 from './16_2'
import e3 from './16_3'
import e4 from './16_4'
import e5 from './16_5'
import e6 from './16_6'
import e7 from './16_7'
import e8 from './16_8'
import e9 from './16_9'
import e10 from './16_10'

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
		episode: 5,
		type: 'home_truths',
		statement: 'When I met the Queen to accept my MBE, I accidentally called her \'nan,\' because she reminded me of my nan.',
		guessingTeam: 'Lee Mack',
		person: 'Ellie Simmonds',
		personGuesses: {
			'Jayde Adams': 'lie',
			'Lee Mack': 'truth',
			'MIST': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 4,
		type: 'home_truths',
		statement: 'I went into labour after trying out an overambitious dance move at my baby shower.',
		guessingTeam: 'David Mitchell',
		person: 'Josie Gibson',
		personGuesses: {
			'Chris McCausland': 'truth',
			'David Mitchell': 'lie',
			'Shirley Ballas': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 2,
		type: 'home_truths',
		statement: 'Nothing makes me happier than spending an afternoon cleaning the upper windows of my house with my ten-foot-long telescopic squeegee.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Lee Mack': 'lie',
			'Shazia Mirza': 'lie',
			'Steve Pemberton': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 4,
		type: 'home_truths',
		statement: 'I went to a business meeting in a restaurant at the top of The Shard but was overcome by the views and had to finish the meeting sat under the table.',
		guessingTeam: 'David Mitchell',
		person: 'Steven Bartlett',
		personGuesses: {
			'Chris McCausland': 'truth',
			'David Mitchell': 'truth',
			'Shirley Ballas': 'undecided'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: 'Because I already know what I look like, I do not have a single mirror in my house.',
		guessingTeam: 'Lee Mack',
		person: 'Henning Wehn',
		personGuesses: {
			'Chizzy Akudolu': 'lie',
			'Lee Mack': 'lie',
			'Simon Gregson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 2,
		type: 'home_truths',
		possession: true,
		statement: 'Inside this box is something I stole from Buckingham Palace.',
		guessingTeam: 'David Mitchell',
		person: 'Shazia Mirza',
		personGuesses: {
			'Bez': 'truth',
			'David Mitchell': 'lie',
			'Motsi Mabuse': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 7,
		type: 'home_truths',
		statement: 'I once made a decision in a caravan park at midnight that I soon came to deeply regret.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'lie',
			'Munya Chawawa': 'lie',
			'Snoochie Shy': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 16,
	episode: 11,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
