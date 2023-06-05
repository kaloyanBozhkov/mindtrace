import { type ReactNode } from 'react'

import styles from './styles.module.scss'

type MainTemplateProps = {
  header: ReactNode
  children: ReactNode
  modifier?: 'with-bg'
}

const MainTemplate = ({ header, children, modifier = 'with-bg' }: MainTemplateProps) => (
  <div className={styles.mainTemplate} data-modifier={modifier}>
    <header>{header}</header>
    <main>{children}</main>
  </div>
)

export default MainTemplate
