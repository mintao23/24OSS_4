import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js';
function App() { 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />
        <p>
          Rasengan!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          - NARUTO -
        </a>
      </header>
    </div>
  );
}

export default App;
