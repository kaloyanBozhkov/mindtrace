import { type MouseEvent } from 'react'

import { Box3, type Camera, type Mesh, SphereGeometry, Vector3 } from 'three'

export const deg2rad = (deg: number) => deg * (Math.PI / 180)

export const getClickCoords = (camera: Camera, event: MouseEvent<HTMLDivElement>) => {
  const canvasBounds = event.currentTarget.getBoundingClientRect(),
    x = ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1,
    y = -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1,
    mousePosition = new Vector3(x, y, 0.5)
  mousePosition.unproject(camera)

  const direction = mousePosition.sub(camera.position).normalize(),
    distance = -camera.position.z / direction.z,
    position = camera.position.clone().add(direction.multiplyScalar(distance))

  return position
}

export const getCardinalPoints = (camera: Camera, canvas: HTMLDivElement) => {
  const canvasBounds = canvas.getBoundingClientRect()
  const centerX =
    (((canvasBounds.left + canvasBounds.right) / 2 - canvasBounds.left) / canvasBounds.width) * 2 -
    1
  const centerY =
    (((canvasBounds.top + canvasBounds.bottom) / 2 - canvasBounds.top) / canvasBounds.height) * -2 +
    1

  const topCenter = getClickCoords(camera, {
    currentTarget: canvas,
    clientX: canvasBounds.left + canvasBounds.width / 2,
    clientY: canvasBounds.top,
  } as MouseEvent<HTMLDivElement>)

  const bottomCenter = getClickCoords(camera, {
    currentTarget: canvas,
    clientX: canvasBounds.left + canvasBounds.width / 2,
    clientY: canvasBounds.bottom,
  } as MouseEvent<HTMLDivElement>)

  const rightCenter = getClickCoords(camera, {
    currentTarget: canvas,
    clientX: canvasBounds.right,
    clientY: canvasBounds.top + canvasBounds.height / 2,
  } as MouseEvent<HTMLDivElement>)

  const leftCenter = getClickCoords(camera, {
    currentTarget: canvas,
    clientX: canvasBounds.left,
    clientY: canvasBounds.top + canvasBounds.height / 2,
  } as MouseEvent<HTMLDivElement>)

  return {
    topCenter,
    bottomCenter,
    rightCenter,
    leftCenter,
    center: new Vector3(centerX, centerY, 0),
  }
}

export const getCardinalsDirty = () => {
  const canvas = document.querySelector('canvas')
  if (!canvas || !window.cameraRef.current) return null
  const cardinals = getCardinalPoints(window.cameraRef.current, canvas as unknown as HTMLDivElement)
  return cardinals
}

export const getMeshSidePoints = (m: Mesh) => {
  const box = new Box3().setFromObject(m)

  const width = box.max.x - box.min.x
  const height = box.max.y - box.min.y
  const halfWidth = width / 2
  const halfHeight = height / 2

  const center = box.getCenter(new Vector3())

  const left = new Vector3(box.min.x, center.y, 0)
  const right = new Vector3(box.max.x, center.y, 0)
  const top = new Vector3(center.x, box.max.y, 0)
  const bottom = new Vector3(center.x, box.min.y, 0)

  return {
    left: { x: left.x, y: left.y },
    right: { x: right.x, y: right.y },
    top: { x: top.x, y: top.y },
    bottom: { x: bottom.x, y: bottom.y },
    width,
    height,
    halfWidth,
    halfHeight,
  }
}
