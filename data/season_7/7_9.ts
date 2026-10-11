import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './7_1'
import e2 from './7_2'
import e3 from './7_3'
import e4 from './7_4'
import e5 from './7_5'
import e6 from './7_6'
import e7 from './7_7'
import e8 from './7_8'

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
		episode: 2,
		type: 'home_truths',
		statement: 'Whenever I answer the house phone, and it\'s someone I don\'t wish to speak to, I take a message and pretend I am my fictional handyman Sean.',
		guessingTeam: 'David Mitchell',
		person: 'Charles Dance',
		personGuesses: {
			'David Mitchell': 'lie',
			'Isy Suttie': 'lie',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: 'Once, when I spotted an ex-boyfriend in a department store, I pretended to be a shop mannequin to avoid having to speak to him.',
		guessingTeam: 'Lee Mack',
		person: 'Joan Bakewell',
		personGuesses: {
			'Lee Mack': 'lie',
			'Paul Hollywood': 'lie',
			'Warwick Davis': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 4,
		type: 'home_truths',
		statement: 'I sometimes move bowls and plates from the bottom to the top of the pile, so they don\'t get left out.',
		guessingTeam: 'Lee Mack',
		person: 'Dermot O\'Leary',
		personGuesses: {
			'Josh Widdicombe': 'truth',
			'Lee Mack': 'truth',
			'Matt Dawson': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 5,
		type: 'home_truths',
		statement: 'I looked after a neighbour\'s pet for five days before I realised it was dead.',
		guessingTeam: 'David Mitchell',
		person: 'David O\'Doherty',
		personGuesses: {
			'David Mitchell': 'lie',
			'Richard Osman': 'truth',
			'Susan Calman': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: 'I once got stuck in a cave for an hour after getting the hood of my cagoule caught on the stalactite in a way I couldn\'t untwizzle.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Bob Mortimer': 'lie',
			'David Harewood': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 7,
		type: 'home_truths',
		statement: 'I used to vet potential boyfriends by getting them to play me at darts. I could tell more about them in one game than I could on ten dates.',
		guessingTeam: 'David Mitchell',
		person: 'Joanna Scanlan',
		personGuesses: {
			'David Mitchell': 'truth',
			'Greg Rutherford': 'truth',
			'Kirsty Young': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 2,
		type: 'home_truths',
		statement: 'I always use two toothbrushes to brush my teeth - one for the top set and one for the bottom.',
		guessingTeam: 'David Mitchell',
		person: 'Gok Wan',
		personGuesses: {
			'David Mitchell': 'lie',
			'Isy Suttie': 'truth',
			'Stephen Mangan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 5,
		type: 'home_truths',
		statement: 'When I was a child, I created a superhero called Snooker Table Man. He had three key skills and one mortal enemy.',
		guessingTeam: 'Lee Mack',
		person: 'Richard Osman',
		personGuesses: {
			'Carol Kirkwood': 'lie',
			'David O\'Doherty': 'unknown',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: 'When I was a child, I was told to stop stalking a clown.',
		guessingTeam: 'Lee Mack',
		person: 'Jon Richardson',
		personGuesses: {
			'Bob Mortimer': 'truth',
			'David Harewood': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 7,
	episode: 9,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
