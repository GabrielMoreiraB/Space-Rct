import { useState } from 'react'
import './App.css'
import PaginaInicial from './paginas/PaginaInicial'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PaginaInicial/>
    </div>
  )
}

export default App
