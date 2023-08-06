import { render } from "@testing-library/react";
import React from "react";
import  ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import './style.css';
import './responsiveness.css';
import Layout from "./Layout"; 
import Home from "./components/Home";
import About from "./components/About";
import PortfilioSlidShow from './components/PortfilioSlideshow';
import Contact from "./components/Contact";

function Main(){
  
  const style ={
    color: 'red'
  }
    return(

        <BrowserRouter>
        <Routes className='container'>
              <Route   element={<Layout />} >
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/portfilio" element={
                        <section  className="container new-container">
                            <h1 className="header-news">Creative <span style={style}>Portifilio</span></h1>

                            <p className="line"></p>
                            <div>
                               {<PortfilioSlidShow 
                                
                            interval={1000000}
                            images={[
                                './portfilio-imge/1.jpg',
                                './portfilio-imge/2.jpg',  
                                './portfilio-imge/3.jpg',
                                './portfilio-imge/4.jpg',
                                './portfilio-imge/5.jpg',
                            ]}
                               />}
                            </div>
                           
                        </section>
                    }/>
                    <Route path="/news" element={
                    <section className="container" >
                            <h1 className="header-news">latest <span style={style}>News</span></h1>
                            <p className="line"></p>
                            <div  className="section-body">
                            {<PortfilioSlidShow 
                                
                                interval={1000000}
                                images={[
                                    './news-image/1.png',
                                    './news-image/2.png',
                                    './news-image/3.png',
                                    './news-image/4.png',
                                    './news-image/5.png',
                                ]}
                                   />}
                            </div>
                    </section>} 
                     />
                    <Route path="/contact" element={ <section className="container" >
                            <h1 className="header-news">Get in <span style={style}>Touch</span></h1>
                            <p className="line"></p>
                            <div  className="section-body">
                            {<Contact />}
                            </div>
                    </section>}/>
                </Route>
        </Routes>
     </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById("root"),render( 
    <div>
          <Main />
    </div>
)
 )