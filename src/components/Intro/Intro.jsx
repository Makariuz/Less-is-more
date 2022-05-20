import "./Intro.scss";

import { init } from "ityped";
import { useEffect, useRef } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaRegHandPointer } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";

import me from '../images/logoofme.png'

export function Intro({ aboutMe, setAboutMe, dark, setDark }) {
  /*  const textRef = useRef()

    useEffect(()=> {
        init(textRef.current, { showCursor: true, backDelay: 1500, backSpeed: 60, strings: ['Web Developer.', 'Musician.' ] })
    }, []) */

  return (
    <div className="intro" id="intro">
      <div className="left">
       
        <div className={"imgContainer " + (dark && ' dark')}>
           <img src={me} alt="" />
        </div>
      </div>
      <div className="right">
        <div className={"wrapper " + (aboutMe && " hide ") + (dark && ' dark')}>
          <h2>Hi there,</h2>
          <h1>I'm Sam.</h1>
          <h3>
            MERN stack <span> Developer. </span>
          </h3>
          <p onClick={() => setAboutMe(!aboutMe)}>
            read about me.
            <FaRegHandPointer className="click__arrow" />
          </p>
        </div>
        <div className={"about__me " + (aboutMe && " hide ") + (dark && ' dark')}>
          <h2>Hey,</h2>
          <h4>
            My name is <span> Samuel Eduardo. </span>
          </h4>
          <hr />
          <div className="about__me__p">
          <p onClick={() => setAboutMe(!aboutMe)}>
           
            I'm an aspiring MERN Stack Developer that has decided to make a
            career change into Web Development. I'm a teachable learner that
            enjoys new challenges and positive surroundings.
          </p>

                   <p>

            I have a background in customer service & coaching which has helped
            my soft skills and get the best out of people. I look forward to
            your contact.
          </p>
          </div>
          <div className="about__me__p_mobile" onClick={() => setAboutMe(!aboutMe)}> 
            <p>   I'm an aspiring MERN Stack Developer that has decided to make a
            career change into Web Development.</p>
          </div>
          <button onClick={() => setAboutMe(!aboutMe)}>Go back</button>
        </div>
        <a href="#projects">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
