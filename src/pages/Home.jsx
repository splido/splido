import monday from '../assets/img/monday.png'
import dribbble from '../assets/img/dribbble.png'
import figma from '../assets/img/Group 96.png'
import behance from '../assets/img/behance.png'
import reviewIcon from '../assets/img/icon-1.svg'
import laptop from '../assets/img/Laptop.png'
import clibboard from '../assets/img/Clipboard.png'
import mobile from '../assets/img/mobile.png'
import laptop2 from '../assets/img/Rectangle.png'
import frame from '../assets/img/Frame 97.png'
import search from '../assets/img/search.svg'

function Home() {
  return (
    <div>
     <header class="header">
        <div class="header-inner">

            <p class="large">Manage all your Web Applications in one place.</p>
            <p class="header-para"> Compare, Rate and Review web applications. Keep track of Web Applications you use or planning to use.
                 Get alerts before your payment is processed. Save your time, money or both!</p>
                 <div class="search">
                    <form>
                        <input type="text" id="search" placeholder="Search for Apps/Web Apps/Services"/>
                      </form>
                      </div>
        
                      <a href="" class="btn btn-dark header-btn">Search<img src={search} alt=""/></a>
        </div>
            </header>
           
            <div class="container latest-reviews">
            <h1 class="heading">Latest Reviews</h1>
                <div class="reviews-section">
                <div class="reviews-card">
                    <div>
                        <img src={monday} alt=""/>
                    </div>
                    <div class="details">

                        <p>monday.com</p>
                        <div class="stars">
                            <i class="fas fa-star" style={{color: "yellow;"}}></i>
                            <i class="fas fa-star" style={{color: "yellow;"}}></i>
                            <i class="fas fa-star" style={{color: "yellow;"}}></i>
                            <i class="fas fa-star" style={{color: "yellow;"}}></i>
                            <i class="fas fa-star" style={{color: " #D9D9D9;"}}></i>
                        </div>
                        <div class="ratings">
                            <p>4/5 <span>(149 Follows)</span></p>
                        </div>
                    </div>
                    </div>
                    <div class="reviews-card">
                        <div>
                            <img src={dribbble} alt=""/>
                        </div>
                        <div class="details">

                            <p>Dribble.com</p>
                            <div class="stars">
                                <i class="fas fa-star" style={{color: "yellow;"}}></i>
                                <i class="fas fa-star" style={{color: "yellow;"}}></i>
                                <i class="fas fa-star" style={{color: "yellow;"}}></i>
                                <i class="fas fa-star" style={{color: "yellow;"}}></i>
                                <i class="fas fa-star" style={{color: " #D9D9D9;"}}></i>
                            </div>
                            <div class="ratings">
                                <p>4/5 <span>(149 Follows)</span></p>
                            </div>
                        </div>
                        </div>
                        <div class="reviews-card">
                            <div>
                                <img src={figma} alt=""/>
                            </div>
                            <div class="details">

                                <p>Figma</p>
                                <div class="stars">
                                    <i class="fas fa-star" style={{color: "yellow;"}}></i>
                                    <i class="fas fa-star" style={{color: "yellow;"}}></i>
                                    <i class="fas fa-star" style={{color: "yellow;"}}></i>
                                    <i class="fas fa-star" style={{color: "yellow;"}}></i>
                                    <i class="fas fa-star" style={{color: " #D9D9D9;"}}></i>
                                </div>
                                <div class="ratings">
                                    <p>4/5 <span>(149 Follows)</span></p>
                                </div>
                            </div>
                        </div>
                  
                        <div class="reviews-card">
                            <div>
                                <img src={behance} alt=""/>
                            </div>
                            <div class="details">

                                <p>Behance.net</p>
                                <div class="stars">
                                    <i class="fas fa-star" style={{color: "yellow;"}}></i>
                                    <i class="fas fa-star" style={{color: "yellow;"}}></i>
                                    <i class="fas fa-star" style={{color: "yellow;"}}></i>
                                    <i class="fas fa-star" style={{color: "yellow;"}}></i>
                                    <i class="fas fa-star" style={{color: " #D9D9D9;"}}></i>
                                </div>
                                <div class="ratings">
                                    <p>4/5 <span>(149 Follows)</span></p>
                                </div>
                            </div>
                        </div>

            </div>
        <div class="features">
            <h1 class="heading">Top Feature</h1>
            <div class="feature-section">
                <div class="feature-card">
                    <img src={reviewIcon}alt=""/>
                    <p class="card-heading">
                        Reviews
                    </p>
                    <p>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Sunt voluptates magni libero 
                        possimus esse consequatur consectetur vero sit omnis a.</p>
                </div>
                <div class="feature-card">
                    <img src={reviewIcon} alt=""/>
                    <p class="card-heading">
                        Reviews
                    </p>
                    <p>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Sunt voluptates magni libero 
                        possimus esse consequatur consectetur vero sit omnis a.</p>
                </div>
                <div class="feature-card">
                    <img src={reviewIcon} alt=""/>
                    <p class="card-heading">
                        Reviews
                    </p>
                    <p>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Sunt voluptates magni libero 
                        possimus esse consequatur consectetur vero sit omnis a.</p>
                </div>
                <div class="feature-card">
                    <img src={reviewIcon} alt=""/>
                    <p class="card-heading">
                        Reviews
                    </p>
                    <p>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Sunt voluptates magni libero 
                        possimus esse consequatur consectetur vero sit omnis a.</p>
                </div>
            </div>
        </div>
        <div class="market-place container">
            <div class="market-heading">
            <img src={laptop} alt=""/>
            <h1>Web Application Market Place</h1>
        </div>
            <div class="comment">
                <img src={clibboard} alt=""/>
                <pre>  Not just reviews, you can track
Applications and save money and time!
                </pre>
                <img src={mobile} alt=""/>
            </div>
        </div>

        <div class="reviews container">
            <h1 class="heading">Web Application Reviews</h1>
            <p>We provide a short review of the applications and also provide a rating and other details such as pricing, free trial, money back period etc so that you can take an immediate decision. You can also tag it to wishlist or not for me.
                 This will save you valuable time next time as you don't have to keep reading the same reviews</p>
            <img src={laptop2} alt=""/>
        </div>
        <div class="reviews container">
            <h1 class="heading">Signup for More</h1>
            <p>Once you sign up, you can keep track of the applications you use in the dashboard and also can get notification before payment. 
                This will help you to decide wisely before your card is charged</p>
            <img src={frame} alt=""/>
        </div>
        </div>
    </div>
  )
}

export default Home