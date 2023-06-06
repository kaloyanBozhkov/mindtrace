import { type BufferGeometry, type Mesh } from 'three'

import { type Shape as Shapes } from 'stores/Shapes.store'

import { type getCardinalPoints, getMeshSidePoints } from 'components/three/utils/common'

import { isValidColor, txtInputVal } from 'utils/common'

export type IShape = {
  x: number
  y: number
  color: string
}

export default class Shape {
  x: number
  y: number
  color: string
  id: string
  three: Mesh | null

  constructor({ x, y, color }: IShape) {
    this.x = x
    this.y = y
    this.color = color

    // set after running getThreeShape
    this.id = 'upcoming'
    this.three = null
  }

  sortSelf(left: number, y = 0) {
    this.x = left
    this.y = y
  }

  getThreeShape({ geometry, onClick }: { geometry: BufferGeometry; onClick?: () => void }) {
    return (
      <mesh
        material-color={this.color}
        geometry={geometry}
        position={[this.x, this.y, 0]}
        onClick={onClick}
        ref={(ref) => {
          if (!ref) return
          this.three = ref
          this.id = ref.uuid
        }}
      />
    )
  }

  static getInitialFormFields = () => ({
    color: '',
  })

  static getFormValidaor = () => ({
    color: (v: string) => {
      const issue = txtInputVal('Color', 150, 3)(v)
      if (issue) return issue
      if (!isValidColor(v)) return 'Value is not a valid color'
      return null
    },
  })

  static sortShapesByArea = (shapes: Shapes[]) =>
    [...shapes].sort((a, b) => b.calcArea() - a.calcArea())

  static orderShapes = (
    shapes: Shapes[],
    cardinals: ReturnType<typeof getCardinalPoints>,
    padding = 0.05
  ) => {
    // assume first run will make changes
    let hasChanged = true

    while (hasChanged) {
      hasChanged = false
      let prevObj: Mesh | null = null

      shapes.forEach((s) => {
        const originalCoords = { x: s.x, y: s.y }

        if (!prevObj) {
          if (s.three) {
            const { width, height } = getMeshSidePoints(s.three)
            s.y = cardinals.leftCenter.y + height
            s.x = cardinals.leftCenter.x + width
          }
        } else {
          const { right, halfHeight, halfWidth } = getMeshSidePoints(prevObj),
            paddedRight = right.x + padding
          s.y = right.y + halfHeight
          s.x = paddedRight + halfWidth
          if (s.three) s.three.position.set(paddedRight, right.y, 0)
        }

        prevObj = s.three

        if (originalCoords.x !== s.x || originalCoords.y !== s.y) hasChanged = true
      })
    }
  }
}
