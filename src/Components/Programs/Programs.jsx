import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Programs.css';
import program_1 from '../../assets/sample-1.png';
import program_2 from '../../assets/sample-2.png';
import program_3 from '../../assets/sample-3.png';

const Programs = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/program-details');
  };

  return (
    <div className='programs-container'>
      <div className='programs'>
        <div className='program'>
          <img src={program_1} alt='Program 1' />
        </div>
        <div className='program'>
          <img src={program_2} alt='Program 2' />
        </div>
        <div className='program'>
          <img src={program_3} alt='Program 3' />
        </div>
      </div>

      {/* Button centered below the programs */}
      <div className="explore-button">
        <button onClick={handleExplore}>Explore Our Products</button>
      </div>
    </div>
  );
};

export default Programs;
