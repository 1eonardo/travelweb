import React, {useState} from 'react'
import './offers.css';
import img1 from '../../Assets/offers/464.jpg';
import img2 from '../../Assets/offers/travel2.jpg';
import imgnew from '../../Assets/ckets.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item from '../Offers/item-offers';
import Carrucel from '../Offers/carrucel';

const Offers = () => {

  
  const allProjects = Item; // Store all projects separately

      // Initialize items state with all projects
  const [items] = useState(allProjects);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    desktop2: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 800, min: 650 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const product = items.map((item) => <Carrucel name={item.name} url={item.img} />);

  return (
    <div className='section_offers'>
        <h1 className='title_offers'>Offers</h1>
        <p className='desc_offers'>Promotions, discounts and special offers for you</p>

        <div className="offers">
            <li>
              <div className="colum">
                  <div className="descrip_content">
                    <p className='title_offer'>Enjoy a longer vacation</p>
                    <p className='desc_offer'>Look for accommodations that offer long stays, many have a reduced monthly rate.</p>
                    <a className='btn_offer' href="/therapists">
                      Find accommodation
                    </a>
                  </div>  

                  <div className="imgcontent">
                    <img className='imgoffer' src={img1} alt="" />     
                  </div> 
              </div>          
            </li>
            <li> 
                <div className="descrip_content2">
                    <img className='imgoffer2' src={img2} alt="" /> 
                    <div className="offertext">
                      <p className='title_offer2'>Start a New Adventure</p>
                      <p className='desc_offer2'>Save 15% or more when you book and stay before April 1, 2024.</p>
                      <a className='btn_offer2' href="/therapists">
                        Search for new offers
                      </a>  
                    </div> 
                </div>
            </li>
        </div>

        <div className="slider_section">
            <h1 className='title_carrucel'>Search by type of stays</h1>
            <Carousel responsive={responsive}>
              {product}
            </Carousel>
        </div>  

        <div className='newslatter'>
          <div className="newcontent">
            <div className="imgcontent">
                <img className='imgnews' src={imgnew} alt="" />     
            </div> 
            <div className='desc_news'>
              <h1 className='titlenews'>Recive our newslatter</h1>
              <p className='descnews'>Cheking for resives new news & exclusive offers</p>
              <input className='inputnews' type="text" placeholder='Write your Email'/>
              <a className='btn_news' href="/therapists">
                  Here we go
              </a>
            </div>
          </div>
        </div>    
    </div>
  )
}

export default Offers