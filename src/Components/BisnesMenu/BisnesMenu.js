import React, { useState, useRef, useEffect} from "react";
import classes from "./BisnesMenu.module.css";
import {NavLink} from "react-router-dom";
import dropdownImg from "../../assets/images/DropdownImg.png";
import dropdownImg2 from "../../assets/images/DropdownImg2.png";

const BisnesMenu = () => {
    const useClickOutside = (ref, callback) => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        };
        useEffect(() => {
            document.addEventListener("mousedown", handleClick);
            return () => {
                document.removeEventListener("mousedown", handleClick);
            };
        });
    };
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (isOpen) setTimeout(() => setOpen(false), 50);
    });
    return(
        <div className={classes.header}>
            <button className={classes.menuButton} onClick={() => setOpen(!isOpen)}>
                Для бизнеса 
                <img src={dropdownImg}/>
            </button>
            <nav className={`${classes.menu} ${isOpen ? classes.active : ""}`} ref={menuRef}>
                <ul className={classes.menuList}>
                    <li className={classes.menuTitle}>
                        Для бизнеса
                        <img src={dropdownImg2}/>
                    </li>
                    <li className={classes.menuItem}>
                        <NavLink to="/business/offices" className={navData => navData.isActive ? classes.navActive : classes.navDisabled}>
                            Для офиса
                        </NavLink>
                    </li>
                    <li className={classes.menuItem}>
                        <NavLink to="/business/salons" className={navData => navData.isActive ? classes.navActive : classes.navDisabled}>
                            Для салона
                        </NavLink>
                    </li>
                    <li className={classes.menuItem}>
                        <NavLink to="/business/shops" className={navData => navData.isActive ? classes.navActive : classes.navDisabled}>
                            Для магазина
                        </NavLink>
                    </li>
                    <li className={classes.menuItem}>
                        <NavLink to="/business/bars_cafes" className={navData => navData.isActive ? classes.navActive : classes.navDisabled}>
                            Для бара и кафе
                        </NavLink>
                    </li>
                    <li className={classes.menuItem}>
                        <NavLink to="/business/restaurants" className={navData => navData.isActive ? classes.navActive : classes.navDisabled}>
                            Для ресторана
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default BisnesMenu;