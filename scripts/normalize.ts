import type { FlatCastMember, FlatEpisode, FlatGuess, FlatHedge, FlatRound, Gender, Team, TeamCall, TruthCategory } from '../src/chartTypes.ts'

type NamedGuest = {
	name: string
	gender?: string
}

type TeamCast = {
	david: readonly NamedGuest[]
	lee: readonly NamedGuest[]
}

type AnyCast = {
	david?: TeamCast['david']
	lee?: TeamCast['lee']
	[key: number]: TeamCast | undefined
}

type AnyPersonGuesses = Record<string, string>

type AnyRound = {
	type: string
	statement?: string
	guest?: string
	guessingTeam?: string
	person?: string
	personGuesses?: AnyPersonGuesses | Partial<Record<Team, AnyPersonGuesses>>
	teamGuess?: string | Partial<Record<Team, string>>
	truth?: string
	possession?: true
	episode?: number
}

export type AnyEpisode = {
	type: string
	season: number
	episode: number
	cast: AnyCast
	rounds: readonly AnyRound[]
	score?: readonly [number, number]
	liarOfTheWeek?: string | null
}

const TEAMS: readonly Team[] = ['david', 'lee']
const DUAL_TYPES = new Set(['host', 'ring_of_truth_dual'])
const IGNORED_ANSWERS = new Set(['undecided'])
const isIgnored = (guess: string) => IGNORED_ANSWERS.has(guess)
const isCorrect = (guess: string, truth: string) => guess === truth || guess === 'unknown'
const teamCallOf = (value: string | undefined): TeamCall | null =>
	value === 'truth' || value === 'lie' || value === 'unknown' ? value : null

function firstNestedCast(cast: AnyCast): TeamCast | undefined {
	for (const key of Object.keys(cast)) {
		if (/^\d+$/.test(key)) {
			const nested = cast[Number(key)]
			if (nested) return nested
		}
	}
	return undefined
}

function castForRound(episode: AnyEpisode, round: AnyRound): TeamCast {
	const cast = episode.cast
	if (cast.david && cast.lee) {
		return { david: cast.david, lee: cast.lee }
	}
	const nested = round.episode === undefined ? undefined : cast[round.episode]
	return nested ?? firstNestedCast(cast) ?? { david: [], lee: [] }
}

function teamOf(name: string, cast: TeamCast): Team | null {
	if (name === 'David Mitchell' || cast.david.some(guest => guest.name === name)) return 'david'
	if (name === 'Lee Mack' || cast.lee.some(guest => guest.name === name)) return 'lee'
	return null
}

function normalizeGender(gender: string | undefined): Gender | null {
	return gender === 'male' || gender === 'female' || gender === 'non-binary' ? gender : null
}

function genderOf(name: string, cast: TeamCast): Gender | null {
	for (const team of TEAMS) {
		const guest = cast[team].find(member => member.name === name)
		if (guest) return normalizeGender(guest.gender)
	}
	return null
}

function flatCast(cast: TeamCast): readonly FlatCastMember[] {
	return TEAMS.flatMap(team => cast[team].map(guest => ({
		name: guest.name,
		team,
		gender: normalizeGender(guest.gender)
	})))
}

