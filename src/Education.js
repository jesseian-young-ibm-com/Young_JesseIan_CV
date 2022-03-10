import React from 'react';

class Education extends React.Component{
    render(){
        return(
            <div>
                <div class="experience-title">University of Santo Tomas</div>
            <div class="time">February - March 2018</div>  
             <div class="company-description">
               <ul>
                <li> Bachelor of Science in Information Technology</li> 
                 <li>Major in Web and Mobile Application Development </li>
                 <li> Relevant Coursework: Operating System, Networking, Programming</li>
               </ul>
             
             </div>
             <div class="experience-title">AMA Computer College - Fairview Campus</div>
            <div class="time">June 2016 - April 2018</div>  
             <div class="company-description">
               <ul>
                <li> Information and Communications Technology (ICT) Strand</li> 
                 <li>Specialization in Programming </li>
               </ul>
               
             </div>
            </div>
        )
    }
}
export default Education;