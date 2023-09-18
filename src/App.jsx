
// import DaisyNav from './components/DaisyNav/DaisyNav'

import LineChart from "./components/LineChart/LineChart"
import Navbar from "./components/Navbar/Navbar"
import Phones from "./components/Phones/Phones"
import PriceOptions from "./components/PriceOptions/PriceOptions"


function App() {
  

  return (
    <>
     {/* <DaisyNav></DaisyNav> */}
     <Navbar></Navbar>
     <PriceOptions></PriceOptions>
     <LineChart></LineChart>
     <Phones></Phones>
    </>
  )
}

export default App
