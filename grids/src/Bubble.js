import React from 'react'

export default function() {
 const click = ()=>{
    console.log("outer div is clicked")
 }

 const clickInner = (e)=>{
    console.log("inner div is clicked");
    // e.stopPropgation();
 }
  return (
    <div id='outer' style={{width: "300px", height: "100px", backgroundColor: 'orange'}} onClick={click}>
        <div id='inner' style={{width:'150px' , height:'50px', backgroundColor: 'purple'}} onClick={(e) => clickInner}>click me</div>
    </div>
  )
}
