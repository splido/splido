import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetchData()
  },[])

  const apiUrl = 'https://appsalabackend.onrender.com/products'

  const fetchData = async() =>{
    const response = await fetch(apiUrl)
    const data = await response.json()
    setProducts(data)
    // console.log(products.data)
  }




  return (
  <>
    <Navbar products={products}/>
    <Router>
    <Routes>
    <Route exact path="/" element={<Home products={products}/>} />
    <Route path="/product/:name" element={<Product products={products}/>} />
    <Route path="/product-list" element={<ProductList products = {products}/>} />
    </Routes>
    </Router>
    <Footer/>
  </>
  );
}

export default App;
