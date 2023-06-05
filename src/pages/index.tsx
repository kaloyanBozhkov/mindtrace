import { type NextPage } from 'next'

import ThreeActions from 'components/organisms/ThreeActions/ThreeActions.organism'
import ThreeMain from 'components/organisms/ThreeMain/ThreeMain.organism'

import Page from 'components/templates/Page/Page.template'

const Home: NextPage = () => {
  return (
    <Page drawer={<ThreeActions />}>
      <ThreeMain />
    </Page>
  )
}

export default Home
