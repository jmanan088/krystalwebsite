import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt='' className='about-img' />
        <img 
          src={play_icon} 
          alt='Play Video' 
          className='play-icon'  
          onClick={() => setPlayState(true)}  // This sets playState to true
        />
      </div>
      <div className='about-right'>
        <h3>ABOUT KRYSTAL FLUID SYSTEM</h3>
        <h2>Purifying Water, Enhancing Lives</h2>
        <p>
          Krystal Fluid Systems, established in 2013, operates as a sole proprietorship and has earned a reputation as a trusted name in the industry. Based in Noida, Uttar Pradesh, the company specializes in manufacturing a diverse range of water treatment systems. Their offerings include Water Treatment Plants, Water Softener Plants, and Ultrafiltration Plants, among other products.
        </p>
        <p>
          The products manufactured by Krystal Fluid Systems are known for their hassle-free functionality and low maintenance needs. The company ensures that its products are made in compliance with industry standards, using high-quality raw materials and advanced technology. This commitment to quality and reliability has helped the company build a strong presence in the market.
        </p>
        <p>
          In addition to manufacturing, Krystal Fluid Systems also provides related services such as RO Plant Installation. This combination of quality products and comprehensive services further enhances their reputation and makes them a preferred choice for water treatment solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
