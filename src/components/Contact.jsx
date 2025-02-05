import React, { useState,useEffect,useRef } from 'react'
import emailjs from "@emailjs/browser"

function Contact() {
  const [submitStatus, setSubmitStatus] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    if(validateEmail(e.target[1].value)){
       emailjs.sendForm('service_z8fzfsi', 'foodmood_contact_form', form.current, {
        publicKey: 'q0HV_FVTfQmACHdxv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Thank you for your message. I will get back to you soon!');
          setSubmitStatus(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Email service seems down. Please contact me on Linkedin');
          setSubmitStatus(false);
        },
      );
    }
        
  }

  const validateEmail = (email) => {
    let validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.match(validRegex)) {
      // Valid email address
      setEmailError("");
      return true;
    } else if (email === "") {
      setEmailError("Email is empty!");
      return false;
    } else {
      // Invalid email address
      setEmailError("Invalid email address!");
      return true;
    }   };

  return (
    <div className='contact-container-main w-full bg-gray-200 dark:bg-gray-900 dark:text-white min-h-screen flex flex-wrap justify-evenly items-center text-center'>

     <div className='contact-profile m-5 py-5 px-2 flex flex-col justify-evenly items-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg'>
      
      <h1 className='text-center text-2xl'>About Me</h1>

      <div className='profile-user-card mt-5 flex flex-col justify-between items-center gap-5'>
      <a href="https://github.com/pavansingh888" target="_blank" rel="noopener noreferrer"><img className="profile-user-img w-[180px] rounded-full m-[5px] " src="https://avatars.githubusercontent.com/u/93345404?v=4" alt="Pavan Singh" title="Pavan Singh"/></a>
      <p className='profile-user-bio text-center mx-[10px]'>JavaScript | React.js | Node.js | Express.js | MongoDB | Backend Developer</p>
      <div className='social-media-container flex flex-wrap w-full justify-center gap-2 mx-[10px] '>
          <a href='https://www.linkedin.com/in/-pavansingh/' rel='noreferrer noopener' target='_blank' title='Follow me on Linkedin' className='icon-button-linkedin mx-[10px] rounded-full '>
            <i>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52" height="52" viewBox="0 0 48 48">
<path fill="#0078d4" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path d="M30,35v-9c0-1.103-0.897-2-2-2s-2,0.897-2,2v9h-6V18h6v1.027C27.04,18.359,28.252,18,29.5,18	c3.584,0,6.5,2.916,6.5,6.5V35H30z M13,35V18h2.966C14.247,18,13,16.738,13,14.999C13,13.261,14.267,12,16.011,12	c1.696,0,2.953,1.252,2.989,2.979C19,16.733,17.733,18,15.988,18H19v17H13z" opacity=".05"></path><path d="M30.5,34.5V26c0-1.378-1.121-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v8.5h-5v-16h5v1.534	c1.09-0.977,2.512-1.534,4-1.534c3.309,0,6,2.691,6,6v10H30.5z M13.5,34.5v-16h5v16H13.5z M15.966,17.5	c-1.429,0-2.466-1.052-2.466-2.501c0-1.448,1.056-2.499,2.511-2.499c1.436,0,2.459,1.023,2.489,2.489	c0,1.459-1.057,2.511-2.512,2.511H15.966z" opacity=".07"></path><path fill="#fff" d="M14,19h4v15h-4V19z M15.988,17h-0.022C14.772,17,14,16.11,14,14.999C14,13.864,14.796,13,16.011,13	c1.217,0,1.966,0.864,1.989,1.999C18,16.11,17.228,17,15.988,17z M35,24.5c0-3.038-2.462-5.5-5.5-5.5	c-1.862,0-3.505,0.928-4.5,2.344V19h-4v15h4v-8c0-1.657,1.343-3,3-3s3,1.343,3,3v8h4C35,34,35,24.921,35,24.5z"></path>
</svg>
          </i>
          </a>
          <a href='https://github.com/pavansingh888' rel='noreferrer noopener' target='_blank' title='Follow me on Github' className='icon-button-github mx-[10px] bg-white rounded-full  '>
            <i >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<path d="M 24 4 C 19.963209 4 16.192498 5.2011807 13.046875 7.2636719 A 1.50015 1.50015 0 1 0 14.691406 9.7714844 C 17.365783 8.0179755 20.556791 7 24 7 C 33.406292 7 41 14.593708 41 24 C 41 26.707746 40.36968 29.257322 39.248047 31.525391 A 1.5001887 1.5001887 0 0 0 41.9375 32.855469 C 43.257867 30.185538 44 27.174254 44 24 C 44 12.972292 35.027708 4 24 4 z M 15.800781 13.076172 C 14.472781 15.202172 15.273563 17.527813 15.726562 18.507812 C 14.637562 19.788813 14 21.334 14 23 C 14 26.78 17.280547 29.939391 21.685547 30.775391 C 20.376547 31.448391 19.399609 32.67225 19.099609 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043156 38.12245 7 31.665102 7 24 C 7 21.314402 7.6195896 18.783427 8.7246094 16.529297 A 1.50015 1.50015 0 0 0 7.4492188 14.351562 A 1.50015 1.50015 0 0 0 6.03125 15.208984 C 4.7302698 17.862854 4 20.851598 4 24 C 4 35.027708 12.972292 44 24 44 C 28.472909 44 32.618147 42.525863 35.951172 40.039062 A 1.5009817 1.5009817 0 1 0 34.15625 37.632812 C 32.617628 38.780793 30.876119 39.662932 29 40.240234 L 29 35.136719 C 29 33.228719 27.902453 31.591391 26.314453 30.775391 C 30.719453 29.939391 34 26.78 34 23 C 34 21.426 33.423406 19.961609 32.441406 18.724609 C 32.883406 17.356609 33.371219 14.953172 32.199219 13.076172 C 29.948219 13.076172 28.469672 14.622797 27.763672 15.591797 C 26.601672 15.213797 25.333 15 24 15 C 22.667 15 21.398328 15.213797 20.236328 15.591797 C 19.530328 14.622797 18.052781 13.076172 15.800781 13.076172 z"></path>
</svg>
          </i>
          </a>
        </div>
      </div>

     </div>
      
      
     <div className="contact-form flex flex-col justify-evenly items-center m-5 py-5 px-2 w-[250px] ">
      <h1 className='text-center text-2xl'>Contact us</h1>
      <form onSubmit={handleSubmit} ref={form} id="contactForm" className='flex flex-col justify-evenly items-center mt-[10px]gap-5 m-3 w-full'>
        <input type="text" placeholder="Name" id='name' name='name' required className='m-[10px] p-[10px] border rounded-lg dark:bg-gray-800 w-full outline outline-1 focus:outline-orange-600 '/>
        <input type="email" placeholder="Email" id='email' name='email' required className='m-[10px] p-[10px] border rounded-lg dark:bg-gray-800 w-full outline focus:outline-orange-600 outline-1'/>
        {emailError && (
        <p className="email-error-message text-red-500 font-medium">{emailError}</p>)}
        <input type="text" placeholder="Subject" id='subject' name='subject' required className='m-[10px] p-[10px] border rounded-lg dark:bg-gray-800 w-full outline outline-1 focus:outline-orange-600 '/>
        <textarea placeholder="Type your Message here..." id="message" name="message" required className='m-[10px] p-[10px] border rounded-lg dark:bg-gray-800 w-full outline focus:outline-orange-600 outline-1'></textarea>
        <button type="submit" className='my-3 py-3 px-2 mx-2 w-full bg-orange-500 rounded-lg text-base hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500' >Submit</button>
        {submitStatus && <span className='form-notification'>Please contact me on Linkedin. Thankyou for visiting!</span> }

        </form>
        </div>

      </div>
  )
}

export default Contact