// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      {/* // <Home /> */}
    </>
  );
}

export default App;
