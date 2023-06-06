import { type BufferGeometry, type Mesh } from 'three'

import { isValidColor, txtInputVal } from 'utils/common'

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
  three: Mesh | null

  constructor({ x, y, color }: IShape) {
    this.x = x
    this.y = y
    this.color = color

    // set after running getThreeShape
    this.id = 'upcoming'
    this.three = null
  }

  getThreeShape({ geometry, onClick }: { geometry: BufferGeometry; onClick?: () => void }) {
    return (
      <mesh
        material-color={this.color}
        geometry={geometry}
        position={[this.x, this.y, 0]}
        onClick={onClick}
        ref={(ref) => {
          if (!ref) return
          this.three = ref
          this.id = ref.uuid
        }}
      />
    )
  }

  static getInitialFormFields = () => ({
    color: '',
  })

  static getFormValidaor = () => ({
    color: (v: string) => {
      const issue = txtInputVal('Color', 150, 3)(v)
      if (issue) return issue
      if (!isValidColor(v)) return 'Value is not a valid color'
      return null
    },
  })
}
