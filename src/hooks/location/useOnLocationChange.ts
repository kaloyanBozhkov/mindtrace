import { useEffect } from 'react'

import { useRouter } from 'next/router'

const useOnLocationChange = ({
  onChange,
  withShallowRouting = false,
  withInitialMountCheck = false,
}: {
  onChange: (url?: string) => void
  withShallowRouting?: boolean
  withInitialMountCheck?: boolean
}) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string, { shallow }: { shallow: boolean }) => {
      if (!withShallowRouting && shallow) return
      onChange(url)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events, onChange, withShallowRouting])

  useEffect(
    () => {
      if (!withInitialMountCheck) return
      onChange(router.pathname)
    },
    // eslint-disable-next-line
    []
  )
}

export default useOnLocationChange
