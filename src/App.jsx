
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './Components/Navber/Navber'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
