import React from "react";
import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";
import {UserType} from "../../utils/generalTypes";
import Preloader from "../../assets/Preloader/Preloader";
// const {classes} = require("./Nav.module.css");
// const {Preloader} = require("../../assets/Preloader/Preloader");

type NavProps = {
    isAuth: boolean
    friends: Array<UserType>
    authorizedUserId: number | null
    isShowPreloader: boolean
    users: Array<UserType | void>
}

const Nav: React.FC<NavProps> = (props) => {
    // console.log(props)
    return (
        <div className={classes.nav}>
            <nav>
                <div>
                    <div className={classes.item}>
                        <NavLink to={"/profile/" + props.authorizedUserId}
                                 className={navData => navData.isActive ? classes.active : classes.item}>
                            Profile
                        </NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/dialogs"
                                 className={navData => navData.isActive ? classes.active : classes.item}>
                            Messages
                        </NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/news"
                                 className={navData => navData.isActive ? classes.active : classes.item}>
                            News
                        </NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/music"
                                 className={navData => navData.isActive ? classes.active : classes.item}>
                            Music
                        </NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/users"
                                 className={navData => navData.isActive ? classes.active : classes.item}>
                            Find users
                        </NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/settings"
                                 className={navData => navData.isActive ? classes.active : classes.item}>
                            Settings
                        </NavLink>
                    </div>
                    <div>
                        <h3>Friends</h3>
                        {
                            props.isShowPreloader
                                ? <Preloader/>
                                : <Friends isAuth={props.isAuth}
                                           friends={props.friends}
                                           classesDiv={classes.blockItem}
                                           classesImg={classes.avatar}
                                           // getFriends={props.getFriends}
                                />
                        }
                    </div>
                </div>
            </nav>
            {/*{props.friends.name}*/}
        </div>
    )
}

export default Nav;

