import React from "react";
import classes from "./BarsAndCafes.module.css"
import secondContImg from "../../assets/images/for_bars_&_cafes/secondContImg.png"
import alterSecBlockImg from "../../assets/images/for_bars_&_cafes/alterSecBlockImg.png"
import thirdContImg from "../../assets/images/for_bars_&_cafes/thirdContImg.png"

import FormAudit from "../FormAudit/FormAudit";
import SeeBelow from "../SeeBelow/SeeBelow";

import fftb from "../../assets/images/for_bars_&_cafes/fourthCont1Img.png"
import seftb from "../../assets/images/for_bars_&_cafes/fourthCont2Img.png"
import tftb from "../../assets/images/for_bars_&_cafes/fourthCont3Img.png"
import foftb from "../../assets/images/for_bars_&_cafes/fourthCont4Img.png"
import fiftb from "../../assets/images/for_bars_&_cafes/fourthCont5Img.png"
import siftb from "../../assets/images/for_bars_&_cafes/fourthCont6Img.png"

import seftb2 from "../../assets/images/for_bars_&_cafes/fourthCont2Img.png"
import tftb2 from "../../assets/images/for_bars_&_cafes/fourthCont3Img.png"
import fftb2 from "../../assets/images/for_bars_&_cafes/fourthCont1Img.png"
import fiftb2 from "../../assets/images/for_bars_&_cafes/fourthCont5Img.png"
import foftb2 from "../../assets/images/for_bars_&_cafes/fourthCont4Img.png"
import siftb2 from "../../assets/images/for_bars_&_cafes/fourthCont6Img.png"

import furnEx1Img from "../../assets/images/for_bars_&_cafes/furnEx1Img.png"
import furnEx2Img from "../../assets/images/for_bars_&_cafes/furnEx2Img.png"
import furnEx3Img from "../../assets/images/for_bars_&_cafes/furnEx3Img.png"
import { NavLink } from "react-router-dom";


const BarsAndCafes = () =>{
    return(
        <div className={classes.barsAndCafes}>
            <div className={classes.firstContainer}>
                <div className={classes.logoText}>
                    <div className={classes.titleWhite}>МЕБЕЛЬ</div>
                    <div className={classes.titleWhite}>ДЛЯ</div>
                    <div className={classes.titleYellow}>БАРОВ</div>
                    <div className={classes.titleYellow}>И</div>
                    <div className={classes.titleYellow}>КАФЕ</div>
                </div>
            </div>
            <div className={classes.secondContainer}>
                <img src={secondContImg} className={classes.secondContImg}/>
            </div>
            <div className={classes.alterSecondContainer}>
                <img src={alterSecBlockImg} className={classes.alterSecondContImg}/>
            </div>
            <div className={classes.exampleText}>
                <div className={classes.titleWhite}>У вас есть</div>
                <div className={classes.titleYellow}>бар или кафе?</div>
            </div>
            <div className={classes.thirdContainer}>
                <div className={classes.thirdContText}>
                    <div className={classes.titleYellow}>Замечательно!</div>
                    <div className={classes.paragText}>
                        <div>
                            Тут вы найдете самую стильную
                            мебель для баров и кафе. Мы можем
                            гарантировать высшее качество и
                            лучший дизайн нашей продукции.
                        </div>
                    </div>
                </div>
                <img src={thirdContImg} className={classes.thirdContImg}/>
            </div>
            <SeeBelow />
            <div className={classes.fourthContainer}>
                <div className={classes.firstDiv}>
                    <div className={classes.bigImg}><img src={fftb} /></div>
                    <div className={classes.smallImg}><img src={seftb} /></div>
                    <div className={classes.smallImg}><img src={tftb} /></div>
                </div>
                <div className={classes.secondDiv}>
                    <div className={classes.smallImg}><img src={foftb} /></div>
                    <div className={classes.smallImg}><img src={fiftb} /></div>
                    <div className={classes.bigImg}><img src={siftb} /></div>
                </div>
            </div>
            <div className={classes.alterFourthContainer}> 
                <div className={classes.smallImg}><img src={seftb2} /></div>
                <div className={classes.smallImg}><img src={tftb2} /></div>
                <div className={classes.bigImg}><img src={fftb2} /></div>
                <div className={classes.smallImg}><img src={fiftb2} /></div>
                <div className={classes.smallImg}><img src={foftb2} /></div>
                <div className={classes.bigImg}><img src={siftb2} /></div>
            </div>
            <div className={classes.exampleText}>
                <div className={classes.titleWhite}>Пример нашей мебели </div>
                <div className={classes.titleYellow}>для баров и кафе</div>
            </div>
            <div className={classes.furnExContainer}>
                <div className={classes.furnExMiniCont}>
                    <div className={classes.alterAvImg}><img src={furnEx1Img}/></div>
                    <div className={classes.furnExContText}>
                        <div className={classes.tit}>Высокий стол и 3 стула</div>
                        <div className={classes.siz}>130см на 240см</div>
                        <div className={classes.tex}>
                            Стильный и удобный столик в сочетании с 
                            элегантными стульями, создают идеальное 
                            пространство, где комфорт сочитается с 
                            современным дизайном.
                        </div>
                        {/* <button className={classes.moreFurnButton}> */}
                            <NavLink to={"/catalog"} className={classes.moreFurnButton}>
                                Заказать такой же набор
                            </NavLink>
                        {/* </button> */}
                    </div>
                    <div className={classes.avImg}><img src={furnEx1Img}/></div>
                </div>
                <div className={classes.furnExMiniCont}>
                    <div className={classes.alterAvImg}><img src={furnEx2Img}/></div>
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
                    <div className={classes.avImg}><img src={furnEx2Img}/></div>
                </div>
                <div className={classes.furnExMiniCont}>
                    <div className={classes.alterAvImg}><img src={furnEx3Img}/></div>
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
                    <div className={classes.avImg}><img src={furnEx3Img}/></div>
                </div>
            </div>
            <FormAudit />
        </div>
    );
};

export default BarsAndCafes;