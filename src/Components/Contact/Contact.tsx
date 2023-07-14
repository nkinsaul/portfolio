import { useState } from "react";
import "./Contact.css"

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className="form">
      <h1>Please Reach Out!</h1>
      <div className="form-inputs">
        <input 
          className="name"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input 
          className="email"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input 
          className="message"
          type="text"
          name="message"
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </div>
    </form>
  )
}

export default Contact;