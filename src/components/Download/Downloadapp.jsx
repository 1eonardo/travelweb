import React from 'react'
import './download.css';
import Carousel from "react-multi-carousel";
import caroucel1 from '../../Assets/mobile-app1.jpg';
import caroucel2 from '../../Assets/mobile-app2.jpg';

const Downloadapp = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className='section_download'>
      <div className="download_content">
        <h1>Download the app for travel</h1>
        <p className='desc_download'>Enjoy benefits only available in our award-winning app.</p>
        <Carousel responsive={responsive}>
          <div className='car_content1'>
            <img src={caroucel1} alt="" className='project_img1'/>
          </div>
          <div className='car_content2'>
            <img src={caroucel2} alt="" className='project_img1'/>
          </div>
      </Carousel>
      </div>
    </div>
  )
}

export default Downloadapp