import React from "react";
import {UserType, UserProfileType} from "../../../utils/generalTypes";
import classes from "./ProfileInfo.module.css";
import Spider from "../../../assets/images/Spider.jpg";
import userPhoto from "../../../assets/images/user.png";
import Preloader from "../../../assets/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWIthHooks";
// const JobSearch = require("../../../assets/images/JobSearch.png")
// const Cross = require("../../../assets/images/Cross.png")

type ProfileInfoPropsType = {
    profile: UserType | UserProfileType | null
    status: string
    updateStatus: (statusText: string) => void
    authorizedUserId: number | null
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        return (
            <div>
                <Preloader/>
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <div className={classes.hat}>
                        <img src={Spider} />
                    </div>
                    <div className={classes.avatarBlock}>
                        {
                            props.profile.photos.large === null
                                ? <img className={classes.avatar}
                                       src={userPhoto}
                                       alt={userPhoto}
                                />
                                : <img className={classes.avatar}
                                       src={props.profile.photos.large}
                                       alt={userPhoto}
                                />
                        }
                        <div>
                            fullName: {props.profile.name}
                        </div>
                        {<div>
                            <ProfileStatusWithHooks
                                status={props.status}
                                profileId={props.profile.id}
                                updateStatus = {props.updateStatus}
                                authorizedUserId = {props.authorizedUserId}
                            />
                        </div>
                        }
                        {/*<div>*/}
                        {/*    lookingForAJob: {props.profile.lookingForAJob*/}
                        {/*    ? <img className={classes.avatar} src={JobSearch} />*/}
                        {/*    : <img className={classes.avatar} src={Cross} />}*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;
