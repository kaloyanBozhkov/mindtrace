import { type ReactNode } from 'react'

import { Box, type BoxProps } from '@mantine/core'

import styles from './styles.module.scss'

const LilBox = ({ children, ...bProps }: { children: ReactNode } & Partial<BoxProps>) => (
  <Box {...bProps} className={styles.lilBox}>
    {children}
  </Box>
)

export default LilBox
