import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './Head'
import Location from './Location'
import Search from './Search'
import Carasoul from './Carasoul'
import Categories from './Categories'
import Selector from './Selector'
import PrevOrder from './PrevOrder'
import Caption from './Caption'
import ItemCard from './ItemCard'
import ItemCatalog from './ItemCatalog'
import TopBrands from './TopBrand'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='bg-black h-screen w-screen'>
      <Head/>
      {/* <div className='flex flex-col overflow-y-scroll'> */}

      <Location/>
      <Search/>
      <Carasoul/>
      <Categories/>
      <PrevOrder/>
      {/* </div> */}
      {/* <ItemCard/>
       */}
       <ItemCatalog/>
       <TopBrands/>
      <Caption/>
      <Selector/>
   </div>
    </>
  )
}

export default App
