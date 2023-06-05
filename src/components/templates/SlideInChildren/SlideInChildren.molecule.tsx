import { type ReactNode } from 'react'

import { Stack, type StackProps } from '@mantine/core'

import useSlideInChildren from 'hooks/styles/useSlideInChildren'

import styles from './styles.module.scss'

const SlideInChildren = ({
  children,
  ...stackProps
}: { children: ReactNode } & Partial<StackProps>) => {
  const wrapperRef = useSlideInChildren({ children })

  return (
    <Stack ref={wrapperRef} spacing={0} className={styles.slideInChildren} {...stackProps}>
      {children}
    </Stack>
  )
}

export default SlideInChildren
