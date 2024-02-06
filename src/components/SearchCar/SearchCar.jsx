import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './searchCar.css'
import IMG1 from '../../Assets/car/KiaRio.png';
import IMG2 from '../../Assets/car/NissanCentra.png';
import IMG3 from '../../Assets/car/Tesla.png';
import IMG4 from '../../Assets/car/Mancar.png';

const SearchCar = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="rentar_section">
      <h1 className='title_car'>Recommended rental cars</h1>
      <ul class="lista-en-linea">
        <li><a className='btn_descar2' href="/therapists">New York</a></li>
        <li><a className='btn_descar' href="/therapists">Los Angeles</a></li>
        <li><a className='btn_descar' href="/therapists">Chicago</a></li>
        <li><a className='btn_descar' href="/therapists">Detroit</a></li>
        <li><a className='btn_descar' href="/therapists">San Francisco</a></li>
     </ul>

      <div className="content_car">
        <Carousel responsive={responsive}>
            <div className='cars_slide'>
                <div className="portfolio_item-image">
                    <img src={IMG1} alt="img4" className="car_img" />
                </div>

                <h3 className="car_title">Kia Rio</h3>
                <p className='desc_car'>29.36 US$</p>
            </div>

            <div className='cars_slide'>
                <div className="portfolio_item-image">
                    <img src={IMG2} alt="img4" className="car_img" />
                </div>

                <h3 className="car_title">Nissan Centra</h3>
                <p className='desc_car'>45.20 US$</p>
            </div>

            <div className='cars_slide'>
                <div className="portfolio_item-image">
                    <img src={IMG3} alt="img4" className="car_img" />
                </div>

                <h3 className="car_title">Tesla</h3>
                <p className='desc_car'>50.00 US$</p>
            </div>

            <div>
                <h3 className="car_title2">¡Great discounts <br/>on big brands!</h3>

                <a className='btn_car' href="/therapists">
                    Watch Now
                </a>

                <div className="portfolio_item-image">
                    <img src={IMG4} alt="img4" className="car_img2" />
                </div>
            </div>
        </Carousel>
      </div>
    </div>
  );
};

export default SearchCar;
