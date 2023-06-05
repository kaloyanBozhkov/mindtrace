import { UserButton } from '@clerk/nextjs'
import { Group } from '@mantine/core'

import Link from 'next/link'

import Logo from 'components/atoms/Logo/Logo.atom'

import styles from './styles.module.scss'

const Header = () => {
  return (
    <Group className={styles.header} position="apart">
      <Link href="/" data-naked="true">
        <Logo />
      </Link>
      <UserButton />
    </Group>
  )
}

export default Header
