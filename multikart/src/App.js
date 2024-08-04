import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cart from './app/pages/Cart';
import Wishlist from './app/pages/Wishlist';
import Checkout from './app/pages/Checkout';
import Footer from './app/pages/Footer';
import Login from './app/pages/Login';
import Header from './app/Component/Header'
import Home from './app/pages/Home';
import Product from './app/pages/categories/Product';
import furniture from './app/pages/categories/Furniture';
import clothing from './app/pages/categories/Clothing';
import vegetable from './app/pages/categories/Vegetable';




function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header />
      
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Wishlist' Component={Wishlist} />
          <Route path='/Cart' Component={Cart} />
          <Route path='/Checkout' Component={Checkout} />
          <Route path='/Login' Component={Login} />
          <Route path='/clothing' Component={clothing} />
          <Route path='/furniture' Component={furniture} />
          <Route path='/vegetable' Component={vegetable}/>
          <Route path='/*' Component={Home} />
        </Routes>
        <Footer />
      </BrowserRouter>
      

    </div>
  );
}

export default App;
