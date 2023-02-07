import React from "react";

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const color = (WappedComponent)=>{
    const randomcolor = getRandomColor();
    return (props)=>(
        <div style={{color:randomcolor}}>
            <WappedComponent {...props}/>
        </div>
    )
}
export default color;