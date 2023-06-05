import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Group, Text } from '@mantine/core'

const Logo = () => {
  return (
    <Group spacing="sm">
      <FontAwesomeIcon icon={faBrain} size="xl" />
      <Text size="lg" weight="600">
        Mindtrace.ai
      </Text>
    </Group>
  )
}

export default Logo
