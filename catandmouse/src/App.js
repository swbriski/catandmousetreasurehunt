import "./App.css"
import React, { useState } from 'react'
import Square from './components/Square'

const App = () => {
  const [board, setBoard] = useState([
    "?", 
    "?", 
    "?", 
    "?", 
    "?", 
    "?", 
    "?", 
    "?", 
    "?"
    ])

  return (
    <>
      <div className="body">
        <h1>Cat and Mouse</h1>
        <div className="gameboard">
          {board.map((value, index) =>
            <Square 
            value={value}
            key={index}
            index={index}/>
          )}
        </div>
      </div>
    </>
  )
}

export default App
