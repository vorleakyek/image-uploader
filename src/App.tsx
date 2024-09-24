import React from 'react';
import logo from './logo.svg';
import { FaWebflow } from "react-icons/fa6";
import flag from "./img/canada-flag-icon.svg";

import './App.css';
import coverImage from './img/cover.jpg';
import profile from './img/pika.png';


function App() {
  return (
    <div>
      <header>
        <div className="header-container">
          <div className="background">
            <img className="background-img" src={coverImage} alt="background image" />
          </div>
          <div className='profile'>
            <img src={profile} alt="image profile" />
          </div>
        </div>
        <div className="header-details">
          <div className='detais-info'>
            <h2 className="profile-name">Leslie Waller</h2>
            <div className="flex">
              <div className="username div-with-dot-lg-screen">
                <p>@lesliewaller</p>
              </div>
              <div className="title">
                <p>Senior Product Designer</p>
              </div>
              <div className="flex-row">
                <div className="workplace div-with-dot">
                  <p> <span className="gray">at</span> <FaWebflow className="work-icon"/> Webflow </p>
                </div>
                <div className="gender gray">
                  <p>She/Her</p>
                </div>
              </div>

            </div>

           <div>
              <p className="mt-0 gray">
                <img src={flag} alt="flag" className="flag"/>
                Vancouver, Canada</p>
           </div>

          </div>


        </div>
      </header>
    </div>
  );
}

export default App;
