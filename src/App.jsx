import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'

function App() {
 

  return (
    <>
      <h1>Reuseable Button  Component</h1>
     <div><Button style={{backgroundColor:"red",color:"white",padding:"10px",borderRadius:"5px",border:"none",cursor:"pointer"}}>
        redButton
      </Button></div> 
    <div> <Button style={{backgroundColor:"blue",color:"white",padding:"10px",borderRadius:"5px",border:"none",cursor:"pointer"}}>
        blueButton
      </Button></div> 
    </>
  )
}

export default App
