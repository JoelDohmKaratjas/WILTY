import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './14_1'
import e2 from './14_2'
import e3 from './14_3'
import e4 from './14_4'
import e5 from './14_5'
import e6 from './14_6'
import e7 from './14_7'
import e8 from './14_8'
import e9 from './14_9'
import e10 from './14_10'

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
		episode: 8,
		type: 'home_truths',
		statement: 'For dinner, I often eat an entire pack of cream crackers.',
		guessingTeam: 'Lee Mack',
		person: 'AJ Odudu',
		personGuesses: {
			'Alex Horne': 'unknown',
			'Lee Mack': 'lie',
			'Sindhu Vee': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 4,
		type: 'home_truths',
		statement: 'I once ruined Oktoberfest for 2,000 people with my Miley Cyrus impression.',
		guessingTeam: 'David Mitchell',
		person: 'Sophie Hermann',
		personGuesses: {
			'David Mitchell': 'truth',
			'Gemma Cairney': 'truth',
			'Raj Bisram': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 7,
		type: 'home_truths',
		statement: 'Sir Alex Ferguson once gave me the hairdryer treatment for leaving greasy chicken fingerprints on the FA Cup.',
		guessingTeam: 'Lee Mack',
		person: 'Dan Walker',
		personGuesses: {
			'Lee Mack': 'lie',
			'Mr. Motivator': 'unknown',
			'Sara Pascoe': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: 'I once did something completely inappropriate while under the influence of anaesthetic.',
		guessingTeam: 'Lee Mack',
		person: 'Sara Barron',
		personGuesses: {
			'Ed Gamble': 'truth',
			'Lee Mack': 'truth',
			'The Rev. Kate Bottley': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 5,
		type: 'home_truths',
		statement: 'I once plucked a seagull out of the sky with my bare hands just because my mate Dennis bet me I couldn\'t.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'lie',
			'Miles Jupp': 'truth',
			'Samantha Morton': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: 'I eat an apple a day in a very particular way.',
		guessingTeam: 'Lee Mack',
		person: 'Chris McCausland',
		personGuesses: {
			'Lee Mack': 'lie',
			'Maisie Adam': 'lie',
			'Stephen Hendry': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: 'I used to pretend to be German in order to chat up girls.',
		guessingTeam: 'David Mitchell',
		person: 'Ed Gamble',
		personGuesses: {
			'Claudia Winkleman': 'unknown',
			'David Mitchell': 'truth',
			'Sara Barron': 'unknown'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 7,
		type: 'home_truths',
		possession: true,
		statement: 'These are my Scrabble glasses. They don\'t have lenses in, but I wear them every time I play because they make me feel cleverer.',
		guessingTeam: 'David Mitchell',
		person: 'Sara Pascoe',
		personGuesses: {
			'Dan Walker': 'truth',
			'David Mitchell': 'truth',
			'Nicola Coughlan': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 9,
		type: 'home_truths',
		statement: 'After a mix-up with a builder, my house now has a daft name.',
		guessingTeam: 'David Mitchell',
		person: 'Dr. Xand van Tulleken',
		personGuesses: {
			'David Mitchell': 'lie',
			'Roisin Conaty': 'lie',
			'Roman Kemp': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 1,
		type: 'home_truths',
		statement: 'I once got locked in the crypt after Midnight Mass. Luckily, I managed to escape using nothing but the contents of a box of Christmas crackers.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Joe Lycett': 'lie',
			'Ruth Madeley': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 14,
	episode: 11,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
