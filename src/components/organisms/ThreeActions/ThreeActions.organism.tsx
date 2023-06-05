import { faShapes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Stack, Text } from '@mantine/core'

import { useShapes } from 'stores/Shapes.store'

import ActionButton from 'components/atoms/ActionButton/ActionButton.atom'

import LilDrawer from 'components/molecules/LilDrawer/LilDrawer.molecule'

import LilBox from 'components/templates/LilBox/LilBox.template'
import SlideInChildren from 'components/templates/SlideInChildren/SlideInChildren.molecule'

const ThreeActions = () => {
  const { selectShape, noShapes, sortShapes, tmpShape } = useShapes(
    ({ selectShape, shapes, sortShapes, tmpShape }) => ({
      selectShape,
      noShapes: shapes.length === 0,
      sortShapes,
      tmpShape,
    })
  )

  return (
    <SlideInChildren spacing="sm">
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
