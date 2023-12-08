import React from "react"
import classes from "./OrderProcess.module.css"
import orderProcessTitlImg from "../../assets/images/order_process/orderProcessTitlImg.png"
import crookedLine from "../../assets/images/order_process/crookedLine.svg"
import seeBelow from "../../assets/images/order_process/seeBelow.svg"

import thirdCont1Img from "../../assets/images/order_process/thirdCont1Img.png"
import thirdCont2Img from "../../assets/images/order_process/thirdCont2Img.png"
import thirdCont3Img from "../../assets/images/order_process/thirdCont3Img.png"
import thirdCont4Img from "../../assets/images/order_process/thirdCont4Img.png"
import thirdCont5Img from "../../assets/images/order_process/thirdCont5Img.png"

import logo from "../../assets/images/order_process/Group 4697.svg"
import seeGuar from "../../assets/images/order_process/seeGuar.svg"
import crookedLine2 from "../../assets/images/order_process/crookedLine2.svg"
import FormAudit from "../FormAudit/FormAudit"
import { NavLink } from "react-router-dom"


const OrderProcess = () =>{
    return(
        <div className={classes.orderProcess}>
            <div className={classes.firstBlock}>
                <div className={classes.vertical30}></div>
                <div className={classes.text}>
                    <div className={classes.titleWhite}>ПРОЦЕСС ЗАКАЗА</div>
                    <div className={classes.titleYellow}>LOFT & LUXE</div>
                </div>
                <div className={classes.vertical30}></div>
                <div>
                    <div className={classes.firstBlockImg}><img src={orderProcessTitlImg} /></div>
                </div>
            </div>
            <div className={classes.secondContainer}>
                <div className={classes.vertical28}></div>
                <div className={classes.text1}>Не уверены, как будет проходить заказ?</div>
                <div className={classes.text1_1}>Не уверены, как будет</div>
                <div className={classes.text1_2}>проходить заказ?</div>
                <div className={classes.crookedLine}><img src={crookedLine} /></div>
                <div className={classes.text2}>Сейчас мы все подробно</div>
                <div className={classes.text3}>
                    <div className={classes.titleYellow}>
                        расскажем
                    </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleWhite}>
                        и
                    </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleYellow}>
                        покажем
                    </div>
                </div>
                <div className={classes.vertical38}></div>
            </div>
            <div className={classes.seeBelow}><img src={seeBelow} /></div>
            <div className={classes.thirdConteiner}>
                <div className={classes.title}>
                    <div className={classes.titleWhite}>Заказ делится</div>
                    <div className={classes.titleWhite}>всего</div>
                    <div className={classes.titleWhite}>на</div>
                    <div className={classes.titleYellow}>5 этапов</div>
                </div>
                <div className={classes.ordBlock}>
                    <div className={classes.text}>
                        <div className={classes.numbAndTitl}>
                            <div className={classes.number}>1</div>
                            <div className={classes.title}>
                                <div>Оставьте заявку на сайте</div>
                                <div>или по телефону</div>
                            </div>
                        </div>
                        <div className={classes.paragraph}>
                            Вы можете связаться с нами через наш сайт или
                            по телефону, чтобы оставить заявку на
                            изготовление мебели. Мы примем вашу заявку и
                            свяжемся с вами в ближайшее время.
                        </div>
                    </div>
                    <div><img src={thirdCont1Img} /></div>
                </div>
                <div className={classes.ordBlock}>
                    <div className={classes.thirdContImg}><img src={thirdCont2Img} /></div>
                    <div className={classes.text}>
                        <div className={classes.numbAndTitl}>
                            <div className={classes.number}>2</div>
                            <div className={classes.title}>
                                <div>С вами связывается</div>
                                <div>наш спациалист</div>
                            </div>
                        </div>
                        <div className={classes.paragraph}>
                            Как только мы получим вашу заявку, наш специалист
                            свяжется с вами для уточнения деталей заказа и ответа
                            на все ваши вопросы. Мы готовы помочь вам с выбором
                            материалов, дизайном и другими важными аспектами.
                        </div>
                    </div>
                    <div className={classes.alterThirdContImg}><img src={thirdCont2Img} /></div>
                </div>
                <div className={classes.ordBlock}>
                    <div className={classes.text}>
                        <div className={classes.numbAndTitl}>
                            <div className={classes.number}>3</div>
                            <div className={classes.title}>
                                <div>Проектирование мебели</div>
                                <div>по техническому заданию</div>
                            </div>
                        </div>
                        <div className={classes.paragraph}>
                            Наши опытные дизайнеры разработают проект мебели,
                            который отвечает всем вашим требованиям и
                            пожеланиям. Мы обсудим с вами каждую деталь, чтобы
                            убедиться, что вы получите именно то, что хотели.
                        </div>
                    </div>
                    <div><img src={thirdCont3Img} /></div>
                </div>
                <div className={classes.ordBlock}>
                    <div className={classes.thirdContImg}><img src={thirdCont4Img} /></div>
                    <div className={classes.text}>
                        <div className={classes.numbAndTitl}>
                            <div className={classes.number}>4</div>
                            <div className={classes.title}>
                                <div>Мы производим</div>
                                <div>мебель вашей мечты</div>
                            </div>
                        </div>
                        <div className={classes.paragraph}>
                            Мы производим мебель вашей мечты - После того, как
                            проект утвержден, мы начинаем производство мебели.
                            Мы используем только высококачественные материалы и
                            современное оборудование, чтобы создать мебель,
                            которая будет служить вам долгие годы.
                        </div>
                    </div>
                    <div className={classes.alterThirdContImg}><img src={thirdCont4Img} /></div>
                </div>
                <div className={classes.ordBlock}>
                    <div className={classes.text}>
                        <div className={classes.numbAndTitl}>
                            <div className={classes.number}>5</div>
                            <div className={classes.title}>
                                <div>Наши специалисты монтируют</div>
                                <div>готовую мебель у вас</div>
                            </div>
                        </div>
                        <div className={classes.paragraph}>
                            Когда мебель готова, наша команда специалистов
                            доставит ее к вам и установит на месте. Мы убедимся,
                            что все детали установлены правильно и мебель
                            выглядит и работает идеально. Вы получите готовую
                            мебель, которая превзойдет все ваши ожидания.
                        </div>
                    </div>
                    <div><img src={thirdCont5Img} /></div>
                </div>
            </div>
            <div className={classes.fonImg}>
                <img src={logo} className={classes.fonImgTitle}/>
                <div className={classes.fonImgText}>Интересуют гарантии на нашу продукцию?</div>
                <img src={crookedLine2} className={classes.curvedLineImg}/>
                <div className={classes.learnDetailed}>
                    <NavLink to={""} className={classes.learnDetailedNav}>
                        Посмотреть наши гарании
                    </NavLink>
                </div>
            </div>
            <FormAudit />
        </div>
    );
};

export default OrderProcess;