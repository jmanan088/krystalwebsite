import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/program-details');
  };

  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>
        We are dedicated to providing cutting-edge water treatment solutions that ensure a cleaner and sustainable future.
        </h1>
        <p>
        Our advanced technologies and high-quality systems are designed to meet the diverse needs of industries and communities, promoting efficient and eco-friendly water management for a healthier world.
        </p>
        <button className='btn this' onClick={handleExplore}> Explore more <img src={dark_arrow}alt=''/> </button>
      </div>
    </div>
  )
}

export default Hero
