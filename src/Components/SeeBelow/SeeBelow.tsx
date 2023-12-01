import React from "react";
import classes from "./SeeBelow.module.css";
import arrowDown from "../../assets/images/for_home/arrowDown.svg"

const SeeBelow = () =>{
    return(
        <div>
            <div className={classes.checkBelow}>Смотри ниже</div>
            <div className={classes.checkBelowImg}><img src={arrowDown} /></div>
        </div>
    );
};

export default SeeBelow;

