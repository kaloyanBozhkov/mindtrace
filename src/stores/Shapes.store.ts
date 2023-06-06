import { create } from 'zustand'

import { type ShapeNaming } from 'types/common'

import type Circle from 'classes/Circle'
import type Rectangle from 'classes/Rectangle'
import ShapeClass from 'classes/Shape'

import { getCardinalsDirty } from 'components/three/utils/common'

export type Shape = Circle | Rectangle

type ShapesStore = {
  shapes: Shape[]
  // about to be added, but must be configured
  tmpShape: ShapeNaming | null
  isDeleting: boolean
  selectShape: (tmpShape: ShapeNaming | null) => void
  addShape: (shape: Shape) => void
  sortShapes: () => void
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
    set((prev) => {
      // sort by area: big -> small
      const shapes = ShapeClass.sortShapesByArea(prev.shapes),
        cardinals = getCardinalsDirty()

      // canvas disappeared or cameraRef is whack
      if (!cardinals) return prev

      ShapeClass.orderShapes(shapes, cardinals)

      return {
        ...prev,
        shapes,
      }
    }),
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
