import React, { useState } from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import classes from "./Home.module.css";
import {MessageType} from "../../redux/dialogs-reducer";
import Materials from "../Materials/Materials";

import fonImgForPhone from "../../assets/images/fonImgForPhone.png";

import vertStick from "../../assets/images/vertStick.svg"

import ffsb from "../../assets/images/206e607d3cc87b80ab710c83f0afb753 1.png"
import sefsb from "../../assets/images/image 60.png"
import tfsb from "../../assets/images/Stol loft obedennyi Madmas 5 1.png"
import fofsb from "../../assets/images/1200x1200 1.png"
import fifsb from "../../assets/images/ot-kati2 1.png"
import sifsb from "../../assets/images/014 1.png"

// import shicDisImg from "../../assets/images/Vector.png"
// import shicDis from "../../assets/images/Шикарный дизайн.svg"
// import shicDisText from "../../assets/images/shicDisText.svg"
// import woodImg from "../../assets/images/Group.png"
// import onlyBestMat from "../../assets/images/Только лучшие материалы.svg"
// import woodText from "../../assets/images/woodText.svg"
// import smileImg from "../../assets/images/Group 4603.png"
// import bestPrices from "../../assets/images/Приятные цены.svg"
// import bestPricesText from "../../assets/images/bestPricesText.svg"

import secBigHomeImg from "../../assets/images/secBigHomeImg.png"
import whiteLogoImg from "../../assets/images/whiteLogoImg.svg"

import restTitle from "../../assets/images/У вас есть ресторан_.svg"
import restImg from "../../assets/images/restImg.png"
import salonTitle from "../../assets/images/У вас есть салон_.svg"
import salonImg from "../../assets/images/salonImg.png"
import barTitle from "../../assets/images/У вас есть бар или кафе_.svg"
import barImg from "../../assets/images/barImg.png"
import FormAudit from "../FormAudit/FormAudit";
import { NavLink } from "react-router-dom";
import OrdBisnesFurn from "../OrdBisnesFurn/OrdBisnesFurn";

// import title4 from "../../assets/images/Закажите у нас аудит.svg"
// import logInFormImg from "../../assets/images/Rectangle 696.png"
// import logInFormTitle from "../../assets/images/Проконсультируем бесплатно.svg"
// import title5 from "../../assets/images/А вот наши контакты.svg"

// import phone from "../../assets/images/Телефон_.svg"
// import email from "../../assets/images/Email_.svg"
// import adress from "../../assets/images/Адрес_.svg"
// import whatsApp from "../../assets/images/Whats_App.svg"
// import telegram from "../../assets/images/Telegram.svg"
// import instagram from "../../assets/images/Instagram.svg"

// import whatsAppImg from "../../assets/images/WhatsAppSymb.svg"
// import telegramImg from "../../assets/images/TelegramSymb.svg"
// import instagramImg from "../../assets/images/InstagramSymb.svg"

// type DialogsFormDataType = {
//     message: string
// }

// type DialogsFormOwnPropsType = {

// }

// const maxLength = maxLengthCreator(50)
// const Textarea = Element("textarea");

// const LogInForm: React.FC<
//     InjectedFormProps<DialogsFormDataType, DialogsFormOwnPropsType> & DialogsFormOwnPropsType
//     > = (props) => {
//     // console.log(props)
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <img src={logInFormTitle} className={classes.formTitle}/>
//             </div>
//             <div>
//                 <Field
//                     placeholder={"Имя"}
//                     name={"name"}
//                     component={"input"}
//                     className={classes.firstField}
//                 />
//             </div>
//             <div>
//                 <Field
//                     placeholder={"+7 (999) 999-99-99"}
//                     name={"number"}
//                     component={"input"}
//                     className={classes.firstField}
//                 />
//             </div>
//             <div>
//                 <Field
//                     placeholder={"Комментарий"}
//                     name={"comment"}
//                     component={"textarea"}
//                     className={classes.secondField}
//                 />
//             </div>
//             <div>
//                 <button
//                     // onClick={props.addMessage}
//                     className={classes.sendFormBut}
//                 >
//                     Отправить
//                 </button>
//             </div>
//         </form>
//     )
// }

