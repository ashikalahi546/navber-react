

import './App.css'
import Axios from './Axios'
import Navber from './Components/Navber'
import LineChart from './LineChart'
import PriceOptions from './PriceOptions'




function App() {
 

  return (
    <>
      <Navber></Navber>
      <PriceOptions></PriceOptions>

  <LineChart></LineChart>
  <Axios></Axios>


    </>
  )
}

export default App
