import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Joel Dommett',
			wiki: 'https://en.wikipedia.org/wiki/Joel_Dommett',
			gender: 'male'
		},
		{
			name: 'AJ Odudu',
			wiki: 'https://en.wikipedia.org/wiki/AJ_Odudu',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Alex Horne',
			wiki: 'https://en.wikipedia.org/wiki/Alex_Horne',
			gender: 'male'
		},
		{
			name: 'Sindhu Vee',
			wiki: 'https://en.wikipedia.org/wiki/Sindhu_Vee',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'If I don\'t want my husband to know I\'ve been shopping, I hide what I\'ve bought in the washing machine as there\'s no chance he\'ll ever look in there.',
		guessingTeam: 'David Mitchell',
		person: 'Sindhu Vee',
		personGuesses: {
			'AJ Odudu': 'lie',
			'David Mitchell': 'lie',
			'Joel Dommett': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'I once had to interview Lady Gaga using an American accent because her manager told me there was no way she\'d be able to understand my Northern voice.',
		guessingTeam: 'Lee Mack',
		person: 'AJ Odudu',
		personGuesses: {
			'Alex Horne': 'truth',
			'Lee Mack': 'undecided',
			'Sindhu Vee': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Zade',
		connections: {
			'AJ Odudu': 'I had to cut short our only date because he insisted on riding a penny farthing.',
			'David Mitchell': 'After I got splashed by a Transit van, I wore Zade\'s trousers to a book signing.',
			'Joel Dommett': 'Zade came to my wedding and when he started dancing, my mum started crying.'
		},
		personGuesses: {
			'Alex Horne': 'AJ Odudu',
			'Lee Mack': 'AJ Odudu',
			'Sindhu Vee': 'AJ Odudu'
		},
		teamGuess: 'AJ Odudu',
		truth: 'Joel Dommett'
	},
	{
		type: 'quick_fire',
		statement: 'Five years ago, I spent a whole week building an elaborate contraption just so my wife can let me know when lunch is ready.',
		guessingTeam: 'David Mitchell',
		person: 'Alex Horne',
		personGuesses: {
			'AJ Odudu': 'truth',
			'David Mitchell': 'truth',
			'Joel Dommett': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'Last year, I bought a suit of armour from an antique shop, then had to wear it home on the train because it was easier than carrying it.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'AJ Odudu': 'lie',
			'David Mitchell': 'lie',
			'Joel Dommett': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 14,
	episode: 8,
	rounds: rounds,
	score: [5, 0],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
