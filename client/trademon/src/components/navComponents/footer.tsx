import React from 'react';

import '../../styling/footer.scss'

const Footer = () => {

  return (
    <div className="footer-container">
      <div className="footer-trademark">
        <i className="far fa-copyright fa-1x"></i>
        <p>Team Trademon</p>
      </div>
      <div className="footer-social-media">
        <i className="fab fa-facebook-square fa-2x"></i>
        <i className="fab fa-instagram-square fa-2x"></i>
        <i className="fab fa-twitter-square fa-2x"></i>
        <i className="fab fa-snapchat-square fa-2x"></i>
      </div>
      <div className="footer-project-info">
        Codeworks 2021 : Thesis Project
      </div>
    </div>
  )

}

export default Footer;