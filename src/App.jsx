import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HomePage from './components/Homepage'
import EmployeeList from './components/EmployeeList'
import EmployeePage from './components/EmployeePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='row'>
      <section className='columnSection'><HomePage /> </section>
      <section className='columnSection'><EmployeePage /></section>
    </div>
  )
}

export default App
