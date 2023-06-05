import { type ReactNode } from 'react'

import { Group } from '@mantine/core'

import styles from './styles.module.scss'

type MainTemplateProps = {
  header: ReactNode
  navbar: ReactNode
  children: ReactNode
}

const MainTemplate = ({ header, children, navbar }: MainTemplateProps) => (
  <div className={styles.mainTemplate}>
    <header>{header}</header>
    <Group className={styles.contentWrapper}>
      <section className={styles.navbar}>{navbar}</section>
      <main>{children}</main>
    </Group>
  </div>
)

export default MainTemplate
