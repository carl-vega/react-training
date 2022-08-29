import React, { useState } from 'react'
import '../../App.css';
import Header from "./Header";
import RadioInput from "./RadioInput";
const KNIGHT = 'knight'
const NINJA = 'ninja'
const ASTRONAUT = 'astronaut'


function App() {
  const [switcher, setSwitcher] = useState(KNIGHT);

  return (
    <div className="App">
      <RadioInput title={KNIGHT} checked={switcher === KNIGHT} setSwitcher={setSwitcher} />
      <RadioInput title={NINJA} checked={switcher === NINJA} setSwitcher={setSwitcher} />
      <RadioInput title={ASTRONAUT} checked={switcher === ASTRONAUT} setSwitcher={setSwitcher} />
      {
        switcher === "knight" ? <Header name="Knight"><span style={{ fontSize: "100px" }}>♞</span></Header> :
          switcher === "ninja" ? <Header name="Ninja"><span style={{ fontSize: "100px" }}>🥷🏻</span></Header> : <Header name="Astronaut" ><span style={{ fontSize: "100px" }}>👨🏻‍🚀</span></Header>
      }
    </div>
  );
}

export default App;
