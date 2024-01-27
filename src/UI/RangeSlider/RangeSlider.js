import React, { useEffect, useState } from "react";
import classes from "./RangeSlider.module.css";
import noUiSlider from "nouislider";
import sliderObject from "nouislider";
import "./RangNouislider.css";

const RangeSlider = (props) => {
  
  const [maxRange, setMaxRange] = useState(props.maxRange)

  useEffect(() => {
    setMaxRange(props.maxRange)
  }, [props.maxRange])

  const [range0, setRange0] = useState(0)
  const [range1, setRange1] = useState(maxRange)
  useEffect(() => {
    // console.log(range0, range1)
    props.handlePrice_range(range0, range1)
  }, [range0, range1])
  
  useEffect(() => {
    const rangeSlider = document.getElementById("range-slider");

    if (rangeSlider) {
      noUiSlider.create(rangeSlider, {
        start: [0, maxRange],
        connect: true,
        step: 1,
        range: {
          min: [0],
          max: [maxRange]
        }
      });

      const input0 = document.getElementById("input-0");
      const input1 = document.getElementById("input-1");
      const inputs = [input0, input1];

      rangeSlider.noUiSlider.on("update", function(values, handle) {
        inputs[handle].value = Math.round(values[handle]);
      });

      rangeSlider.noUiSlider.on("change", function(values, handle) {
        if(handle === 0){
          setRange0(Math.round(values[0]))
        } else if(handle === 1){
          setRange1(Math.round(values[1]))
        }
      });

      const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;
        rangeSlider.noUiSlider.set(arr);
      };

      inputs.forEach((el, index) => {
        el.addEventListener("change", e => {
          setRangeSlider(index, e.currentTarget.value);
          if(index === 0){
            setRange0(e.currentTarget.value)
          } else if(index === 1){
            setRange1(e.currentTarget.value)
          }
        });
      });
    }
  }, []);
  return (
    <div className={classes.filters}>
      <div className={classes.filtersitem && classes.price}>
        <h3 className={classes.pricetitle}>Цена:</h3>
        <div className={classes.priceslider} id="range-slider"></div>
        <div className={classes.priceinputs}>
          <input
            type="number"
            min="0"
            max={maxRange}
            placeholder="0"
            className={classes.priceinput}
            id="input-0"
          />
          <input
            type="number"
            min="0"
            max={maxRange}
            placeholder={maxRange}
            className={classes.priceinput}
            id="input-1"
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;