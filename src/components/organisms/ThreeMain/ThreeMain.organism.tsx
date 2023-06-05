import { Suspense } from 'react'

import { Box as MantineBox } from '@mantine/core'
import { Box, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { VRButton, XR } from '@react-three/xr'

import LoaderMolecule from 'components/three/molecules/Loader/Loader.molecule'

import { deg2rad } from 'utils/common'

import styles from './styles.module.scss'

const ThreeMain = () => {
  return (
    <MantineBox className={styles.vrWrapper}>
      <VRButton className={styles.vrButton} />
      <Canvas style={{ width: '100%' }}>
        <XR>
          <Suspense fallback={<LoaderMolecule />}>
            <Box material-color="hotpink" />
          </Suspense>
          <OrbitControls
            minDistance={2.5}
            maxDistance={9}
            enablePan={false}
            minAzimuthAngle={deg2rad(-30)}
            maxAzimuthAngle={deg2rad(30)}
            maxPolarAngle={deg2rad(100)}
          />
        </XR>
      </Canvas>
    </MantineBox>
  )
}

export default ThreeMain
