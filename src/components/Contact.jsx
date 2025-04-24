import React, { useState } from 'react';
// import Scom from './Scom';
import PageLayout from './PageLayout';
import '../assets/css/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    console.log(formData);
  };

  return (
    <PageLayout title="CONTACT ME">
      <section className="contact">
        <div className="text">
          <p>
            "If you have any questions, suggestions, or just want to get in touch,
            please feel free to reach out. Simply fill out the form below, and I'll get
            back to you as soon as possible. I'm always happy to connect and
            hear from you!"
            <i className="fa-solid fa-heart"></i>
          </p>
          {/* <Scom /> */}
          </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea 
              id="message" 
              cols="5" 
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Message</button>
        </form>
      </section>
    </PageLayout>
  );
};

export default Contact;