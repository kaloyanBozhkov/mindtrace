import { Center, type CenterProps, Loader } from '@mantine/core'

import styles from './styles.module.scss'

export type LoadingProps = {
  message?: string
  modifier?: 'main' | 'generic'
  position?: 'center' | 'right' | 'left'
  size?: 'xs'
}

const Loading = ({
  message = 'Loading..',
  modifier = 'generic',
  position = 'center',
  size,
  ...centerProps
}: LoadingProps & Partial<CenterProps>) => (
  <Center
    className={styles.loading}
    data-modifier={modifier}
    data-position={position}
    data-size={size}
    {...centerProps}
  >
    <Loader className={styles.spinner} />
    {message && <p>{message}</p>}
  </Center>
)

export default Loading
