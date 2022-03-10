import React from 'react';
import './App.css';
import Contact from "./Contact";
import Personal from "./Personal";
import CharacterRef from './CharacterRef';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Seminars from './Seminars';
import Skills from './Skills';
import Awards from './Awards';

class App extends React.Component{
  render(){
    const h4style={
      fontSize:22
  };
    return(
      
       <div class="resume-wrapper">
 <section class="profile section-padding">
 <div class="container">
      <Contact/>
      <Personal/>  
      <CharacterRef/>
 </div>
 </section>
  <section class="experience section-padding">
   <h3 class="experience-title">Work Experience</h3>
      <div class="experience-wrapper">
          <WorkExperience/>
        <h3 class="experience-title">Education</h3>
            <div class="job-wrapper clearfix">
            <Education/>
            <Seminars/>
           </div>   
     </div>
       <Skills/>
      <Awards/>
  </section>
</div>
    );
  }
}
export default App;
