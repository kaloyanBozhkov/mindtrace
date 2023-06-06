import { RoundedBox } from '@react-three/drei'

import { deg2rad } from 'components/three/utils/common'

import { numInputVal } from 'utils/common'

import Shape, { type IShape } from './Shape'

interface ICircle extends IShape {
  radius: number
}

export default class Circle extends Shape {
  radius: number

  constructor({ radius, ...shapeProps }: ICircle) {
    super(shapeProps)
    this.radius = radius
  }

  getThreeShape({ onClick }: { onClick?: () => void }) {
    const wh = this.radius * 2
    return (
      <RoundedBox
        onClick={onClick}
        args={[wh, wh, wh]}
        radius={this.radius}
        position={[this.x, this.y, 0]}
        material-color={this.color}
      />
    )
  }

  static getInitialFormFields = () => ({
    radius: 0,
    ...Shape.getInitialFormFields(),
  })

  static getFormValidaor = () => ({
    radius: numInputVal('Width', 10, 0.01),
    ...Shape.getFormValidaor(),
  })
}
