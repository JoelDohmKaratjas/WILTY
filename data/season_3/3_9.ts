import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './3_1'
import e2 from './3_2'
import e3 from './3_3'
import e4 from './3_4'
import e5 from './3_5'
import e6 from './3_6'
import e7 from './3_7'
import e8 from './3_8'

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
		repeat: true,
		type: 'home_truths',
		statement: 'On Countdown if I worked out the number puzzle before the time was up I used to play a little game.',
		guessingTeam: 'David Mitchell',
		person: 'Carol Vorderman',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jo Brand': 'lie',
			'Larry Lamb': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 2,
		repeat: true,
		type: 'home_truths',
		statement: 'The D in my name stands for Delicious.',
		guessingTeam: 'David Mitchell',
		person: 'Reginald D. Hunter',
		personGuesses: {
			'David Mitchell': 'lie',
			'Fern Britton': 'lie',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: 'I won a junior One Man and His Dog Event when I was fourteen.',
		guessingTeam: 'David Mitchell',
		person: 'Terry Christian',
		personGuesses: {
			'David Mitchell': 'lie',
			'Marcus Brigsocke': 'lie',
			'Jamellia': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 1,
		type: 'ring_of_truth_single',
		statement: 'When interviewing office staff, Simon Cowell asks every candidate to give him 10 uses for a kettle.',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jo Brand': 'lie',
			'Larry Lamb': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 5,
		repeat: true,
		type: 'ring_of_truth_single',
		statement: 'Mick Jagger has been asked by a company if they can sell his ashes in collectible egg timers when he dies.',
		guessingTeam: 'David Mitchell',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jack Whitehall': 'truth',
			'Kelvin MacKenzie': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 6,
		repeat: true,
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Sadie',
		connections: {
			'Jane Street-Porter': 'Sadie came to my sixtieth birthday party, and pretended to be a waitress so she could lick Daniel Craig\'s plate.',
			'Lee Mack': 'This is Sadie; she\'s my children\'s nanny, and the first time I met her I ran over her foot.',
			'Omid Djalili': 'This is Sadie. I employ her to massage my dog.'
		},
		personGuess: {
			'Dave Gorman': 'Jane Street-Porter',
			'David Mitchell': 'Jane Street-Porter',
			'Davina McCall': 'Jane Street-Porter'
		},
		teamGuess: 'Jane Street-Porter',
		truth: 'Jane Street-Porter'
	},
	{
		episode: 2,
		repeat: true,
		type: 'quick_fire',
		statement: 'As a child at my grandparents\' house I had a little bell I would ring if I wanted anything.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Ken Livingstone': 'truth',
			'Lee Mack': 'truth',
			'Reginald D. Hunter': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 5,
		repeat: true,
		type: 'quick_fire',
		statement: 'If you give me any date before the year 2000 I can instantly tell you what day of the week it was.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jack Whitehall': 'unknown',
			'Kelvin MacKenzie': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 1,
		type: 'quick_fire',
		statement: 'I have told my children that every time they lie, a puppy dies somewhere.',
		guessingTeam: 'Lee Mack',
		person: 'Jo Brand',
		personGuesses: {
			'Carol Vorderman': 'truth',
			'Lee Mack': 'truth',
			'Russell Howard': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 4,
		repeat: true,
		type: 'quick_fire',
		statement: 'In here is my pet cat from when I was little and my dad had her stuffed for me when she died.',
		possession: true,
		guessingTeam: 'Lee Mack',
		person: 'Claudia Winkleman',
		personGuesses: {
			'Clive Anderson': 'truth',
			'Lee Mack': 'truth',
			'Miranda Hart': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 2,
		type: 'quick_fire',
		statement: 'I have made a CD of the sound of my kettle boiling and I use it when trying to get to sleep.',
		guessingTeam: 'Lee Mack',
		person: 'Fern Britton',
		personGuesses: {
			'Ken Livingstone': 'unknown',
			'Lee Mack': 'lie',
			'Reginald D. Hunter': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 3,
	episode: 9,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
