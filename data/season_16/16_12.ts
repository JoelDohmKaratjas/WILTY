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
		episode: 6,
		type: 'home_truths',
		statement: 'I once broke my ankle, but instead of calling an ambulance, I went all the way to A&E in a wheelbarrow.',
		guessingTeam: 'David Mitchell',
		person: 'Jo Brand',
		personGuesses: {
			'David Mitchell': 'truth',
			'Joe Wilkinson': 'truth',
			'Lucy Martin': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 2,
		type: 'home_truths',
		statement: 'At Top Of The Pops, I upset MC Hammer when I stole his silly trousers from his dressing room.',
		guessingTeam: 'Lee Mack',
		person: 'Bez',
		personGuesses: {
			'Lee Mack': 'truth',
			'Shazia Mirza': 'truth',
			'Steve Pemberton': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 7,
		type: 'home_truths',
		statement: 'There\'s one job in the house I hate doing so much, I get my mum to come round and do it for me.',
		guessingTeam: 'Lee Mack',
		person: 'Snoochie Shy',
		personGuesses: {
			'Bob Mortimer': 'truth',
			'Lee Mack': 'truth',
			'Prof. Alice Roberts': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 2,
		type: 'home_truths',
		statement: 'I once had to explain to the police why I had two coffins in the back of my van.',
		guessingTeam: 'David Mitchell',
		person: 'Steve Pemberton',
		personGuesses: {
			'Bez': 'truth',
			'David Mitchell': 'truth',
			'Motsi Mabuse': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 8,
		type: 'home_truths',
		statement: 'I taught Nelson Mandela how to moonwalk.',
		guessingTeam: 'Lee Mack',
		person: 'Anton Du Beke',
		personGuesses: {
			'Lee Mack': 'truth',
			'Lucy Beaumont': 'lie',
			'Ralf Little': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: 'A complete stranger once stopped me outside a church and got me to be a pallbearer at a funeral as they were a man down and the service was about to start.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Joe Wilkinson': 'lie',
			'Lucy Martin': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 7,
		type: 'home_truths',
		statement: 'For one term at school, the other boys called me Two Hats because my mum used to make me wear two hats to keep warm.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Bob Mortimer': 'unknown',
			'Lee Mack': 'lie',
			'Prof. Alice Roberts': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 10,
		type: 'home_truths',
		statement: 'Live on air, I used to regularly distract a fellow Blue Peter presenter by pretending to be one of the animals.',
		guessingTeam: 'Lee Mack',
		person: 'Sarah Greene',
		personGuesses: {
			'Lee Mack': 'truth',
			'Morgana Robinson': 'truth',
			'Tom Allen': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: 'My wife still hasn\'t realised, but for the last month, the first sentence I say to her each morning has contained the answer to that day\'s Wordle.',
		guessingTeam: 'David Mitchell',
		person: 'Amol Rajan',
		personGuesses: {
			'David Mitchell': 'lie',
			'Joe Wilkinson': 'lie',
			'Lucy Martin': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 16,
	episode: 12,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
