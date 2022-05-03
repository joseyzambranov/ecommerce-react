import "./App.css";
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from 'react-redux';

function App () {
    const user = useSelector((state)=>state.user.currentUser)
    console.log(user)
return (
        <BrowserRouter>
        <Routes>
            <Route path='/'element={<Home />}></Route>
            <Route path='/products/:category'element={<ProductList />}></Route>
            <Route path='/product/:id'element={<Product />}></Route>
            <Route path="/products" element = {<ProductList />}></Route>
            <Route path='/cart'element={<Cart />}></Route>
            <Route path='/success'element={<Success />}></Route>
            <Route path='/login'element={user?<Navigate to="/"/>:<Login />}></Route>
            <Route path='/register'element={user?<Navigate to="/"/>:<Register />}></Route>
        </Routes>
        </BrowserRouter>
    )
};

export default App;