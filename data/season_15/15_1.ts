import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Jim Broadbent',
			wiki: 'https://en.wikipedia.org/wiki/Jim_Broadbent',
			gender: 'male'
		},
		{
			name: 'Rose Matafeo',
			wiki: 'https://en.wikipedia.org/wiki/Rose_Matafeo',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Ardal O\'Hanlon',
			wiki: 'https://en.wikipedia.org/wiki/Ardal_O%27Hanlon',
			gender: 'male'
		},
		{
			name: 'Angela Rippon',
			wiki: 'https://en.wikipedia.org/wiki/Angela_Rippon',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'Every day for the last ten years I have carried a walnut in my pocket.',
		guessingTeam: 'David Mitchell',
		person: 'Ardal O\'Hanlon',
		personGuesses: {
			'David Mitchell': 'truth',
			'Jim Broadbent': 'lie',
			'Rose Matafeo': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'On the dance floor at a BBC Christmas party, I once gave Terry Wogan a black eye when I accidentally high-kicked him in the face.',
		guessingTeam: 'David Mitchell',
		person: 'Angela Rippon',
		personGuesses: {
			'David Mitchell': 'lie',
			'Jim Broadbent': 'lie',
			'Rose Matafeo': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'Last year I had such bad toothache I popped my Christmas dinner in a blender and drank it through a straw.',
		guessingTeam: 'Lee Mack',
		person: 'Rose Matafeo',
		personGuesses: {
			'Angela Rippon': 'truth',
			'Ardal O\'Hanlon': 'truth',
			'Lee Mack': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		possession: true,
		statement: 'This box contains a present that was handmade for me by Dame Judi Dench.',
		guessingTeam: 'Lee Mack',
		person: 'Jim Broadbent',
		personGuesses: {
			'Angela Rippon': 'truth',
			'Ardal O\'Hanlon': 'truth',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Hugh',
		connections: {
			'Ardal O\'Hanlon': 'Ardal lied to Hugh and felt so bad he had to leave the country.',
			'Angela Rippon': 'Hugh\'s reindeer smashed Angela\'s windscreen.',
			'Lee Mack': 'Lee caused a riot at a prison panto and Hugh saved his life.'
		},
		personGuesses: {
			'David Mitchell': 'Angela Rippon',
			'Jim Broadbent': 'Angela Rippon',
			'Rose Matafeo': 'Angela Rippon'
		},
		teamGuess: 'Angela Rippon',
		truth: 'Ardal O\'Hanlon'
	},
	{
		type: 'quick_fire',
		statement: 'Aged seven, I wrote to Father Christmas and told him I would much rather have a map of Saxon Britain than the roller skates I feared he was getting me.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Angela Rippon': 'truth',
			'Ardal O\'Hanlon': 'lie',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'My first acting agent said my name was too boring, so for a year I called myself Blake Diamond.',
		guessingTeam: 'Lee Mack',
		person: 'Jim Broadbent',
		personGuesses: {
			'Angela Rippon': 'lie',
			'Ardal O\'Hanlon': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'special',
	cast: cast,
	season: 15,
	episode: 1,
	rounds: rounds,
	score: [4, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
