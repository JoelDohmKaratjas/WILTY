import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Laurence Llewelyn-Bowen',
			wiki: 'https://en.wikipedia.org/wiki/Laurence_Llewelyn-Bowen',
			gender: 'male'
		},
		{
			name: 'Ellie Simmonds',
			wiki: 'https://en.wikipedia.org/wiki/Ellie_Simmonds',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Jayde Adams',
			wiki: 'https://en.wikipedia.org/wiki/Jayde_Adams',
			gender: 'female'
		},
		{
			name: 'MIST',
			wiki: 'https://en.wikipedia.org/wiki/Mist_(rapper)',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once turned down an invitation to meet Prince, because I wanted to stay at home and watch Only Connect.',
		guessingTeam: 'Lee Mack',
		person: 'Laurence Llewelyn-Bowen',
		personGuesses: {
			'Jayde Adams': 'truth',
			'Lee Mack': 'truth',
			'MIST': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'Whenever someone sits down next to me in public, I always say \'boing\' out loud just as their bottom hits the seat, then see what happens next.',
		guessingTeam: 'David Mitchell',
		person: 'Jayde Adams',
		personGuesses: {
			'David Mitchell': 'lie',
			'Ellie Simmonds': 'lie',
			'Laurence Llewelyn-Bowen': 'truth'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Duncan',
		connections: {
			'David Mitchell': 'Duncan insisted David borrow his trainers so he could take part in the school sports day dads\' race.',
			'Ellie Simmonds': 'Duncan fixed Ellie\'s washing machine she accidentally put her gold medal through a hot wash.',
			'Laurence Llewelyn-Bowen': 'When Laurence wanted to get sacked from Changing Rooms, Duncan helped him design a deliberately disgusting room.'
		},
		personGuesses: {
			'Jayde Adams': 'David Mitchell',
			'Lee Mack': 'David Mitchell',
			'MIST': 'David Mitchell'
		},
		teamGuess: 'David Mitchell',
		truth: 'Laurence Llewelyn-Bowen'
	},
	{
		type: 'quick_fire',
		statement: 'I once fell asleep mid-haircut and woke up hours later to find the barber had gone home.',
		guessingTeam: 'David Mitchell',
		person: 'MIST',
		personGuesses: {
			'David Mitchell': 'lie',
			'Ellie Simmonds': 'lie',
			'Laurence Llewelyn-Bowen': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'This is my milking stool. I recently bought a cow, which I keep in a nearby field, so I can get fresh milk for my cornflakes every morning.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Ellie Simmonds': 'lie',
			'Laurence Llewelyn-Bowen': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 16,
	episode: 5,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
