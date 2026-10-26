import { type StandardEpisode, type EpisodeCast, type Round } from '../episodeTypes'

const cast = {
	david: [
		{
			name: 'Philippa Perry',
			wiki: 'https://en.wikipedia.org/wiki/Philippa_Perry',
			gender: 'female'
		},
		{
			name: 'Mike Wozniak',
			wiki: 'https://en.wikipedia.org/wiki/Mike_Wozniak',
			gender: 'male'
		}
	],
	lee: [
		{
			name: 'Lady Leshurr',
			wiki: 'https://en.wikipedia.org/wiki/Lady_Leshurr',
			gender: 'female'
		},
		{
			name: 'Alan Titchmarsh',
			wiki: 'https://en.wikipedia.org/wiki/Alan_Titchmarsh',
			gender: 'male'
		}
	]
} as const satisfies EpisodeCast

const rounds = [
	{
		type: 'home_truths',
		statement: 'My Madame Tussaud\'s waxwork was such a hit with the ladies it was kissed more than any other and had to be cleaned of lipstick every day.',
		guessingTeam: 'David Mitchell',
		person: 'Alan Titchmarsh',
		personGuesses: {
			'David Mitchell': 'truth',
			'Mike Wozniak': 'truth', // originally lie
			'Philippa Perry': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'For the past six months, I\'ve been using David Mitchell to get me off to sleep each night.',
		guessingTeam: 'Lee Mack',
		person: 'Philippa Perry',
		personGuesses: {
			'Alan Titchmarsh': 'truth',
			'Lady Leshurr': 'lie',
			'Lee Mack': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	},
	{
		type: 'home_truths',
		statement: 'As a child, because I was so shy, I named all the toes on my left foot and formed a gang with them.',
		guessingTeam: 'Lee Mack',
		person: 'Mike Wozniak',
		personGuesses: {
			'Alan Titchmarsh': 'truth',
			'Lady Leshurr': 'lie',
			'Lee Mack': 'lie'
		},
		teamGuess: 'lie',
		truth: 'lie'
	},
	{
		type: 'home_truths',
		statement: 'Whenever I\'m in the recording studio, I can only rap in complete darkness.',
		guessingTeam: 'David Mitchell',
		person: 'Lady Leshurr',
		personGuesses: {
			'David Mitchell': 'truth',
			'Mike Wozniak': 'lie',
			'Philippa Perry': 'lie'
		},
		teamGuess: 'lie',
		truth: 'truth'
	},
	{
		type: 'this_is_my',
		guessingTeam: 'Lee Mack',
		guest: 'Amanda',
		connections: {
			'David Mitchell': 'David kicked her child\'s football and accidentally knocked her mother out of her camping chair.',
			'Mike Wozniak': 'He once hospitalized Amanda with his elaborate dance moves.',
			'Philippa Perry': 'Amanda caught Philippa smuggling her cat (Kevin) into the zoo.'
		},
		personGuesses: {
			'Alan Titchmarsh': 'Philippa Perry',
			'Lady Leshurr': 'Philippa Perry',
			'Lee Mack': 'Philippa Perry'
		},
		teamGuess: 'Philippa Perry',
		truth: 'Mike Wozniak'
	},
	{
		type: 'quick_fire',
		possession: true,
		statement: 'These are three items from my doll\'s house. I have meticulously furnished it with everything I\'d put in my real house if only I was allowed.',
		guessingTeam: 'David Mitchell',
		person: 'Alan Titchmarsh',
		personGuesses: {
			'David Mitchell': 'truth',
			'Mike Wozniak': 'truth',
			'Philippa Perry': 'truth'
		},
		teamGuess: 'truth',
		truth: 'truth'
	}
] as const satisfies Round<typeof cast>[]

export default {
	type: 'standard',
	cast: cast,
	season: 15,
	episode: 7,
	rounds: rounds,
	score: [3, 3],
	liarOfTheWeek: null
} as const satisfies StandardEpisode<typeof cast>
