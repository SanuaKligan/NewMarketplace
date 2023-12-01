import React from "react"
import classes from "./Offices.module.css"
import {useState} from "react"
import alterFirstImg from "../../assets/images/offices/alterFirstImg.png"
import firstImg from "../../assets/images/offices/firstImg.png"
import crookedLine from "../../assets/images/offices/crookedLine.svg"
import SeeBelow from "../SeeBelow/SeeBelow"

import slide1Big from "../../assets/images/offices/slide1Big.png"
import slide1 from "../../assets/images/offices/slide1.png"
import slide5 from "../../assets/images/offices/slide5.png"
import slide2 from "../../assets/images/offices/slide2.png"
import slide3 from "../../assets/images/offices/slide3.png"
import slide4 from "../../assets/images/offices/slide4.png"
import slide3Mini from "../../assets/images/offices/slide3Mini.png"
import slide4Mini from "../../assets/images/offices/slide4Mini.png"

import furnExImg1 from "../../assets/images/offices/furnExImg1.png"
import furnExImg2 from "../../assets/images/offices/furnExImg2.png"
import furnExImg3 from "../../assets/images/offices/furnExImg3.png"
import furnExImg4 from "../../assets/images/offices/furnExImg4.png"
import furnExImg5 from "../../assets/images/offices/furnExImg5.png"
import furnExImg6 from "../../assets/images/offices/furnExImg6.png"

import logo from "../../assets/images/Group 4606.svg"
import curvedLine from "../../assets/images/about_us/curvedLine.svg"
import learnDetailed from "../../assets/images/about_us/learnMoreButton.svg"
import FormAudit from "../FormAudit/FormAudit"
import Slider from "../../UI/Slider/Slider"
import { NavLink } from "react-router-dom"


const Offices = () =>{
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const goToSlide = (index = 0) => {
    //     setCurrentIndex(index);
    // }
    // const slides = [
    //     slide1,
    //     slide2,
    //     slide3,
    //     slide4,
    //     slide5
    // ];
    const slides = [slide1, slide2, slide3, slide4, slide5]
    return(
        <div className={classes.offices}>
            <div className={classes.firstContainer}>
                <div className={classes.logoText}>
                    <div className={classes.titleWhite}>ОФИСНАЯ</div>
                    <div className={classes.titleWhite}>МЕБЕЛЬ</div>
                    <div className={classes.titleYellow}>LOFT RT</div>
                </div>
            </div>
            <div><img src={alterFirstImg} className={classes.alterFirstImg} /></div>
            <div><img src={firstImg} className={classes.firstImg} /></div>
            <div className={classes.secondContainer}>
                <div className={classes.vertical49}></div>
                <div className={classes.text1}>Нужна мебель для офиса?</div>
                <div className={classes.crookedLine}><img src={crookedLine} /></div>
                <div className={classes.text2}>
                    <div className={classes.titleWhite}>
                        У нас вы найдете
                    </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleYellow}>
                        лучшее
                    </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleWhite}>
                        качество и дизайн, по
                    </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleYellow}>
                        самой
                    </div>
                </div>
                <div className={classes.text3}>
                    <div className={classes.titleYellow}>
                        справедливой
                    </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleWhite}>
                        цене
                    </div>
                </div>
            </div>
            <SeeBelow />
            <div className={classes.noneSlider}>
                <Slider slides={slides} />
            </div>
            <div className={classes.alterSlides}>
                <div className={classes.alterSlide}><img src={slide1Big} /></div>
                <div className={classes.alterSlide}><img src={slide5} /></div>
                <div className={classes.alterSlide}><img src={slide2} /></div>
                <div className={classes.alterSlideMini}><img src={slide3Mini} /></div>
                <div className={classes.alterSlideMini}><img src={slide4Mini} /></div>
            </div>
            {/* <div className="slider-container">
                <div className="slider">
                    {slides.map((slide, index: number) => (
                        <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
                            <img src={slide} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className="slider-thumbnails">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        >
                            {slide}
                        </div>
                    ))}
                </div>
            </div> */}
            <div className={classes.exampleText}>
                <div className={classes.titleWhite}>Пример </div>
                <div className={classes.titleWhite}>нашей </div>
                <div className={classes.titleWhite}>мебели </div>
                <div className={classes.titleWhite}>для</div>
                <div className={classes.titleYellow}>офиса</div>
            </div>
            <div className={classes.furnExComt}>
                <div className={classes.furnBlock}>
                    <div className={classes.avImg}><img src={furnExImg1}/></div>
                    <div className={classes.tit}>Прекрасный камод</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Элегантный камод с геометрическими
                        формами и минималистическим дизайном.
                        Идеально подходит для современных
                        интерьеров.
                    </div>
                </div>
                <div className={classes.furnBlock}>
                    <div className={classes.avImg}><img src={furnExImg2}/></div>
                    <div className={classes.tit}>Стильный стеллаж</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Стильный и функциональный дизайнерский
                        стеллаж с уникальной геометрической
                        формой, который идеально подходит для
                        любого интерьера.
                    </div>
                </div>
                <div className={classes.furnBlock}>
                    <div className={classes.avImg}><img src={furnExImg3}/></div>
                    <div className={classes.tit}>Стол с ящиками и тумба</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Набор идеальный  для тех, кто ценит
                        комфорт и элегантность в интерьере.
                        Идеальным выбор для офисного помещения.
                    </div>
                </div>
                <div className={classes.furnBlock}>
                    <div className={classes.avImg}><img src={furnExImg4}/></div>
                    <div className={classes.tit}>Прямоугольный стол для офиса</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Идеальное решение для тех, кто ценит
                        элегантность и функциональность в своем
                        доме. Ее дизайн и практическая форма
                        создают атмосферу уюта и комфорта.
                    </div>
                </div>
                <div className={classes.furnBlock}>
                    <div className={classes.avImg}><img src={furnExImg5}/></div>
                    <div className={classes.tit}>Офисный стол</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Стильный и функциональный дизайнерский
                        стеллаж с уникальной геометрической
                        формой, который идеально подходит для
                        любого интерьера.
                    </div>
                </div>
                <div className={classes.furnBlock}>
                    <div className={classes.avImg}><img src={furnExImg6}/></div>
                    <div className={classes.tit}>Большой стол для собраний</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Кресло "Зелень" - это прекрасный выбор
                        для позитивных людей. Его яркая зеленая
                        обивка и удобная форма позволяют
                        создать атмосферу свежести и легкости.
                    </div>
                </div>
            </div>
            <button className={classes.moreFurnButton}>
                <NavLink to={"/catalog"} className={classes.navLink}>
                    Заказать для него мебель
                </NavLink>
            </button>
            <div className={classes.fonImg}>
                <img src={logo} className={classes.fonImgTitle}/>
                <div className={classes.fonImgText}>Интересует, как проходит заказ?</div>
                <img src={curvedLine} className={classes.curvedLineImg}/>
                <NavLink to={"/how_it_will_be"} className={classes.learnDetailed}>
                    <img src={learnDetailed} />
                </NavLink>
            </div>
            <FormAudit />
        </div>
    );
};

export default Offices;