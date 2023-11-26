import React from 'react'
import {useState, useEffect} from 'react'

const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({
            ...formData, 
            [name]: value
        })
    }
    const [errors, setErrors] = useState({})
    const validate = (formData) => {
        let formErrors = {}
        if(!formData.name){
            formErrors.name = "Name required *"
        }
        if(!formData.email){
            formErrors.email = "Email required *"
        } 
        if(!formData.message){
            formErrors.message = "Message is required *"
        }
        return formErrors
    }

    const [isSubmitted, setIsSubmitted] = useState(false)
    
    const handleSubmit = e => {
        e.preventDefault();
        const formErrors = validate(formData);
        setErrors(formErrors);
        if (Object.keys(formErrors).length === 0) {
          fetch("/.netlify/functions/contact", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
          })
            .then(() => {
              alert("Thank you for your message!");
              setIsSubmitted(true);
              setFormData({ name: "", email: "", message: "" });
            })
            .catch(error => alert(error));
        }
      };
    
    return (
        <>
        <div>
              <div className='md:text-4xl md:font-semibold md:mt-11 text-textcolor text-center '>
                <h1 className=' md:text-4xl uppercase mt-5 text-2xl font-semibold'> Let's Talk</h1>
            </div>

            <div className=' mt-10 md:text-start text-center p-5'>
                <div className='md:w-96 md:h-max border-2 md:mx-auto '>
                    <form name="contact"  data-netlify="true" onSubmit={handleSubmit}>
                         <div className='md:mt-4 py-2'>
                        <label className='md:ml-14 md:text-lg  font-semibold ' htmlFor="Email">Name</label><br />
                        <input className='md:ml-14 p-1 md:w-60  bg-transparent border-b-2 mt-2  text-textcolor font-semibold' type="text" 
                        name="name" 
                        id="name" 
                        value={formData.name} 
                        onChange={handleChange}
                         />
                         {errors.name && <p className='text-center text-textcolor font-semibold'>{errors.name}</p>}
                    </div>
                    <div className='md:mt-4 py-2'>
                        <label className='md:ml-14 md:text-lg font-semibold' htmlFor="Mobile">Email</label><br />
                        <input className='md:ml-14 p-1 md:w-60 bg-transparent border-b-2 mt-2 text-textcolor font-semibold'  type="email" 
                        name="email" 
                        id="email" value={formData.email} 
                        onChange={handleChange}
                         />
                         {errors.email && <p className='text-center text-textcolor font-semibold'>{errors.email}</p>}
                    </div>
                    <div className='md:mt-4 py-2'>
                        <label className='md:ml-14 md:text-lg font-semibold' htmlFor="Message">Message</label><br />
                        <textarea className='md:ml-14 p-1 md:w-60 bg-transparent border-2 mt-2 text-textcolor font-semibold resize-none'   cols="30" rows="3"  name="message" 
                        id="message" 
                         
                        value={formData.message} onChange={handleChange}  ></textarea>{errors.message && <p className='text-center text-textcolor font-semibold'>{errors.message}</p>}
                    </div>

                    <div className=" text-center  mb-3">
                        <button className='border-2 p-2 md:w-20 rounded-xl md:mt-5 ' type="submit">Send</button>
                    </div>
                    </form>
                   

           
                </div>
            </div>

        </div>
          
        </>

    )
}
