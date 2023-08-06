import React from "react";
import { Link } from "react-router-dom";
export default function Contact(){
    const style ={
        color: 'red'
    }
    const[FromData, setFormDate] = React.useState(
        {Location:"",phone:"",email:"",facebook:""}
     )
    return(
        <div className="container contact-container">
          
            <div className="form">
              
                    <div className="address">
                        <form>
                                <input
                                type="text"
                                placeholder="Avon str. 22, NYC, USA"
                                name="location"
                                value={FromData.Location}
                                /> 
                                <input
                                type="text"
                                placeholder="+77 022 155 02 02"
                                name="phone"
                                value={FromData.phone}
                                />
                                <input
                                type="email"
                                placeholder="example@gmail.com"
                                name="email"
                                value={FromData.email}
                                />
                                <input
                                type="text"
                                placeholder="@facebookNick"
                                name="facebook"
                                value={FromData.facebook}
                                />                            

                        </form>
                    </div>
                    <div>
                        <form className="input-address">
                            <div className="insert-name">
                                <input
                                type="text"
                                placeholder="Name"
                                name="Name"
                                value={FromData.Name}
                                />
                                <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={FromData.email}
                                /> 
                            </div>
                            <div className="second-div">
                                    <textarea placeholder="massage" cols={0} rows={20}></textarea>
                                    <button className="submit">Send massage</button>                                
                            </div>
                        
                        </form>
                    </div>
               
            </div>
        </div>
    
    )
}