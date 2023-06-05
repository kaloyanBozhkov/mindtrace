import { type ReactNode } from 'react'

import { Box, type BoxProps, type ContainerProps, Stack } from '@mantine/core'

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
  <Stack className={styles.page} {...spacingProps}>
    {drawer && (
      <Spacing sides="left-right" className={styles.nav}>
        {drawer}
      </Spacing>
    )}
    <Box className={styles.content} {...contentProps}>
      {children}
    </Box>
  </Stack>
)

export default Page
