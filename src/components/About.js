import React from "react";

export default function About(){
    const style={
        color:'red'
    }
    return(
        <div style={{color:'gray'}} className="container about-container">
            <div className="dev-pro">
                <img src='proflile.jpeg' className="developer-profile"/>
            </div>
            <div className="info-developer">
                <h1 className="developer-name">David  <span style={style}>Parker</span></h1>
                <h3 data-text="FrontendDesigner"className="developer-job animition-job">Frontend Designer</h3>
                <p className="linee"></p>
                <p className="info-bio">
                    My name is David Parker. I am a graphic designer, and I'm very passionate and dedicated to my work. 
                    With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge.
                </p>
                <button className="btn">Learn More</button>    
            </div>
        </div>
    )
}