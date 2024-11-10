import { useState } from 'react'
import './App.css'


function App() {

  const [bgColor, setBgColor] = useState("white")

  const colorChange = (color) => {
    setBgColor(color)

  }

  return (
    <>
      <div style={{ backgroundColor: bgColor, height: '100vh', width: '100vw' }}>
        <h1 style={{  padding: '50px' , color:'orange'}}>Change Background Color</h1>
        <div style={{display:'flex'}}>
          <div><button onClick={() => colorChange('red')} id='btn1'>Red</button></div>        
          <div><button onClick={() => colorChange('green')} id='btn2'>Green</button></div>
          <div><button onClick={() => colorChange('blue')} id='btn3'>Blue</button></div>
        </div>
      </div>
    </>
  )
}

export default App