// const LogInReduxForm = reduxForm<DialogsFormDataType, DialogsFormOwnPropsType>({form: "dialog"})(LogInForm)

const Home: React.FC = (props) => {
        const [isActive, setIsActive] = useState(false);
        const handleClick = () => {
            setIsActive(!isActive);
        }
        return (
            <div className={classes.home}>
                <div className={classes.firstContainer}>
                    <div className={classes.logoText}>
                        <div className={classes.titleYellow}>
                            LOFT RT
                        </div>
                        <div className={classes.logoText2Block}>
                            <div className={classes.titleWhite}>
                                МЕБЕЛЬ  
                            </div>
                            <div className={classes.titleWhite}>
                                ДЛЯ
                            </div>
                            <div className={classes.titleYellow}>
                                ВАС
                            </div>
                        </div>
                    </div>
                    <div className={classes.fonImgForPhone}><img src={fonImgForPhone} /></div>
                    <div className={classes.ordButtons}>
                        {/* <div className={classes.firstButton}> */}
                            <NavLink to={"/for_home"} className={classes.firstButton}>
                                Заказать домашнюю мебель
                            </NavLink>
                        {/* </div> */}
                        <div className={classes.line12}></div>
                        <div className={`${classes.secondButton} ${isActive && classes.activeMenu}`} onClick={handleClick}>
                            <OrdBisnesFurn />
                        </div>
                    </div>
                </div>
                <div className={classes.fonImg}>
                    <div className={classes.homePageKitchenNav}>
                        {/* <div className={classes.navSegm}> */}
                            <NavLink to={"/business/offices"} className={classes.navSegm}>
                                Для бизнеса
                            </NavLink>
                        {/* </div> */}
                        <div  className={classes.vertStick}><img src={vertStick} /></div>
                        {/* <div className={classes.centNavSegm}> */}
                            <NavLink to={"/catalog"} className={classes.centNavSegm}>
                                Каталог
                            </NavLink>
                        {/* </div> */}
                        <div  className={classes.vertStick}><img src={vertStick} /></div>
                        {/* <div className={classes.navSegm}> */}
                            <NavLink to={"/for_home"} className={classes.navSegm}>
                                Для дома
                            </NavLink>
                        {/* </div> */}
                    </div>
                </div>
                <div className={classes.workWithLove}>
                    <div className={classes.titleWhite}>Работаем исключительно </div>
                    <div className={classes.workWithLove15_6}></div>
                    <div className={classes.titleYellow}>с любовью</div>
                </div>
                <div className={classes.secondContainer}>
                    <div className={classes.firstDiv}>
                        <div className={classes.bigImg}><img src={ffsb} /></div>
                        <div className={classes.smallImg}><img src={sefsb} /></div>
                        <div className={classes.smallImg}><img src={tfsb} /></div>
                    </div>
                    <div className={classes.secondDiv}>
                        <div className={classes.smallImg}><img src={fofsb} /></div>
                        <div className={classes.smallImg}><img src={fifsb} /></div>
                        <div className={classes.bigImg}><img src={sifsb} /></div>
                    </div>
                </div>
                <div className={classes.alterSecondContainer}>
                    <div className={classes.bigImg}><img src={sifsb} /></div>
                    <div className={classes.smallImg}><img src={sefsb} /></div>
                    <div className={classes.smallImg}><img src={tfsb} /></div>
                    <div className={classes.bigImg}><img src={fifsb} /></div>
                </div>
                <div className={classes.thirdContainer}>
                    <div className={classes.miniText}>
                        <div>
                            Понравилось то-что вы увидели? Хотите себе такую мебель? 
                            Так чего же вы ждёте? Вы уже знаете, к кому обратиться.
                            Будем ждать вашей заявки. 
                        </div>
                    </div>
                    <div className={classes.catOrdButtons}>
                        <div className={classes.firstButton}>
                            <NavLink to={"/catalog"} className={classes.firstButton}>
                                В наш каталог
                            </NavLink>
                        </div>
                        <div className={classes.line8}></div>
                        <div>
                            <NavLink to={"/catalog"}  className={classes.secondButton}>
                                Заказать мебель
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className={classes.aboutFurn}>
                    <div className={classes.titleWhite}>Немного о </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleYellow}>нашей мебели</div>
                </div>
                <div className={classes.alterSecBigHomeImg}>
                    <img src={whiteLogoImg} className={classes.alterWhiteLogoImg}/>
                </div>
                <div className={classes.fourthContainer}>
                    <Materials />
                    {/* <div className={classes.infoBlock}>
                        <div className={classes.infBlImg}><img src={shicDisImg} /></div>
                        <div className={classes.infBlTitle}><img src={shicDis} /></div>
                        <div className={classes.infBlText}><img src={shicDisText} /></div>
                    </div>
                    <img className={classes.verticalLine14}/>
                    <div className={classes.infoBlock}>
                        <div className={classes.infBlImg}><img src={woodImg} /></div>
                        <div className={classes.infBlTitle}><img src={onlyBestMat} /></div>
                        <div className={classes.infBlText}><img src={woodText} /></div>
                    </div>
                    <img className={classes.verticalLine14}/>
                    <div className={classes.infoBlock}>
                        <div className={classes.infBlImg}><img src={smileImg} /></div>
                        <div className={classes.infBlTitle}><img src={bestPrices} /></div>
                        <div className={classes.infBlText}><img src={bestPricesText} /></div>
                    </div> */}
                </div>
                <div className={classes.secBigHomeImg}>
                    <img src={whiteLogoImg} className={classes.whiteLogoImg}/>
                </div>
                {/* <div className={classes.learnMore}> */}
                    <NavLink to={"/about_us"} className={classes.learnMore}>
                        Узнать больше
                    </NavLink>
                {/* </div> */}
                <div className={classes.title1}>
                    <div className={classes.titleWhite}>У вас есть </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleYellow}>ресторан?</div>
                </div>
                <div className={classes.fifthContainer}>
                    <div className={classes.alterFifthContImg}>
                        <div><img src={restImg} /></div>
                    </div>
                    <div className={classes.fifthContText}>
                        <div className={classes.minTitle}>Отлично!</div>
                        <div className={classes.descrText}>
                            Soft Loft - это лучший выбор для ресторанов, которые ищут 
                            качественную мебель в стиле лофт. Наша команда опытных 
                            специалистов готова предложить широкий выбор мебели, которая 
                            не только выглядит превосходно, но и прослужит долгое время. 
                            Мы гарантируем высокое качество каждого изделия и стремимся 
                            к тому, чтобы все наши клиенты были довольны результатом. 
                            Независимо от того, какой будет проект, мы готовы принять вызов 
                            и создать идеальный интерьер для вашего ресторана.
                        </div>
                        {/* <div className={classes.ordButton}> */}
                            <NavLink to={"/business/restaurants"} className={classes.ordButton}>
                                Заказать для него мебель
                            </NavLink>
                        {/* </div> */}
                    </div>
                    <div className={classes.fifthContImg}>
                        <div><img src={restImg} /></div>
                    </div>
                </div>
                <div className={classes.title1}>
                    <div className={classes.titleWhite}>У вас есть </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleYellow}>салон?</div>
                </div>
                <div className={classes.fifthContainer}>
                    <div className={classes.alterFifthContImg}>
                        <div><img src={salonImg} /></div>
                    </div>
                    <div className={classes.fifthContText}>
                        <div className={classes.minTitle}>Превосходно!</div>
                        <div className={classes.descrText}>
                            Наша мебель - это идеальный выбор для салонов, которые хотят 
                            создать уютную и стильную атмосферу. Она сочетает в себе 
                            современный дизайн и комфорт, что делает ее привлекательной 
                            для клиентов. Мебель от софт лофт имеет уникальный стиль, 
                            который включает в себя элементы индустриального дизайна, 
                            такие как металлические ножки и каркасы, а также натуральные 
                            материалы, такие как дерево и кожа. Это делает ее идеальной 
                            для элегантного, стильного и при этом комфортного салона.
                        </div>
                        {/* <div className={classes.ordButton}> */}
                            <NavLink to={"/business/salons"} className={classes.ordButton}>
                                Заказать для него мебель
                            </NavLink>
                        {/* </div> */}
                    </div>
                    <div className={classes.fifthContImg}>
                        <div><img src={salonImg} /></div>
                    </div>
                </div>
                <div className={classes.title1}>
                    <div className={classes.titleWhite}>У вас есть </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleYellow}>бар </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleWhite}>или </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleYellow}>кафе?</div>
                </div>
                <div className={classes.fifthContainer}>
                    <div className={classes.alterFifthContImg}>
                        <div><img src={barImg} /></div>
                    </div>
                    <div className={classes.fifthContText}>
                        <div className={classes.minTitle}>Замечательно!</div>
                        <div className={classes.descrText}>
                            Наша мебель идеально подходит для баров и кафе. Она 
                            создаст атмосферу уюта и комфорта, что особенно важно для 
                            заведений, где люди приходят отдохнуть и провести время с 
                            друзьями. Кроме того, мебель от Soft Loft изготавливается из 
                            качественных материалов, что обеспечивает ее долговечность 
                            и надежность. Бары, которые выбирают мебель от Soft Loft, 
                            могут быть уверены в том, что они их клиенты будут в восторге 
                            и обязательно вернутся еще не раз.
                        </div>
                        {/* <div className={classes.ordButton}> */}
                            <NavLink to={"/business/bars_cafes"} className={classes.ordButton}>
                                Заказать у нас мебель
                            </NavLink>
                        {/* </div> */}
                    </div>
                    <div className={classes.fifthContImg}>
                        <div><img src={barImg} /></div>
                    </div>
                </div>
                <FormAudit />
                {/* <div className={classes.title1}>
                    <img src={title5}/>
                </div>
                <div className={classes.seventhContainer}>
                    <div className={classes.firstDiv}>
                        <div className={classes.topBlock}>
                            <div className={classes.ph}><img src={phone}/></div>
                            <div className={classes.nu}>+7 (777) 777 77 77</div>
                        </div>
                        <div className={classes.topBlock}>
                            <div className={classes.tx}><img src={email}/></div>
                            <div className={classes.lg}>loftluxe@gmail.com</div>
                        </div>
                        <div className={classes.topBlock}>
                            <div className={classes.tx}><img src={adress}/></div>
                            <div className={classes.ad1}>Россия, г. Казань,</div>
                            <div className={classes.ad2}>ул. Центральная 91</div>
                        </div>
                    </div>
                    <div className={classes.secondDiv}>
                        <div className={classes.bottomBlock}>
                            <div className={classes.tx}><img src={whatsApp}/></div>
                            <div className={classes.wA}><img src={whatsAppImg}/></div>
                        </div>
                        <div className={classes.bottomBlock}>
                            <div className={classes.tx}><img src={telegram}/></div>
                            <div className={classes.te}><img src={telegramImg}/></div>
                        </div>
                        <div className={classes.bottomBlock}>
                            <div className={classes.tx}><img src={instagram}/></div>
                            <div className={classes.in}><img src={instagramImg}/></div>
                        </div>
                    </div>
                </div> */}
            </div>
        );
}

export default Home;