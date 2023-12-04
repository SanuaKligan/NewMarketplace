import React, { useState } from 'react';
import classes from './Slider.module.css';

import leftArrow from "../../assets/images/offices/leftArrow.svg"
import rightArrow from "../../assets/images/offices/rightArrow.svg"

const Slider = (props) => {

    let slider: any;

    function destroyExistingSlider(){
        if(slider && slider.noUiSlider){
            slider.noUiSlider.destroy();
        }
    }
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = props.slides;
    const translateWidth = 100/slides.length

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    return (
            <div className={classes.sliderContainer}>
                <div
                    className={
                        slides.length === 4
                            ? classes.sliderSalon
                            : classes.slider}
                    style={{ transform: `translateX(${-currentSlide * translateWidth}%)`}}
                >
                    {slides.map((slide, index) => (
                        <img key={index} src={slide} className={index === currentSlide ? classes.activeSlide : classes.slide} />
                    ))}
                </div>
                <div className={classes.thumbnails}>
                    {slides.map((slide, index) => (
                        <img 
                            key={index} 
                            src={slide} 
                            className={index === currentSlide 
                                ? classes.activeThumbnail 
                                : slides.length === 4
                                    ? classes.thumbnailForSalons
                                    : classes.thumbnail} 
                        />
                    ))}
                </div>
                <button className={classes.prevButton} onClick={handlePrevSlide}>
                    <img src={leftArrow} />
                </button>
                <button className={classes.nextButton} onClick={handleNextSlide}>
                    <img src={rightArrow} />
                </button>
            </div>
          );
    };

  
  export default Slider;