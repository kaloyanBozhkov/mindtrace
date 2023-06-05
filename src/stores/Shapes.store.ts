import { create } from 'zustand'

import { type ShapeNaming } from 'types/common'

import type Circle from 'classes/Circle'
import type Rectangle from 'classes/Rectangle'

export type Shape = Circle | Rectangle

type ShapesStore = {
  shapes: Shape[]
  // about to be added, but must be configured
  tmpShape: ShapeNaming | null
  selectShape: (tmpShape: ShapeNaming | null) => void
  addShape: (shape: Shape) => void
  sortShapes: () => void
  isDeleting: boolean
  toggleDeleteMode: () => void
  deleteShape: (shapeId: string) => void
}

export const useShapes = create<ShapesStore>((set) => ({
  shapes: [],
  tmpShape: null,
  isDeleting: false,
  addShape: (s) =>
    set((prev) => ({
      ...prev,
      shapes: [...prev.shapes, s],
      tmpShape: null,
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
  deleteShape: (shapeId) =>
    set((prev) => ({
      ...prev,
      isDeleting: false,
      shapes: prev.shapes.filter((s) => s.id !== shapeId),
    })),
  toggleDeleteMode: () =>
    set((prev) => ({
      ...prev,
      isDeleting: !prev.isDeleting,
    })),
}))
