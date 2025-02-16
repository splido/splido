import Button from '../components/Button'
import Products from '../components/Products'

function ProductList({products}) {
        return (
        <div>
            <header className="product-header">
            <div className="product-header-inner">
            <p className="page-path">Home / Work & Productivity</p>
            <h1 className="product-heading">
                The Best Note and
                Writing <span>Apps</span> in
            </h1>
        </div>
        </header>
        <div className="product-section container">
            <div className="product-question">
                <p className="question">What are Note & Writing Apps?</p>
                <p>Note-writing apps are digital tools designed to help users capture, organize, and manage their notes efficiently. These apps have become increasingly popular due to their convenience and versatility in various aspects of life, 
            both personal and professional. Here's a brief overview of note-writing apps:</p>
            </div>
           
           
                    <div className="product-info">
                    <Products products = {products.data}/>
                    </div>
                
               
     
    
            <Button type="btn-border">Show More</Button>
          
        </div>
        </div>
      )
    }
    
    export default ProductList
  