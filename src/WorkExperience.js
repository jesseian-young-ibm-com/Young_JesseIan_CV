import React from 'react';
class WorkExperience extends React.Component{
    render(){
        return(
            <div>
                <div class="company-wrapper clearfix">
       <div class="experience-title">Trend Micro Inc.</div> 
          <div class="time">February 2022 - Present</div> 
       </div>
        <div class="job-wrapper clearfix">
         <div class="experience-title">Threat Hunting Intern </div> 
          <div class="company-description">
            <ul>
              <li>Responsible in providing assistance in sourcing and identifying malicious </li>
              <li>Phishing and Scam sourcing detection</li>
              <li>Analyzing Threats using an Automated Python Tools</li>
            </ul> 
          </div>
        </div>
        
        <div class="company-wrapper clearfix">
       <div class="experience-title">Veridata Networks, Inc.</div> 
          <div class="time">February - March 2018</div> 
       </div>
        
         <div class="job-wrapper clearfix">
         <div class="experience-title">Business Process Assistant Analyst (Internship)</div> 
          <div class="company-description">
            <ul>
             <li> Responsible for analyzing the people and its transactions, their organization and their degree of involvement.</li> 
              <li>Responsible for understanding the documents required and produced for every steps of the process.
              </li>
              <li>Responsible for designing the detailed organization charts, document descriptions and the step-by-step workflow of the project.
                </li>
            </ul>
          
          </div>
        </div>
            </div>
        );
    }
}
export default WorkExperience;