import { type ReactNode, useEffect, useRef } from 'react'

/** animate child elements to slide in with delay slide in, better than polluting with SCSS loops */
const useSlideInChildren = ({
  delayMS = 200,
  overallDelayMS = 400,
  duration = 200,
  children,
}: {
  delayMS?: number
  overallDelayMS?: number
  duration?: number
  children: ReactNode
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // wait for page transition to end, if any
    const id = setTimeout(() => {
      if (!wrapperRef.current) return
      ;[...wrapperRef.current.children].forEach((c, index) => {
        c.setAttribute(
          'style',
          `animation-name: slide-in-bottom-with-opacity; 
           animation-delay: ${(delayMS * index).toFixed(0)}ms;
           animation-duration: ${duration}ms;
           animation-fill-mode: forwards`
        )
      })
    }, overallDelayMS)

    return () => clearTimeout(id)
  }, [children, overallDelayMS, delayMS, duration])

  return wrapperRef
}

export default useSlideInChildren
