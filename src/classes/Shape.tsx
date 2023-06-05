import { Box } from '@react-three/drei'
import { type BoxGeometry } from 'three'
import { generateUUID } from 'three/src/math/MathUtils'

import { isValidColor } from 'utils/common'

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

  constructor({ x, y, color }: IShape) {
    this.x = x
    this.y = y
    this.color = color
    this.id = generateUUID()
  }

  getThreeShape({
    args,
    onClick,
  }: {
    args?: [
      width?: number,
      height?: number,
      depth?: number,
      widthSegments?: number,
      heightSegments?: number,
      depthSegments?: number
    ]
    onClick?: () => void
  }) {
    // @TODO if shapes grow, change this
    return (
      <Box
        material-color={this.color}
        args={args}
        position={[this.x, this.y, 0]}
        onClick={onClick}
      />
    )
  }

  static getInitialFormFields() {
    return {
      color: '',
    }
  }

  static getFormValidaor() {
    return {
      color: (v: string) => {
        if (!v.trim()) return 'Color must be set'
        if (!isValidColor(v)) return 'Value is not a valid color'
        return null
      },
    }
  }
}
