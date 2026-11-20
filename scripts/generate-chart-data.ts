import { createHash } from 'node:crypto'
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { aggregate } from './aggregate.ts'
import { normalizeEpisode } from './normalize.ts'
import type { AnyEpisode } from './normalize.ts'
import type { FlatEpisode } from '../src/chartTypes.ts'

const root = fileURLToPath(new URL('..', import.meta.url))
const dataDir = join(root, 'data')
const outputPath = join(root, 'src', 'generated', 'chartData.ts')

async function sourceFiles(): Promise<string[]> {
	const entries = await readdir(dataDir, { withFileTypes: true })
	const seasonDirs = entries
		.filter(entry => entry.isDirectory() && /^season_\d+$/.test(entry.name))
		.map(entry => entry.name)
		.sort()
	const files: string[] = []
	for (const dir of seasonDirs) {
		const names = (await readdir(join(dataDir, dir)))
			.filter(name => /^\d+_\d+\.ts$/.test(name))
			.sort()
		for (const name of names) files.push(join(dataDir, dir, name))
	}
	return files
}

function isAnyEpisode(value: unknown): value is AnyEpisode {
	if (typeof value !== 'object' || value === null) return false
	const candidate = value as Record<string, unknown>
	return typeof candidate.season === 'number'
		&& typeof candidate.episode === 'number'
		&& typeof candidate.type === 'string'
		&& Array.isArray(candidate.rounds)
		&& typeof candidate.cast === 'object'
		&& candidate.cast !== null
}

const files = await sourceFiles()
const hash = createHash('sha256')
const episodes: FlatEpisode[] = []

for (const file of files) {
	hash.update(await readFile(file))
	const episodeModule = await import(pathToFileURL(file).href) as { default?: unknown }
	const episode = episodeModule.default
	if (!isAnyEpisode(episode)) throw new Error(`Not an episode module: ${file}`)
	episodes.push(normalizeEpisode(episode))
}

episodes.sort((a, b) => a.season - b.season || a.episode - b.episode)
const data = aggregate(episodes)
const sourceHash = hash.digest('hex').slice(0, 12)
const contents = [
	'// GENERATED FILE - do not edit. Run `bun run generate:charts`.',
	`// Source hash: ${sourceHash}`,
	'',
	'import type { ChartData } from \'../chartTypes\'',
	'',
	`export const chartData = ${JSON.stringify(data, null, '\t')} satisfies ChartData`,
	''
].join('\n')

await mkdir(dirname(outputPath), { recursive: true })
await writeFile(outputPath, contents)
console.log(
	`Generated ${outputPath} from ${files.length} episodes `
	+ `(${data.meta.roundCount} rounds, ${data.meta.guessCount} guesses, `
	+ `${data.meta.excludedRounds} excluded)`
)
