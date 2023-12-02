import React from "react";
import classes from "./Shops.module.css"
import secBlock1Img from "../../assets/images/shops/secBlock1Img.png"
import secBlock2Img from "../../assets/images/shops/secBlock2Img.png"
import alterSecBlock1Img from "../../assets/images/shops/alterSecBlock1Img.png"
import alterSecBlock2Img from "../../assets/images/shops/alterSecBlock2Img.png"
import thirdContImg from "../../assets/images/shops/thirdContImg.png"

import FormAudit from "../FormAudit/FormAudit";
import SeeBelow from "../SeeBelow/SeeBelow";

import fftb from "../../assets/images/shops/fourthCont1Img.png"
import seftb from "../../assets/images/shops/fourthCont2Img.png"
import tftb from "../../assets/images/shops/fourthCont3Img.png"
import foftb from "../../assets/images/shops/fourthCont4Img.png"
import fiftb from "../../assets/images/shops/fourthCont5Img.png"
import siftb from "../../assets/images/shops/fourthCont6Img.png"

import furnEx1Img from "../../assets/images/shops/furnEx1Img.png"
import furnEx2Img from "../../assets/images/shops/furnEx2Img.png"
import furnEx3Img from "../../assets/images/shops/furnEx3Img.png"
import { NavLink } from "react-router-dom";


const Shops = () =>{
    return(
        <div className={classes.shops}>
            <div className={classes.firstContainer}>
                <div className={classes.logoText}>
                    <div className={classes.titleWhite}>МЕБЕЛЬ ДЛЯ</div>
                    <div className={classes.titleYellow}>МАГАЗИНОВ</div>
                </div>
            </div>
            <div className={classes.secondContainer}>
                <div className={classes.leftImg}><img src={secBlock1Img}/></div>
                <div className={classes.rigthImg}><img src={secBlock2Img}/></div>
            </div>
            <div className={classes.alterSecondContainer}>
                <div className={classes.leftImg}><img src={alterSecBlock1Img}/></div>
                <div className={classes.rigthImg}><img src={alterSecBlock2Img} /></div>
            </div>
            <div className={classes.exampleText}>
                <div className={classes.titleWhite}>У вас есть</div>
                <div className={classes.titleYellow}>магазин?</div>
            </div>
            <div className={classes.thirdContainer}>
                <div className={classes.thirdContText}>
                    <div className={classes.titleYellow}>Прекрасно!</div>
                    <div className={classes.paragText}>
                        <div>
                            Приобретая мебель у нас, вы можете быть
                            уверены, что ваш магазин будет выглядеть
                            элегантно и стильно, а ваши гости будут
                            чувствовать себя комфортно и уютно.
                        </div>
                    </div>
                </div>
                <img src={thirdContImg} className={classes.thirdContImg}/>
            </div>
            <SeeBelow />
            <div className={classes.fourthContainer}>
                <div className={classes.firstDiv}>
                    <div className={classes.smallImg}><img src={fftb} /></div>
                    <div className={classes.smallImg}><img src={seftb} /></div>
                    <div className={classes.bigImg}><img src={tftb} /></div>
                </div>
                <div className={classes.secondDiv}>
                    <div className={classes.bigImg}><img src={foftb} /></div>
                    <div className={classes.smallImg}><img src={fiftb} /></div>
                    <div className={classes.smallImg}><img src={siftb} /></div>
                </div>
            </div>
            <div className={classes.alterFourthContainer}>
                <div className={classes.bigImg}><img src={tftb} /></div>
                <div className={classes.smallImg}><img src={fftb} /></div>
                <div className={classes.smallImg}><img src={seftb} /></div>
                <div className={classes.bigImg}><img src={foftb} /></div>
                <div className={classes.smallImg}><img src={fiftb} /></div>
                <div className={classes.smallImg}><img src={siftb} /></div>
            </div>
            <div className={classes.exampleText}>
                <div className={classes.titleWhite}>Пример нашей</div>
                <div className={classes.line15_6}></div>
                <div className={classes.titleYellow}>мебели для магазинов</div>
            </div>
            <div className={classes.furnExComt}>
                <div className={classes.furnExComtBlock}>
                    <div className={classes.avImg}><img src={furnEx1Img}/></div>
                    <div className={classes.tit}>Интересный стеллаж</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Интересный стеллаж с геометрическими 
                        формами и минималистическим дизайном. 
                        Идеально подходит для современных 
                        интерьеров.
                    </div>
                    {/* <button className={classes.dopMoreFurnButton}> */}
                        <NavLink to={"/catalog"} className={classes.dopMoreFurnButton}>
                            Заказать такой же набор
                        </NavLink>
                    {/* </button> */}
                </div>
                <div className={classes.furnExComtBlock}>
                    <div className={classes.avImg}><img src={furnEx2Img}/></div>
                    <div className={classes.tit}>Стильный стеллаж</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Стильный и функциональный дизайнерский 
                        стеллаж с уникальной геометрической 
                        формой, который идеально подходит для 
                        любого интерьера.
                    </div>
                    {/* <button className={classes.dopMoreFurnButton}> */}
                        <NavLink to={"/catalog"} className={classes.dopMoreFurnButton}>
                            Заказать такой же набор
                        </NavLink>
                    {/* </button> */}
                </div>
                <div className={classes.furnExComtBlock}>
                    <div className={classes.avImg}><img src={furnEx3Img}/></div>
                    <div className={classes.tit}>Большой стеллаж</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Современный дизайнерский стеллаж, 
                        созданный для тех, кто ценит элегантность 
                        в интерьере. Идеальным выбор для 
                        любого помещения.
                    </div>
                    {/* <button className={classes.dopMoreFurnButton}> */}
                        <NavLink to={"/catalog"} className={classes.dopMoreFurnButton}>
                            Заказать такой же набор
                        </NavLink>
                    {/* </button> */}
                </div>
            </div>
            {/* <button className={classes.moreFurnButton}> */}
                <NavLink to={"/catalog"} className={classes.moreFurnButton}>
                    Перейти в полный каталог
                </NavLink>
            {/* </button> */}
            <FormAudit />
        </div>
    );
};

export default Shops;