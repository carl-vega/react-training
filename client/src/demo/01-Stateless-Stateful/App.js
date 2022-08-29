import '../../App.css';

export default function App() {
  const headerName = "Knight";
  const headerElement = <h1>I am {headerName}, doing {headerName} things.</h1>;

  return (
    <div className="App">
      {headerElement}
    </div>
  );
}

//~ There is no difference between these two components except one is functional and the other is a class component 


// import { Component } from 'react'

// class Header extends Component {
//   render() {
//     return <h1>I am {this.props.headerName}, doing {this.props.headerName} things.</h1>
//   }
// }
// export default class App extends Component {

//   render() {
//     return (
//       <div className="App">
//         <Header headerName="Knight one" />
//       </div>
//     )
//   }
// }
