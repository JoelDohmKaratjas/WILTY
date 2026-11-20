import type {
	AccuracyByRoundTypePoint,
	BobTruthComparisonPoint,
	BobFoolRateTrendPoint,
	BobGuestFoolRatePoint,
	BobPanelReactionPoint,
	BobRoundPoint,
	BobSummary,
	BobTruth,
	ChartData,
	CleanSheetPoint,
	ConfusionPoint,
	CumulativeDifferencePoint,
	FlatEpisode,
	Gender,
	GenderRatePoint,
	GuestWinRatePoint,
	LieDetectorPoint,
	LieRatePoint,
	LiarAwardPoint,
	LiarTeamPoint,
	MarginPoint,
	PanelConsensusPoint,
	PlayerRoundPoint,
	PossessionPoint,
	GuestLieProfilePoint,
	RoundTypeKey,
	RoundTypeMixSeasonPoint,
	RoundTypePoint,
	ScepticismTeamPoint,
	ScorePoint,
	SpottingRatePoint,
	StatementLengthDetectionBin,
	StatementLengthTruthSummary,
	Team,
	TeamOverrideSummary,
	TeamVsIndividualPoint,
	ThisIsMySuccessPoint,
	TruthLieSharePoint,
	WinRatePoint
} from '../src/chartTypes.ts'

type PanelBucket = {
	individualCorrect: number
	individualGuesses: number
	teamCorrect: number
	rounds: number
}

type OverrideAccumulator = {
	comparableCalls: number
	overrides: number
	overrideCorrect: number
	followCalls: number
	followCorrect: number
}

type PlayerRoundCell = PlayerRoundPoint & { key: string }

type BobGuessAccumulator = {
	rounds: number
	guesses: number
	wrong: number
}

type BobGuestAccumulator = BobGuessAccumulator & {
	seasons: Set<number>
}

type BobPanelAccumulator = {
	rounds: number
	fooled: number
	caught: number
}

type LiarAwardCell = {
	key: string
	season: number
	episode: number
	person: string
	team: Team | null
}

const HEATMAP_PLAYERS = new Set(['David Mitchell', 'Lee Mack'])

type StatementAccumulator = {
	key: string
	label: string
	statement: string
	season: number
	correct: number
	guesses: number
	words: number
	isCompilation: boolean
	isBinary: boolean
	truth: 'truth' | 'lie' | null
}

type LiarAccumulator = {
	count: number
	team: Team | null
	kind: 'captain' | 'guest'
	seasons: Set<number>
}

type GuestAppearanceAccumulator = {
	team: Team
	gender: Gender | null
	appearances: number
	wins: number
}

type GenderSeasonAccumulator = {
	appearances: number
	wins: number
	statements: number
	lies: number
}

type GuestLieProfileAccumulator = {
	team: Team | null
	statements: number
	lies: number
	lieGuesses: number
	lieWrong: number
}

type TeamAccumulator = {
	guesses: number
	correct: number
	lieGuesses: number
	lieCorrect: number
	cleanSheets: number
	liarAwards: number
	wins: number
	played: number
}

type SeasonOwnerAccumulator = {
	statements: number
	lies: number
}

type SeasonGuessAccumulator = {
	guesses: number
	correct: number
}

type ScepticismAccumulator = {
	guesses: number
	lies: number
}

type DetectorAccumulator = {
	team: Team
	correct: number
	guesses: number
	totalCorrect: number
	totalGuesses: number
}

type PossessionAccumulator = {
	statements: number
	lies: number
	guesses: number
	spots: number
}

type TeamIndividualAccumulator = {
	teamGuesses: number
	teamCorrect: number
	individualGuesses: number
	individualCorrect: number
}

const emptyTeam = (): TeamAccumulator => ({
	guesses: 0,
	correct: 0,
	lieGuesses: 0,
	lieCorrect: 0,
	cleanSheets: 0,
	liarAwards: 0,
	wins: 0,
	played: 0
})

const roundTypeNames: Record<string, string> = {
	home_truths: 'Home truths',
	quick_fire: 'Quick fire',
	this_is_my: 'This is my',
	ring_of_truth_single: 'Ring of truth (single)',
	ring_of_truth_dual: 'Ring of truth (dual)',
	host: 'Host',
	telly_tales: 'Telly tales'
}

const FORMATS: readonly RoundTypeKey[] = ['home_truths', 'quick_fire', 'this_is_my', 'ring_of_truth', 'telly_tales']

const FORMAT_NAMES: Record<RoundTypeKey, string> = {
	home_truths: 'Home truths',
	quick_fire: 'Quick fire',
	this_is_my: 'This is my',
	ring_of_truth: 'Ring of truth',
	telly_tales: 'Telly tales'
}

const formatOf = (type: string): RoundTypeKey => {
	if (type === 'ring_of_truth_single' || type === 'ring_of_truth_dual' || type === 'host') {
		return 'ring_of_truth'
	}
	return type as RoundTypeKey
}

const TEAMS: readonly Team[] = ['david', 'lee']
const ACTUALS = ['truth', 'lie'] as const
const CAPTAINS = new Set(['David Mitchell', 'Lee Mack'])
const MIN_PERSON_POINTS = 10
const MIN_GUEST_APPEARANCES = 3

const percent = (part: number, total: number) =>
	total === 0 ? 0 : Math.round((part / total) * 1000) / 10

const wordCount = (text: string) => text.trim().split(/\s+/).filter(Boolean).length

const median = (values: readonly number[]) => {
	if (values.length === 0) return 0
	const sorted = [...values].sort((a, b) => a - b)
	const middle = Math.floor(sorted.length / 2)
	return sorted.length % 2 === 0
		? Math.round((sorted[middle - 1] + sorted[middle]) / 2)
		: sorted[middle]
}

