import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)
  // let newArr = [1,2,3]
  // let myObj ={
  //   username : "Ashirwad",
  //   age: 19

  // }

  return (
    <>
      <h1 className='bg-green-400 p-9
       rounded-xl text-black
       mb-4' >TailWind Test</h1>
      {/* <Card channel = "Ashirwad Gupta" someObj= {myObj}/> */}
      <Card Myname = "Ashirwad Gupta" />
      <Card Myname = "Secret" btnText= "I am a Businessman"/>
    </>
  )
}

export default App
