import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    {/* <div>
      <BsTwitter />
    </div> */}
    <div>
      <a href='https://www.facebook.com/nikhiljatale'>
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href='https://www.instagram.com/njtales/'>
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/nikhil-jatale/'>
        <BsLinkedin /> 
      </a>      
    </div>
    <div>
      <a href='https://github.com/Njtales'>
        <BsGithub />
      </a>
    </div>
    
  </div>
);

export default SocialMedia;
