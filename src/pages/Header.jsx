import React from "react";
import logo from "./steeptrye_logopng.png"
import './Header.css'

const Header = () => {
  return (
    <div className=" text-red sticky">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/"   style={{fontFamily:'Abril Fatface', marginLeft: 2,}}>
          <img
            src={logo}
            width="30"
            height="30"
            alt="#"
           className="mr-2"
          />
         Steep Tyres 
        </a>
       <div> 
           <h3 className="contact">Call and book an appointment today: <p style={{color: "red"}}>0469291515</p></h3>
       </div>
      </nav>
    </div>
  );
};

export default Header;
