import { type Shape } from 'stores/Shapes.store'

const MainScene = ({ shapes }: { shapes: Shape[] }) => {
  return <>{shapes.map((s) => s.getThreeShape())}</>
}

export default MainScene
