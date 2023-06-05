import { useEffect, useRef, useState } from 'react'

import Loading from 'components/molecules/Loading/Loading.molecule'

import { Html, useProgress } from '@react-three/drei'

const LoaderMolecule = () => {
  const { progress } = useProgress(),
    [perc, setPerc] = useState('0'),
    maxed = useRef(false)

  useEffect(() => {
    maxed.current = maxed.current || progress > 99
    setPerc((maxed.current ? 100 : progress).toFixed(2))
  }, [progress])

  return (
    <Html center style={{ width: '100%', height: '100%', transform: 'none' }}>
      <Loading message={`Loading ${perc}%`} />
    </Html>
  )
}

export default LoaderMolecule
