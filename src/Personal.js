import React from 'react';

class Personal extends React.Component{
    render(){
        const h4style={
            fontSize:22
        };
        return(
            <div>
                 <h4 class="bold" style={h4style}>Personal Information</h4>
        <table style={{width:"100%"}}>
          <tr class="black">
            <td>Birthdate</td>
            <td>Gender</td>
            <td>Religion</td>
          </tr>
          <tr>
            <td>31 July 1999</td>
            <td>Male</td>
            <td>Christian</td>
          </tr>
        </table> <br/>
            </div>
        );

    }
}
export default Personal;