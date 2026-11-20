export type Team = 'david' | 'lee'

export type Gender = 'male' | 'female' | 'non-binary'

export type FlatCastMember = {
	name: string
	team: Team
	gender: Gender | null
}

export type FlatGuess = {
	person: string
	team: Team
	guess: string
	truth: string
	correct: boolean
}

type HedgeKind = 'undecided' | 'unknown'

export type FlatHedge = {
	person: string
	team: Team
	kind: HedgeKind
}

export type TeamCall = 'truth' | 'lie' | 'unknown'

export type TruthCategory = 'truth' | 'lie' | 'other'

export type FlatRound = {
	key: string
	season: number
	episode: number
	isCompilation: boolean
	roundType: string
	statement: string | null
	sourceLabel: string
	truth: TruthCategory
	statementOwner: string | null
	statementOwnerGender: Gender | null
	statementOwnerTeam: Team | null
	guessers: readonly Team[]
	possession: boolean
	guesses: readonly FlatGuess[]
	hedges: readonly FlatHedge[]
	teamCalls: Partial<Record<Team, TeamCall>>
	teamCorrect: Record<Team, boolean | null>
}

export type FlatEpisode = {
	season: number
	episode: number
	isCompilation: boolean
	cast: readonly FlatCastMember[]
	score: readonly [number, number] | null
	liarOfTheWeek: string | null
	liarTeam: Team | null
	excludedRounds: number
	rounds: readonly FlatRound[]
}

export type ScorePoint = {
	key: string
	label: string
	season: number
	episode: number
	david: number
	lee: number
}

export type LiarAwardPoint = {
	key: string
	season: number
	episode: number
	label: string
	person: string | null
	team: Team | null
	wins: number
	isRepeatWinner: boolean
}

export type RoundTypePoint = {
	type: string
	name: string
	count: number
	percentage: number
}

export type WinRatePoint = {
	season: number
	davidWins: number
	leeWins: number
	draws: number
	total: number
	davidRate: number
	leeRate: number
}

export type CumulativeDifferencePoint = {
	key: string
	label: string
	season: number
	episode: number
	difference: number
	cumulative: number
}

export type MarginPoint = {
	season: number
	david1: number
	david2: number
	david3: number
	david4Plus: number
	lee1: number
	lee2: number
	lee3: number
	lee4Plus: number
}

export type CleanSheetPoint = {
	season: number
	david: number
	lee: number
}

export type LiarTeamPoint = {
	season: number
	david: number
	lee: number
}

export type LieRatePoint = {
	season: number
	david: number
	lee: number
	davidLies: number
	davidStatements: number
	leeLies: number
	leeStatements: number
}

export type SpottingRatePoint = {
	season: number
	david: number
	lee: number
	davidCorrect: number
	davidGuesses: number
	leeCorrect: number
	leeGuesses: number
}

export type ConfusionPoint = {
	team: Team
	actual: 'truth' | 'lie'
	guessed: 'truth' | 'lie'
	count: number
	percent: number
}

export type LieDetectorPoint = {
	person: string
	team: Team
	accuracy: number
	correct: number
	guesses: number
	overallAccuracy: number
}

export type ScepticismTeamPoint = {
	season: number
	david: number
	lee: number
}

export type PossessionPoint = {
	team: Team
	lieRateWith: number
	lieRateWithout: number
	spotRateWith: number
	spotRateWithout: number
	statementsWith: number
	statementsWithout: number
	guessesWith: number
	guessesWithout: number
}

export type TeamVsIndividualPoint = {
	team: Team
	teamAccuracy: number
	individualAccuracy: number
	teamCorrect: number
	teamGuesses: number
	individualCorrect: number
	individualGuesses: number
}

export type RoundTypeKey = 'home_truths' | 'quick_fire' | 'this_is_my' | 'ring_of_truth' | 'telly_tales'

export type AccuracyByRoundTypePoint = {
	type: RoundTypeKey
	name: string
	david: number
	lee: number
	davidCorrect: number
	davidGuesses: number
	leeCorrect: number
	leeGuesses: number
}

export type RoundTypeMixSeasonPoint = {
	season: number
	home_truths: number
	quick_fire: number
	this_is_my: number
	ring_of_truth: number
	telly_tales: number
	total: number
}

export type ThisIsMySuccessPoint = {
	season: number
	accuracy: number
	correct: number
	guesses: number
}

export type TruthLieSharePoint = {
	type: RoundTypeKey
	name: string
	truth: number
	lie: number
	truthCount: number
	lieCount: number
}

export type GuestWinRatePoint = {
	person: string
	team: Team
	gender: Gender | null
	appearances: number
	wins: number
	winRate: number
}

export type GenderRatePoint = {
	season: number
	femaleWin: number
	maleWin: number
	femaleLie: number
	maleLie: number
	femaleWinAppearances: number
	maleWinAppearances: number
	femaleLieStatements: number
	maleLieStatements: number
}

export type GuestLieProfilePoint = {
	person: string
	team: Team | null
	statements: number
	lies: number
	lieRate: number
	lieGuesses: number
	lieWrong: number
	lieFoolRate: number
}

