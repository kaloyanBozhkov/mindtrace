import { useState } from 'react'

import { faBars, faShapes, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Stack, Text } from '@mantine/core'

import { useShapes } from 'stores/Shapes.store'

import ActionButton from 'components/atoms/ActionButton/ActionButton.atom'

import LilDrawer from 'components/molecules/LilDrawer/LilDrawer.molecule'

import LilBox from 'components/templates/LilBox/LilBox.template'
import SlideInChildren from 'components/templates/SlideInChildren/SlideInChildren.molecule'

import styles from './styles.module.scss'

const ThreeActions = () => {
  const { selectShape, noShapes, sortShapes, selectActive, toggleDeleteMode, isDeleting } =
      useShapes(({ selectShape, shapes, sortShapes, tmpShape, isDeleting, toggleDeleteMode }) => ({
        toggleDeleteMode,
        selectShape,
        sortShapes,
        selectActive: Boolean(tmpShape),
        noShapes: shapes.length === 0,
        isDeleting,
      })),
    [showing, setShowing] = useState(true)

  return (
    <Stack spacing="sm" className={styles.wrapper} data-hide={selectActive || !showing}>
      <SlideInChildren spacing="sm" className={styles.main}>
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
              w="100%"
              label={isDeleting ? 'Abort removal' : 'Remove shape'}
              leftFontAwesomeIcon={faTrash}
              disabled={noShapes}
              onClick={toggleDeleteMode}
              modifier={isDeleting ? 'secondary' : 'primary'}
            />
          </Stack>
        </LilBox>
      </SlideInChildren>
      <Stack mt="lg" spacing="xs" className={styles.actions} data-select-active={selectActive}>
        <ActionButton
          leftFontAwesomeIcon={showing ? faXmark : faBars}
          modifier="icon"
          size="lg"
          onClick={() => setShowing((prev) => !prev)}
        />
        <Text size="xs">{showing ? 'Hide' : 'Show'} menu</Text>
      </Stack>
    </Stack>
  )
}

export default ThreeActions
