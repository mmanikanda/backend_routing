import { useState } from 'react'

import './App.css'
import UserForm from '../Useform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <UserForm/>

    </>
  )
}

export default App
