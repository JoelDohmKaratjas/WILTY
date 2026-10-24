import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Olivia Colman',
			wiki: 'https://en.wikipedia.org/wiki/Olivia_Colman',
			gender: 'female'
		},
		{
			name: 'Aston Merrygold',
			wiki: 'https://en.wikipedia.org/wiki/Aston_Merrygold',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Jon Richardson',
			wiki: 'https://en.wikipedia.org/wiki/Jon_Richardson',
			gender: 'male'
		},
		{
			name: 'Michaela Strachan',
			wiki: 'https://en.wikipedia.org/wiki/Michaela_Strachan',
			gender: 'female'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'After just one lesson, I had to give up learning the guitar because I found my teacher too good-looking.',
		guessingTeam: 'David Mitchell',
		person: 'Jon Richardson',
		personGuesses: {
			'Aston Merrygold': 'lie', // David asked him to agree to truth and he did
			'David Mitchell': 'truth',
			'Olivia Colman': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		possession: true,
		statement: 'Whenever I need to cry in a scene, I ask the director to hold this up behind the camera. There is something about it that helps the tears to flow.',
		guessingTeam: 'Lee Mack',
		person: 'Olivia Colman',
		personGuesses: {
			'Jon Richardson': 'lie',
			'Lee Mack': 'lie',
			'Michaela Strachan': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Justin',
		connections: {
			'Aston Merrygold': 'Once, I did a backflip in a supermarket and landed in his trolley.',
			'David Mitchell': 'He tried to recruit me to his underground ping-pong club after being wowed by my skills with the bat.',
			'Olivia Colman': 'He\'s my neighbour and he\'s got a parcel in my hall for the last seven months and he\'s here tonight because I want him to take it home.'
		},
		personGuess: {
			'Jon Richardson': 'Olivia Colman',
			'Lee Mack': 'undecided',
			'Michaela Strachan': 'Olivia Colman'
		},
		teamGuess: 'Olivia Colman',
		truth: 'David Mitchell'
	},
	{
		type: 'quick_fire',
		statement: 'A bodyguard once rushed me to safety after a fan went to extreme lengths to get into my hotel room.',
		guessingTeam: 'Lee Mack',
		person: 'Aston Merrygold',
		personGuesses: {
			'Jon Richardson': 'truth',
			'Lee Mack': 'lie',
			'Michaela Strachan': 'truth'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'quick_fire',
		statement: 'I once refused to help a hang glider who had become tangled in a tree because two hours earlier, he had been rude to me in a carpark.',
		guessingTeam: 'David Mitchell',
		person: 'Lee Mack',
		personGuesses: {
			'Aston Merrygold': 'lie',
			'David Mitchell': 'lie',
			'Olivia Colman': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 12,
	episode: 3,
	rounds: rounds,
	score: [4, 1],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
