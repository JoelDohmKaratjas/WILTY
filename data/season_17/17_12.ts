import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './17_1'
import e2 from './17_2'
import e3 from './17_3'
import e4 from './17_4'
import e5 from './17_5'
import e6 from './17_6'
import e7 from './17_7'
import e8 from './17_8'
import e9 from './17_9'
import e10 from './17_10'

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
		episode: 4,
		type: 'home_truths',
		statement: 'Once, when they were waiting for me outside a hotel, I managed to sneak past the paparazzi by pretending to be once of the paparazzi.',
		guessingTeam: 'David Mitchell',
		person: 'Danny Jones',
		personGuesses: {
			'Charlie Brooker': 'unknown',
			'David Mitchell': 'lie',
			'Shaparak Khorsandi': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 7,
		type: 'home_truths',
		statement: 'I recently sustained a real world wound in a virtual reality sword fight.',
		guessingTeam: 'David Mitchell',
		person: 'Jeremy Vine',
		personGuesses: {
			'Craig Charles': 'truth',
			'David Mitchell': 'truth',
			'Shazia Mirza': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: 'I once bought a telescope, but became so overwhelmed by what I saw through it, I had to have a lie down.',
		guessingTeam: 'Lee Mack',
		person: 'Frankie Boyle',
		personGuesses: {
			'Lee Mack': 'truth',
			'Lucy Beaumont': 'lie',
			'Mo Gilligan': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 7,
		type: 'home_truths',
		statement: 'Every evening, I take a raw carrot to bed with me in case I get hungry in the night.',
		guessingTeam: 'Lee Mack',
		person: 'Shazia Mirza',
		personGuesses: {
			'Amy Gledhill': 'lie',
			'Jeremy Vine': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 10,
		type: 'home_truths',
		statement: 'The first time I screen tested to read the ITV News, I was so nervous, I said the first "bong" out loud.',
		guessingTeam: 'David Mitchell',
		person: 'Charlene White',
		personGuesses: {
			'David Mitchell': 'lie',
			'Kimberley Walsh': 'lie',
			'Will Mellor': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 8,
		type: 'home_truths',
		statement: 'I won\'t perform onstage without a particular thing in my pocket.',
		guessingTeam: 'Lee Mack',
		person: 'Johnny Marr',
		personGuesses: {
			'Jo Brand': 'truth',
			'Lee Mack': 'truth',
			'Sinitta': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 7,
		type: 'home_truths',
		statement: 'I once accidentally flashed the Queen.',
		guessingTeam: 'David Mitchell',
		person: 'Amy Gledhill',
		personGuesses: {
			'Craig Charles': 'unknown',
			'David Mitchell': 'truth',
			'Shazia Mirza': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 9,
		type: 'home_truths',
		statement: 'Aged ten, my mum and dad let me go to a school disco but put an alarm clock in my briefcase set to ring when it was time for me to start saying my goodbyes.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Jessica Knappett': 'truth',
			'Lee Mack': 'lie',
			'Mike Bubbins': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 10,
		type: 'home_truths',
		statement: 'When customers complained about my behaviour in a supermarket, I received a particularly harsh punishment.',
		guessingTeam: 'David Mitchell',
		person: 'Sam Campbell',
		personGuesses: {
			'David Mitchell': 'truth',
			'Kimberley Walsh': 'unknown',
			'Will Mellor': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 17,
	episode: 12,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
