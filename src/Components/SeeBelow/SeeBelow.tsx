import React, { useRef } from "react";
import classes from "./SeeBelow.module.css";
import arrowDown from "../../assets/images/for_home/arrowDown.svg"
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const SeeBelow = () =>{
    const block1 = useRef(null)
    const observedElements = [
        block1
    ];

    useIntersectionObserver(observedElements, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });
    
    return(
        <div className={classes.seeBelow} ref={block1}>
            <div className={classes.checkBelow}>Смотри ниже</div>
            <div className={classes.checkBelowImg}><img src={arrowDown} /></div>
        </div>
    );
};

export default SeeBelow;

