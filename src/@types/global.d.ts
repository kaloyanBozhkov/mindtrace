import { type MutableRefObject } from 'react'

import { type Camera } from 'three'

declare global {
  interface Window {
    cameraRef: MutableRefObject<Camera | null>
  }
}
