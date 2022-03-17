import React from "react";
import {  MDBContainer } from "mdbreact";

const FooterPage = () => {
  return (
   
      <div className="footer-copyright text-center py-3" style={{backgroundColor: 'blue', position: 'sticky', bottom: 0}}>
        <MDBContainer fluid>
         {/*  &copy; {new Date().getFullYear()} Copyright:{" "} */}
          <a href="https://ningthangom.github.io/deploy-react-portfolio/  "style={{color: 'white'}}>Contact Angelo : 0421879175 for your website </a>
        </MDBContainer>
      </div>
    
  );
};

export default FooterPage;
