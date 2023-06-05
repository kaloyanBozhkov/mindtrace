import { ClerkProvider } from '@clerk/nextjs'
import { MantineProvider } from '@mantine/core'

import { type AppType } from 'next/app'

import { useTheme } from 'stores/Theme.store'

import ErrorBoundary from 'components/organisms/ErrorBoundary/ErrorBoundary.organism'
import Header from 'components/organisms/Header/Header.organism'

import MainTemplate from 'components/templates/Main/Main.template'

import { trpcNext } from 'utils/trpcNext'

import 'scss/globals.scss'

const MyApp: AppType = ({ Component, pageProps }) => {
  const theme = useTheme(({ theme }) => theme)

  return (
    <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS theme={theme}>
      <ErrorBoundary>
        <ClerkProvider {...pageProps}>
          <MainTemplate header={<Header />} navbar={<p>ok</p>}>
            <Component {...pageProps} />
          </MainTemplate>
        </ClerkProvider>
      </ErrorBoundary>
    </MantineProvider>
  )
}

export default trpcNext.withTRPC(MyApp)
