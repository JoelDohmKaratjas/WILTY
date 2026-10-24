import { type CompilationCast, type CompilationEpisode } from '../episodeTypes'
import e1 from './12_1'
import e2 from './12_2'
import e3 from './12_3'
import e4 from './12_4'
import e5 from './12_5'
import e6 from './12_6'
import e7 from './12_7'
import e8 from './12_8'
import e9 from './12_9'

const compilationCast = {
	1: e1.cast,
	2: e2.cast,
	3: e3.cast,
	4: e4.cast,
	5: e5.cast,
	6: e6.cast,
	7: e7.cast,
	8: e8.cast,
	9: e9.cast
} as const satisfies CompilationCast

const rounds = [
	{
		episode: 8,
		repeat: true,
		type: 'home_truths',
		statement: 'I instructed Deliveroo to block my orders after my bacon sandwich addiction got out of hand.',
		guessingTeam: 'Lee Mack',
		person: 'Georgia "Toff" Toffolo',
		personGuesses: {
			'Ellie Taylor': 'lie',
			'Lee Mack': 'truth',
			'Rhod Gilbert': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 1,
		repeat: true,
		type: 'home_truths',
		statement: 'Following advice from Chris Rea, I always crack an egg into my bath.',
		guessingTeam: 'David Mitchell',
		person: 'Bob Mortimer',
		personGuesses: {
			'David Mitchell': 'truth',
			'Dion Dublin': 'truth',
			'Lucy Porter': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		episode: 9,
		repeat: true,
		type: 'home_truths',
		statement: 'On a recent trip to the zoo, my bag was hijacked by a one-armed monkey.',
		guessingTeam: 'Lee Mack',
		person: 'Alex Jones',
		personGuesses: {
			'Henning Wehn': 'lie',
			'Lee Mack': 'lie',
			'Stacey Dooley': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		episode: 5,
		repeat: true,
		type: 'home_truths',
		statement: 'I once stole the shirt off a scarecrow in order to get into a nightclub.',
		guessingTeam: 'Lee Mack',
		person: 'Shaun Williamson',
		personGuesses: {
			'Emma Bunton': 'lie',
			'Jo Brand': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		episode: 4,
		repeat: true,
		type: 'home_truths',
		possession: true,
		statement: 'This is an Ukabong. Me and my cousins would each make an Ukabong to play the Narstie family game Ukabong.',
		guessingTeam: 'Lee Mack',
		person: 'Big Narstie',
		personGuesses: {
			'Lee Mack': 'truth',
			'Scarlett Moffatt': 'truth',
			'Tomasz Schafernaker': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		episode: 6,
		repeat: true,
		type: 'home_truths',
		statement: 'I was genuinely invited to Harry and Meghan\'s wedding today, but I said no, because I had to come here and do this.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Diane Morgan': 'lie',
			'Richard Osman': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies CompilationEpisode<typeof compilationCast>['rounds']

export default {
	type: 'compilation',
	cast: compilationCast,
	season: 12,
	episode: 11,
	rounds: rounds
} as const satisfies CompilationEpisode<typeof compilationCast>
