import React, { useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);

    formData.append('access_key', 'de06175f-f2a5-4680-a4e8-0761263edc70');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      setResult('Error submitting the form. Please try again.');
    }
  };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>
          Send us a message <img src={msg_icon} alt='Message Icon' />
        </h3>
        <p>
          Feel free to reach out through our contact form or find our contact information below. Your feedback, questions, and inquiries are important to us as we work to deliver high-quality water treatment solutions and services.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt='Mail Icon' />
            <a href="mailto:krystalfluidsystems@rediffmail.com">krystalfluidsystems@rediffmail.com</a>
          </li>
          <li>
            <img src={phone_icon} alt='Phone Icon' />
            <a href="tel:+919911386255">9911386255</a>
          </li>
          <li>
            <img src={location_icon} alt='Location Icon' />
            <a href="https://www.google.co.in/maps/dir//28.589085,77.331515/@28.5889849,77.2491048,12z?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              C-310, Sector 10, Near Hero Service Center, Noida, 201301
            </a>          
          </li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your mobile number' required />
          <label>Write Your Message Here</label>
          <textarea name='message' placeholder='Enter your message' rows='6' required></textarea>
          <button type='submit' className='btn dark-btn'>
            Submit now <img src={white_arrow} alt='' />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
