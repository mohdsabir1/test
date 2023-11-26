import React, { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (formData.name.trim() === '') {
      setErrors({ ...errors, name: true });
      return;
    } else {
      setErrors({ ...errors, name: false });
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrors({ ...errors, email: true });
      return;
    } else {
      setErrors({ ...errors, email: false });
    }
    if (formData.message.trim() === '') {
        setErrors({ ...errors, message: true });
        return;
      } else {
        setErrors({ ...errors, message: false });
      }
  
      alert("Thank you for your message!");
    console.log('Form data:', formData);
    setFormData({
        name: '',
        email: '',
        message: ''
      });
  };

  return (
    <>
      <div>
        <div className='md:text-4xl md:font-semibold md:mt-11 text-textcolor text-center '>
          <h1 className=' md:text-4xl uppercase mt-5 text-2xl font-semibold'> Let's Talk</h1>
        </div>

        <div className=' mt-10 md:text-start text-center p-5'>
          <div className='md:w-96 md:h-max border-2 md:mx-auto '>
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" onSubmit={handleSubmit} >
            <input type="hidden" name='form-name' value='contact' />
              <div className='md:mt-4 py-2'>
                <label className='md:ml-14 md:text-lg font-semibold' htmlFor="Name">Name</label><br />
                <input
                  className={`md:ml-14 p-1 md:w-60 bg-transparent border-b-2 mt-2 text-textcolor font-semibold ${errors.name ? 'border-textcolor' : ''}`}
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <p className='text-textcolor text-center'>Please enter your name.</p>}
              </div>
              <div className='md:mt-4 py-2'>
                <label className='md:ml-14 md:text-lg font-semibold' htmlFor="Email">Email</label><br />
                <input
                  className={`md:ml-14 p-1 md:w-60 bg-transparent border-b-2 mt-2 text-textcolor font-semibold ${errors.email ? 'border-textcolor' : ''}`}
                  type="email"
                  name="email"
                  id='email'
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p className='text-textcolor text-center'>Please enter a valid email address.</p>}
              </div>
              <div className='md:mt-4 py-2'>
                <label className='md:ml-14 md:text-lg font-semibold' htmlFor="Message">Message</label><br />
                <textarea
                  className='md:ml-14 p-1 md:w-60 bg-transparent border-2 mt-2 text-textcolor font-semibold resize-none'
                  cols="30"
                  rows="3"
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                {errors.email && <p className='text-textcolor text-center'>Please enter a valid email address.</p>}
              </div>
              <div className="text-center mb-3">
                <button className='border-2 p-2 md:w-20 rounded-xl md:mt-5' type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
