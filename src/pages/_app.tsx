import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { config } from '@fortawesome/fontawesome-svg-core'
import { MantineProvider, Modal } from '@mantine/core'

import { type AppType } from 'next/app'
import Head from 'next/head'

import { useModal } from 'stores/Modal.store'
import { useTheme } from 'stores/Theme.store'

import useOnLocationChange from 'hooks/location/useOnLocationChange'

import ErrorBoundary from 'components/organisms/ErrorBoundary/ErrorBoundary.organism'
import Header from 'components/organisms/Header/Header.organism'

import MainTemplate from 'components/templates/Main/Main.template'
import Spacing from 'components/templates/Spacing/Spacing'

import { trpcNext } from 'utils/trpcNext'

import 'scss/globals.scss'

import '@fortawesome/fontawesome-svg-core/styles.css'

// fix fontawesome initial render icon size --> @TODO find better fix
config.autoAddCss = false

const MyApp: AppType = ({ Component, pageProps }) => {
  const theme = useTheme(({ theme }) => theme),
    modalProps = useModal((store) => store.modalProps),
    closeModal = useModal((s) => s.controls.closeModal)

  useOnLocationChange({
    onChange: () => {
      if (modalProps.opened) closeModal()
    },
  })

  return (
    <>
      <Head>
        <title>Mindtrace</title>
        <meta name="description" content="Mindtrace app by Koko" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS theme={theme}>
        <ErrorBoundary>
          <ClerkProvider
            {...pageProps}
            appearance={{
              baseTheme: dark,
            }}
          >
            <MainTemplate
              header={
                <Spacing sides="left-right">
                  <Header />
                </Spacing>
              }
              modal={<Modal {...modalProps} onClose={closeModal} centered lockScroll />}
            >
              <Component {...pageProps} />
            </MainTemplate>
          </ClerkProvider>
        </ErrorBoundary>
      </MantineProvider>
    </>
  )
}

export default trpcNext.withTRPC(MyApp)
