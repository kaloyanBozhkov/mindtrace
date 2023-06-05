import { faShapes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Stack, Text } from '@mantine/core'

import { useShapes } from 'stores/Shapes.store'

import ActionButton from 'components/atoms/ActionButton/ActionButton.atom'

import LilDrawer from 'components/molecules/LilDrawer/LilDrawer.molecule'

import LilBox from 'components/templates/LilBox/LilBox.template'
import SlideInChildren from 'components/templates/SlideInChildren/SlideInChildren.molecule'

import styles from './styles.module.scss'

const ThreeActions = () => {
  const { selectShape, noShapes, sortShapes, selectActive } = useShapes(
    ({ selectShape, shapes, sortShapes, tmpShape }) => ({
      selectShape,
      noShapes: shapes.length === 0,
      sortShapes,
      selectActive: Boolean(tmpShape),
    })
  )

  return (
    <SlideInChildren spacing="sm" className={styles.wrapper} data-select-active={selectActive}>
      <LilDrawer onShapeSelect={selectShape} />
      <LilBox mt="lg">
        <Stack spacing="xs">
          <Text align="center" weight="600">
            Actions
          </Text>
          <ActionButton
            label="Sort shapes"
            leftFontAwesomeIcon={faShapes}
            w="100%"
            disabled={noShapes}
            onClick={sortShapes}
          />
        </Stack>
      </LilBox>
      <LilBox>
        <Stack spacing="xs">
          <Text align="center" weight="600">
            Danger zone
          </Text>
          <ActionButton
            label="Remove shape"
            leftFontAwesomeIcon={faTrash}
            w="100%"
            disabled={noShapes}
          />
        </Stack>
      </LilBox>
    </SlideInChildren>
  )
}

export default ThreeActions