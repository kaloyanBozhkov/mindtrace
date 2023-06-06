import { Box } from '@react-three/drei'
import { generateUUID } from 'three/src/math/MathUtils'

import { deg2rad } from 'components/three/utils/common'

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
    args?: [width?: number, height?: number, depth?: number]
    onClick?: () => void
  }) {
    return (
      <Box
        material-color={this.color}
        args={args}
        position={[this.x, this.y, 0]}
        onClick={onClick}
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
}
