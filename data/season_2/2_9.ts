import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import s2_e1 from './2_1'
import s2_e2 from './2_2'
import s2_e3 from './2_3'
import s2_e4 from './2_4'
import s2_e5 from './2_5'
import s2_e6 from './2_6'
import s2_e7 from './2_7'
import s2_e8 from './2_8'

const compilationCast = {
	1: s2_e1.cast,
	2: s2_e2.cast,
	3: s2_e3.cast,
	4: s2_e4.cast,
	5: s2_e5.cast,
	6: s2_e6.cast,
	7: s2_e7.cast,
	8: s2_e8.cast
} as const satisfies CompilationCast

const rounds = [
	{
		episode: 1,
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Rob Brydon',
		personGuesses: {
			'Gabby Logan': 'lie',
			'Lee Mack': 'lie',
			'Robert Webb': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 1,
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Robert Webb',
		personGuesses: {
			'David Mitchell': 'truth',
			'Krishnan Guru-Murthy': 'unknown',
			'Rob Brydon': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 3,
		repeat: true,
		type: 'home_truths',
		guessingTeam: 'David Mitchell',
		person: 'Jimmy Carr',
		personGuesses: {
			'David Baddiel': 'lie',
			'David Mitchell': 'lie',
			'Maureen Lipman': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 8,
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Michael McIntyre',
		personGuesses: {
			'Graeme Garden': 'lie',
			'Lauren Laverne': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 1,
		type: 'ring_of_truth_single',
		guessingTeam: 'Lee Mack',
		personGuesses: {
			'Gabby Logan': 'lie',
			'Lee Mack': 'lie',
			'Robert Webb': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 6,
		type: 'ring_of_truth_single',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'Anton Du Beke': 'unknown',
			'Danny Baker': 'unknown',
			'David Mitchell': 'unknown'
		},
		teamGuess: 'unknown',
		truth: 'unknown'
	},
	{
		episode: 2,
		repeat: true,
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		personGuess: {
			'Ben Shephard': 'David Mitchell',
			'Frankie Boyle': 'Rich Hall',
			'Lee Mack': 'Trisha Goddard'
		},
		teamGuess: 'Trisha Goddard',
		truth: 'Trisha Goddard'
	},
	{
		episode: 6,
		type: 'quick_fire',
		guessingTeam: 'David Mitchell',
		person: 'Russell Howard',
		personGuesses: {
			'Anton Du Beke': 'unknown',
			'Danny Baker': 'unknown',
			'David Mitchell': 'unknown'
		},
		teamGuess: 'unknown',
		truth: 'lie' // Russell gave up half way
	},
	{
		episode: 4,
		type: 'quick_fire_possession',
		guessingTeam: 'David Mitchell',
		person: 'Davina McCall',
		personGuesses: {
			'Dara Ó Briain': 'lie',
			'David Mitchell': 'lie',
			'Michael Aspel': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 2,
		repeat: true,
		type: 'quick_fire_possession',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Rich Hall': 'unknown',
			'Trisha Goddard': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 4,
		type: 'quick_fire',
		guessingTeam: 'Lee Mack',
		person: 'Michael Aspel',
		personGuesses: {
			'Davina McCall': 'truth',
			'Jason Manford': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 8,
		repeat: true,
		type: 'home_truths',
		guessingTeam: 'Lee Mack',
		person: 'Michael McIntyre',
		personGuesses: {
			'Graeme Garden': 'lie',
			'Lauren Laverne': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 2,
	episode: 9,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
