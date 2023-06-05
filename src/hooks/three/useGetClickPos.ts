import { useState } from 'react'

import { useThree } from '@react-three/fiber'

const useGetClickPos = () => {
  const [clickCoordinates, setClickCoordinates] = useState({ x: 0, y: 0 }),
    { size } = useThree()

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { clientX, clientY } = event,
      canvasRect = event.currentTarget.getBoundingClientRect(),
      x = ((clientX - canvasRect.left) / size.width) * 2 - 1,
      y = -((clientY - canvasRect.top) / size.height) * 2 + 1

    setClickCoordinates({ x, y })

    console.log('Clicked coordinates:', x, y)
  }

  return { handleClick, clickCoordinates }
}

export default useGetClickPos
