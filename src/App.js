import './App.css';
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import supabase from './supabase';
import { useDispatch } from 'react-redux';
import React,{ useEffect } from 'react';
import { setUser } from './slices/userSlices';



function App() {
  const dispatch = useDispatch();

  const getUser = async () => {
    const { data} = await supabase.auth.getSession();
    dispatch(setUser(data.session.user));
  };

  useEffect(() => {
    getUser();
  }, [ ]);


  return (
      <BrowserRouter>
      <Navbar />
             <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/products" element={<Products />} /> 
                    <Route path="/ProductDetails/:id" element={<ProductDetails/>} /> 
                    <Route path="/cart" element={<Cart />} />       
            </Routes>
      </BrowserRouter>
    
  );
}

export default App;
