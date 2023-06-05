import { Box } from '@react-three/drei'
import { randomUUID } from 'crypto'

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
    this.id = randomUUID()
  }

  getThreeShape() {
    return <Box material-color="hotpink" />
  }
}
