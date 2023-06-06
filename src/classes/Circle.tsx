import { SphereGeometry } from 'three'

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

  calcArea() {
    return Math.PI * Math.pow(this.radius, 2)
  }

  getThreeShape({ onClick }: { onClick?: () => void }) {
    const geometry = new SphereGeometry(this.radius)

    return super.getThreeShape({
      geometry,
      onClick,
    })
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
