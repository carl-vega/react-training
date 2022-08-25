# React Training

- Install current version of React single-page application with this command:

  ```
  npx create-react-app <app name>
  ```

  `<app name>` can be anything, the recommended name is usually `client`.

- The generated files can be culled of unnecessary files.

  ```
  .
  ├── README.md
  ├── package-lock.json
  ├── package.json
  ├── public
  │   ├── favicon.ico
  │   ├── index.html
  │   ├── logo192.png
  │   ├── logo512.png
  │   ├── manifest.json
  │   └── robots.txt
  └── src
      ├── App.css
      ├── App.js
      ├── App.test.js
      ├── index.css
      ├── index.js
      ├── logo.svg
      ├── reportWebVitals.js
      └── setupTests.js

  2 directories, 17 files
  ```

  The files left after the culling.

  ```
  .
  ├── README.md
  ├── package-lock.json
  ├── package.json
  ├── public
  │   ├── favicon.ico
  │   ├── index.html
  │   ├── logo192.png
  │   ├── logo512.png
  │   ├── manifest.json
  │   └── robots.txt
  └── src
      ├── App.css
      ├── App.js
      ├── App.test.js
      ├── index.css
      ├── index.js
      ├── logo.svg
      ├── reportWebVitals.js
      └── setupTests.js

  2 directories, 17 files
  ```

- Change `App.js`

  ```
  import logo from './logo.svg';
  import './App.css';


  function App() {
      return (

      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                  Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
              Learn React
              </a>
          </header>
      </div>
      );
  }

  export default App;
  ```

  To this:

  ```
  import './App.css';

    function App() {
        return (
        <div className="App">

        </div>
    );
    }

    export default App;

  ```
