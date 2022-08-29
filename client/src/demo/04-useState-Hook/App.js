import React, { useState, useEffect } from 'react'
import '../../App.css';
const randomCount = (num) => { console.log("random"); return Math.floor(Math.random() * num) }
const random = 7;
import Header from "./Header"
export default function App() {
  // const [stateValue, stateSetter] = useState(initialValue)
  // const myNum = randomCount(random)
  const [test, setTest] = useState(() => {
    const initialState = randomCount(random);
    console.log(initialState)
    return initialState;
  })
  const [switcher, setSwitcher] = useState('knight');
  console.log("app render")

  return (
    <div className="App">
      <input type="radio" id="knight" checked={switcher === "knight"} onChange={() => setSwitcher("knight")} />
      <label htmlFor="knight">Knight</label>
      <input type="radio" id="ninja" checked={switcher === "ninja"} onChange={() => setSwitcher("ninja")} />
      <label htmlFor="ninja">Ninja</label>
      <input type="radio" id="astronaut" checked={switcher === "astronaut"} onChange={() => setSwitcher("astronaut")} />
      <label htmlFor="astronaut">Astronaut</label>
      {
        switcher === "knight" ? <Header name="Knight"><h4>Nobility like a mofo.</h4></Header> :
          switcher === "ninja" ? <Header name="Ninja">🥷🏻</Header> : <Header name="Astronaut" >👨🏻‍🚀</Header>
      }
      <h2>{test}</h2>
    </div>
  );
}



// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       switcher: 'knight'
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <input type="radio" id="knight" checked={this.state.switcher === "knight"} onChange={() => this.setState({ switcher: "knight" })} />
//         <label for="knight">Knight</label>
//         <input type="radio" id="ninja" checked={this.state.switcher === "ninja"} onChange={() => this.setState({ switcher: "ninja" })} />
//         <label for="ninja">Ninja</label>
//         <input type="radio" id="astronaut" checked={this.state.switcher === "astronaut"} onChange={() => this.setState({ switcher: "astronaut" })} />
//         <label for="astronaut">Astronaut</label>
//         {
//           this.state.switcher === "knight" ? <Header name="Knight"><h4>Nobility like a mofo.</h4></Header> :
//             this.state.switcher === "ninja" ? <Header name="Ninja">🥷🏻</Header> : <Header name="Astronaut" >👨🏻‍🚀</Header>
//         }
//       </div>
//     )
//   }
// }
