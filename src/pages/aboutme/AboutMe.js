
import React from "react";
import Navbar from "../../components/navbar/Nabvar";
import './AboutMe.css'

export default function AboutMe() {
  return (
    <div >
      <Navbar/>
      <div className="AboutMe">
        <h2>About Me</h2>
      </div>
      <div>
        <p>
          About me: I am a 20-year-old girl with higher aspirations, I have been
          programming for approximately 3 months, the language that I have
          learned so far is Javascript, HTML, CSS, the libraries that I use so
          far are React, I am quite self-taught, I like it a lot of reading,
          writing, I also really like creating page designs like hobbit
        </p>
      </div>
    </div>
  );
}
