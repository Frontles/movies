import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Home from './Components/Home';
import Movies from './Components/Movies';
import Celebrities from './Components/Celebrities';
import Blog from './Components/Blog';
import Footer from "./Components/Footer";





function App() {






  return (



    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/movies' Component={Movies} />
        <Route path='/celebrities' Component={Celebrities} />
        <Route path='/blog' Component={Blog} />
        <Route path='/categories' Component={Categories} />

      </Routes>
      <Footer />

    </BrowserRouter>



  );
}

export default App;
