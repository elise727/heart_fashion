import React, {useEffect, useState} from 'react'
import HomeDetails from '../components/Home-Components/HomeDetails'
import About from '../components/About'
import Contact from '../components/Contact'
import PopularDesign from '../components/PopularDesign'
import ClimbingBoxLoader from "react-spinners/ClipLoader";
import Footer from '../components/Footer'
function Home() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, []);
  return (
      <div>
      {
          loading  ? 
          <div className='container center'>
          <ClimbingBoxLoader
          color={'#F5A623'} 
          loading={loading} 
        //   css={override} 
          size={30} />
          </div>

          :

          <div className='home'>
        <HomeDetails />
        <About />
        <PopularDesign />
        <Contact />
        <Footer />
      </div>

      }
      </div>
  )
}

export default Home