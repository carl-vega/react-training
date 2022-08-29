import React, { useState } from 'react'
import '../../App.css';
import Header from "./Header";
import RadioInput from "./RadioInput";
const titleSwitch = {
  KNIGHT: 'knight',
  NINJA: 'ninja',
  ASTRONAUT: 'astronaut',
}

function App() {
  const { KNIGHT, NINJA, ASTRONAUT } = titleSwitch;
  const [switcher, setSwitcher] = useState(KNIGHT);
  const createRadioList = () => {
    return Object.entries(titleSwitch).map(([_, value]) => (<RadioInput key={value} title={value} checked={switcher === value} setSwitcher={setSwitcher} />))
  }
  const handleSwitch = (switcher) => ({
    [KNIGHT]: <Header name="Knight"><span style={{ fontSize: "100px" }}>♞</span></Header>,
    [NINJA]: <Header name="Ninja"><span style={{ fontSize: "100px" }}>🥷🏻</span></Header>,
    [ASTRONAUT]: <Header name="Astronaut" ><span style={{ fontSize: "100px" }}>👨🏻‍🚀</span></Header>
  })[switcher]
  return (
    <div className="App">
      {createRadioList()}
      {handleSwitch(switcher)}
    </div>
  );
}

export default App;
