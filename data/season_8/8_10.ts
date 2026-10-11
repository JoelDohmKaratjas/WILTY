import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './8_1'
import e2 from './8_2'
import e3 from './8_3'
import e4 from './8_4'
import e5 from './8_5'
import e6 from './8_6'
import e7 from './8_7'
import e8 from './8_9'

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
		episode: 4,
		type: 'home_truths',
		statement: 'Whenever I\'m in a situation where I don\'t know what to do, I ask myself the question "What would Cliff Richard do?".',
		guessingTeam: 'Lee Mack',
		person: 'Miles Jupp',
		personGuesses: {
			'Ed Byrne': 'lie',
			'Emilia Fox': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 1,
		type: 'home_truths',
		statement: 'This is Yoshi. I recently took him to the vet, because I thought he was depressed.',
		possession: true,
		guessingTeam: 'David Mitchell',
		person: 'Claudia Winkleman',
		personGuesses: {
			'David Mitchell': 'lie',
			'Fiona Bruce': 'lie',
			'Micky Flanagan': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: 'For five days I pushed my cat around in a pram, because it had sprained three of its ankles.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'Adil Ray': 'lie',
			'David Mitchell': 'lie',
			'Kian Egan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 7,
		type: 'home_truths',
		statement: 'Last year I made my husband a birthday meal using some mince I found in the street.',
		guessingTeam: 'Lee Mack',
		person: 'Jo Brand',
		personGuesses: {
			'Lee Mack': 'lie',
			'Ray Mears': 'truth',
			'Roisin Conaty': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: 'I can tell if someone is left or right handed just by looking at their ears.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Amanda Abbington': 'lie',
			'David Mitchell': 'lie',
			'Phill Jupitus': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 3,
		type: 'home_truths',
		statement: 'I once had to go all the way to Bradford just to make a phone call to prove I was in Bradford.',
		guessingTeam: 'Lee Mack',
		person: 'Adil Ray',
		personGuesses: {
			'Bob Mortimer': 'truth',
			'Lee Mack': 'truth',
			'Mel Giedroyc': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 2,
		type: 'home_truths',
		statement: 'I was once forced to continually ballroom dance while presenting five minutes of live TV.',
		guessingTeam: 'Lee Mack',
		person: 'Kirsty Wark',
		personGuesses: {
			'Adam Buxton': 'truth',
			'Bruno Tonioli': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 6,
		type: 'home_truths',
		statement: 'I have a crippling fear of the underside of ships.',
		guessingTeam: 'David Mitchell',
		person: 'Gareth Malone',
		personGuesses: {
			'Amanda Abbington': 'lie',
			'David Mitchell': 'lie',
			'Phill Jupitus': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 1,
		type: 'host',
		statement: 'Whenever I take a shower, I listen to the Benny Hill theme tune. It\'s the only way I can be in and out of the cubicle in under four minutes.',
		personGuesses: {
			david: {
				'David Mitchell': 'truth',
				'Fiona Bruce': 'unknown',
				'Micky Flanagan': 'unknown'
			},
			lee: {
				'Claudia Winkleman': 'unknown',
				'Lee Mack': 'lie',
				'Steve Jones': 'unknown'
			}
		},
		teamGuess: {
			david: 'truth',
			lee: 'lie'
		},
		truth: 'lie'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 8,
	episode: 10,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
