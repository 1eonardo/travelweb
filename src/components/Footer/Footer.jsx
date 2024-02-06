import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div className='footer-content'>
        <div className="footer">
            <div className="col-1">
                <h3>What you need</h3>
                <a className="support" href="/">Stays</a>
                <a className="support" href="/">Flights</a>
                <a className="support" href="/">Cars</a>
                <a className="support" href="/">Taxi to Airport</a>
                <a className="support" href="/">Support</a>
            </div>
            <div className="col-2">
                <h3 className='titlenewfooter'>¡Save time and money!</h3>
                <p className='descontact'>Register and we will send you the best offers for you</p>
                <form>
                    <input type="text" className='inputnewmail' placeholder='Your e-mail Address' />
                    <br/>
                    <a className='btnews' href="/therapists">
                        ¡Suscribe!
                    </a>
                </form>
            </div>
            <div className="col-3">
                <h3 className='titlecontact'>CONTACT</h3>
                <p className='descontact'>Follow and get access <br/> to our offer descuent.</p>
                <div className="social-item">
                    <i class="uil uil-facebook social-f"></i>
                    <i class="uil uil-instagram-alt social-i"></i>
                    <i class="uil uil-twitter social-t"></i>
                </div>

            </div>   
        </div>
        <div className="end">
            <a className='btnend' href="/therapists">
            Register your stay
            </a>
        </div> 
        <div className="copy">
            <a className='copydesc' href="/therapists">
                Copyright © 2024 Developer Leonardo. Todos los derechos reservados.
            </a>
        </div> 
    </div>
  )
}

export default Footer