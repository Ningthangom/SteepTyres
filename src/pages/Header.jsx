import React from "react";
import logo from "./steeptrye_logopng.png"


const Header = () => {
  return (
    <div className=" text-red">
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
           <p style={{ color: 'red'}}>Call and book an appointment today: 0469291515</p>
       </div>
      </nav>
    </div>
  );
};

export default Header;
