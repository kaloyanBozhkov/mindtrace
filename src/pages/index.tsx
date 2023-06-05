import { faShapes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Stack } from '@mantine/core'

import { type NextPage } from 'next'

import { useShapes } from 'stores/Shapes.store'

import ActionButton from 'components/atoms/ActionButton/ActionButton.atom'

import LilDrawer from 'components/molecules/LilDrawer/LilDrawer.molecule'

import ThreeMain from 'components/organisms/ThreeMain/ThreeMain.organism'

import Page from 'components/templates/Page/Page.template'
import SlideInChildren from 'components/templates/SlideInChildren/SlideInChildren.molecule'

const Home: NextPage = () => {
  const selectShape = useShapes(({ selectShape }) => selectShape)

  return (
    <Page
      drawer={
        // @TODO if this grows, move to organism
        <SlideInChildren spacing="sm">
          <LilDrawer onShapeSelect={selectShape} />
          <ActionButton label="Sort shapes" leftFontAwesomeIcon={faShapes} mt="lg" />
          <ActionButton label="Remove shape" leftFontAwesomeIcon={faTrash} />
        </SlideInChildren>
      }
    >
      <ThreeMain />
    </Page>
  )
}

export default Home
