import React, { useState } from "react";

import "./contact-center.styles.scss";

const ContactCenter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
     setEmail("");
     setName("");
     setMessage("");
  }
  return (
    <div className="contact-center">
      <h3>Get in touch</h3>
      <form onSubmit={handleSubmit}>
         <div className="form-group">
            <input
               onChange={(event) => setName(event.target.value)}
               type="text"
               name="name"
               placeholder="Name"
               className="form-control"
               value={name}
            />
            <input
               onChange={(event) => setEmail(event.target.value)}
               type="email"
               name="email"
               placeholder="Email"
               className="form-control"
               value={email}
            />
            <textarea
               onChange={event => setMessage(event.target.value)}
               name="message"
               rows="5"
               placeholder="Message"
               className="form-control"
               value={message}
            ></textarea>
         </div>
         <button className="submit-btn">submit here</button>
      </form>
    </div>
  );
};

export default ContactCenter;