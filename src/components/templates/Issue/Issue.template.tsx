import type { ReactNode } from 'react'

import { faFaceFrown } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Stack, Text } from '@mantine/core'

import Link from 'next/link'

import styles from './styles.module.scss'

type IssueProps =
  | { children: ReactNode; message?: never; withoutButton?: boolean }
  | { message: string; children?: never; withoutButton?: boolean }

const Issue = ({ children, message, withoutButton = false }: IssueProps) => {
  return (
    <Stack className={styles.issueWrapper} align="center">
      <FontAwesomeIcon icon={faFaceFrown} />
      <Stack>
        {children}
        {message && <Text className={styles.message}>{message}</Text>}
      </Stack>
      {!withoutButton && (
        <Link href="/" data-naked="true">
          GO back
          {/* <EHButton label="Go Back" modifier="primary" /> */}
        </Link>
      )}
    </Stack>
  )
}

export default Issue
