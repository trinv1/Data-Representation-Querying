import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">        
      
     {/*displaying simple hello world message*/}
    <h1>Hello World!</h1> 

    {/*displaying time*/}
    <h2>It is {new Date().toLocaleTimeString()}.</h2> 

  </div>

  );
}

export default App;
