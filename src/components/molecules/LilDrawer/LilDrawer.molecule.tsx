import { useState } from 'react'

import { faCircle, faSquareFull } from '@fortawesome/free-regular-svg-icons'
import { Stack } from '@mantine/core'
import { Text } from '@mantine/core'
import { type ShapeNaming } from '@types/common'

import ActionButton from 'components/atoms/ActionButton/ActionButton.atom'

import LilBox from 'components/templates/LilBox/LilBox.template'

import styles from './styles.module.scss'

type ShapeSelect = 'none' | ShapeNaming

const LilDrawer = ({ onShapeSelect }: { onShapeSelect: (shape: ShapeNaming) => void }) => {
  const [shape, setShape] = useState<ShapeSelect>('none')

  return (
    <LilBox>
      <Stack className={styles.lilDrawer} data-shape={shape}>
        <Text weight="600" align="center">
          Click shape to add:
        </Text>
        <ActionButton
          label="Circle"
          leftFontAwesomeIcon={faCircle}
          onClick={() => onShapeSelect('circle')}
          onMouseEnter={() => setShape('circle')}
          onMouseLeave={() => setShape('none')}
        />
        <ActionButton
          label="Rectangle"
          leftFontAwesomeIcon={faSquareFull}
          onClick={() => onShapeSelect('rectangle')}
          onMouseEnter={() => setShape('rectangle')}
          onMouseLeave={() => setShape('none')}
        />
      </Stack>
    </LilBox>
  )
}

export default LilDrawer
