import { useState } from "react";
import emailjs from "@emailjs/browser";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "../../bot/config.js";
import MessageParser from "../../bot/MessageParser.js";
import ActionProvider from "../../bot/ActionProvider.js";

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
  const [messageArea, setMessageArea] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs
      .sendForm("####", "####", e.target, "####")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmitt = (e) => {
    e.preventDefault();
    setMessage(true);

    console.log(messageArea);
  };

  return (
    <div className="contact" id="contact">
      <div className="socials__acc">
        <div className="links github">
          <a
            href="https://github.com/Makariuz"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <AiFillGithub />
            <span> github</span>
          </a>
        </div>
        <div className="links twitter">
          <a
            href="https://twitter.com/therealmakariuz"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <AiFillTwitterCircle />
            <span> twitter</span>
          </a>
        </div>
        <div className="links codepen">
          <a
            href="https://codepen.io/makariuz"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <AiFillCodepenCircle />
            <span>codepen</span>
          </a>
        </div>

        <div className="links coffee">
          <a
            href="https://www.buymeacoffee.com/samueleduardo"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <AiOutlineCoffee />
            <span>buy me a coffee</span>
          </a>
        </div>
      </div>

      <div className="contact__form">
        <h2>Ask me anything.</h2>

        <form onSubmit={handleSubmitt}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />

          <input
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <textarea
            name="message"
            value={messageArea}
            onChange={(e) => setMessageArea(e.target.value)}
            placeholder="Message"
            rows="4"
          />
          <button type="submit" disabled={filled && (messageArea.length === 0)}>
            {" "}
            Send
          </button>
          {message && <span>Thanks, I will reply soon!</span>}
        </form>
      </div>

      <div className="socials__mobile">
        <a href="https://github.com/Makariuz" target="_blank" rel="noreferrer">
          {" "}
          <AiFillGithub />{" "}
        </a>
        <a
          href="https://twitter.com/therealmakariuz"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <AiFillTwitterCircle />{" "}
        </a>
        <a href="https://codepen.io/makariuz" target="_blank" rel="noreferrer">
          {" "}
          <AiFillCodepenCircle />{" "}
        </a>
        <a
          href="https://www.buymeacoffee.com/samueleduardo"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <AiOutlineCoffee />{" "}
        </a>
      </div>
    </div>
  );
}
