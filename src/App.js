import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Home from './Components/Home';
import Movies from './Components/Movies';
import Celebrities from './Components/Celebrities';
import Blog from './Components/Blog';
import News from './Components/News';


function App() {
  return (


    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/movies' Component={Movies} />
        <Route path='/celebrities' Component={Celebrities} />
        <Route path='/blog' Component={Blog} />
        <Route path='/news' Component={News} />
        <Route path='/about' Component={About} />
      </Routes>

    </BrowserRouter>



  );
}

export default App;
