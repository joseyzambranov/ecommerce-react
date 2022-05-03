import "./App.css";
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success';
import {
 Navigate,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { useSelector } from 'react-redux';

const App = () => {
    const user = useSelector((state)=>state.user.currentUser)
    
return (
        
    <BrowserRouter>
    <Routes>
        <Route exact path='/ecommerce-react'element={<Home />}></Route>
        <Route path='/ecommerce-react/products/:category'element={<ProductList />}></Route>
        <Route path='/ecommerce-react/product/:id'element={<Product />}></Route>
        <Route path="/ecommerce-react/products" element = {<ProductList />}></Route>
        <Route path='/ecommerce-react/cart'element={<Cart />}></Route>
        <Route path='/ecommerce-react/success'element={<Success />}></Route>
        <Route path='/ecommerce-react/login'element={user?<Navigate to="/ecommerce-react"/>:<Login />}></Route>
        <Route path='/ecommerce-react/register'element={user?<Navigate to="/ecommerce-react"/>:<Register />}></Route>
    </Routes>
    </BrowserRouter>
        
    )
};

export default App;
