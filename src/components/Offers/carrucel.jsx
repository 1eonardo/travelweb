import React from 'react'
import './offers.css';

export default function carrucel (props) {
  return (
    <div>
        <div className='slide_offers '>                           
            <article className='project_item'>

                <div className='portfolio_item-image'>
                    <img src={props.url} alt='places' className='project_img'/>
                </div>

                <h3 className='project_title'>{props.name}</h3>
            </article>
         </div>
    </div>
  )
}
