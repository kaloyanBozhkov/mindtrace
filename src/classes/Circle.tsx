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

  static getInitialFormFields() {
    return {
      radius: 0,
      ...Shape.getInitialFormFields(),
    }
  }

  static getFormValidaor() {
    return {
      radius: (v: string | number) => {
        if (!v) return 'Radius must be greater than 0'
        return null
      },
      ...Shape.getFormValidaor(),
    }
  }
}
