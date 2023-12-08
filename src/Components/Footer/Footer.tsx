import React from "react"
import classes from "./Footer.module.css"
import {NavLink} from "react-router-dom"
import {UserType} from "../../utils/generalTypes"
import logo from "../../assets/images/Group 4606.png"
import footerBlock from "../../assets/images/FooterBlock.png"
import upButton from "../../assets/images/UpButton.svg"
import politicConf from "../../assets/images/Политика обработки персональных данных.svg"
import dropdownImg from "../../assets/images/DropdownImg.png"

import title5 from "../../assets/images/А вот наши контакты.svg"

import phone from "../../assets/images/Телефон_.svg"
import email from "../../assets/images/Email_.svg"
import adress from "../../assets/images/Адрес_.svg"
import whatsApp from "../../assets/images/Whats_App.svg"
import telegram from "../../assets/images/Telegram.svg"
import instagram from "../../assets/images/Instagram.svg"

import whatsAppImg from "../../assets/images/WhatsAppSymb.svg"
import telegramImg from "../../assets/images/TelegramSymb.svg"
import instagramImg from "../../assets/images/InstagramSymb.svg"
import footerImg from "../../assets/images/footerImg.png"
import BisnesMenu from "../BisnesMenu/BisnesMenu"
import ServiceMenu from "../ServiceMenu/ServiceMenu"
import deloLogo from "../../assets/images/deloLogo.svg"
// const {classes} = require("./Nav.module.css");
// const {Preloader} = require("../../assets/Preloader/Preloader");

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
    return (            
        <footer className={classes.footer}>
            <div className={classes.topFooter}>
                <div className={classes.title1}>
                    А вот наши контакты
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
                </div>
            </div>
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
                        <button onClick={handlerScrollUp}>Навех</button>
                    </div>
                </div>
                <div className={classes.politicConf}>
                    <div>(с) ЛОФТ РТ / Все права защищены</div>
                    <div className={classes.obrPers}>Политика обработки персональных данных</div>
                    <div><img src={deloLogo} /></div>
                    <div>“ДЕЛО ДИДЖИТАЛ АЙДЖЕНСИ”</div>
                    <div className={classes.obrPers}>Разработка и продвижение сайта deloagency.com</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;