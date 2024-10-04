import logo from './logo.svg';
import './App.css';

import Header from './Components/Header'; 
import Content from './Components/Content';
import Footer from './Components/Footer';
{/*Importing components*/}

function App() {
  return (
    <div className="App">        
      
      <Header /> {/*calling and displaying components contents*/}
      <Content />
      <Footer />

  </div>

  );
}

export default App;