const emptyOwnerRow = (): Record<Team, SeasonOwnerAccumulator> => ({
	david: { statements: 0, lies: 0 },
	lee: { statements: 0, lies: 0 }
})

const emptyGuessRow = (): Record<Team, SeasonGuessAccumulator> => ({
	david: { guesses: 0, correct: 0 },
	lee: { guesses: 0, correct: 0 }
})

const emptyFormatMixRow = (season: number): RoundTypeMixSeasonPoint => ({
	season,
	home_truths: 0,
	quick_fire: 0,
	this_is_my: 0,
	ring_of_truth: 0,
	telly_tales: 0,
	total: 0
})

const emptyGenderSeasonRow = (): Record<Gender, GenderSeasonAccumulator> => ({
	'female': { appearances: 0, wins: 0, statements: 0, lies: 0 },
	'male': { appearances: 0, wins: 0, statements: 0, lies: 0 },
	'non-binary': { appearances: 0, wins: 0, statements: 0, lies: 0 }
})

const emptyScepticismRow = (): Record<Team, ScepticismAccumulator> => ({
	david: { guesses: 0, lies: 0 },
	lee: { guesses: 0, lies: 0 }
})

const emptyPossessionAcc = (): PossessionAccumulator => ({
	statements: 0,
	lies: 0,
	guesses: 0,
	spots: 0
})

const emptyTeamIndividual = (): TeamIndividualAccumulator => ({
	teamGuesses: 0,
	teamCorrect: 0,
	individualGuesses: 0,
	individualCorrect: 0
})

