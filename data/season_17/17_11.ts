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
		episode: 2,
		type: 'home_truths',
		statement: 'After a wild party to celebrate our 2,000th episode, I slept the night on the One Show sofa.',
		guessingTeam: 'Lee Mack',
		person: 'Alex Jones',
		personGuesses: {
			'Chris McCausland': 'truth',
			'Lee Mack': 'truth',
			'Su Pollard': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: 'While I was working as a waiter at a wedding, the bride made me do the first dance with her because the groom was too nervous to do it.',
		guessingTeam: 'David Mitchell',
		person: 'Mo Gilligan',
		personGuesses: {
			'Abby Cook': 'lie',
			'David Mitchell': 'lie',
			'Frankie Boyle': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 5,
		type: 'home_truths',
		statement: 'I once frightened a national treasure while playing my favourite prank.',
		guessingTeam: 'Lee Mack',
		person: 'Jack Carroll',
		personGuesses: {
			'Big Zuu': 'unknown',
			'Bridget Christie': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: 'I have a four-letter word tattooed on the inside of my lip.',
		guessingTeam: 'David Mitchell',
		person: 'Wilfred Webster',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jessica Hynes': 'truth',
			'Romesh Ranganathan': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 7,
		type: 'home_truths',
		statement: 'For ten years I kept a terrible secret from my sister-in-law after an incident at Glastonbury.',
		guessingTeam: 'Lee Mack',
		person: 'Craig Charles',
		personGuesses: {
			'Amy Gledhill': 'lie',
			'Jeremy Vine': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 1,
		type: 'home_truths',
		statement: 'I hate writing Christmas cards so much I write two year\'s worth every other Christmas.',
		guessingTeam: 'Lee Mack',
		person: 'Naga Munchetty',
		personGuesses: {
			'Alex Brooker': 'unknown',
			'Lee Mack': 'lie',
			'Melvyn Hayes': 'undecided'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 7,
		type: 'home_truths',
		statement: 'David doesn\'t know this, but I recently snuck into his dressing room and did something to see if he would notice.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Craig Charles': 'unknown',
			'David Mitchell': 'lie',
			'Shazia Mirza': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: 'Last year I changed Arnold Schwarzenegger\'s wheel for him after he got a flat tyre outside my house.',
		guessingTeam: 'David Mitchell',
		person: 'Gina Yashere',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jessica Hynes': 'lie',
			'Romesh Ranganathan': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 10,
		type: 'home_truths',
		statement: 'During a Sunday-league football match I once got a yellow card for ordering a pizza to be delivered to me whilst I was in goal.',
		guessingTeam: 'Lee Mack',
		person: 'Will Mellor',
		personGuesses: {
			'Charlene White': 'lie',
			'Lee Mack': 'lie',
			'Sam Campbell': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 17,
	episode: 11,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
