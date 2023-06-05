import { type ReactNode } from 'react'

import { Box, type BoxProps, Center, type ContainerProps } from '@mantine/core'

import Spacing from 'components/templates/Spacing/Spacing'

import styles from './styles.module.scss'

const Page = ({
  children,
  drawer,
  contentProps,
  spacingProps,
}: {
  children: ReactNode
  drawer?: ReactNode
  contentProps?: Partial<BoxProps>
  spacingProps?: Partial<ContainerProps>
}) => (
  <Spacing sides="left-right" className={styles.page} {...spacingProps}>
    {drawer && (
      <Center className={styles.nav} id="top">
        <Spacing sides="left-right">{drawer}</Spacing>
      </Center>
    )}
    <Box className={styles.content} {...contentProps}>
      {children}
    </Box>
  </Spacing>
)

export default Page
