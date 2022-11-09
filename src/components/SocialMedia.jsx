import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
     <a href="https://www.linkedin.com/in/yogesh-tiwari-8651b2256/" target="blank"> <BsLinkedin/></a> 
    </div>
    <div>
      <a href="https://www.facebook.com/profile.php?id=100010710134560" target="blank"><FaFacebookF /></a>
    </div>
    <div>
      <a href="https://www.instagram.com/yogeshtiwari007/" target="blank"><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;