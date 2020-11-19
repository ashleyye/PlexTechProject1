import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './FunctionalComponent'
import ClassComponent from './ClassComponent';


function App() {
  return (
    <div className="App">
      <FunctionalComponent type="Functional Component" parent="App Component"/>
      <ClassComponent />
    </div>
    
  );
}

export default App;

/*        <img src={logo} className="App-logo" alt="logo" />
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
        </a>*/