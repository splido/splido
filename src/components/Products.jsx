import { useEffect, useState } from "react"
import ProductItem from "./ProductItem"
import Spinner from './Spinner'
function Products({products}) {
  const [loading, setLoading] = useState(true);
    // const [productList, setProductList] = useState()
    // useEffect(() => {
    //   setProductList(products)
    // }, [products])
    
    useEffect(() => {
      // Simulate an API call or any asynchronous operation that takes time.
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

  return (
    <div>
       {
        loading ? <Spinner/> :
        products ? (

            products.map((product)=>(
                <ProductItem key={product.id} product = {product}/>
            ))
        ): <>
        <Spinner/> </>
           
        } 
    </div>
  )
}

export default Products