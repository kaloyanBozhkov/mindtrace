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
}
