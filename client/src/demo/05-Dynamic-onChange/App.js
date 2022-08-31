import React, { useState } from 'react'
import '../../App.css';
import Header from "./Header";
import RadioInput from "./RadioInput";
const KNIGHT = 'knight'
const NINJA = 'ninja'
const ASTRONAUT = 'astronaut'


function App() {
  const [switcher, setSwitcher] = useState({
    [KNIGHT]: true,
    [NINJA]: false,
    [ASTRONAUT]: false
  });
  const [currentSelection, setCurrentSelection] = useState(KNIGHT)
  const handleInputSwitch = (title) => {
    setSwitcher(prevSelection => ({ ...prevSelection, [currentSelection]: false, [title]: true }))
    setCurrentSelection(title)
  }

  return (
    <div className="App">
      <RadioInput title={KNIGHT} checked={switcher[KNIGHT]} handleChange={handleInputSwitch} />
      <RadioInput title={NINJA} checked={switcher[NINJA]} handleChange={handleInputSwitch} />
      <RadioInput title={ASTRONAUT} checked={switcher[ASTRONAUT]} handleChange={handleInputSwitch} />
      {
        switcher[KNIGHT] ? <Header name="Knight"><span style={{ fontSize: "100px" }}>♞</span></Header> :
          switcher[NINJA] ? <Header name="Ninja"><span style={{ fontSize: "100px" }}>🥷🏻</span></Header> : <Header name="Astronaut" ><span style={{ fontSize: "100px" }}>👨🏻‍🚀</span></Header>
      }
    </div>
  );
}

export default App;
