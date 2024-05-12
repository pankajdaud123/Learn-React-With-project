import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '/component/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-yellow-400 text-black p-4 m-10 rounded-xl'>Tailwind</h1>
       <Card  username="pankaj" btnName="click Me "/>
       <hr />
       <Card username="ankita" />
       
     
     
    </>
    
  )
}

export default App
