import type { NextPage } from 'next'
import GameCards from '../components/ui/GameCards'
import Showcase from '../components/ui/Showcase'
import StatisticsSection from '../components/ui/StatisticsSection'
import WhyUs from '../components/ui/WhyUs'

const Home: NextPage = () => {
  return (
  <>
  <div>
    <Showcase/>
    <GameCards/>
    <WhyUs/>
    <StatisticsSection/>
  </div>
  </>    
  )
}

export default Home
