import { type ReactNode } from 'react'

import { Container, type ContainerProps } from '@mantine/core'

import { extendClassNameProp } from 'utils/common'

import styles from './styles.module.scss'

const Spacing = ({
  children,
  className,
  sides = 'all',
  ...props
}: {
  children: ReactNode
  sides?: 'all' | 'left-right'
  className?: string
} & Partial<ContainerProps>) => (
  <Container
    fluid
    data-sides={sides}
    className={extendClassNameProp(styles.spacing as string, className)}
    {...props}
  >
    {children}
  </Container>
)

export default Spacing
