import { useState, useRef } from "react";
import "./Contact.css"
import { init, sendForm } from 'emailjs-com';
init('service_w30o2kn'); 

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  return (
    <form className='contact-form'>
      <input type='text' name='user_name' placeholder='Name' className="name" />
      <input type='email' name='user_email' placeholder='Email' className="email"/>
      <textarea name='message' placeholder='Message' className="message"/>
      <input type='submit' value='Send' className="submit"/>
    </form>





    
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
  )
}

export default Contact;