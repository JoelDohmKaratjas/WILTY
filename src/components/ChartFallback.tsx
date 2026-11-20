import { Center, Loader } from '@mantine/core'

type ChartFallbackProps = {
	height?: number
}

export default function ChartFallback({ height = 300 }: ChartFallbackProps) {
	return (
		<Center h={height}>
			<Loader size='sm' />
		</Center>
	)
}
