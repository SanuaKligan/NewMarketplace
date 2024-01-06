import React, { useRef } from "react";
import classes from "./Restaurants.module.css"
import secondContImg from "../../assets/images/restaurants/secondContImg.png"
import alterSecBlockImg from "../../assets/images/restaurants/alterSecBlockImg.png"
import thirdContImg from "../../assets/images/restaurants/thirdContImg.png"

import FormAudit from "../FormAudit/FormAudit";
import SeeBelow from "../SeeBelow/SeeBelow";

import fftb from "../../assets/images/restaurants/fourthCont1Img.png"
import seftb from "../../assets/images/restaurants/fourthCont2Img.png"
import tftb from "../../assets/images/restaurants/fourthCont3Img.png"
import foftb from "../../assets/images/restaurants/fourthCont4Img.png"
import fiftb from "../../assets/images/restaurants/fourthCont5Img.png"
import siftb from "../../assets/images/restaurants/fourthCont6Img.png"

import seftb2 from "../../assets/images/restaurants/seftb2.png"
import tftb2 from "../../assets/images/restaurants/tftb2.png"
import fftb2 from "../../assets/images/restaurants/fftb2.png"
import fiftb2 from "../../assets/images/restaurants/fiftb2.png"
import foftb2 from "../../assets/images/restaurants/foftb2.png"
import siftb2 from "../../assets/images/restaurants/siftb2.png"

import furnEx1Img from "../../assets/images/restaurants/furnEx1Img.png"
import furnEx2Img from "../../assets/images/restaurants/furnEx2Img.png"
import furnEx3Img from "../../assets/images/restaurants/furnEx3Img.png"
import { NavLink } from "react-router-dom";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";


const Restaurants = () =>{
    const block1 = useRef(null)
    const block2 = useRef(null)
    const block3 = useRef(null)
    const block4 = useRef(null)
    const block5 = useRef(null)
    const block6 = useRef(null)
    const block7 = useRef(null)
    const block8 = useRef(null)
    const block9 = useRef(null)
    const observedElements = [
        block1, block2, block3, 
        block4, block5, block6, 
        block7, block8, block9
    ];
    useIntersectionObserver(observedElements, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });
    return(
        <div className={classes.restaurants}>
            <div className={classes.firstContainer} ref={block1}>
                <div className={classes.logoText}>
                    <div className={classes.titleWhite}>МЕБЕЛЬ ДЛЯ</div>
                    <div className={classes.titleYellow}>РЕСТОРАНА</div>
                </div>
                <div className={classes.secondContainer}>
                    <img src={secondContImg} className={classes.secondContImg}/>
                </div>
                <div className={classes.alterSecondContainer}>
                    <img src={alterSecBlockImg} className={classes.alterSecondContImg}/>
                </div>
            </div>
            <div className={classes.thirdContainer} ref={block2}>
                <div className={classes.exampleText}>
                    <div className={classes.titleWhite}>У вас есть</div>
                    <div className={classes.titleYellow}>ресторан?</div>
                </div>
                <div className={classes.thirdContText}>
                    <div className={classes.titleYellow}>Отлично!</div>
                    <div className={classes.paragText}>
                        <div>
                            LOFT & LUXE специализируется на
                            производстве мебели для ресторанов
                            уже много лет, и мы можем
                            гарантировать высшее качество и
                            лучший дизайн нашей продукции.
                        </div>
                    </div>
                </div>
                <img src={thirdContImg} className={classes.thirdContImg}/>
            </div>
            <SeeBelow />
            <div className={classes.fourthContainer}>
                <div className={classes.firstDiv} ref={block3}>
                    <div className={classes.bigImg}><img src={fftb} /></div>
                    <div className={classes.smallImg}><img src={seftb} /></div>
                    <div className={classes.smallImg}><img src={tftb} /></div>
                </div>
                <div className={classes.secondDiv} ref={block4}>
                    <div className={classes.smallImg}><img src={foftb} /></div>
                    <div className={classes.smallImg}><img src={fiftb} /></div>
                    <div className={classes.bigImg}><img src={siftb} /></div>
                </div>
            </div>
            <div className={classes.alterFourthContainer} ref={block5}> 
                <div className={classes.bigImg}><img src={seftb2} /></div>
                <div className={classes.smallImg}><img src={tftb2} /></div>
                <div className={classes.smallImg}><img src={fftb2} /></div>
                <div className={classes.smallImg}><img src={fiftb2} /></div>
                <div className={classes.smallImg}><img src={foftb2} /></div>
                <div className={classes.bigImg}><img src={siftb2} /></div>
            </div>
            <div className={classes.exampleText2} ref={block6}>
                <div className={classes.titleWhite}>Пример нашей мебели </div>
                <div className={classes.titleYellow}>для ресторанов</div>
            </div>
            <div className={classes.furnExContainer}>
                <div className={classes.furnExMiniCont} ref={block7}>
                    <div className={classes.alterAvImg}><img src={furnEx1Img}/></div>
                    <div className={classes.furnExContText}>
                        <div className={classes.tit}>Раскошный круглый стол</div>
                        <div className={classes.siz}>130см на 240см</div>
                        <div className={classes.tex}>
                            Современный дизайнерский круглый стол, 
                            созданный для тех, кто ценит комфорт и 
                            элегантность в интерьере. Идеальным выбор 
                            для любого помещения.
                        </div>
                        {/* <button className={classes.moreFurnButton}> */}
                            <NavLink to={"/catalog"} className={classes.moreFurnButton}>
                                Заказать такой же столик
                            </NavLink>
                        {/* </button> */}
                    </div>
                    <div className={classes.avImg}><img src={furnEx1Img}/></div>
                </div>
                <div className={classes.furnExMiniCont} ref={block8}>
                    <div className={classes.alterAvImg}><img src={furnEx2Img}/></div>
                    <div className={classes.furnExContText}>
                        <div className={classes.tit}>Прямоугольный стол для кафе</div>
                        <div className={classes.siz}>130см на 240см</div>
                        <div className={classes.tex}>
                            Изысканный и функциональный стол для 
                            кафе, который обеспечивает комфортное 
                            пространство для общения и наслаждения 
                            вкусной едой и напитками.
                        </div>
                        {/* <button className={classes.moreFurnButton}> */}
                            <NavLink to={"/catalog"} className={classes.moreFurnButton}>
                                Заказать такой же стол
                            </NavLink>
                        {/* </button> */}
                    </div>
                    <div className={classes.avImg}><img src={furnEx2Img}/></div>
                </div>
                <div className={classes.furnExMiniCont} ref={block9}>
                    <div className={classes.alterAvImg}><img src={furnEx3Img}/></div>
                    <div className={classes.furnExContText}>
                        <div className={classes.tit}>Стол и диваны</div>
                        <div className={classes.siz}>130см на 240см</div>
                        <div className={classes.tex}>
                            Стильный и удобный столик в сочетании с 
                            элегантными диванами, создают идеальное 
                            пространство, где комфорт сочитается с 
                            современным дизайном.
                        </div>
                        {/* <button className={classes.moreFurnButton}> */}
                            <NavLink to={"/catalog"} className={classes.moreFurnButton}>
                                Заказать такой же набор
                            </NavLink>
                        {/* </button> */}
                    </div>
                    <div className={classes.avImg}><img src={furnEx3Img}/></div>
                </div>
            </div>
            <FormAudit />
        </div>
    );
};

export default Restaurants;