import { create } from 'zustand'

type Shape = {}

type ShapesStore = {
  shapes: []
}

const useShapes = create<ShapesStore>((set) => ({}))
