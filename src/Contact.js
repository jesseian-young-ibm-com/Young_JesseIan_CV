import React from "react";
import Img from "./images/IanPicture.jpg";
import Graphic from "./Graphic";
import Cp from "./images/Phone.png";
import Email from "./images/Email.png";
import Linkedin from "./images/Linkedin.png";
import { ExternalLink } from 'react-external-link';

class Contact extends React.Component{
    render(){
        return(
          <div>
           <div class="picture-resume-wrapper">
        <div class="picture-resume">
        <span><img src={Img} alt="pic"/></span>
        <Graphic/>
      </div>
 </div>
      <div class="name-wrapper">
        <h1>JESSE IAN R.<br/>YOUNG</h1>
      </div>
      <div class="clearfix"></div>
      <div class="contact-info clearfix">
       <ul class="nobulletlist-titles">
       <li>Phone number</li>
       <li>Email</li>
       <li>Linkedin</li>
       <li>Address</li>
       </ul>
        <ul class="nobulletlist-content">

         <li> <img src={Cp} alt="pic" width="20" height="20" /> &nbsp; +639168950636</li> 
         <li><img src={Email} alt="email" width="20" height="20" /> jesseianyoung@yahoo.com</li> 
         <li><img src={Linkedin} alt="linkedin" width="20" height="20" /> &nbsp;
         <ExternalLink href={"https://linkedin.com/in/jesse-ian-young-533b051b6"}>Jesse Ian Young</ExternalLink></li>
         <li>Quezon City, Philippines</li> 
        </ul>
        
      </div> <br/> 
        </div>
        );
    }
}
export default Contact;