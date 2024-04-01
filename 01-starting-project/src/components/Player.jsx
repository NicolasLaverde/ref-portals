import { useState, useRef } from 'react'

export default function Player() {
  const playerNameInput = useRef()
  const [enteredPlayerName, setPlayerName] = useState(null)

  const handleClick = () => {
    setPlayerName(playerNameInput.current.value)
  }

  const playerName = enteredPlayerName ?? 'unknown entity'
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input
          ref={playerNameInput}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
