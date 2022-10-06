import React from 'react';
import { cv } from '../../constants';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <div className='header-aboutsection'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='header-text'> HELLO!</p>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p>I'm 
              <div className='name'>
                NIKHIL JATALE
              </div>
            </p>
          </div>
          
        </div>
      </motion.div>
      <div className="header-intro">
        <h2>A four years experienced Software Developer, Data Analyst.<br/>I like problem solving, learning new skills. Love to spend my time in sketching and photography!</h2>
      </div>

      <div>
        <div>
          {/* hire me, insert a button if want to */}
        </div>
        <div className="CVdownload-button">
          <a href = {cv} download = {cv}>
            <button type='submit'>
              Download CV
            </button>
          </a>
        </div>
      </div>

      
    </div>

    {/* flying circles code */}
    {/* <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.python, images.dataviz, images.db].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div> */}

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
