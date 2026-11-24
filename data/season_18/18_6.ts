import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Richie Anderson',
			wiki: 'https://en.wikipedia.org/wiki/Richie_Anderson_(presenter)',
			gender: 'male'
		},
		{
			name: 'Katherine Parkinson',
			wiki: 'https://en.wikipedia.org/wiki/Katherine_Parkinson',
			gender: 'female'
		}
	],
	lee: [
		{
			name: 'Taj Atwal',
			wiki: 'https://en.wikipedia.org/wiki/Taj_Atwal',
			gender: 'female'
		},
		{
			name: 'Chris McCausland',
			wiki: 'https://en.wikipedia.org/wiki/Chris_McCausland',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'I once offended a member of a heavy metal band when I told him his metal wasn\'t heavy enough.',
		guessingTeam: 'David Mitchell',
		person: 'Chris McCausland',
		personGuesses: {
			'David Mitchell': 'truth',
			'Katherine Parkinson': 'truth',
			'Richie Anderson': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I once looked a fool while trying to play it cool by a pool.',
		guessingTeam: 'David Mitchell',
		person: 'Taj Atwal',
		personGuesses: {
			'David Mitchell': 'truth',
			'Katherine Parkinson': 'truth',
			'Richie Anderson': 'lie'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'I used to think water polo was played on horses.',
		guessingTeam: 'Lee Mack',
		person: 'Katherine Parkinson',
		personGuesses: {
			'Chris McCausland': 'truth',
			'Lee Mack': 'truth',
			'Taj Atwal': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Charlotte',
		connections: {
			'David Mitchell': 'Charlotte crashed her Lime bike when she saw me take my top off.',
			'Katherine Parkinson': 'Charlotte was responsible for the safe return of my missing goldfish.',
			'Richie Anderson': 'I fired Charlotte from my Spice Girls tribute band.'
		},
		personGuesses: {
			'Chris McCausland': 'Richie Anderson',
			'Lee Mack': 'Richie Anderson',
			'Taj Atwal': 'Richie Anderson'
		},
		teamGuess: 'Richie Anderson',
		truth: 'Richie Anderson'
	},
	{
		type: 'quick_fire',
		statement: 'Once, whilst house-sitting for my friend on his farm, I had to leap out of bed in the middle of the night and deliver a litter of piglets.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'David Mitchell': 'lie',
			'Katherine Parkinson': 'lie',
			'Richie Anderson': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 18,
	episode: 6,
	rounds: rounds,
	score: [3, 2],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
