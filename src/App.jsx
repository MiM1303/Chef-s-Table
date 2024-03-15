import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Recipes from './components/Recipes/Recipes'
import Foods from './components/Foods/Foods'

function App() {

  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>

      <div className='text-center'>
        <h2 className='text-[#150B2B] text-[40px] font-semibold'>Our Recipes</h2>
        <p className='mb-12 mt-6 w-2/3 mx-auto text-[#150B2B99] font-normal text-base'>Embark on a flavorful journey through our extensive collection of diverse recipes. From classic comfort foods to exotic culinary delights, discover endless inspiration for every palate and occasion.</p>
      </div>
      
      <div className='flex gap-6'>
        <Recipes></Recipes>
        <Foods></Foods>
      </div>

    </>
  )
}

export default App
