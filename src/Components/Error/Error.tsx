import React, { useRef } from "react";
import classes from "./Error.module.css";

import ErrorSimb from "../../assets/images/error/ErrorSimb.png"
import Error404 from "../../assets/images/error/Error404.png"
import { NavLink } from "react-router-dom"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"


const Error = () =>{
    const block1 = useRef(null)
    const block2 = useRef(null)
    const block3 = useRef(null)
    const observedElements = [
        block1, block2, block3
    ];

    useIntersectionObserver(observedElements, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });
    return(
        <div className={classes.error}>
            <div className={classes.titleBlock} ref={block1}>
                <div className={classes.titleWhite}>ЧТО-ТО </div>
                <div className={classes.titleYellow}>ПОШЛО </div>
                <div className={classes.titleYellow}>НЕ </div>
                <div className={classes.titleYellow}>ТАК </div>
            </div>
            <div className={classes.firstCont} ref={block2}>
                <img src={ErrorSimb} className={classes.firstContImg1}/>
                <img src={Error404} className={classes.firstContImg2}/>
            </div>
            {/* <button className={classes.moreFurnButton}> */}
                <NavLink to={"/business/bars_cafes"} className={classes.moreFurnButton} ref={block3}>
                    Вернуться на главную
                </NavLink>
            {/* </button> */}
        </div>
    );
};

export default Error;