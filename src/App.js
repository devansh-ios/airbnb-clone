import Footer from './Footer';
import './App.css';
import Home from './Home';
import Header from './Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
 import SearchPage from './SearchPage';
function App() {
  return (
    <div className="App">
   
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route path="/" element={<Home/>}/>
    <Route path="/search" element={<SearchPage/>}/>
    </Routes>
    <Footer/>

    </BrowserRouter>
   </div>
  );
}

export default App;
