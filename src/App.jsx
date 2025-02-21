import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Loginform from './Components/Loginform'
import BookDetails from './Components/BookDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BookDetails/>
  )
}

export default App
