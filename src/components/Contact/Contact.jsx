import { useState } from "react";
import emailjs from "@emailjs/browser";


import {
  AiFillCodepenCircle,
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineCoffee,
} from "react-icons/ai";

import "./Contact.scss";

export function Contact() {
  const [message, setMessage] = useState(false);
  const [filled, setFilled] = useState(true);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs
      .sendForm(
        "service_sv14q44",
        "template_l7i0iqd",
        e.target,
        "uKw7PIUveGzs75qNQ"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };



  return (
    <div className="contact" id="contact">
      <div className="socials__acc">
        <div className="links github">
        <a href="https://github.com/Makariuz" target= '_blank' rel="noreferrer"> <AiFillGithub /> 
          <span> github</span> 
          </a>  
        </div>
        <div className="links twitter">
        <a href="https://twitter.com/therealmakariuz" target= '_blank' rel="noreferrer">   <AiFillTwitterCircle /> 
          <span> twitter</span>
          </a> 
        </div>
        <div className="links codepen">
        <a href="https://codepen.io/makariuz" target= '_blank' rel="noreferrer">   <AiFillCodepenCircle /> 
          <span>codepen</span>
          </a> 
        </div>

        <div className="links coffee">
        <a href="https://www.buymeacoffee.com/samueleduardo" target= '_blank' rel="noreferrer"> <AiOutlineCoffee />
        <span>buy me a coffee</span>
        </a>
        </div>
      </div>

      <div className="contact__form">
        <h2>Ask me anything.</h2>
        <form onSubmit={handleSubmit}>
          {/* <label>Name</label> */}
          <input type="text" name="name" placeholder="Name" />
          {/*  <label>Email</label> */}
          <input
            type="email"
            name="user_email"
            onChange={() => setFilled(!filled)}
            placeholder="Email"
          />
          {/* <label>Message</label> */}
          <textarea name="message" placeholder="Message" rows="4" />
          <button type="submit" disabled={filled}>
            {" "}
            Send
          </button>
          {message && <span>Thanks, I will reply soon!</span>}
        </form>
      </div>

      <div className="socials__mobile">
      <a href="https://github.com/Makariuz" target= '_blank' rel="noreferrer"> <AiFillGithub /> </a>  
      <a href="https://twitter.com/therealmakariuz" target= '_blank' rel="noreferrer">   <AiFillTwitterCircle /> </a> 
      <a href="https://codepen.io/makariuz" target= '_blank' rel="noreferrer">   <AiFillCodepenCircle /> </a> 
      <a href="https://www.buymeacoffee.com/samueleduardo" target= '_blank' rel="noreferrer"> <AiOutlineCoffee /> </a>
      </div>
    </div>
  );
}
