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
        value='SEND' 
        className="submit"/>
    </form>
    
  )
}

export default Contact;