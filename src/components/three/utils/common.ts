import { type Camera, Vector3 } from 'three'

export const deg2rad = (deg: number) => deg * (Math.PI / 180)

export const getClickCoords = (camera: Camera, event: React.MouseEvent<HTMLDivElement>) => {
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
