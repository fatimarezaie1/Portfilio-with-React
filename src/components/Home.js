import React from "react";
import { Link } from "react-router-dom";
export default function Home(){
  const style ={
    color:'red'
  }
return(
  <div className="main-page container">
      <h1 className="name "> David  <span style={style}>Parker</span></h1>
      <h3 data-text="FrontendDesigner" className="job">Frontend Designer</h3>
      <Link to='/contact'><button className="btn-home">Learn More</button></Link>
           
  </div>
)
}