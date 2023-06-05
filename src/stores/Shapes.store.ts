import { create } from 'zustand'

import { type ShapeNaming } from 'types/common'

import type Circle from 'classes/Circle'
import type Rectangle from 'classes/Rectangle'

type Shape = Circle | Rectangle

type ShapesStore = {
  shapes: Shape[]
  // about to be added, but must be configured
  tmpShape: ShapeNaming | null
  selectShape: (tmpShape: ShapeNaming) => void
  addShape: (shape: Shape) => void
  sortShapes: () => void
}

export const useShapes = create<ShapesStore>((set) => ({
  shapes: [],
  tmpShape: null,
  addShape: (s) =>
    set((prev) => ({
      ...prev,
      shapes: [...prev.shapes, s],
    })),
  selectShape: (tmpShape) =>
    set((prev) => ({
      ...prev,
      tmpShape,
    })),
  sortShapes: () =>
    set((prev) => ({
      ...prev,
    })),
}))