export function aggregate(episodes: readonly FlatEpisode[]): ChartData {
	const standard = episodes.filter(episode => !episode.isCompilation)

	const scoreByEpisode: ScorePoint[] = standard
		.filter(episode => episode.score !== null)
		.map(episode => ({
			key: `${episode.season}-${episode.episode}`,
			label: `S${episode.season} E${episode.episode}`,
			season: episode.season,
			episode: episode.episode,
			david: episode.score?.[0] ?? 0,
			lee: episode.score?.[1] ?? 0
		}))
		.sort((a, b) => a.season - b.season || a.episode - b.episode)

	let runningDifference = 0
	const cumulativeDifferenceByEpisode: CumulativeDifferencePoint[] = scoreByEpisode.map(point => {
		const difference = point.david - point.lee
		runningDifference += difference
		return {
			key: point.key,
			label: point.label,
			season: point.season,
			episode: point.episode,
			difference,
			cumulative: runningDifference
		}
	})

	const marginByTeamSeason = new Map<number, MarginPoint>()
	const cleanSheetsByTeamSeason = new Map<number, CleanSheetPoint>()
	for (const point of scoreByEpisode) {
		const margin = Math.abs(point.david - point.lee)
		if (margin > 0) {
			const bucket: '1' | '2' | '3' | '4Plus' = margin <= 1 ? '1' : margin === 2 ? '2' : margin === 3 ? '3' : '4Plus'
			const prefix: 'david' | 'lee' = point.david > point.lee ? 'david' : 'lee'
			const field: keyof MarginPoint = `${prefix}${bucket}`
			const row = marginByTeamSeason.get(point.season)
				?? { season: point.season, david1: 0, david2: 0, david3: 0, david4Plus: 0, lee1: 0, lee2: 0, lee3: 0, lee4Plus: 0 }
			row[field] += prefix === 'lee' ? -1 : 1
			marginByTeamSeason.set(point.season, row)
		}
		const clean = cleanSheetsByTeamSeason.get(point.season)
			?? { season: point.season, david: 0, lee: 0 }
		if (point.lee === 0) clean.david += 1
		if (point.david === 0) clean.lee += 1
		cleanSheetsByTeamSeason.set(point.season, clean)
	}
	const marginBySeason = [...marginByTeamSeason.values()].sort((a, b) => a.season - b.season)
	const cleanSheetsBySeason = [...cleanSheetsByTeamSeason.values()].sort((a, b) => a.season - b.season)

	const teams: Record<Team, TeamAccumulator> = { david: emptyTeam(), lee: emptyTeam() }
	const liarByTeamSeason = new Map<number, LiarTeamPoint>()
	const liarAwardCells: LiarAwardCell[] = []

	const statements = new Map<string, StatementAccumulator>()
	const bobGuests = new Map<string, BobGuestAccumulator>()
	const bobByTruth: Record<BobTruth, BobGuessAccumulator> = {
		truth: { rounds: 0, guesses: 0, wrong: 0 },
		lie: { rounds: 0, guesses: 0, wrong: 0 }
	}
	const bobByPanel: Record<'unanimous' | 'split', BobPanelAccumulator> = {
		unanimous: { rounds: 0, fooled: 0, caught: 0 },
		split: { rounds: 0, fooled: 0, caught: 0 }
	}
	const bobRounds: (BobRoundPoint & { key: string })[] = []
	const bobTrendData: Omit<BobFoolRateTrendPoint, 'showAverage'>[] = []
	const bob: BobGuessAccumulator = { rounds: 0, guesses: 0, wrong: 0 }
	const showWideByTruth: Record<BobTruth, BobGuessAccumulator> = {
		truth: { rounds: 0, guesses: 0, wrong: 0 },
		lie: { rounds: 0, guesses: 0, wrong: 0 }
	}
	let showWideWrong = 0
	let showWideGuesses = 0
	const roundTypes = new Map<string, number>()
	const formatAccuracy = new Map<RoundTypeKey, Record<Team, SeasonGuessAccumulator>>()
	const formatMixBySeason = new Map<number, RoundTypeMixSeasonPoint>()
	const thisIsMyBySeason = new Map<number, SeasonGuessAccumulator>()
	const truthLieByFormat = new Map<RoundTypeKey, { truth: number, lie: number }>()
	const guestAppearances = new Map<string, GuestAppearanceAccumulator>()
	const genderBySeason = new Map<number, Record<Gender, GenderSeasonAccumulator>>()
	const guestLieProfileMap = new Map<string, GuestLieProfileAccumulator>()
	const liars = new Map<string, LiarAccumulator>()
	const ownerBySeason = new Map<number, Record<Team, SeasonOwnerAccumulator>>()
	const lieDetectionBySeasonMap = new Map<number, Record<Team, SeasonGuessAccumulator>>()
	const truthDetectionBySeasonMap = new Map<number, Record<Team, SeasonGuessAccumulator>>()
	const scepticismBySeasonMap = new Map<number, Record<Team, ScepticismAccumulator>>()
	const detectors = new Map<string, DetectorAccumulator>()
	const panelBuckets: Record<'unanimous' | 'split', PanelBucket> = {
		unanimous: { individualCorrect: 0, individualGuesses: 0, teamCorrect: 0, rounds: 0 },
		split: { individualCorrect: 0, individualGuesses: 0, teamCorrect: 0, rounds: 0 }
	}
	const override: OverrideAccumulator = {
		comparableCalls: 0,
		overrides: 0,
		overrideCorrect: 0,
		followCalls: 0,
		followCorrect: 0
	}
	const playerRounds: PlayerRoundCell[] = []
	const possessionByTeam = new Map<Team, { with: PossessionAccumulator, without: PossessionAccumulator }>()
	const teamIndividualByTeam: Record<Team, TeamIndividualAccumulator> = {
		david: emptyTeamIndividual(),
		lee: emptyTeamIndividual()
	}
	const confusionCounts: Record<Team, Record<'truth' | 'lie', Record<'truth' | 'lie', number>>> = {
		david: { truth: { truth: 0, lie: 0 }, lie: { truth: 0, lie: 0 } },
		lee: { truth: { truth: 0, lie: 0 }, lie: { truth: 0, lie: 0 } }
	}
	let binaryRoundCount = 0
	let possessionRoundCount = 0
	let roundCount = 0
	let guessCount = 0
	let excludedRounds = 0

	for (const episode of episodes) {
		excludedRounds += episode.excludedRounds
		if (episode.liarOfTheWeek) {
			liarAwardCells.push({
				key: `${episode.season}-${episode.episode}`,
				season: episode.season,
				episode: episode.episode,
				person: episode.liarOfTheWeek,
				team: episode.liarTeam
			})
			const kind = CAPTAINS.has(episode.liarOfTheWeek) ? 'captain' : 'guest'
			const liar = liars.get(episode.liarOfTheWeek)
				?? { count: 0, team: episode.liarTeam, kind, seasons: new Set<number>() }
			liar.count += 1
			liar.seasons.add(episode.season)
			liars.set(episode.liarOfTheWeek, liar)
			if (episode.liarTeam) {
				teams[episode.liarTeam].liarAwards += 1
				const row = liarByTeamSeason.get(episode.season)
					?? { season: episode.season, david: 0, lee: 0 }
				row[episode.liarTeam] += 1
				liarByTeamSeason.set(episode.season, row)
			}
		}

		if (!episode.isCompilation) {
			const score = episode.score
			const winner = score === null ? null : score[0] > score[1] ? 'david' : score[1] > score[0] ? 'lee' : null
			for (const member of episode.cast) {
				if (member.gender === null) continue
				const acc = guestAppearances.get(member.name) ?? {
					team: member.team,
					gender: member.gender,
					appearances: 0,
					wins: 0
				}
				acc.appearances += 1
				if (winner === member.team) acc.wins += 1
				guestAppearances.set(member.name, acc)

				const genderRow = genderBySeason.get(episode.season) ?? emptyGenderSeasonRow()
				genderRow[member.gender].appearances += 1
				if (winner === member.team) genderRow[member.gender].wins += 1
				genderBySeason.set(episode.season, genderRow)
			}
		}

		for (const round of episode.rounds) {
			roundCount += 1
			roundTypes.set(round.roundType, (roundTypes.get(round.roundType) ?? 0) + 1)

			const format = formatOf(round.roundType)
			const mix = formatMixBySeason.get(round.season) ?? emptyFormatMixRow(round.season)
			mix[format] += 1
			mix.total += 1
			formatMixBySeason.set(round.season, mix)

			const formatAcc = formatAccuracy.get(format) ?? emptyGuessRow()
			formatAccuracy.set(format, formatAcc)

			if (round.roundType === 'this_is_my') {
				const thisIsMy = thisIsMyBySeason.get(round.season) ?? { guesses: 0, correct: 0 }
				for (const guess of round.guesses) {
					thisIsMy.guesses += 1
					thisIsMy.correct += guess.correct ? 1 : 0
				}
				thisIsMyBySeason.set(round.season, thisIsMy)
			}

			const isBinary = round.truth === 'truth' || round.truth === 'lie'
			if (isBinary) binaryRoundCount += 1

			if (isBinary && !round.isCompilation && round.guesses.length > 0) {
				const wrongGuesses = round.guesses.filter(guess => !guess.correct).length
				showWideGuesses += round.guesses.length
				showWideWrong += wrongGuesses
				const showTruth = round.truth as BobTruth
				showWideByTruth[showTruth].rounds += 1
				showWideByTruth[showTruth].guesses += round.guesses.length
				showWideByTruth[showTruth].wrong += wrongGuesses

				if (round.statementOwner && !CAPTAINS.has(round.statementOwner)) {
					const guest = bobGuests.get(round.statementOwner) ?? {
						rounds: 0,
						guesses: 0,
						wrong: 0,
						seasons: new Set<number>()
					}
					guest.rounds += 1
					guest.guesses += round.guesses.length
					guest.wrong += wrongGuesses
					guest.seasons.add(round.season)
					bobGuests.set(round.statementOwner, guest)

					const profile = guestLieProfileMap.get(round.statementOwner) ?? {
						team: round.statementOwnerTeam,
						statements: 0,
						lies: 0,
						lieGuesses: 0,
						lieWrong: 0
					}
					profile.statements += 1
					if (round.truth === 'lie') {
						profile.lies += 1
						profile.lieGuesses += round.guesses.length
						profile.lieWrong += wrongGuesses
					}
					guestLieProfileMap.set(round.statementOwner, profile)
				}

				if (round.statementOwner === 'Bob Mortimer') {
					const truth = round.truth as BobTruth
					const roundNumber = Number(round.key.split('-').at(-1))
					const label = `S${round.season} E${round.episode}`
					const judgingTeam = round.guessers.find(team => round.guesses.some(guess => guess.team === team)) ?? 'david'
					const teamWasFooled = round.teamCorrect[judgingTeam] === false
					const outcome = teamWasFooled ? 'fooled' : 'caught'
					const committed = round.guesses.filter(guess => guess.guess === 'truth' || guess.guess === 'lie')
					const unanimous = committed.length >= 2 && committed.every(guess => guess.guess === committed[0].guess)
					const panel = bobByPanel[unanimous ? 'unanimous' : 'split']
					const foolRate = percent(wrongGuesses, round.guesses.length)

					bob.rounds += 1
					bob.guesses += round.guesses.length
					bob.wrong += wrongGuesses
					bobByTruth[truth].rounds += 1
					bobByTruth[truth].guesses += round.guesses.length
					bobByTruth[truth].wrong += wrongGuesses
					panel.rounds += 1
					if (teamWasFooled) panel.fooled += 1
					else panel.caught += 1

					bobTrendData.push({
						key: round.key,
						label,
						fullLabel: `${label} · R${roundNumber}`,
						season: round.season,
						episode: round.episode,
						round: roundNumber,
						truth,
						statement: round.statement ?? '',
						foolRate,
						guesses: round.guesses.length,
						wrong: wrongGuesses
					})
					bobRounds.push({
						key: round.key,
						label,
						season: round.season,
						episode: round.episode,
						round: roundNumber,
						truth,
						statement: round.statement ?? '',
						call: round.teamCalls[judgingTeam] ?? 'unknown',
						outcome,
						foolRate,
						guesses: round.guesses.length,
						wrong: wrongGuesses
					})
				}
			}
			if (isBinary) {
				const truthLie = truthLieByFormat.get(format) ?? { truth: 0, lie: 0 }
				if (round.truth === 'truth') truthLie.truth += 1
				else truthLie.lie += 1
				truthLieByFormat.set(format, truthLie)
			}
			if (round.possession && round.statementOwnerTeam) possessionRoundCount += 1

			if (!round.isCompilation && isBinary && round.statementOwnerGender) {
				const genderRow = genderBySeason.get(round.season) ?? emptyGenderSeasonRow()
				genderRow[round.statementOwnerGender].statements += 1
				if (round.truth === 'lie') genderRow[round.statementOwnerGender].lies += 1
				genderBySeason.set(round.season, genderRow)
			}

			if (isBinary && round.statementOwnerTeam) {
				const row = ownerBySeason.get(round.season) ?? emptyOwnerRow()
				const owner = row[round.statementOwnerTeam]
				owner.statements += 1
				if (round.truth === 'lie') owner.lies += 1
				ownerBySeason.set(round.season, row)
			}

			const possessionAcc = isBinary && round.statementOwnerTeam
				? (possessionByTeam.get(round.statementOwnerTeam)
					?? { with: emptyPossessionAcc(), without: emptyPossessionAcc() })
				: null
			if (possessionAcc && round.statementOwnerTeam) {
				const acc = round.possession ? possessionAcc.with : possessionAcc.without
				acc.statements += 1
				if (round.truth === 'lie') acc.lies += 1
			}

			for (const guess of round.guesses) {
				guessCount += 1
				const teamStats = teams[guess.team]
				teamStats.guesses += 1
				teamStats.correct += guess.correct ? 1 : 0
				formatAcc[guess.team].guesses += 1
				formatAcc[guess.team].correct += guess.correct ? 1 : 0

				const isLieGuess = guess.guess === 'lie'
				const isLieCorrect = isLieGuess || guess.guess === 'unknown'
				if (guess.truth === 'lie') {
					teamStats.lieGuesses += 1
					teamStats.lieCorrect += isLieCorrect ? 1 : 0
					const row = lieDetectionBySeasonMap.get(round.season) ?? emptyGuessRow()
					row[guess.team].guesses += 1
					if (isLieCorrect) row[guess.team].correct += 1
					lieDetectionBySeasonMap.set(round.season, row)
					const detector = detectors.get(guess.person) ?? {
						team: guess.team,
						correct: 0,
						guesses: 0,
						totalCorrect: 0,
						totalGuesses: 0
					}
					detector.guesses += 1
					if (isLieCorrect) detector.correct += 1
					detector.totalCorrect += guess.correct ? 1 : 0
					detector.totalGuesses += 1
					detectors.set(guess.person, detector)
				} else if (guess.truth === 'truth') {
					const row = truthDetectionBySeasonMap.get(round.season) ?? emptyGuessRow()
					row[guess.team].guesses += 1
					if (guess.guess === 'truth' || guess.guess === 'unknown') row[guess.team].correct += 1
					truthDetectionBySeasonMap.set(round.season, row)
				}

				if (isBinary) {
					const sceptRow = scepticismBySeasonMap.get(round.season) ?? emptyScepticismRow()
					sceptRow[guess.team].guesses += 1
					if (isLieGuess) sceptRow[guess.team].lies += 1
					scepticismBySeasonMap.set(round.season, sceptRow)

					const actual = round.truth === 'truth' ? 'truth' : 'lie'
					const call = round.teamCalls[guess.team]
					const guessed: 'truth' | 'lie' = guess.guess === 'truth' || guess.guess === 'lie'
						? guess.guess
						: (call === 'truth' || call === 'lie' ? call : actual)
					confusionCounts[guess.team][actual][guessed] += 1
				}

				if (possessionAcc && round.statementOwnerTeam) {
					const acc = round.possession ? possessionAcc.with : possessionAcc.without
					acc.guesses += 1
					if (isLieCorrect) acc.spots += 1
				}
			}

			if (possessionAcc && round.statementOwnerTeam) {
				possessionByTeam.set(round.statementOwnerTeam, possessionAcc)
			}

			for (const team of TEAMS) {
				const correct = round.teamCorrect[team]
				if (correct !== null) {
					teamIndividualByTeam[team].teamGuesses += 1
					teamIndividualByTeam[team].teamCorrect += correct ? 1 : 0
				}
			}

			if (round.statement && round.guesses.length > 0) {
				const correct = round.guesses.filter(guess => guess.correct).length
				const statementData: StatementAccumulator = {
					key: round.key,
					label: round.sourceLabel,
					statement: round.statement,
					season: round.season,
					correct,
					guesses: round.guesses.length,
					words: wordCount(round.statement),
					isCompilation: round.isCompilation,
					isBinary,
					truth: isBinary && (round.truth === 'truth' || round.truth === 'lie')
						? round.truth
						: null
				}
				const existing = statements.get(round.statement)
				if (existing) {
					existing.correct += correct
					existing.guesses += round.guesses.length
				} else {
					statements.set(round.statement, statementData)
				}
			}

			if (!round.isCompilation && isBinary) {
				const roundNumber = Number(round.key.split('-').at(-1))
				const teamsPresent = new Set<Team>([
					...Object.keys(round.teamCalls) as Team[],
					...round.guesses.map(guess => guess.team),
					...round.hedges.map(hedge => hedge.team)
				])

				for (const team of teamsPresent) {
					const teamGuesses = round.guesses.filter(guess => guess.team === team)
					const committed = teamGuesses.filter(guess => guess.guess === 'truth' || guess.guess === 'lie')
					const call = round.teamCalls[team]
					const correct = round.teamCorrect[team]

					if (committed.length >= 2) {
						const unanimous = committed.every(guess => guess.guess === committed[0].guess)
						const bucket = panelBuckets[unanimous ? 'unanimous' : 'split']
						bucket.individualCorrect += teamGuesses.filter(guess => guess.correct).length
						bucket.individualGuesses += teamGuesses.length
						if (call && correct !== null) {
							bucket.rounds += 1
							bucket.teamCorrect += correct ? 1 : 0
						}
					}

					if (call === 'truth' || call === 'lie') {
						const truths = committed.filter(guess => guess.guess === 'truth').length
						const lies = committed.length - truths
						if (truths + lies > 0 && truths !== lies && correct !== null) {
							const majority = truths > lies ? 'truth' : 'lie'
							override.comparableCalls += 1
							if (call !== majority) {
								override.overrides += 1
								if (correct) override.overrideCorrect += 1
							} else {
								override.followCalls += 1
								if (correct) override.followCorrect += 1
							}
						}
					}
				}

				for (const guess of round.guesses) {
					if (guess.guess === 'unknown' || !HEATMAP_PLAYERS.has(guess.person)) continue
					playerRounds.push({
						person: guess.person,
						key: `${round.key}-${guess.person}`,
						label: `${round.sourceLabel} · R${roundNumber}`,
						season: round.season,
						episode: round.episode,
						round: roundNumber,
						outcome: guess.correct ? 'correct' : 'wrong',
						truth: round.truth,
						call: guess.guess
					})
				}
				for (const hedge of round.hedges) {
					if (!HEATMAP_PLAYERS.has(hedge.person)) continue
					playerRounds.push({
						person: hedge.person,
						key: `${round.key}-${hedge.person}`,
						label: `${round.sourceLabel} · R${roundNumber}`,
						season: round.season,
						episode: round.episode,
						round: roundNumber,
						outcome: 'abstained',
						truth: round.truth,
						call: hedge.kind
					})
				}
			}
		}
	}

	const awardCellByKey = new Map(liarAwardCells.map(cell => [cell.key, cell]))
	const firstAwardSeason = liarAwardCells.length > 0
		? Math.min(...liarAwardCells.map(cell => cell.season))
		: 0
	const lastAwardSeason = liarAwardCells.length > 0
		? Math.max(...liarAwardCells.map(cell => cell.season))
		: 0
	const liarAwardTimeline: LiarAwardPoint[] = standard
		.filter(episode => episode.season >= firstAwardSeason && episode.season <= lastAwardSeason)
		.map(episode => {
			const key = `${episode.season}-${episode.episode}`
			const winner = awardCellByKey.get(key)
			const wins = winner ? liars.get(winner.person)?.count ?? 0 : 0
			return {
				key,
				season: episode.season,
				episode: episode.episode,
				label: `S${episode.season} E${episode.episode}`,
				person: winner?.person ?? null,
				team: winner?.team ?? null,
				wins,
				isRepeatWinner: wins > 1
			}
		})
		.sort((a, b) => a.season - b.season || a.episode - b.episode)

	const roundTypeMix: RoundTypePoint[] = [...roundTypes.entries()]
		.map(([type, count]) => ({
			type,
			name: roundTypeNames[type] ?? type.replaceAll('_', ' '),
			count,
			percentage: percent(count, roundCount)
		}))
		.sort((a, b) => b.count - a.count)

	const seasons = [...new Set(standard.map(episode => episode.season))].sort((a, b) => a - b)
	const winRateBySeason: WinRatePoint[] = seasons.map(season => {
		const episodes = standard.filter(episode => episode.season === season && episode.score !== null)
		let davidWins = 0
		let leeWins = 0
		let draws = 0
		for (const episode of episodes) {
			const score = episode.score
			if (!score) continue
			if (score[0] > score[1]) davidWins += 1
			else if (score[1] > score[0]) leeWins += 1
			else draws += 1
		}
		return {
			season,
			davidWins,
			leeWins,
			draws,
			total: episodes.length,
			davidRate: percent(davidWins, episodes.length),
			leeRate: percent(leeWins, episodes.length)
		}
	})

	const accuracyByRoundType: AccuracyByRoundTypePoint[] = FORMATS.map(type => {
		const row = formatAccuracy.get(type) ?? emptyGuessRow()
		return {
			type,
			name: FORMAT_NAMES[type],
			david: percent(row.david.correct, row.david.guesses),
			lee: percent(row.lee.correct, row.lee.guesses),
			davidCorrect: row.david.correct,
			davidGuesses: row.david.guesses,
			leeCorrect: row.lee.correct,
			leeGuesses: row.lee.guesses
		}
	})

	const roundTypeMixBySeason: RoundTypeMixSeasonPoint[] = seasons.map(season => {
		const row = formatMixBySeason.get(season) ?? emptyFormatMixRow(season)
		const shares = FORMATS.map(type => ({
			type,
			tenths: row.total === 0 ? 0 : Math.round(row[type] / row.total * 1000)
		}))
		const remainder = 1000 - shares.reduce((total, share) => total + share.tenths, 0)
		const largest = shares.reduce((best, share) => row[share.type] > row[best.type] ? share : best)
		largest.tenths += remainder
		const values = Object.fromEntries(shares.map(share => [share.type, share.tenths / 10])) as Record<RoundTypeKey, number>
		return { season, ...values, total: row.total }
	})

	const thisIsMySuccessBySeason: ThisIsMySuccessPoint[] = seasons.map(season => {
		const row = thisIsMyBySeason.get(season) ?? { guesses: 0, correct: 0 }
		return {
			season,
			accuracy: percent(row.correct, row.guesses),
			correct: row.correct,
			guesses: row.guesses
		}
	})

	const truthLieShareByRoundType: TruthLieSharePoint[] = FORMATS
		.map(type => {
			const row = truthLieByFormat.get(type) ?? { truth: 0, lie: 0 }
			const total = row.truth + row.lie
			return {
				type,
				name: FORMAT_NAMES[type],
				truth: percent(row.truth, total),
				lie: percent(row.lie, total),
				truthCount: row.truth,
				lieCount: row.lie
			}
		})
		.filter(point => point.truthCount + point.lieCount > 0)

	const guestWinRate: GuestWinRatePoint[] = [...guestAppearances.entries()]
		.filter(([, stats]) => stats.appearances >= MIN_GUEST_APPEARANCES)
		.map(([person, stats]) => ({
			person,
			team: stats.team,
			gender: stats.gender,
			appearances: stats.appearances,
			wins: stats.wins,
			winRate: percent(stats.wins, stats.appearances)
		}))
		.sort((a, b) => b.winRate - a.winRate || b.appearances - a.appearances)

	const genderRatesBySeason: GenderRatePoint[] = seasons.map(season => {
		const row = genderBySeason.get(season) ?? emptyGenderSeasonRow()
		return {
			season,
			femaleWin: percent(row.female.wins, row.female.appearances),
			maleWin: percent(row.male.wins, row.male.appearances),
			femaleLie: percent(row.female.lies, row.female.statements),
			maleLie: percent(row.male.lies, row.male.statements),
			femaleWinAppearances: row.female.appearances,
			maleWinAppearances: row.male.appearances,
			femaleLieStatements: row.female.statements,
			maleLieStatements: row.male.statements
		}
	})

	const guestLieProfiles: GuestLieProfilePoint[] = [...guestLieProfileMap.entries()]
		.map(([person, stats]) => ({
			person,
			team: stats.team,
			statements: stats.statements,
			lies: stats.lies,
			lieRate: percent(stats.lies, stats.statements),
			lieGuesses: stats.lieGuesses,
			lieWrong: stats.lieWrong,
			lieFoolRate: percent(stats.lieWrong, stats.lieGuesses)
		}))
		.sort((a, b) => b.lieFoolRate - a.lieFoolRate || b.lies - a.lies || a.person.localeCompare(b.person))

	const detectionBins: readonly { bin: string, min: number, max: number }[] = [
		{ bin: '4–9', min: 4, max: 9 },
		{ bin: '10–14', min: 10, max: 14 },
		{ bin: '15–19', min: 15, max: 19 },
		{ bin: '20–24', min: 20, max: 24 },
		{ bin: '25+', min: 25, max: Number.POSITIVE_INFINITY }
	]

	const detectionStatements = [...statements.values()]
		.filter(statement => !statement.isCompilation && statement.isBinary && statement.guesses >= 3)

	const statementLengthDetectionBins: StatementLengthDetectionBin[] = detectionBins.map(({ bin, min, max }) => {
		const rows = detectionStatements.filter(statement => statement.words >= min && statement.words <= max)
		return {
			bin,
			accuracy: percent(
				rows.reduce((sum, statement) => sum + statement.correct, 0),
				rows.reduce((sum, statement) => sum + statement.guesses, 0)
			),
			lieRate: percent(rows.filter(statement => statement.truth === 'lie').length, rows.length),
			statements: rows.length,
			guesses: rows.reduce((sum, statement) => sum + statement.guesses, 0)
		}
	})

	const lengthByTruth = [...statements.values()]
		.filter(statement => !statement.isCompilation && statement.isBinary && statement.truth !== null && statement.guesses >= 3)

	const lengthBins: readonly { bin: string, min: number, max: number }[] = [
		{ bin: '0–9', min: 0, max: 9 },
		{ bin: '10–19', min: 10, max: 19 },
		{ bin: '20–29', min: 20, max: 29 },
		{ bin: '30+', min: 30, max: Number.POSITIVE_INFINITY }
	]

	const statementLengthByTruth: StatementLengthTruthSummary = {
		bins: lengthBins.map(({ bin, min, max }) => {
			const rows = lengthByTruth.filter(statement => statement.words >= min && statement.words <= max)
			const truthCount = rows.filter(statement => statement.truth === 'truth').length
			const lieCount = rows.filter(statement => statement.truth === 'lie').length
			return {
				bin,
				truth: percent(truthCount, truthCount + lieCount),
				lie: percent(lieCount, truthCount + lieCount),
				truthCount,
				lieCount
			}
		}),
		truthCount: lengthByTruth.filter(statement => statement.truth === 'truth').length,
		lieCount: lengthByTruth.filter(statement => statement.truth === 'lie').length,
		truthMedian: median(lengthByTruth.filter(statement => statement.truth === 'truth').map(statement => statement.words)),
		lieMedian: median(lengthByTruth.filter(statement => statement.truth === 'lie').map(statement => statement.words))
	}

	const lieRateBySeason: LieRatePoint[] = seasons.map(season => {
		const row = ownerBySeason.get(season) ?? emptyOwnerRow()
		return {
			season,
			david: percent(row.david.lies, row.david.statements),
			lee: percent(row.lee.lies, row.lee.statements),
			davidLies: row.david.lies,
			davidStatements: row.david.statements,
			leeLies: row.lee.lies,
			leeStatements: row.lee.statements
		}
	})

	const lieDetectionBySeason: SpottingRatePoint[] = seasons.map(season => {
		const row = lieDetectionBySeasonMap.get(season) ?? emptyGuessRow()
		return {
			season,
			david: percent(row.david.correct, row.david.guesses),
			lee: percent(row.lee.correct, row.lee.guesses),
			davidCorrect: row.david.correct,
			davidGuesses: row.david.guesses,
			leeCorrect: row.lee.correct,
			leeGuesses: row.lee.guesses
		}
	})

	const truthDetectionBySeason: SpottingRatePoint[] = seasons.map(season => {
		const row = truthDetectionBySeasonMap.get(season) ?? emptyGuessRow()
		return {
			season,
			david: percent(row.david.correct, row.david.guesses),
			lee: percent(row.lee.correct, row.lee.guesses),
			davidCorrect: row.david.correct,
			davidGuesses: row.david.guesses,
			leeCorrect: row.lee.correct,
			leeGuesses: row.lee.guesses
		}
	})

	const scepticismByTeam: ScepticismTeamPoint[] = seasons.map(season => {
		const row = scepticismBySeasonMap.get(season) ?? emptyScepticismRow()
		return {
			season,
			david: percent(row.david.lies, row.david.guesses),
			lee: percent(row.lee.lies, row.lee.guesses)
		}
	})

	const confusionMatrix: ConfusionPoint[] = []
	for (const team of TEAMS) {
		for (const actual of ACTUALS) {
			const rowTotal = ACTUALS.reduce((total, guessed) => total + confusionCounts[team][actual][guessed], 0)
			for (const guessed of ACTUALS) {
				const count = confusionCounts[team][actual][guessed]
				confusionMatrix.push({ team, actual, guessed, count, percent: percent(count, rowTotal) })
			}
		}
	}

	const detectorPoints: LieDetectorPoint[] = [...detectors.entries()]
		.filter(([, stats]) => stats.guesses >= MIN_PERSON_POINTS)
		.map(([person, stats]) => ({
			person,
			team: stats.team,
			accuracy: percent(stats.correct, stats.guesses),
			correct: stats.correct,
			guesses: stats.guesses,
			overallAccuracy: percent(stats.totalCorrect, stats.totalGuesses)
		}))
		.sort((a, b) => b.accuracy - a.accuracy || b.guesses - a.guesses)

	const lieDetectors = detectorPoints.slice(0, 20)

	const possessionEffect: PossessionPoint[] = TEAMS.map(team => {
		const row = possessionByTeam.get(team) ?? { with: emptyPossessionAcc(), without: emptyPossessionAcc() }
		return {
			team,
			lieRateWith: percent(row.with.lies, row.with.statements),
			lieRateWithout: percent(row.without.lies, row.without.statements),
			spotRateWith: percent(row.with.spots, row.with.guesses),
			spotRateWithout: percent(row.without.spots, row.without.guesses),
			statementsWith: row.with.statements,
			statementsWithout: row.without.statements,
			guessesWith: row.with.guesses,
			guessesWithout: row.without.guesses
		}
	})

	for (const team of TEAMS) {
		teamIndividualByTeam[team].individualCorrect = teams[team].correct
		teamIndividualByTeam[team].individualGuesses = teams[team].guesses
	}

	const teamVsIndividual: TeamVsIndividualPoint[] = TEAMS.map(team => {
		const row = teamIndividualByTeam[team]
		return {
			team,
			teamAccuracy: percent(row.teamCorrect, row.teamGuesses),
			individualAccuracy: percent(row.individualCorrect, row.individualGuesses),
			teamCorrect: row.teamCorrect,
			teamGuesses: row.teamGuesses,
			individualCorrect: row.individualCorrect,
			individualGuesses: row.individualGuesses
		}
	})

	const liarByTeamBySeason = [...liarByTeamSeason.values()].sort((a, b) => a.season - b.season)
	const awardSeasons = liarByTeamBySeason.map(point => point.season)
	const awardEpisodeCount = episodes.filter(episode => episode.liarOfTheWeek).length

	const winTotals = winRateBySeason.reduce((totals, point) => ({
		played: totals.played + point.total,
		david: totals.david + point.davidWins,
		lee: totals.lee + point.leeWins
	}), { played: 0, david: 0, lee: 0 })
	teams.david.wins = winTotals.david
	teams.lee.wins = winTotals.lee
	teams.david.played = winTotals.played
	teams.lee.played = winTotals.played
	for (const point of cleanSheetsBySeason) {
		teams.david.cleanSheets += point.david
		teams.lee.cleanSheets += point.lee
	}

	const showAverage = percent(showWideWrong, showWideGuesses)
	const bobGuestsFoolRate: BobGuestFoolRatePoint[] = [...bobGuests.entries()]
		.map(([person, guest]) => ({
			person,
			foolRate: percent(guest.wrong, guest.guesses),
			statements: guest.rounds,
			guesses: guest.guesses,
			wrong: guest.wrong,
			isBob: person === 'Bob Mortimer'
		}))
		.sort((a, b) => b.foolRate - a.foolRate || b.statements - a.statements || a.person.localeCompare(b.person))

	const bobVsShowByTruth: BobTruthComparisonPoint[] = (['lie', 'truth'] as const).map(truth => ({
		truth,
		label: truth === 'truth' ? 'Truth' : 'Lie',
		bobRate: percent(bobByTruth[truth].wrong, bobByTruth[truth].guesses),
		bobRounds: bobByTruth[truth].rounds,
		bobGuesses: bobByTruth[truth].guesses,
		bobWrong: bobByTruth[truth].wrong,
		showRate: percent(showWideByTruth[truth].wrong, showWideByTruth[truth].guesses),
		showRounds: showWideByTruth[truth].rounds,
		showGuesses: showWideByTruth[truth].guesses,
		showWrong: showWideByTruth[truth].wrong
	}))

	const bobFoolRateOverTime: BobFoolRateTrendPoint[] = bobTrendData
		.map(point => ({ ...point, showAverage }))
		.sort((a, b) => a.season - b.season || a.episode - b.episode || a.round - b.round)

	bobRounds.sort((a, b) => a.season - b.season || a.episode - b.episode || a.round - b.round)

	const bobPanelReaction: BobPanelReactionPoint[] = (['Unanimous', 'Split'] as const).map(panel => {
		const bucket = bobByPanel[panel.toLowerCase() as 'unanimous' | 'split']
		return {
			panel,
			rounds: bucket.rounds,
			fooled: bucket.fooled,
			caught: bucket.caught,
			foolRate: percent(bucket.fooled, bucket.rounds)
		}
	})

	const bobSummary: BobSummary = {
		rounds: bob.rounds,
		guesses: bob.guesses,
		wrong: bob.wrong,
		foolRate: percent(bob.wrong, bob.guesses),
		showAverage
	}

	const panelConsensus: PanelConsensusPoint[] = (['Unanimous', 'Split'] as const).map(panel => {
		const bucket = panelBuckets[panel.toLowerCase() as 'unanimous' | 'split']
		return {
			panel,
			individualAccuracy: percent(bucket.individualCorrect, bucket.individualGuesses),
			teamAccuracy: percent(bucket.teamCorrect, bucket.rounds),
			individualCorrect: bucket.individualCorrect,
			individualGuesses: bucket.individualGuesses,
			teamCorrect: bucket.teamCorrect,
			rounds: bucket.rounds
		}
	})

	const teamOverride: TeamOverrideSummary = {
		comparableCalls: override.comparableCalls,
		overrides: override.overrides,
		overrideRate: percent(override.overrides, override.comparableCalls),
		overrideCorrect: override.overrideCorrect,
		overrideAccuracy: percent(override.overrideCorrect, override.overrides),
		followCalls: override.followCalls,
		followCorrect: override.followCorrect,
		followAccuracy: percent(override.followCorrect, override.followCalls)
	}

	playerRounds.sort((a, b) =>
		a.season - b.season
		|| a.episode - b.episode
		|| a.round - b.round
		|| a.person.localeCompare(b.person)
		|| a.key.localeCompare(b.key)
	)

	const allSeasons = episodes.map(episode => episode.season)

	return {
		meta: {
			episodeCount: episodes.length,
			compilationCount: episodes.filter(episode => episode.isCompilation).length,
			seasonFrom: Math.min(...allSeasons),
			seasonTo: Math.max(...allSeasons),
			roundCount,
			excludedRounds,
			guessCount,
			awardEpisodeCount,
			awardSeasonFrom: awardSeasons.length > 0 ? Math.min(...awardSeasons) : null,
			awardSeasonTo: awardSeasons.length > 0 ? Math.max(...awardSeasons) : null,
			binaryRoundCount,
			possessionRoundCount
		},
		scoreByEpisode,
		cumulativeDifferenceByEpisode,
		liarAwardTimeline,
		liarByTeamBySeason,
		roundTypeMix,
		winRateBySeason,
		marginBySeason,
		cleanSheetsBySeason,
		lieRateBySeason,
		lieDetectionBySeason,
		truthDetectionBySeason,
		confusionMatrix,
		lieDetectors,
		scepticismByTeam,
		possessionEffect,
		teamVsIndividual,
		accuracyByRoundType,
		roundTypeMixBySeason,
		thisIsMySuccessBySeason,
		truthLieShareByRoundType,
		guestWinRate,
		genderRatesBySeason,
		guestLieProfiles,
		statementLengthDetectionBins,
		statementLengthByTruth,
		bobGuestsFoolRate,
		bobVsShowByTruth,
		bobFoolRateOverTime,
		bobRounds: bobRounds.map(round => ({
			key: round.key,
			label: round.label,
			season: round.season,
			episode: round.episode,
			round: round.round,
			truth: round.truth,
			statement: round.statement,
			call: round.call,
			outcome: round.outcome,
			foolRate: round.foolRate,
			guesses: round.guesses,
			wrong: round.wrong
		})),
		bobPanelReaction,
		bobSummary,
		panelConsensus,
		teamOverride,
		playerRounds: playerRounds.map(cell => ({
			person: cell.person,
			label: cell.label,
			season: cell.season,
			episode: cell.episode,
			round: cell.round,
			outcome: cell.outcome,
			truth: cell.truth,
			call: cell.call
		}))
	}
}
