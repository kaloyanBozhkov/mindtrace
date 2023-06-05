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

  getThreeShape({ onClick }: { onClick?: () => void }) {
    return super.getThreeShape({
      args: [this.width, this.height],
      onClick,
    })
  }

  static getInitialFormFields = () => ({
    width: 0,
    height: 0,
    ...Shape.getInitialFormFields(),
  })

  static getFormValidaor = () => ({
    width: (v: string | number) => {
      if (!v) return 'Width must be set & greater than 0'
      return null
    },
    height: (v: string | number) => {
      if (!v) return 'Height must be set & greater than 0'
      return null
    },
    ...Shape.getFormValidaor(),
  })
}
