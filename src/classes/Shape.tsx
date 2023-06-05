import { Box } from '@react-three/drei'

export type IShape = {
  x: number
  y: number
  color: string
}

export default class Shape {
  x: number
  y: number
  color: string

  constructor({ x, y, color }: IShape) {
    this.x = x
    this.y = y
    this.color = color
  }

  getThreeShape() {
    return <Box material-color="hotpink" />
  }
}
