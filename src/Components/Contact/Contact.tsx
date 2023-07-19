import React, { useState, useRef, FormEvent } from "react";
import "./Contact.css"
import emailjs from '@emailjs/browser'; 

const Contact = () => {

  const form = useRef<any>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    emailjs.sendForm('service_w30o2kn', 'template_g7f0cpy', form.current, 'EDNmkzdT1UstQ_ELu')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text)
    })
  }

  

  return (
    
    <form 
      className='contact-form' 
      onSubmit={event => sendEmail(event)}
      ref={form}>
      <input 
        name='user_name'
        type='text'  
        placeholder='Name' 
        className="name" 
        value={name} 
        onChange={e => setName(e.target.value)}/>
      <input 
        name='user_email'
        type='email'  
        placeholder='Email' 
        className="email"
        value={email}
        onChange={e => setEmail(e.target.value)}/>
      <textarea 
        name="message"
        placeholder='Message' 
        className="message"
        value={message}
        onChange={e => setMessage(e.target.value)}/>
      <input 
        type='submit' 
        value='Send' 
        className="submit"/>
    </form>
    
  )
}

export default Contact;






// <form className="form">
    //   <h1>Please Reach Out!</h1>
    //   <div className="form-inputs">
    //     <input 
    //       className="name"
    //       type="text"
    //       name="user_name"
    //       placeholder="Name"
    //       value={name}
    //       onChange={e => setName(e.target.value)}
    //     />
    //     <input 
    //       className="email"
    //       type="text"
    //       name="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={e => setEmail(e.target.value)}
    //     />
    //     <input 
    //       className="message"
    //       type="text"
    //       name="message"
    //       placeholder="Message"
    //       value={message}
    //       onChange={e => setMessage(e.target.value)}
    //     />
    //     <input 
    //       type="hidden"
    //       name="contact_number"
    //       value={contactNumber}
    //     />
    //   </div>
    // </form>