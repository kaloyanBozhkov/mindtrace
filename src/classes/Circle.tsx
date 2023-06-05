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
    return super.getThreeShape({
      args: [this.radius * 2, this.radius * 2],
      onClick,
    })
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
