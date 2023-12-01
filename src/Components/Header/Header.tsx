import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
// const {classes} = require("./Header.module.css");

type HeaderProps = {
    isAuth: boolean
    login: string | null
    logOut: () => void
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header
            className={
            classes.header
        }>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/ru/c/cf/%D0%9B%D0%BE%D0%B1%D0%BE%D1%81_%D0%A3%D0%9F%D0%9D%D0%A4%D0%9C_%28%D0%BB%D0%BE%D0%B3%D0%BE%29.png"
                />
                Социальная паутина
                <div className={classes.authBlock}>
                    {
                        props.isAuth
                        ? <div>{props.login} <div><button onClick={props.logOut}>Log out</button></div></div>
                        : <NavLink to = {"/login"}>
                            Login
                        </NavLink>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;
