import React from "react";
import classes from "./Sawing.module.css";

import loftLogo from "../../assets/images/sawing/loftLogo.svg"

import secCont1Img from "../../assets/images/sawing/secCont1Img.png"
import secCont2Img from "../../assets/images/sawing/secCont2Img.png"
import secCont3Img from "../../assets/images/sawing/secCont3Img.png"
import alterSecCont3Img from "../../assets/images/sawing/alterSecCont3Img.png"

import advantageImg from "../../assets/images/sawing/advantageImg.png"

import logo1Img from "../../assets/images/sawing/logo1Img.svg"
import logo2Img from "../../assets/images/sawing/logo2Img.svg"
import logo3Img from "../../assets/images/sawing/logo3Img.svg"

import fifthCont1Img from "../../assets/images/welding/fifthCont1Img.png"
import fifthCont2Img from "../../assets/images/welding/fifthCont2Img.png"
import fifthCont3Img from "../../assets/images/welding/fifthCont3Img.png"
import fifthCont4Img from "../../assets/images/welding/fifthCont4Img.png"
import fifthCont5Img from "../../assets/images/sawing/fifthCont5Img.png"
import fifthCont6Img from "../../assets/images/sawing/fifthCont6Img.png"
import fifthCont7Img from "../../assets/images/welding/fifthCont7Img.png"
import fifthCont8Img from "../../assets/images/sawing/fifthCont8Img.png"

import FormAudit from "../FormAudit/FormAudit";

const Sawing: React.FC = (props) => {
        return (
            <div className={classes.sawing}>
                <div className={classes.firstContainer}>
                    <div className={classes.logoText}>
                        <div className={classes.sawingTitleYellow}>
                            РАСПИЛ
                        </div>
                        <div className={classes.titleWhite}>
                            ЛДСП, МДФ, ДСП
                        </div>
                    </div>
                </div>
                <div className={classes.fonImg}></div>
                <div className={classes.loftLogo}><img src={loftLogo}/></div>
                <div className={classes.underLogoText}>
                    <div className={classes.titleYellow}>Мы – лидирующее предпиятие,</div>
                    <div className={classes.titleWhite}> обеспечивающая лучшее </div>
                    <div className={classes.titleWhite}>качество работы с </div>
                    <div className={classes.titleYellow}>ЛДСП, МДФ, ДСП.</div>
                    <div className={classes.titleWhite}>Мы работаем </div>
                    <div className={classes.titleWhite}>только с </div>
                    <div className={classes.titleWhite}>лучшими производителями:</div>
                </div>
                <div className={classes.partnersLogo}>
                    <img className={classes.logo1Img} src={logo1Img} />
                    <img className={classes.logo2Img} src={logo2Img}/>
                    <img className={classes.logo3Img} src={logo3Img}/>
                </div>
                <div className={classes.firstTitle}>
                    <div className={classes.titleWhite}>Что такое </div>
                    <div className={classes.titleYellow}>распил </div>
                    <div className={classes.titleWhite}>и для чего он нужен? </div>
                </div>
                <div className={classes.paragsCont}>
                    Распилом или раскроем принято называть изготовление мебельных деталей из листов ЛДСП, МДФ или ДСП , а также нанесение кромки на торцы и сверление необходимых для сборки отверстий.
                </div>
                <div className={classes.secondContainer}>
                    <img src={secCont1Img} />
                    <img src={secCont2Img}/>
                    <img src={secCont3Img} className={classes.bottomImg}/>
                    <img src={alterSecCont3Img} className={classes.alterBottomImg}/>
                </div>
                <div className={classes.sevenStages}>
                    <div className={classes.titleWhite}>Заказ делится всего на </div>
                    <div className={classes.titleYellow}>7 этапов</div>
                </div>
                <div className={classes.fifthContainer}>
                    <div className={classes.fifthBlock1}>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>1</div>
                                <div className={classes.title}>
                                    <div>
                                        Консультация и 
                                    </div>
                                    <div>
                                        выбор продукции
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                Вы связываетесь с нами и обсуждаете свои требования и предпочтения относительно ЛДСП: размеры, цвет, текстура, толщина и другие характеристики.
                            </div>
                        </div>
                        <div className={classes.imgSide}><img src={fifthCont1Img} /></div>
                    </div>
                    <div className={classes.fifthBlock2}>
                        <div className={classes.imgSide}><img src={fifthCont2Img} /></div>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>2</div>
                                <div className={classes.title}>
                                    <div>
                                        Получение коммерческого 
                                    </div>
                                    <div>
                                        предложения
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                Мы предоставляем вам коммерческое предложение, включающее цены, наличие продукции, условия оплаты, сроки поставки и другие детали.
                            </div>
                        </div>
                        <div className={classes.alerImgSide}><img src={fifthCont2Img} /></div>
                    </div>
                    <div className={classes.fifthBlock1}>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>3</div>
                                <div className={classes.title}>
                                    <div>
                                        Уточнение деталей и 
                                    </div>
                                    <div>
                                        заключение договора
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                После получения предложения уточняются все детали заказа, в том числе количество, спецификации и сроки поставки. Заключается договор между вами и поставщиком.
                            </div>
                        </div>
                        <div className={classes.imgSide}><img src={fifthCont4Img} /></div>
                    </div>
                    <div className={classes.fifthBlock2}>
                        <div className={classes.imgSide}><img src={fifthCont3Img} /></div>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>4</div>
                                <div className={classes.title}>
                                    <div>
                                        Оплата заказа
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                Вы осуществляете оплату заказа в соответствии с условиями, указанными в договоре. Это может быть предоплата, оплата частями или полная оплата перед поставкой.
                            </div>
                        </div>
                        <div className={classes.alerImgSide}><img src={fifthCont3Img} /></div>
                    </div>
                    <div className={classes.fifthBlock1}>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>5</div>
                                <div className={classes.title}>
                                    <div>
                                        Изготовление и 
                                    </div>
                                    <div>
                                        подготовка к поставке
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                Мы начинаем изготовление ЛДСП согласно Вашему заказу. При необходимости мы готовим продукцию к транспортировке.
                            </div>
                        </div>
                        <div className={classes.imgSide}><img src={fifthCont5Img} /></div>
                    </div>
                    <div className={classes.fifthBlock2}>
                        <div className={classes.imgSide}><img src={fifthCont6Img} /></div>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>6</div>
                                <div className={classes.title}>
                                    <div>
                                        Контроль качества
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                Мы проверяем ЛДСП на предмет сколов и царапин, чтобы готовый продукт соответствовал высшему качеству.
                            </div>
                        </div>
                        <div className={classes.alerImgSide}><img src={fifthCont6Img} /></div>
                    </div>
                    <div className={classes.fifthBlock1}>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>7</div>
                                <div className={classes.title}>
                                    <div>
                                        Доставка и приемка
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                ЛДСП поставляется к вам в указанное место. После получения вы проверяете товар на соответствие заказу и его целостность.
                            </div>
                        </div>
                        <div className={classes.imgSide}><img src={fifthCont7Img} /></div>
                    </div>
                    <div className={classes.fifthBlock2}>
                        <div className={classes.imgSide}><img src={fifthCont8Img} /></div>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>8</div>
                                <div className={classes.title}>
                                    <div>
                                        Установка и использование
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                После проверки и приемки ЛДСП вы приступаете к его установке и использованию в соответствии с вашими планами.
                            </div>
                        </div>
                        <div className={classes.alerImgSide}><img src={fifthCont8Img} /></div>
                    </div>
                </div>
                <FormAudit />
            </div>
        );
}

export default Sawing;