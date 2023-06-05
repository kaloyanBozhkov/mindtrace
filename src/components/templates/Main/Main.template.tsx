import { type ReactNode } from 'react'

import styles from './styles.module.scss'

type MainTemplateProps = {
  header: ReactNode
  children: ReactNode
  modifier?: 'with-bg'
  modal: ReactNode
}

const MainTemplate = ({ header, children, modal, modifier = 'with-bg' }: MainTemplateProps) => (
  <div className={styles.mainTemplate} data-modifier={modifier}>
    <header>{header}</header>
    <main>{children}</main>
    {modal && <section className={styles.modal}>{modal}</section>}
  </div>
)

export default MainTemplate
