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

      for (let i = 0; i < shapes.length; i++) {
        const s = shapes[i]!,
          originalCoords = { x: s.x, y: s.y }

        if (!s.three) {
          console.warn('Tried running orderShapes without having initialized them properly')
          hasChanged = false
          break
        }

        if (!prevObj) {
          const { width, height } = getMeshSidePoints(s.three)
          s.y = cardinals.leftCenter.y + width
          s.x = cardinals.leftCenter.x + height
        } else {
          const biggest = shapes[0]!,
            { right, halfWidth: prevHalfW } = getMeshSidePoints(prevObj),
            { halfWidth: halfW } = getMeshSidePoints(s.three),
            paddedRight = right.x + prevHalfW + padding + halfW

          // position Y of each ordered shape based on biggest one's Y
          s.y = biggest.y
          s.x = paddedRight
        }

        s.three.position.set(s.x, s.y, 0)
        prevObj = s.three

        if (originalCoords.x !== s.x || originalCoords.y !== s.y) hasChanged = true
      }
    }
  }
}
