import Shape, { type IShape } from './Shape'

interface IRectangle extends IShape {
  width: number
  height: number
}

export default class Rectangle extends Shape {
  width: number
  height: number

  constructor({ width, height, ...shapeProps }: IRectangle) {
    super(shapeProps)
    this.width = width
    this.height = height
  }
}
