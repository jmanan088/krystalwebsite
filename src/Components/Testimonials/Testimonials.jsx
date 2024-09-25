import React, { useRef, useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png'; // default images
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    // Default testimonials data
    const initialTestimonials = [
        {
            name: "Riya Singh",
            company: "Delhi",
            text: "We availed Krystal Fluid Systems' RO Plant Installation Service, and it was done efficiently within the promised timeframe. The quality of service was top-notch, and their team was very responsive to our queries. While everything went smoothly, the installation did take a day longer than expected.",
            image: user_1
        },
        {
            name: "Vanshaj Mathur",
            company: "Patna",
            text: "Krystal Fluid Systems provided us with a top-quality water softener plant for our factory. From the initial consultation to the installation process, their team was extremely professional and efficient. The water quality has improved significantly, and we are very satisfied with the performance of the plant.",
            image: user_2
        },
        {
            name: "Anjali Mehta",
            company: "Patna",
            text: "Krystal Fluid Systems helped us set up an effluent treatment plant for our industrial unit. They provided a customized solution that perfectly suited our requirements. The plant is functioning flawlessly, and their after-sales support has been excellent. I appreciate their dedication to customer satisfaction.",
            image: user_3
        },
        {
            name: "Amrita Singh",
            company: "Gujrat",
            text: "Our experience with Krystal Fluid Systems has been outstanding. We installed a commercial RO plant, and the results have exceeded our expectations. Their team is knowledgeable and guided us through the entire process, making sure we got the right system for our needs.",
            image: user_4
        }
    ];

    // Use state to manage testimonials and form inputs
    const [testimonials, setTestimonials] = useState(initialTestimonials);
    const [newTestimonial, setNewTestimonial] = useState({
        name: '',
        company: '',
        text: '',
        image: null
    });

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTestimonial(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setNewTestimonial(prevState => ({
                    ...prevState,
                    image: reader.result // Store image as base64 string
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddTestimonial = (e) => {
        e.preventDefault();
        // Add a new testimonial
        const image = newTestimonial.image ? newTestimonial.image : user_1; // use default image if no image uploaded
        setTestimonials([...testimonials, { ...newTestimonial, image }]);
        // Clear the form fields after submission
        setNewTestimonial({ name: '', company: '', text: '', image: null });
    };

    return (
        <div className='testimonials'>
            {/* Slider Navigation */}
            <img src={next_icon} alt='Next' className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt='Back' className='back-btn' onClick={slideBackward} />

            {/* Slider with testimonials */}
            <div className='slider'>
                <ul ref={slider}>
                    {testimonials.map((testimonial, index) => (
                        <li key={index}>
                            <div className='slide'>
                                <div className='user-info'>
                                    <img src={testimonial.image} alt={testimonial.name} />
                                    <div>
                                        <h3>{testimonial.name}</h3>
                                        <span>{testimonial.company}</span>
                                    </div>
                                </div>
                                <p>{testimonial.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Form to add a new testimonial */}
            <div className='testimonial-form'>
                <h3>Add a New Testimonial</h3>
                <form onSubmit={handleAddTestimonial}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={newTestimonial.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Location"
                        value={newTestimonial.company}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="text"
                        placeholder="Testimonial"
                        value={newTestimonial.text}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <button type="submit">Add Testimonial</button>
                </form>
            </div>
        </div>
    );
};

export default Testimonials;
