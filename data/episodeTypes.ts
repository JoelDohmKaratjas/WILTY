type Guest = {
	name: string
	wiki: string
}

export type EpisodeCast = {
	david: readonly [Guest, Guest]
	lee: readonly [Guest, Guest]
}

type David = 'David Mitchell'
type Lee = 'Lee Mack'

type DavidTeam<T extends EpisodeCast> = T['david'][number]['name'] | David
type LeeTeam<T extends EpisodeCast> = T['lee'][number]['name'] | Lee

type Answer = 'truth' | 'lie'
type NonAnswer = 'unknown' | 'undecided'
type Guess = Answer | NonAnswer
type CompilationGuess = Answer | 'unknown'

type Standard<T extends EpisodeCast, R extends CompilationGuess = Answer> = {
	type: 'home_truths' | 'possession' | 'quick_fire' | 'quick_fire_possession'
	teamGuess: R
	truth: R
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

type RingOfTruthSingle<T extends EpisodeCast, R extends CompilationGuess = Answer> = {
	type: 'ring_of_truth_single'
	teamGuess: R
	truth: R
} & ({
	guessingTeam: David
	personGuesses: Record<DavidTeam<T>, Guess>
} | {
	guessingTeam: Lee
	personGuesses: Record<LeeTeam<T>, Guess>
})

type RingOfTruthDual<T extends EpisodeCast, R extends CompilationGuess = Answer> = {
	type: 'ring_of_truth_dual'
	personGuesses: {
		david: Record<DavidTeam<T>, Guess>
		lee: Record<LeeTeam<T>, Guess>
	}
	teamGuess: {
		david: R
		lee: R
	}
	truth: R
}

type TellyTales<T extends EpisodeCast, R extends CompilationGuess = Answer> = {
	type: 'telly_tales'
	teamGuess: R
	truth: R
} & ({
	guessingTeam: David
	statementOwner: LeeTeam<T>
	personGuesses: Record<DavidTeam<T>, Guess>
} | {
	guessingTeam: Lee
	statementOwner: DavidTeam<T>
	personGuesses: Record<LeeTeam<T>, Guess>
})

type Host<T extends EpisodeCast, R extends CompilationGuess = Answer> = {
	type: 'host'
	personGuesses: {
		david: Record<DavidTeam<T>, Guess>
		lee: Record<LeeTeam<T>, Guess>
	}
	teamGuess: {
		david: R
		lee: R
	}
	truth: R
}

export type Round<T extends EpisodeCast, R extends CompilationGuess = Answer> =
	| Standard<T, R>
	| ThisIsMy<T>
	| RingOfTruthSingle<T, R>
	| RingOfTruthDual<T, R>
	| TellyTales<T, R>
	| Host<T, R>

export type StandardEpisode = {
	type: 'standard'
	cast: EpisodeCast
	season: number
	episode: number
	rounds: Round<EpisodeCast>[]
	score: [david: number, lee: number]
}

export type CompilationCast = Readonly<Record<number, EpisodeCast>>

export type CompilationRound<C extends CompilationCast> = {
	[E in keyof C & number]: C[E] extends EpisodeCast
		? Round<C[E], CompilationGuess> & { episode: E }
		: never
}[keyof C & number]

export type CompilationEpisode<C extends CompilationCast> = {
	type: 'compilation'
	cast: CompilationCast
	season: number
	episode: number
	rounds: CompilationRound<C>[]
}
