type Guest = {
	name: string
	wiki: string
}

export type EpisodeCast = {
	david: [Guest, Guest]
	lee: [Guest, Guest]
}

type David = 'David Mitchell'
type Lee = 'Lee Mack'

type DavidTeam<T extends EpisodeCast> = T['david'][number]['name'] | David
type LeeTeam<T extends EpisodeCast> = T['lee'][number]['name'] | Lee

type Answer = 'truth' | 'lie'
type NonAnswer = 'unknown' | 'undecided'
type Guess = Answer | NonAnswer

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
	personGuess: Record<DavidTeam<T>, LeeTeam<T> | NonAnswer>
	teamGuess: LeeTeam<T>
	truth: LeeTeam<T>
} | {
	guessingTeam: Lee
	personGuess: Record<LeeTeam<T>, DavidTeam<T> | NonAnswer>
	teamGuess: DavidTeam<T>
	truth: DavidTeam<T>
})

type RingOfTruthSingle<T extends EpisodeCast> = {
	type: 'ring_of_truth_single'
	teamGuess: Answer
	truth: Answer
} & ({
	guessingTeam: David
	personGuesses: Record<DavidTeam<T>, Guess>
} | {
	guessingTeam: Lee
	personGuesses: Record<LeeTeam<T>, Guess>
})

type RingOfTruthDual<T extends EpisodeCast> = {
	type: 'ring_of_truth_dual'
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
	| RingOfTruthSingle<T>
	| RingOfTruthDual<T>
	| TellyTales<T>
	| Host<T>

export type Episode = {
	cast: EpisodeCast
	season: number
	episode: number
	rounds: Round<EpisodeCast>[]
	score: [david: number, lee: number]
}
