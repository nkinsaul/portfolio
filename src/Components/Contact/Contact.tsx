import React, { useState, useRef, FormEvent } from "react";
import "./Contact.css"
import emailjs from '@emailjs/browser'; 

const Contact = () => {

  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    if (form.current) {
      emailjs.sendForm('service_w30o2kn', 'template_g7f0cpy', form.current, 'EDNmkzdT1UstQ_ELu')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text)
      })
    }
  }

  return (
    <div className="contact-page">
      <p>DO YOU WANT TO COLLABORATE ON A PROJECT?  SEND ME A MESSAGE AND I'LL GET BACK TO YOU AS SOON AS POSSIBLE</p>
      <form 
        className='contact-form' 
        onSubmit={event => {
          setMessage("")
          setName("")
          setEmail("")
          sendEmail(event)}}
          ref={form}>
        <input 
          name='user_name'
          type='text'  
          placeholder='NAME' 
          className="name" 
          value={name} 
          onChange={e => setName(e.target.value)} required/>
        <input 
          name='user_email'
          type='email'  
          placeholder='EMAIL' 
          className="email"
          value={email}
          onChange={e => setEmail(e.target.value)} required/>
        <textarea 
          name="message"
          placeholder='MESSAGE' 
          className="message"
          value={message}
          onChange={e => setMessage(e.target.value)} required/>
        <input 
          type='submit' 
          value='SEND' 
          className="submit"/>
      </form>
    </div>
    
  )
}

export default Contact;