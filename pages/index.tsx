import type { NextPage } from 'next'
import GameCarts from '../components/ui/GameCards'
import Showcase from '../components/ui/Showcase'

const Home: NextPage = () => {
  return (
  <>
  <div>
    <Showcase/>
    <GameCarts/>
  </div>
  </>    
  )
}

export default Home
