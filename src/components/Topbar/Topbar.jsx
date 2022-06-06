import "./Topbar.scss";
import { AiFillMail } from "react-icons/ai";
import { BsPersonFill, BsCodeSlash } from "react-icons/bs";
import { useState } from "react";

export function Topbar({ menuOpen, setMenuOpen, dark, setDark}) {
  const handleMenuShow = () => {
    setMenuOpen((previousState) => {
      return !previousState;
    });
  };

 


  return (
    <div className={"topbar " + (menuOpen && "active") + (dark && ' dark')}>
      <div className="wrapper">
        <div className="left">

        <label className="switch">
          <input type="checkbox"  onChange={() => setDark(!dark)} placeholder='x'/>
          
          <span className="slider round"></span>
        </label>

        <ul className={'menuOptions' + (dark && " dark")}>
        <a href="#intro">  <li>about</li> </a>
        <a href="#projects">   <li>projects</li> </a>
        <a href="#hobbies">   <li>music</li> </a>
        <a href="#contact">   <li>contact</li> </a>
          </ul>

         
        </div>

        <div className="right">
          <div
            className={"hamburger " + (dark && ' dark')}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line2"></span>
          </div>
        </div>
      </div>
      <div className={'border__bottom ' + (dark && ' dark')}></div>
    </div>
  );
}
