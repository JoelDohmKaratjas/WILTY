import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Mel Giedroyc',
			wiki: 'https://en.wikipedia.org/wiki/Mel_Giedroyc',
			gender: 'female'
		},
		{
			name: 'Chris Tarrant',
			wiki: 'https://en.wikipedia.org/wiki/Chris_Tarrant',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Alexander Armstrong',
			wiki: 'https://en.wikipedia.org/wiki/Alexander_Armstrong',
			gender: 'male'
		},
		{
			name: 'Alex Jones',
			wiki: 'https://en.wikipedia.org/wiki/Alex_Jones_(Welsh_presenter)',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once lost Julian Lloyd Webber\'s cello because I was chatting up a parking attendant.',
		guessingTeam: 'David Mitchell',
		person: 'Alex Jones',
		personGuesses: {
			'Chris Tarrant': 'lie',
			'David Mitchell': 'truth',
			'Mel Giedroyc': 'lie'
		},
		teamGuess: 'truth', // originally lie
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once prevented a burglar from breaking into my house by hiding behind the door and barking like two different dogs.',
		guessingTeam: 'David Mitchell',
		person: 'Alexander Armstrong',
		personGuesses: {
			'Chris Tarrant': 'truth',
			'David Mitchell': 'lie',
			'Mel Giedroyc': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Syd',
		connections: {
			'Chris Tarrant': 'His dentist that he had to drive to A&E after he bit her finger during his check up.',
			'David Mitchell': 'Last year she rescued him when a seaside donkey went haywire with him on its back.',
			'Mel Giedroyc': 'They posed as members of an orchestra so they could get backstage to meet their idol.'
		},
		personGuess: {
			'Alex Jones': 'Chris Tarrant',
			'Alexander Armstrong': 'Mel Giedroyc',
			'Lee Mack': 'Mel Giedroyc'
		},
		teamGuess: 'Mel Giedroyc',
		truth: 'Mel Giedroyc'
	},
	{
		type: 'quick_fire',
		statement: 'I can always remember all my ex-girlfriends\' names and the order in which I went out with them, because their initials happen to make the acronym B.E.R.M.U.D.A.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Chris Tarrant': 'lie',
			'David Mitchell': 'lie',
			'Mel Giedroyc': 'unknown'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'quick_fire',
		statement: 'I can tell if someone is a good dancer just by the way they smile.',
		guessingTeam: 'David Mitchell',
		person: 'Alex Jones',
		personGuesses: {
			'Chris Tarrant': 'truth',
			'David Mitchell': 'truth',
			'Mel Giedroyc': 'truth'
		},
		teamGuess: 'truth',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 6,
	episode: 1,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: 'Alex Jones'
} as const satisfies StandardEpisode<typeof cast>
