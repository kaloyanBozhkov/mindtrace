import { type MutableRefObject } from 'react'

import { useFrame } from '@react-three/fiber'
import { type Group, type Material, type Mesh } from 'three'

const useHoverOpacity = ({
  parentRef,
  gate = true,
  opacityEnd = 0.4,
}: {
  parentRef: MutableRefObject<Group | null>
  gate?: boolean
  opacityEnd?: number
}) => {
  useFrame(({ raycaster }) => {
    if (!parentRef.current || !gate) return

    // reset anim
    parentRef.current.children.forEach((c) => {
      const mat = (c as Mesh).material as Material,
        toUpdate = mat.opacity !== 1

      mat.opacity = 1
      mat.needsUpdate = toUpdate
    })

    const intersects = raycaster.intersectObjects(parentRef.current.children)

    // apply anim
    if (intersects.length > 0) {
      intersects.forEach((intersection) => {
        const mat = (intersection.object as Mesh).material as Material
        // @TODO add react three spring to animate
        mat.opacity = opacityEnd
        mat.needsUpdate = true
        mat.transparent = true
      })
    }
  })
}

export default useHoverOpacity
