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

    const [mouseLocation, setMouseLocation] = useState(Math.floor(Math.random() * board.length))

    const [mouseTrapLocation, setMouseTrapLocation] = useState(Math.floor(Math.random() * board.length))

    const [guessCounter, setGuessCounter] = useState(5)

    const [disablePlay, setDisablePlay] = useState(false)

    const playAgain = () => {
      setBoard([
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

      setMouseLocation(Math.floor(Math.random() * board.length))

      setMouseTrapLocation(Math.floor(Math.random() * board.length))

      setGuessCounter(5)

      setDisablePlay(false)
    }

    const handleGameplay = (index) => {
      let updatedBoard = [...board]
    
      if (disablePlay === false) {
        if (mouseLocation === index) {
          updatedBoard[index] = "🐭"
          setDisablePlay(true)
          alert("😸 Congratulations! You found the mouse! Click play again to hunt another mouse.")
        } else if (mouseTrapLocation === index) {
          updatedBoard[index] = "💥"
          setDisablePlay(true)
          alert("🙀 OUCH! You ran into a mousetrap. Click play again for another chance.")
        } else if (guessCounter === 1) {
          updatedBoard[index] = "😾"
          setDisablePlay(true)
          alert("😿 Oh no! The mouse got away! Click play again for another chance.")
        } else {
          updatedBoard[index] = "😾"
        }
        setBoard(updatedBoard)
        setGuessCounter(guessCounter - 1)
      }
    }

  return (
    <>
      <div className="body">
        <h1>Cat and Mouse</h1>
        <br />
        <div className="gameboard">
          {board.map((value, index) =>
            <Square 
            value={value}
            key={index}
            index={index}
            handleGameplay={handleGameplay}
            />
          )}
        </div>
        <p>{`You have ${guessCounter} turns remaining.`}</p>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </>
  )
}

export default App
