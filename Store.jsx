
import Featured from '../components/Featured/Featured'
import Arrivals from '../components/arrivals/Arrivals'
import NewCollections from '../components/collection/NewCollection'
import Home from '../components/home/Home'
import Footer from'../components/footer/footer'


const Store = () => {
  return (
    <div>
      <Home/>
      <Arrivals/>
      <Featured/>
      <NewCollections/>
      <Footer/>
    </div>
  )
}

export default Store