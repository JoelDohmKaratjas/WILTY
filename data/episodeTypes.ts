type Guest = {
	name: string
	wiki: string
}

export type EpisodeCast = {
	david: [Guest, Guest],
	lee: [Guest, Guest]
}

type David = 'David Mitchell'
type Lee = 'Lee Mack'

type DavidTeam<T extends EpisodeCast> = T['david'][number]['name'] | David
type LeeTeam<T extends EpisodeCast> = T['lee'][number]['name'] | Lee

type Answer = 'truth' | 'lie'
type Guess = Answer | 'unknown' | 'undecided'

type Standard<T extends EpisodeCast> = {
	type: 'home_truths' | 'possession' | 'quick_fire'
	teamGuess: Answer
	truth: Answer
} & ({
	guessingTeam: David
	person: LeeTeam<T>
	personGuesses: Record<DavidTeam<T>, Guess>
} | {
	guessingTeam: Lee
	person: DavidTeam<T>
	personGuesses: Record<LeeTeam<T>, Guess>
})

type ThisIsMy<T extends EpisodeCast> = {
	type: 'this_is_my'
} & ({
	guessingTeam: David
	teamGuess: Record<DavidTeam<T>, LeeTeam<T>>
	truth: LeeTeam<T>
} | {
	guessingTeam: Lee
	teamGuess: Record<LeeTeam<T>, DavidTeam<T>>
	truth: DavidTeam<T>
})

type RingOfTruth<T extends EpisodeCast> = {
	type: 'ring_of_truth'
	teamGuess: Answer
	truth: Answer
} & ({
	guessingTeam: David
	personGuesses: Record<DavidTeam<T>, Guess>
} | {
	guessingTeam: Lee
	personGuesses: Record<LeeTeam<T>, Guess>
})

type TellyTales<T extends EpisodeCast> = {
	type: 'telly_tales'
	teamGuess: Answer
	truth: Answer
} & ({
	guessingTeam: David
	statementOwner: LeeTeam<T>
	personGuesses: Record<DavidTeam<T>, Guess>
} | {
	guessingTeam: Lee
	statementOwner: DavidTeam<T>
	personGuesses: Record<LeeTeam<T>, Guess>
})

type Host<T extends EpisodeCast> = {
	type: 'host'
	personGuesses: {
		david: Record<DavidTeam<T>, Guess>
		lee: Record<LeeTeam<T>, Guess>
	}
	teamGuess: {
		david: Answer
		lee: Answer
	}
	truth: Answer
}

export type Round<T extends EpisodeCast> =
	| Standard<T>
	| ThisIsMy<T>
	| RingOfTruth<T>
	| TellyTales<T>
	| Host<T>

export type Episode = {
	cast: EpisodeCast
	season: number
	episode: number
	rounds: Round<EpisodeCast>[]
	score: {
		david: number
		lee: number
	}
}
