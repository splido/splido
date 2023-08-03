
import { useEffect, useState } from "react"
function SingleProduct({name}) {
    // const products = props.products
    // const name = props.name
    const [singleProduct, setSingleProduct] = useState([])
     useEffect(()=>{
        fetchData()
      },[])
  
     const apiUrl = 'https://appsalabackend.onrender.com/products'
  
    const fetchData = async() =>{
      const response = await fetch(apiUrl)
      const data = await response.json()
    //   console.log(typeof(data))
    //   console.log(data.data)
    //   console.log(typeof(data.data))
    // console.log(name)
      const foundProducts = data.data.filter((product) => product.name === name);
      setSingleProduct(foundProducts)
      console.log(singleProduct[0].name)
      console.log(typeof(singleProduct))
    //   console.log(foundProducts)
    //   if(data){
    //     console.log(data)
    //   }

    //   if (!Array.isArray(data)) {
    //     throw new Error('Data is not an array.');
    //   }

    // const dataArray = Array.from(data);
    // console.log(dataArray)
    //   const foundProducts = dataArray.filter((product) => product.name === name);
    //   console.log(foundProducts)
    }

//     setSingleProduct(foundProducts)

//    const foundProducts = products.filter((product) => product.name === name);
//    console.log(products)
//    console.log(products)
//     const foundProducts = products.find((product) => product.name === name);
//     console.log(foundProducts)
  return (
    <>
    <img src={singleProduct[0]?.logo} alt=""/>
    <div className="product-text">
    <p className="product-info-heading">{singleProduct[0]?.name}</p>
    <p style={{color: "#454545;"}}>{singleProduct[0]?.review}
    </p>
    <p>749  Follows</p>
    </div>
    </>
  )
}

export default SingleProduct