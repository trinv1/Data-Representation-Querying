import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header'; 
import Content from './Components/Content';
import Footer from './Components/Footer';
import NavigationBar from './Components/NavBar';
import Read from './Components/Read';
import Movies from './Components/Movies';
import Create from './Components/Create';
import Edit from './Components/Edit';

{/*Importing components*/}

function App() {
  return (
      <Router>
        <NavigationBar />
        <Routes>
          {/*Each route displays different component when clicked*/}npm 
          <Route path="/home" element={<Content />} />
          <Route path="/Create" element={<Create />} />{/*diplays create component when url changes to read */}
          <Route path="/Footer" element={<Footer />} /> {/*diplays footer component when url changes to read */}
          <Route path="/Read" element={<Read />} />{/*diplays header component when url changes to read */}
          <Route path="/Movies" element={<Movies />} />{/*diplays movies component when url changes to read */}
          <Route path="/edit/:id" element={<Edit />} />{/*diplays edit component when url changes to /edit/ */}
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