function normalizeRound(episode: AnyEpisode, round: AnyRound, index: number): FlatRound | null {
	const truth = round.truth
	if (truth === undefined || truth === 'unknown') return null

	const cast = castForRound(episode, round)
	const isCompilation = episode.type === 'compilation'
	const episodeKey = `${episode.season}-${episode.episode}${isCompilation ? 'c' : ''}`
	const truthCategory: TruthCategory = truth === 'truth' || truth === 'lie' ? truth : 'other'
	const guessingTeam = round.guessingTeam === undefined ? null : teamOf(round.guessingTeam, cast)
	const ownerTeam = round.person === undefined ? null : teamOf(round.person, cast)
	const statementOwnerTeam = ownerTeam ?? (guessingTeam ? (guessingTeam === 'david' ? 'lee' : 'david') : null)
	const statementOwner = round.person ?? (round.type === 'this_is_my' ? round.guest ?? null : null)
	const statementOwnerGender = statementOwner ? genderOf(statementOwner, cast) : null
	const guesses: FlatGuess[] = []
	const hedges: FlatHedge[] = []
	const teamCalls: Partial<Record<Team, TeamCall>> = {}
	const teamCorrect: Record<Team, boolean | null> = { david: null, lee: null }
	const isDual = DUAL_TYPES.has(round.type)

	if (isDual) {
		const people = round.personGuesses as Partial<Record<Team, AnyPersonGuesses>> | undefined
		const teams = round.teamGuess as Partial<Record<Team, string>> | undefined
		for (const team of TEAMS) {
			for (const [person, guess] of Object.entries(people?.[team] ?? {})) {
				if (guess === 'undecided') {
					hedges.push({ person, team, kind: 'undecided' })
					continue
				}
				if (guess === 'unknown') hedges.push({ person, team, kind: 'unknown' })
				guesses.push({ person, team, guess, truth, correct: isCorrect(guess, truth) })
			}
			const teamGuess = teams?.[team]
			const call = teamCallOf(teamGuess)
			if (call && teamGuess !== undefined && !isIgnored(teamGuess)) {
				teamCalls[team] = call
				teamCorrect[team] = isCorrect(teamGuess, truth)
			}
		}
	} else {
		const people = round.personGuesses as AnyPersonGuesses | undefined
		for (const [person, guess] of Object.entries(people ?? {})) {
			if (guess === 'undecided') {
				hedges.push({ person, team: teamOf(person, cast) ?? guessingTeam ?? 'david', kind: 'undecided' })
				continue
			}
			const team = teamOf(person, cast) ?? guessingTeam ?? 'david'
			if (guess === 'unknown') hedges.push({ person, team, kind: 'unknown' })
			guesses.push({ person, team, guess, truth, correct: isCorrect(guess, truth) })
		}
		if (guessingTeam && typeof round.teamGuess === 'string' && !isIgnored(round.teamGuess)) {
			const call = teamCallOf(round.teamGuess)
			if (call) {
				teamCalls[guessingTeam] = call
				teamCorrect[guessingTeam] = isCorrect(round.teamGuess, truth)
			}
		}
	}

	const guessers: readonly Team[] = isDual
		? TEAMS
		: guessingTeam
			? [guessingTeam]
			: [...new Set(guesses.map(guess => guess.team))]

	const statement = round.statement
		?? (round.type === 'this_is_my' ? `This is my: ${round.guest ?? 'guest'}` : null)

	return {
		key: `${episodeKey}-${index + 1}`,
		season: episode.season,
		episode: episode.episode,
		isCompilation,
		roundType: round.type,
		statement,
		sourceLabel: `S${episode.season} E${episode.episode}${isCompilation ? 'c' : ''}`,
		truth: truthCategory,
		statementOwner,
		statementOwnerGender,
		statementOwnerTeam,
		guessers,
		possession: round.possession === true,
		guesses,
		hedges,
		teamCalls,
		teamCorrect
	}
}

export function normalizeEpisode(episode: AnyEpisode): FlatEpisode {
	const rounds: FlatRound[] = []
	let excludedRounds = 0
	episode.rounds.forEach((round, index) => {
		const normalized = normalizeRound(episode, round, index)
		if (normalized) rounds.push(normalized)
		else excludedRounds += 1
	})
	return {
		season: episode.season,
		episode: episode.episode,
		isCompilation: episode.type === 'compilation',
		cast: flatCast(castForRound(episode, { type: 'standard' })),
		score: episode.score ?? null,
		liarOfTheWeek: episode.liarOfTheWeek ?? null,
		liarTeam: episode.liarOfTheWeek
			? teamOf(episode.liarOfTheWeek, castForRound(episode, { type: 'standard' }))
			: null,
		excludedRounds,
		rounds
	}
}
