import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './2_1'
import e2 from './2_2'
import e3 from './2_3'
import e4 from './2_4'
import e5 from './2_5'
import e6 from './2_6'
import e7 from './2_7'
import e8 from './2_8'

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
		episode: 1,
		type: 'home_truths',
		statement: 'I was voted the 47th sexiest man in Wales.',
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
		statement: 'I was voted the 88th sexiest man in the world.',
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
		statement: 'I had an interview at MI5 to be a spy.',
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
		statement: 'I have been wearing bronzing powder since the age of 12.',
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
		statement: 'Rod Hull was buried along with his fake arm and the very first Emu.',
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
		statement: 'Alan Titchmarsh\'s waxwork at Madame Tussaud\'s gets kissed so often that it has to have lipstick washed from its face twice a week.',
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
		guest: 'Gareth',
		connections: {
			'David Mitchell': 'Gareth rescued him from a rollercoaster when his car was stuck.',
			'Rich Hall': 'Gareth turned his car into the ultimate fishingmobile.',
			'Trisha Goddard': 'Came on her show to cure his fear of scotch eggs.'
		},
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
		statement: 'I got picked on at school because my mother was the dancer in the titles of Tales of the Unexpected',
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
		type: 'quick_fire',
		statement: 'These [pictured right] are the wig and glasses I wear if I want to pop to the shops unnoticed',
		possession: true,
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
		type: 'quick_fire',
		statement: 'This [pictured right] is the coconut that nearly killed me.',
		possession: true,
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
		statement: 'I have received fan mail from Angus Deayton',
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
		statement: 'For two weeks I drove a car that could only turn left.',
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
