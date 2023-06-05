import { RoundedBox } from '@react-three/drei'

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
        args={[wh, wh]}
        radius={this.radius}
        material-color={this.color}
      />
    )
  }

  static getInitialFormFields = () => ({
    radius: 0,
    ...Shape.getInitialFormFields(),
  })

  static getFormValidaor = () => ({
    radius: (v: string | number) => {
      if (!v) return 'Radius must be greater than 0'
      return null
    },
    ...Shape.getFormValidaor(),
  })
}
