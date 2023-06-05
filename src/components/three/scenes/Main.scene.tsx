import { Fragment } from 'react'

import { type Shape } from 'stores/Shapes.store'

const MainScene = ({
  shapes,
  onDeleteShape,
}: {
  shapes: Shape[]
  onDeleteShape?: (shapeId: string) => void
}) => {
  return (
    <>
      {shapes.map((s) => (
        <Fragment key={s.id}>{s.getThreeShape({ onClick: () => onDeleteShape?.(s.id) })}</Fragment>
      ))}
    </>
  )
}

export default MainScene
