import React from 'react';
import "./homeStyle.css";
import img1 from '../../Assets/cabin.jpg';

const Home = () => {

  return (
    <div className="background">
        <img src={img1} alt="img" className="backimg" />
        <div className="overlay"></div>
        <div className="home_text">
            <h1 className='home_title'>Plant Your Trip with Travel</h1>
            <p className='home_description2'>Travel to your favorite City with respectful of the <br/>enviroment</p>
            <a className='btnhome' href="/therapists">
                Explore Now
            </a>
        </div>

        <div className="homeCard grid">

          <div className="locationDiv">
            <label htmlFor="location">Going to</label>
            <input className='inputform' type="text" placeholder='Dream Destionation'/>
          </div>

          <div className="disDiv">
            <label htmlFor="distance">Date Arrival</label>
            <input type="date" placeholder='--.--.--'/>
          </div>

          <div className="priceDiv">
            <label htmlFor="price">Date Return</label>
            <input type="date" placeholder='--.--.--'/>
          </div>
          
          <a className='btnhome2' href="/therapists">
                Search
          </a>
        </div>
        
    </div>
  )
}

export default Home