import React from "react";


export default function News(props){
    return (
        <div className="News">
            
            <div className="news-container">
        
            
                <div className="news-div"> 
                    <img src={`./news-image/${props.img}`}  className="news-image" />
                    <h1>{props.title}</h1>
                    <p>{props.brand}</p>
                </div>
                    
                
                        
                
            </div>
        </div>
       
    )
}