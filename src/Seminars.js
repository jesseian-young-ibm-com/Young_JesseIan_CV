import React from 'react';

class Seminars extends React.Component{
    render(){
        return(
            <div>
                 <h3 class="seminars-title">Events & Seminars Attended</h3>
             <ul>
              <li> JavaScript Workshop (2021)</li> 
               <li>AI Application Webinar (2021)</li>
               <li>Coding COBOL Webinar (2020)</li>
             </ul>
            </div>
        );
    }
}

export default Seminars;