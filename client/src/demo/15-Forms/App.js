import React, { useState } from 'react'
import '../../App.css';
import HeaderAstronaut from "./HeaderAstronaut";
import HeaderKnight from "./HeaderKnight";
import HeaderNinja from "./HeaderNinja";
import RadioInput from "./RadioInput";
const KNIGHT = 'knight'
const NINJA = 'ninja'
const ASTRONAUT = 'astronaut'


function App() {
  const [switcher, setSwitcher] = useState(ASTRONAUT);
  return (
    <div className="App">
      <RadioInput title={KNIGHT} checked={switcher === KNIGHT} setSwitcher={setSwitcher} />
      <RadioInput title={NINJA} checked={switcher === NINJA} setSwitcher={setSwitcher} />
      <RadioInput title={ASTRONAUT} checked={switcher === ASTRONAUT} setSwitcher={setSwitcher} />
      {
        switcher === "knight" ? <HeaderKnight /> :
          switcher === "ninja" ? <HeaderNinja /> : <HeaderAstronaut />
      }
    </div>
  );
}

export default App;
