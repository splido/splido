import monday from '../assets/img/monday.png'
import dribbble from '../assets/img/dribbble.png'
import figma from '../assets/img/Group 96.png'
import behance from '../assets/img/behance.png'
import Button from '../components/Button'
import Products from '../components/Products'
// import { useEffect } from "react"
function ProductList({products}) {
    // useEffect(()=>{
    //     console.log(products)
    // },[products])
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
        {/* <div className="product-card">
            <div className="product-reviews-card">
                <div>
                    <img src={monday}alt=""/>
                </div>
                <div className="details">

                    <p>monday.com</p>
                    <div className="stars">
                        <i className="fas fa-star"style={{color: "yellow;"}}></i>
                        <i className="fas fa-star"style={{color: "yellow;"}}></i>
                        <i className="fas fa-star"style={{color: "yellow;"}}></i>
                        <i className="fas fa-star"style={{color: "yellow;"}}></i>
                        <i className="fas fa-star" style={{color: " #D9D9D9;"}}></i>
                    </div>
                    <div className="ratings">
                        <p>4/5 <span>(149 Follows)</span></p>
                    </div>
                </div>
            </div>
            <p style={{ fontSize: "20px;" ,color: "#757575;"}}>
                Monday.com is a comprehensive and versatile note-taking app that allows users to capture, organize, 
                and sync various types of information across multiple devicesMonday.com is a comprehensive and versatile.
            </p>
        </div>
            <div className="product-bar">
                <p>
                    Do you wish to use Monday.com?
                </p>
                <div className="comment-div">
                <div className="reaction selected">
                    I am using it 👍
                </div>
                <div className="reaction">
                    Yes, I want to 🤩
                </div>
                <div className="reaction">
                   May be 🤔
                </div>
                <div className="reaction">
                  No, I don't 😐
                </div>
            </div>
            </div>
        </div>

        <div className="product-info">
            <div className="product-card">
                <div className="product-reviews-card">
                    <div>
                        <img src={dribbble} alt=""/>
                    </div>
                    <div className="details">
    
                        <p>Dribble.com</p>
                        <div className="stars">
                            <i className="fas fa-star"style={{color: "yellow;"}}></i>
                            <i className="fas fa-star"style={{color: "yellow;"}}></i>
                            <i className="fas fa-star"style={{color: "yellow;"}}></i>
                            <i className="fas fa-star"style={{color: "yellow;"}}></i>
                            <i className="fas fa-star" style={{color: " #D9D9D9;"}}></i>
                        </div>
                        <div className="ratings">
                            <p>4/5 <span>(149 Follows)</span></p>
                        </div>
                    </div>
                </div>
                <p style={{fontSize: "20px;", color: "#757575;"}}>
                    Monday.com is a comprehensive and versatile note-taking app that allows users to capture, organize, 
                    and sync various types of information across multiple devicesMonday.com is a comprehensive and versatile.
                </p>
            </div>
                <div className="product-bar">
                    <p>
                        Do you wish to use Monday.com?
                    </p>
                    <div className="comment-div">
                    <div className="reaction selected">
                        I am using it 👍
                    </div>
                    <div className="reaction">
                        Yes, I want to 🤩
                    </div>
                    <div className="reaction">
                       May be 🤔
                    </div>
                    <div className="reaction">
                      No, I don't 😐
                    </div>
                </div>
                </div>
            </div>

            <div className="product-info">
                <div className="product-card"  >
                    <div className="product-reviews-card" >
                        <div>
                            <img src={figma} alt=""/>
                        </div>
                        <div className="details">
        
                            <p style={{paddingRight:"2rem;"}}>Figma</p>
                            <div className="stars">
                                <i className="fas fa-star"style={{color: "yellow;"}}></i>
                                <i className="fas fa-star"style={{color: "yellow;"}}></i>
                                <i className="fas fa-star"style={{color: "yellow;"}}></i>
                                <i className="fas fa-star"style={{color: "yellow;"}}></i>
                                <i className="fas fa-star" style={{color: " #D9D9D9;"}}></i>
                            </div>
                            <div className="ratings">
                                <p>4/5 <span>(149 Follows)</span></p>
                            </div>
                        </div>
                    </div>
                    <p style={{fonSize: "20px;" , color: "#757575;"}}>
                        Monday.com is a comprehensive and versatile note-taking app that allows users to capture, organize, 
                        and sync various types of information across multiple devicesMonday.com is a comprehensive and versatile.
                    </p>
                </div>
                    <div className="product-bar">
                        <p>
                            Do you wish to use Monday.com?
                        </p>
                        <div className="comment-div">
                        <div className="reaction selected">
                            I am using it 👍
                        </div>
                        <div className="reaction">
                            Yes, I want to 🤩
                        </div>
                        <div className="reaction">
                           May be 🤔
                        </div>
                        <div className="reaction">
                          No, I don't 😐
                        </div>
                    </div>
                    </div>
                </div>

                <div className="product-info">
                    <div className="product-card">
                        <div className="product-reviews-card">
                            <div>
                                <img src={behance} alt=""/>
                            </div>
                            <div className="details">
            
                                <p>Behance.net</p>
                                <div className="stars">
                                    <i className="fas fa-star"style={{color: "yellow;"}}></i>
                                    <i className="fas fa-star"style={{color: "yellow;"}}></i>
                                    <i className="fas fa-star"style={{color: "yellow;"}}></i>
                                    <i className="fas fa-star"style={{color: "yellow;"}}></i>
                                    <i className="fas fa-star" style={{color: " #D9D9D9;"}}></i>
                                </div>
                                <div className="ratings">
                                    <p>4/5 <span>(149 Follows)</span></p>
                                </div>
                            </div>
                        </div>
                        <p style={{fontSize: "20px;", color: "#757575;"}}>
                            Monday.com is a comprehensive and versatile note-taking app that allows users to capture, organize, 
                            and sync various types of information across multiple devicesMonday.com is a comprehensive and versatile.
                        </p>
                    </div>
                        <div className="product-bar">
                            <p>
                                Do you wish to use Monday.com?
                            </p>
                            <div className="comment-div">
                            <div className="reaction selected">
                                I am using it 👍
                            </div>
                            <div className="reaction">
                                Yes, I want to 🤩
                            </div>
                            <div className="reaction">
                               May be 🤔
                            </div>
                            <div className="reaction">
                              No, I don't 😐
                            </div>
                        </div>
                        </div> */}
                    </div>

                   <Button type="btn-border">Show More</Button>
      
    </div>
    </div>
  )
}

export default ProductList