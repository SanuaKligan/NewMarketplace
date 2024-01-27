import React, { useRef } from "react"
import classes from "./Footer.module.css"
import {NavLink, useLocation} from "react-router-dom"
import {UserType} from "../../utils/generalTypes"
import logo from "../../assets/images/Group 4606.png"

import phone from "../../assets/images/Телефон_.svg"
import email from "../../assets/images/Email_.svg"
import adress from "../../assets/images/Адрес_.svg"
import whatsApp from "../../assets/images/Whats_App.svg"
import telegram from "../../assets/images/Telegram.svg"
import instagram from "../../assets/images/Instagram.svg"

import whatsAppImg from "../../assets/images/WhatsAppSymb.svg"
import telegramImg from "../../assets/images/TelegramSymb.png"
import instagramImg from "../../assets/images/InstagramSymb.svg"
import BisnesMenu from "../BisnesMenu/BisnesMenu"
import ServiceMenu from "../ServiceMenu/ServiceMenu"
import deloLogo from "../../assets/images/deloLogo.svg"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"

type FooterProps = {
    isAuth: boolean
    friends: Array<UserType>
    authorizedUserId: number | null
    isShowPreloader: boolean
    users: Array<UserType | void>
}

const Footer: React.FC<FooterProps> = (props) => {
    // console.log(props)
    const handlerScrollUp = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        }
    }

    const block1 = useRef(null)
    const block2 = useRef(null)
    const block3 = useRef(null)
    const block4 = useRef(null)
    const block5 = useRef(null)
    const block6 = useRef(null)
    const block7 = useRef(null)
    const observedElements = [
        block1, block2, block3, block4, block5, block6, block7
    ];

    useIntersectionObserver(observedElements, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });

    const location = useLocation();

    const hideElementUrl = "*";

    const shouldHideElement = location.pathname === hideElementUrl;

    return (            
        <footer className={classes.footer}>
            {!shouldHideElement && <div className={classes.topFooter}>
                <div className={classes.title1} ref={block1}>
                    А вот наши контакты
                </div>
                <div className={classes.seventhContainer}>
                    <div className={classes.firstDiv}>
                        <div className={classes.topBlock} ref={block1}>
                            <div className={classes.ph}><img src={phone}/></div>
                            <div className={classes.nu}><a href="tel:+79600535559">+7 (960) 053 55 59</a></div>
                        </div>
                        <div className={classes.topBlock} ref={block2}>
                            <div className={classes.tx}><img src={email}/></div>
                            <div className={classes.lg}><a href="mailto:zakaz@loftrt.ru">zakaz@loftrt.ru</a></div>
                        </div>
                        <div className={classes.topBlock} ref={block3}>
                            <div className={classes.tx}><img src={adress}/></div>
                            <div className={classes.ad1}>Россия, г. Казань,</div>
                            <div className={classes.ad2}>ул. Центральная 91</div>
                        </div>
                        <div className={classes.bottomBlock} ref={block4}>
                            <div className={classes.tx}><img src={whatsApp}/></div>
                            <div className={classes.wA}>
                                <a href="https://wa.me/79600535559">
                                    <img src={whatsAppImg} />
                                </a>
                            </div>
                        </div>
                        <div className={classes.bottomBlock} ref={block5}>
                            <div className={classes.tx}><img src={telegram}/></div>
                            <div className={classes.te}>
                                <a href="https://t.me/loftrtru">
                                    <img src={telegramImg} />
                                </a>
                            </div>
                        </div>
                        <div className={classes.bottomBlock} ref={block6}>
                            <div className={classes.tx}><img src={instagram}/></div>
                            <div className={classes.in}>
                                <a href="https://www.instagram.com/loftrt.ru?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr">
                                    <img src={instagramImg} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            <div className={classes.deepFooter}>
                <div className={classes.container}>
                    <div className={classes.logoContainer}>
                        <NavLink to={"/home"}>
                            <img className={classes.logo} src={logo}/>
                        </NavLink>
                    </div>
                    <div className={classes.navContainer}>
                        <div className={classes.home}>
                            <NavLink to={"/home"} className={classes.disabled}>
                                Главная
                            </NavLink>
                        </div>
                        <div className={classes.home}>
                            <NavLink to={"/catalog"} className={classes.disabled}>
                                Каталог
                            </NavLink>
                        </div>
                        <div className={classes.bisnesMenu}>
                            <BisnesMenu />
                        </div>
                        <div className={classes.serviceMenu}>
                            <ServiceMenu />
                        </div>
                        <div className={classes.home}>
                            <NavLink to="/for_home" className={classes.disabled}>
                                Для дома
                            </NavLink>
                        </div>
                        <div className={classes.home}>
                            <NavLink to="/about_us"
                                className={classes.disabled}>
                                    О нас
                            </NavLink>
                        </div>
                        <div className={classes.home}>
                            <NavLink to="/how_it_will_be"
                                className={classes.disabled}>
                                    Как всё будет
                            </NavLink>
                        </div>
                    </div>
                    <div className={classes.upButton}>
                        <button onClick={handlerScrollUp}>Наверх</button>
                    </div>
                </div>
                <div className={classes.politicConf}>
                    <div>(с) ЛОФТ РТ / Все права защищены</div>
                    <NavLink to="/privacy" className={classes.obrPers}>Политика обработки персональных данных</NavLink>
                    <div><img src={deloLogo} /></div>
                    <div>“ДЕЛО ДИДЖИТАЛ АЙДЖЕНСИ”</div>
                    <a href="https://deloagency.com/" className={classes.obrPers}>Разработка и продвижение сайта deloagency.com</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;