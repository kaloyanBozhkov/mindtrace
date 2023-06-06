import { Suspense, useRef } from 'react'

import { Box as MantineBox } from '@mantine/core'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { VRButton, XR } from '@react-three/xr'
import { type Camera } from 'three'

import { useModal } from 'stores/Modal.store'
import { useShapes } from 'stores/Shapes.store'

import SetupShape from 'components/molecules/SetupShape/SetupShape.molecule'

import LoaderMolecule from 'components/three/molecules/Loader/Loader.molecule'
import MainScene from 'components/three/scenes/Main.scene'
import { deg2rad, getClickCoords } from 'components/three/utils/common'

import styles from './styles.module.scss'

const ThreeMain = () => {
  const { addShape, tmpShape, selectShape } = useShapes(({ addShape, tmpShape, selectShape }) => ({
      addShape,
      tmpShape,
      selectShape,
    })),
    { openModal, closeModal } = useModal(({ controls: { openModal, closeModal } }) => ({
      openModal,
      closeModal,
    })),
    canvasRef = useRef<HTMLCanvasElement | null>(null),
    cameraRef = useRef<Camera | null>(null)

  return (
    <MantineBox className={styles.vrWrapper}>
      <VRButton className={styles.vrButton} />
      <Canvas
        ref={canvasRef}
        style={{ width: '100%' }}
        onCreated={(state) => {
          cameraRef.current = state.camera

          // allow places outside of components to access, without using store for this
          window.cameraRef = cameraRef
        }}
        onClick={(event) => {
          if (!canvasRef.current || !cameraRef.current || !tmpShape) return

          // @TODO move to hook if this grows or is gonna be reused
          const c = getClickCoords(cameraRef.current, event)

          openModal({
            title: 'Setup shape details',
            className: styles.artwrokSelectModal,
            children: (
              <SetupShape
                shapeNaming={tmpShape}
                onCancel={() => {
                  selectShape(null)
                  closeModal()
                }}
                onConfirm={(setup, shapeClass) => {
                  // @TODO type annotate properly so based on shapeNaming the returned type will be inferred
                  // eslint-disable-next-line
                  // @ts-ignore
                  addShape(new shapeClass({ ...setup, ...c }))
                  closeModal()
                }}
              />
            ),
          })
        }}
      >
        <XR>
          <Suspense fallback={<LoaderMolecule />}>
            <MainScene />
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
