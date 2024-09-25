import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import './ProgramDetails.css';
import img1 from "../../assets/sample-1.png";
import img2 from "../../assets/sample-5.png";
import img3 from "../../assets/sample-11.png";
import img4 from "../../assets/sample-12.png";
import img5 from "../../assets/sample-14.png";
import img6 from "../../assets/sample-15.png";
import img7 from "../../assets/sample-16.png";

const programsData = [
  {
    id: 1,
    title: 'Waste Water Treatment Plant',
    image: img1, // Update with actual path
    price: '₹ 1,50,000/ piece',
    usage: 'Waste Water Treatment',
    waterSource: 'Industrial Effluent',
    capacity: 'Customized',
    deliveryLocation: 'Pan India',
    industry: 'Customized',
    origin: 'Made in India',
    description: 'Matching up with the ever increasing requirements of the customers, our company is engaged in providing Waste Water Treatment Plant.',
  },
  {
    id: 2,
    title: 'Seawage Water Treatment Plant',
    image: img2, // Update with actual path
    price: '₹ 1,50,000/ piece',
    usage: 'Seawage Water Treatment',
    waterSource: 'Urban Sewage',
    capacity: 'Customized',
    deliveryLocation: 'Pan India',
    industry: 'Customized',
    origin: 'Made in India',
    description: 'Our Seawage Water Treatment Plant is designed to handle urban sewage efficiently, ensuring clean and safe water for communities.',
  },
  {
    id: 3,
    title: 'Effluent Treatment Plant',
    image: img7, // Update with actual path
    price: '₹ 1,49,999/ piece',
    usage: 'Effluent Treatment',
    waterSource: 'Industrial Waste',
    capacity: '50KLD',
    deliveryLocation: 'Pan India',
    industry: 'Customized',
    origin: 'Made in India',
    description: 'The Effluent Treatment Plant is built to process industrial waste and ensure compliance with environmental regulations.',
  },
  {
    id: 4,
    title: 'Water Softener Plant',
    image: img3, // Update with actual path
    price: '₹ 50,000/ Unit',
    usage: 'Industrial Water Softening',
    waterSource: 'Borewell Water',
    capacity: 'Customized',
    deliveryLocation: 'Pan India',
    industry: 'Customized',
    origin: 'Made in India',
    description: 'We have carved a niche amongst the most trusted names in this business, engaged in offering comprehensive range of Water Softener Plant.',
  },
  {
    id: 5,
    title: 'Commercial RO Plant',
    image: img4, // Update with actual path
    price: '₹ 55,000/ Unit',
    usage: 'Water Purification',
    waterSource: 'Customized',
    capacity: 'Customized',
    deliveryLocation: 'Pan India',
    industry: 'Customized',
    origin: 'Made in India',
    description: 'To meet the various requirements of the customers, we are involved in offering a wide assortment of Commercial RO Plant.',
  },
  {
    id: 6,
    title: 'RO Plant Installation Service',
    image: img5, // Update with actual path
    price: '₹ 30,000',
    usage: 'RO Purification Installation',
    serviceLocation: 'Delhi NCR',
    installationDuration: '1 Week',
    installationType: 'Wall Mounted',
    origin: 'Made In India',
    description: 'Enriched by our vast industrial experience in this business, we are involved in offering an enormous quality range of RO Plant Installation Service.',
  },
  {
    id: 7,
    title: 'Water Softener Plant Installation Service',
    image: img6, // Update with actual path
    price: '₹ 25,000',
    usage: 'Water Softener Installation',
    serviceLocation: 'Delhi NCR',
    plantCapacity: 'Customized',
    automationGrade: 'Manual, Semi, Fully Automatic',
    origin: 'Made In India',
    description: 'Owing to the wide experience in this domain, we are instrumental in offering Water Softener Plant Installation Service.',
  }
];

const ProgramDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className='prod'>
    <Navbar/>
      <div className="program-details-container">
        {programsData.map((program) => (
          <div className="program-detail" key={program.id}>
            <img src={program.image} alt={program.title} className="program-detail-image" />
            <div className="program-detail-content">
              <h1>{program.title}</h1>
              <p><strong>Price:</strong> {program.price}</p>
              <p><strong>Usage/Application:</strong> {program.usage}</p>
              {program.waterSource && <p><strong>Water Source:</strong> {program.waterSource}</p>}
              {program.capacity && <p><strong>Capacity:</strong> {program.capacity}</p>}
              {program.deliveryLocation && <p><strong>Delivery Location:</strong> {program.deliveryLocation}</p>}
              {program.industry && <p><strong>Industry:</strong> {program.industry}</p>}
              {program.origin && <p><strong>Country of Origin:</strong> {program.origin}</p>}
              {program.description && <p>{program.description}</p>}
            </div>
          </div>
        ))}
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ProgramDetails;
