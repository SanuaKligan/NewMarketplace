import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../utils/generalTypes";
// import {userPhoto} from "../../assets/images/user.png";

type FriendsType = {
    classesDiv: string
    classesImg: string
    friends: Array<UserType | null>
    isAuth: boolean
}

const friends: React.FC<FriendsType> = (props) => {
    return (
        <div className={props.classesDiv}>{
            props.isAuth
                ? props.friends.length !== 0
                    ? props.friends.slice(0, 3).map(friend => {
                        if(friend){
                            return <div>
                                <NavLink to={"/profile/" + friend.id}>
                                    <img className={props.classesImg}
                                         src={friend.photos.small != null
                                             ? friend.photos.small
                                             : userPhoto}
                                    />
                                </NavLink>
                                {friend.name}
                                </div>;
                            }
                        }
                    )
                    : <div>No followed friends</div>
                // props.Friends
                //     .filter(friend => {
                //         if (friend.followed === true) {
                //             return <div className={classes.blockItem}>
                //                 <img className={classes.avatar}
                //                      src={friend.photos.small != null ? friend.photos.small : userPhoto}
                //                 />
                //                 {friend.name}
                //             </div>;
                //         }
                // else return <div className={classes.blockItem}>
                //     <img className={classes.avatar}
                //          src={friend.photos.small != null ? friend.photos.small : userPhoto}
                //     />
                //     {friend.name}
                // </div>;
                // })
                : <NavLink to={"/login"}>
                    Login
                </NavLink>
        }</div>
    );
};

export default friends;