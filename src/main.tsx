import { createTheme, MantineProvider } from '@mantine/core'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css'
import '@mantine/charts/styles.css'

const theme = createTheme({
	primaryColor: 'violet',
	cursorType: 'pointer'
})

// oxlint-disable-next-line typescript/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MantineProvider defaultColorScheme='dark' theme={theme}>
			<App />
		</MantineProvider>
	</StrictMode>
)
