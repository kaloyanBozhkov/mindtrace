import { type NextPage } from 'next'

import LilDrawer from 'components/molecules/LilDrawer/LilDrawer.molecule'

import ThreeMain from 'components/organisms/ThreeMain/ThreeMain.organism'

const Home: NextPage = () => {
  return (
    <>
      <LilDrawer onShapeSelect={(s) => console.log(s)} />
      <ThreeMain />
    </>
  )
}

export default Home
