import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Richard Osman',
			wiki: 'https://en.wikipedia.org/wiki/Richard_Osman',
			gender: 'male'
		},
		{
			name: 'Katherine Ryan',
			wiki: 'https://en.wikipedia.org/wiki/Katherine_Ryan',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Denise Lewis',
			wiki: 'https://en.wikipedia.org/wiki/Denise_Lewis',
			gender: 'female'
		},
		{
			name: 'Robert Rinder',
			wiki: 'https://en.wikipedia.org/wiki/Robert_Rinder',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'When I worked in a shoe shop, my boss was called Mr. Clog. Remarkably, I\'ve had three other jobs where my boss\'s name was directly related to their profession.',
		guessingTeam: 'Lee Mack',
		person: 'Richard Osman',
		personGuesses: {
			'Denise Lewis': 'undecided',
			'Lee Mack': 'lie',
			'Robert Rinder': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		possession: true,
		statement: 'This is my lucky mascot. When competing, I always made sure he travelled in an unzipped bag so he could poke his head out and breathe.',
		guessingTeam: 'David Mitchell',
		person: 'Denise Lewis',
		personGuesses: {
			'David Mitchell': 'lie',
			'Katherine Ryan': 'lie',
			'Richard Osman': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Edward',
		connections: {
			'Denise Lewis': 'He helped me pick up my car and move it after I got blocked in by Daley Thompson.',
			'Lee Mack': 'I once dressed up as his wife so that his son would think that he\'d seen his mum in the audience at the school play.',
			'Robert Rinder': 'I had such a crush on him at school that for the past twenty years, his name has been the basis for all of my passwords.'
		},
		personGuesses: {
			'David Mitchell': 'Robert Rinder',
			'Katherine Ryan': 'Denise Lewis',
			'Richard Osman': 'Robert Rinder'
		},
		teamGuess: 'Robert Rinder',
		truth: 'Robert Rinder'
	},
	{
		type: 'quick_fire',
		statement: 'Ten years ago on this show, I revealed I\'d only ever bought one album, Phil Collins\' ...But Seriously. I\'m now pleased to report I\'ve now doubled my collection.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Denise Lewis': 'truth',
			'Lee Mack': 'truth',
			'Robert Rinder': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I was ticked off by the headmaster after I mistakenly packed a piña colada in my daughter\'s lunch box on a school trip.',
		guessingTeam: 'Lee Mack',
		person: 'Katherine Ryan',
		personGuesses: {
			'Denise Lewis': 'lie',
			'Lee Mack': 'lie',
			'Robert Rinder': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 11,
	episode: 9,
	rounds: rounds,
	score: [1, 4],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
