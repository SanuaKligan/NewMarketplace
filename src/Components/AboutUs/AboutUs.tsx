import React from "react"
import classes from "./AboutUs.module.css"

import aboutLoftLuxeImg from "../../assets/images/about_us/Немного о LOft & luxe.svg"
import firstImg1 from "../../assets/images/about_us/b0084270453117 1.png"
import firstImg2 from "../../assets/images/about_us/firstImg2.png"
import readBelow from "../../assets/images/about_us/Читай_ниже.svg"
import whiteLogoImg from "../../assets/images/about_us/whiteLogoImg.svg";

import loftLuxeTitleImg from "../../assets/images/about_us/Loft&LuxeImg.svg"
import paragFirst from "../../assets/images/about_us/В начале 2000-х годов.svg"
import minImg from "../../assets/images/about_us/206e607d3cc87b80ab710c83f0afb753 1.png"

import ourDifferences from "../../assets/images/about_us/Мы отличаемся от конкурентов.svg"

import fonImg from "../../assets/images/about_us/Rectangle 697.png"
import Warehouses from "../../assets/images/about_us/Наши склады.svg"
import ourProud from "../../assets/images/about_us/Мы гордимся.svg"
import fotoMotok from "../../assets/images/about_us/fotoMotok.png"
import alterFotoMotok from "../../assets/images/about_us/alterFotoMotok.png"
import Materials from "../Materials/Materials"
import bigImg from "../../assets/images/about_us/bigImg.png"
import logo from "../../assets/images/about_us/Group 4703.svg"
import curvedLine from "../../assets/images/about_us/curvedLine.svg"
import learnDetailed from "../../assets/images/about_us/learnMoreButton.svg"
import { NavLink } from "react-router-dom"

const AboutUs = () =>{
    return(
        <div className={classes.aboutUs}>
            <div className={classes.aboutLoftLuxe}>
                <span className={classes.spanWhite}>НЕМНОГО О</span>
                <span className={classes.spanYellow}>LOFT RT</span>
            </div>
            <div className={classes.firstImg}>
                <img src={firstImg1} className={classes.firstImg1}/>
                <img src={firstImg2} className={classes.firstImg2}/>
            </div>
            <div className={classes.readBelow}><img src={readBelow} /></div>
            <div className={classes.firstContainer}>
                <div className={classes.firstContText}>
                    <div className={classes.loftLuxeTitle}><img src={loftLuxeTitleImg}/></div>
                    <div className={classes.paragText}>
                        <div>
                            В начале 2000-х годов мы, группа
                            друзей из Казани, приняли решение о
                            создании собственного бизнеса. Нас
                            увлекал стиль лофт, и мы решили
                            производить мебель в этом жанре.
                        </div>
                    </div>
                </div>
                <div className={classes.firstContImg}>
                    <img src={whiteLogoImg} className={classes.whiteLogoImg}/>
                </div>
            </div>
            <div className={classes.alterFirstContImg}>
                <img src={whiteLogoImg} className={classes.alterWhiteLogoImg}/>
            </div>
            <div className={classes.paragsCont}>
                <div className={classes.parags}>Наша компания начала свою деятельность в гараже одного из нас, используя старые доски и металлические трубы для создания уникальной мебели в стиле лофт. Наши первые продукты были простыми, но элегантными - столы, стулья и полки.</div>
                <div className={classes.parags}>Начальный этап продаж мы осуществляли на ярмарках и рынках. Однако, вскоре мы получили первый заказ от небольшого кафе в центре города, желавшего создать атмосферу лофта. Мы успешно выполнели заказ, и наша компания начала получать все больше заказов. Расширив свой ассортимент, мы начали производить другую мебель для дома, магазина, офиса, кафе, ресторанов, баров и салонов красоты.</div>
                <div className={classes.parags}>С каждым годом наша компания росла и развивалась. Мы переехали в большое производственное помещение и наняли новых сотрудников. Наша компания начала доставлять свою мебель в другие города, и наши продукты стали популярными во всем мире.</div>
                <div className={classes.parags}>В настоящее время мы являемся лидером в производстве мебели в стиле лофт. Мы используем только высококачественные материалы и создаем уникальные, стильные и функциональные изделия. Наша компания продолжает расти и развиваться, сохраняя при этом свой уникальный стиль и качество.</div>
            </div>

            <div className={classes.centerTitle}>
                <div className={classes.spanWhite}>Немного о </div>
                <div className={classes.line15_6}></div>
                <div className={classes.spanYellow}>нашей мебели</div>
            </div>

            <div className={classes.alterBigImg}>
                <img src={whiteLogoImg} className={classes.whiteLogoImg}/>
            </div>

            <Materials />

            <div className={classes.bigImg}>
                <img src={whiteLogoImg} className={classes.whiteLogoImg}/>
            </div>

            <button className={classes.learnMoreButton}>
                <NavLink to={"/how_it_will_be"} className={classes.navLink}>
                    Узнать больше
                </NavLink>
            </button>

            <div className={classes.fonImg}>
                <img src={logo} className={classes.fonImgTitle}/>
                <div className={classes.fonImgText}>Интересует, как проходит заказ?</div>
                <div className={classes.curvedLineImg}><img src={curvedLine}/></div>
                <NavLink to={"/how_it_will_be"} className={classes.navLink}>
                    <img src={learnDetailed} className={classes.learnDetailed}/>
                </NavLink>
            </div>

            <div className={classes.warehouses}>
                <div className={classes.warehousesTitle}>Наши склады - это только лучшее сырье и идеальные условия хранения</div>
                <div className={classes.warehousesText}>Мы гордимся нашими современными складами материалов, которые обеспечивают нам быстрый доступ к широкому ассортименту высококачественных материалов для производства мебели. Ведь только лучшие условия храенения могут обеспечить высшее качесто материалов.</div>
                <div className={classes.warehousesImg}><img src={fotoMotok} /></div>
                <div className={classes.alterWarehousesImg}><img src={alterFotoMotok} /></div>
            </div>
        </div>
    );
};

export default AboutUs;