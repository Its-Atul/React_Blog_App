import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div>
            <footer>
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="social_icon">
                            <li><Link to="https://github.com/Its-Atul" target='blank'><ion-icon name="logo-github"></ion-icon></Link></li>
                            <li><Link to="https://twitter.com/AtulPan30626358" target='blank'><ion-icon name="logo-twitter"></ion-icon></Link></li>
                            <li><Link to="https://www.linkedin.com/in/atul-pandey-378a9322a/" target='blank'><ion-icon name="logo-linkedin"></ion-icon></Link></li>
                  
                </ul>

                {/* <ul className="menu">
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Services</Link></li>
                    <li><Link to="#">Team</Link></li>
                    <li><Link to="#">Contact</Link></li>
                </ul> */}
                <p>&copy; 2023 Atul Pandey | All Rights Reserved</p>
            </footer>            
        </div>
    )
}

export default Footer
