import React from 'react';

class CharacterRef extends React.Component{
    render(){
        const h4style={
            fontSize:22
        };
        return(
            <div>
               <h4 class="bold" style={h4style}>Character References</h4>

<ul style={{listStyleType: "none"}}>
  <li ><strong>AMA University Professor</strong></li>
  <li>Geovanni Jomac</li>
  <li>geojomoc33@gmail.com</li>
  <li>09606325975</li>
</ul>

<ul style={{listStyleType: "none"}}>
  <li ><strong>UST-CICS Professor</strong></li>
  <li>Aldrin Sy</li>
  <li>aldrin.sy@yaho.com</li>
  <li>09157657498</li>
</ul>

<ul style={{listStyleType: "none"}}>
  <li ><strong>UST-CICS Professor</strong></li>
  <li>Edwin Torralba</li>
  <li>edwinmtorralba@gmail.com</li>
  <li>1 671 797 7773</li>
</ul> 
            </div>
        );
    }
}
export default CharacterRef;