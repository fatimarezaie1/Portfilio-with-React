import React,{useEffect}from "react";
import ReactDOM  from "react-dom/client";
import './styles.css'


export default function PortfilioSlidShow({images=[], interval=3000}){
    const [thumbnails, setThumnails] = React.useState([]);
    const [previousSlideStyle, setPreviousSlideStyle] = React.useState({});
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [nextSlideStyle, setNextSlideStyle] =React.useState({});
    const [currentSlideStyle, setCurrentSlideStyle] = React.useState({});

    useEffect(()=>{
        setThumnails(images);
        setCurrentSlideStyle({
            backgroundImage: "url('"+images[currentSlide]+"')"
        });

        if(currentSlide>0){
            setPreviousSlideStyle({
                backgroundImage: "url('"+images[currentSlide-1]+"')"
            });
        }else{
            setPreviousSlideStyle({
                backgroundImage: "url('"+images[images.length-1]+"')"
            });
        }

        if(currentSlide === images.length-1){
            setNextSlideStyle({
                backgroundImage: "url('"+images[0]+"')"
            });
        }else{
            setNextSlideStyle({
                backgroundImage: "url('"+images[currentSlide+1]+"')"
            });
        } 

        const loop = setInterval(()=>{
            if(currentSlide === images.length-1){
                setCurrentSlide(0);
            }else{
                setCurrentSlide(currentSlide+1);
            }
        }, interval);
        return () => clearInterval(loop); 
    }, [images, currentSlide, interval]);

    function previous(){
        if(currentSlide>0){
            setCurrentSlide(currentSlide-1);
        }else{
            setCurrentSlide(thumbnails.length-1);
        }
    }

    function next(){
        if(currentSlide === thumbnails.length-1){
            setCurrentSlide(0);
        }else{
            setCurrentSlide(currentSlide+1);
        }
    }

    return (
        <section className="slideshow">
            <div className="slide-holder">
                <section className="slide current-slide previous-slide">
                    <div style={previousSlideStyle} className="slide-thumbnail"></div>
                </section>
                <section className="slide current-slide">
                    <div style={currentSlideStyle} className="slide-thumbnail"></div>
                </section>
                <section className="slide current-slide next-slide">
                    <div style={nextSlideStyle} className="slide-thumbnail"></div>
                </section>
            </div>

            <div className="slideshow-controller">
                <span onClick={previous}>&#8249;</span>
                <span onClick={next}>&#8250;</span>
            </div>
        </section>
    )
}