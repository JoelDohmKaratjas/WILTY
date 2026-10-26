import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Alex Jones',
			wiki: 'https://en.wikipedia.org/wiki/Alex_Jones_(Welsh_presenter)',
			gender: 'female'
		},
		{
			name: 'Martin Lewis',
			wiki: 'https://en.wikipedia.org/wiki/Martin_Lewis_(financial_journalist)',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Anna Maxwell Martin',
			wiki: 'https://en.wikipedia.org/wiki/Anna_Maxwell_Martin',
			gender: 'female'
		},
		{
			name: 'Johnny Vegas',
			wiki: 'https://en.wikipedia.org/wiki/Johnny_Vegas',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once got the giggles on The One Show when I accidentally destroyed a priceless historical artefact.',
		guessingTeam: 'Lee Mack',
		person: 'Alex Jones',
		personGuesses: {
			'Anna Maxwell Martin': 'lie',
			'Johnny Vegas': 'lie',
			'Lee Mack': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		possession: true,
		statement: 'This is my roller. I regularly use it to clean my back in the shower.',
		guessingTeam: 'David Mitchell',
		person: 'Johnny Vegas',
		personGuesses: {
			'Alex Jones': 'truth',
			'David Mitchell': 'truth',
			'Martin Lewis': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'Once, after misreading a sign, it took me two hours to get out of a supermarket car park.',
		guessingTeam: 'Lee Mack',
		person: 'Martin Lewis',
		personGuesses: {
			'Anna Maxwell Martin': 'truth',
			'Johnny Vegas': 'lie',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'David Mitchell',
		guest: 'Johnny',
		connections: {
			'Anna Maxwell Martin': 'He had to climb a mountain twice in one day because of me.',
			'Johnny Vegas': 'We pretended to be members of Take That to get backstage to a gig.',
			'Lee Mack': 'At school, we both fell victim to Brian Pimento\'s infamous biscuit con.'
		},
		personGuesses: {
			'Alex Jones': 'Anna Maxwell Martin',
			'David Mitchell': 'Anna Maxwell Martin',
			'Martin Lewis': 'Anna Maxwell Martin'
		},
		teamGuess: 'Anna Maxwell Martin',
		truth: 'Johnny Vegas'
	},
	{
		type: 'quick_fire',
		statement: 'Once on a family day out, I got the jitters and had to flee an owl sanctuary.',
		guessingTeam: 'Lee Mack',
		person: 'David Mitchell',
		personGuesses: {
			'Anna Maxwell Martin': 'truth',
			'Johnny Vegas': 'lie',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I once spent the night in Millets after falling asleep in a tent.',
		guessingTeam: 'David Mitchell',
		person: 'Johnny Vegas',
		personGuesses: {
			'Alex Jones': 'truth',
			'David Mitchell': 'truth',
			'Martin Lewis': 'lie'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 14,
	episode: 10,
	rounds: rounds,
	score: [1, 5],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
