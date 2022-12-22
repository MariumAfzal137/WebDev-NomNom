import React from 'react'

import Header from './Header';

const AboutUs = () => {
  return (
      <>
 <Header/>
    <div style={{width:100+"%", display: 'block'}}>
       <img id="aboutus" src="aboutus2.jpeg" style={{width:100+"%"}}/>
    </div>
       <text style={{fontSize:90+"px", top: 13.5+"cm",left: 2.5+"cm", position:'absolute',color:'#E4E4E4'}}>About Us  </text>
       <text style={{fontType:'Arial',fontSize:23+"px", left: 2.5+"cm", right: 2.5+"cm",position:'absolute',letterSpacing:2,color:'grey', alignContent:'justify'}}>
            <br></br>
            <br></br>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <br></br><br></br>
        </text>

</>
  )
}

export default AboutUs