import React from 'react'
import { MdCancelScheduleSend } from 'react-icons/md';
import { FaGlobe } from 'react-icons/fa';
import './footer.css'

const Footer = () => {
    return (
    <div className='footer-container'>
        <div>
            <ul className='footer'>
                <li>© 2023 Airbnb, Inc.</li>
                <li>Terms</li>
                <li>Sitemap</li>
                <a className="privacy" href='/privacy'><li>Privacy</li></a>
                <div className='footer-privacy-choices'>
                    <li>Your privacy choices</li>
                    <MdCancelScheduleSend />
                </div>
                <li>Destinations</li>
            </ul>
        </div>
        <div>
            <ul className='footer'>
                <li>
                    <div className='footer-lang'>
                        <FaGlobe />
                        {`English (US)`}
                    </div>
                </li>
                <li>$ USD</li>
                <li>Support & resources</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
