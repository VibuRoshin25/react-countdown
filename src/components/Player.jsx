import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : "Unkown Entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button
          onClick={() => {
            setEnteredPlayerName(playerName.current.value);
            playerName.current.value = "";
          }}
        >
          Set Name
        </button>
      </p>
    </section>
  );
}
