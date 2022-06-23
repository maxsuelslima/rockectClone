import type { NextPage } from 'next'
import Banner from '../components/Banner'
import FAQ from '../components/Home/FAQ'
import FifithSection from '../components/Home/FifithSection'
import FirstSection from '../components/Home/FirstSection'
import FourthSection from '../components/Home/FourthSection'
import PaymentSection from '../components/Home/PaymentSection'
import SecondSection from '../components/Home/SecondSection'
import ThirdSection from '../components/Home/ThirdSection'
import VideoSection from '../components/Home/VideoSection'
import WarrantySection from '../components/Home/WarrantySection'

const Home: NextPage = () => {

  return (
    <div>
      <Banner/>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection/>
      <FifithSection/>
      <PaymentSection/>
      <WarrantySection/>
      <VideoSection/>
      <FAQ/>
    </div>
  )
}

export default Home