export type StatementLengthTruthPoint = {
	bin: string
	truth: number
	lie: number
	truthCount: number
	lieCount: number
}

export type StatementLengthTruthSummary = {
	bins: readonly StatementLengthTruthPoint[]
	truthCount: number
	lieCount: number
	truthMedian: number
	lieMedian: number
}

export type StatementLengthDetectionBin = {
	bin: string
	accuracy: number
	lieRate: number
	statements: number
	guesses: number
}

export type BobTruth = 'truth' | 'lie'

export type BobGuestFoolRatePoint = {
	person: string
	foolRate: number
	statements: number
	guesses: number
	wrong: number
	isBob: boolean
}

export type BobTruthComparisonPoint = {
	truth: BobTruth
	label: string
	bobRate: number
	bobRounds: number
	bobGuesses: number
	bobWrong: number
	showRate: number
	showRounds: number
	showGuesses: number
	showWrong: number
}

export type BobFoolRateTrendPoint = {
	key: string
	label: string
	fullLabel: string
	season: number
	episode: number
	round: number
	truth: BobTruth
	statement: string
	foolRate: number
	guesses: number
	wrong: number
	showAverage: number
}

export type BobRoundPoint = {
	key: string
	label: string
	season: number
	episode: number
	round: number
	truth: BobTruth
	statement: string
	call: string
	outcome: 'fooled' | 'caught'
	foolRate: number
	guesses: number
	wrong: number
}

export type BobPanelReactionPoint = {
	panel: 'Unanimous' | 'Split'
	rounds: number
	fooled: number
	caught: number
	foolRate: number
}

export type BobSummary = {
	rounds: number
	guesses: number
	wrong: number
	foolRate: number
	showAverage: number
}

export type PanelConsensusPoint = {
	panel: 'Unanimous' | 'Split'
	individualAccuracy: number
	teamAccuracy: number
	individualCorrect: number
	individualGuesses: number
	teamCorrect: number
	rounds: number
}

export type TeamOverrideSummary = {
	comparableCalls: number
	overrides: number
	overrideRate: number
	overrideCorrect: number
	overrideAccuracy: number
	followCalls: number
	followCorrect: number
	followAccuracy: number
}

export type PlayerRoundPoint = {
	person: string
	label: string
	season: number
	episode: number
	round: number
	outcome: 'correct' | 'wrong' | 'abstained'
	truth: string
	call: string
}

export type ChartData = {
	meta: {
		episodeCount: number
		compilationCount: number
		seasonFrom: number
		seasonTo: number
		roundCount: number
		excludedRounds: number
		guessCount: number
		awardEpisodeCount: number
		awardSeasonFrom: number | null
		awardSeasonTo: number | null
		binaryRoundCount: number
		possessionRoundCount: number
	}
	scoreByEpisode: readonly ScorePoint[]
	cumulativeDifferenceByEpisode: readonly CumulativeDifferencePoint[]
	liarAwardTimeline: readonly LiarAwardPoint[]
	liarByTeamBySeason: readonly LiarTeamPoint[]
	roundTypeMix: readonly RoundTypePoint[]
	winRateBySeason: readonly WinRatePoint[]
	marginBySeason: readonly MarginPoint[]
	cleanSheetsBySeason: readonly CleanSheetPoint[]
	lieRateBySeason: readonly LieRatePoint[]
	lieDetectionBySeason: readonly SpottingRatePoint[]
	truthDetectionBySeason: readonly SpottingRatePoint[]
	confusionMatrix: readonly ConfusionPoint[]
	lieDetectors: readonly LieDetectorPoint[]
	scepticismByTeam: readonly ScepticismTeamPoint[]
	possessionEffect: readonly PossessionPoint[]
	teamVsIndividual: readonly TeamVsIndividualPoint[]
	accuracyByRoundType: readonly AccuracyByRoundTypePoint[]
	roundTypeMixBySeason: readonly RoundTypeMixSeasonPoint[]
	thisIsMySuccessBySeason: readonly ThisIsMySuccessPoint[]
	truthLieShareByRoundType: readonly TruthLieSharePoint[]
	guestWinRate: readonly GuestWinRatePoint[]
	genderRatesBySeason: readonly GenderRatePoint[]
	guestLieProfiles: readonly GuestLieProfilePoint[]
	statementLengthDetectionBins: readonly StatementLengthDetectionBin[]
	statementLengthByTruth: StatementLengthTruthSummary
	bobGuestsFoolRate: readonly BobGuestFoolRatePoint[]
	bobVsShowByTruth: readonly BobTruthComparisonPoint[]
	bobFoolRateOverTime: readonly BobFoolRateTrendPoint[]
	bobRounds: readonly BobRoundPoint[]
	bobPanelReaction: readonly BobPanelReactionPoint[]
	bobSummary: BobSummary
	panelConsensus: readonly PanelConsensusPoint[]
	teamOverride: TeamOverrideSummary
	playerRounds: readonly PlayerRoundPoint[]
}
