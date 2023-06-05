export const deg2rad = (deg: number) => deg * (Math.PI / 180)

export const getClickCoords = (
  threeSize: { width: number; height: number },
  event: React.MouseEvent<HTMLDivElement>
) => {
  const { clientX, clientY } = event,
    canvasRect = event.currentTarget.getBoundingClientRect(),
    x = ((clientX - canvasRect.left) / threeSize.width) * 2 - 1,
    y = -((clientY - canvasRect.top) / threeSize.height) * 2 + 1

  return { x, y }
}
