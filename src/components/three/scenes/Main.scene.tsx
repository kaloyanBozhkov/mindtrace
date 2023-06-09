import { Fragment, useRef } from 'react'

import { type Group } from 'three'

import { useShapes } from 'stores/Shapes.store'

import useHoverOpacity from 'hooks/three/useHoverOpacity'

const MainScene = () => {
  const { shapes, isDeleting, deleteShape } = useShapes(({ shapes, isDeleting, deleteShape }) => ({
      shapes,
      isDeleting,
      deleteShape,
    })),
    mainSceneRef = useRef<Group | null>(null)

  // animate when hovering for deletion
  useHoverOpacity({ parentRef: mainSceneRef, gate: isDeleting })

  return (
    <group ref={mainSceneRef}>
      {shapes.map((s) => (
        <Fragment key={s.id}>
          {s.getThreeShape({
            onClick: isDeleting ? () => deleteShape(s.id) : undefined,
          })}
        </Fragment>
      ))}
    </group>
  )
}

export default MainScene
