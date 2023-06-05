import { type ReactNode } from 'react'

import { Stack, type StackProps } from '@mantine/core'

import useSlideInChildren from 'hooks/styles/useSlideInChildren'

import { extendClassNameProp } from 'utils/common'

import styles from './styles.module.scss'

const SlideInChildren = ({
  children,
  className,
  ...stackProps
}: { children: ReactNode } & Partial<StackProps>) => {
  const wrapperRef = useSlideInChildren({ children })

  return (
    <Stack
      ref={wrapperRef}
      spacing={0}
      className={extendClassNameProp(styles.slideInChildren!, className)}
      {...stackProps}
    >
      {children}
    </Stack>
  )
}

export default SlideInChildren
