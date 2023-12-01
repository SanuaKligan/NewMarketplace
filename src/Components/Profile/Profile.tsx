import React from "react";
import {UserType, UserProfileType} from "../../utils/generalTypes";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// const MyPostsContainer = require("./MyPosts/MyPostsContainer");
// const ProfileInfo = require("./ProfileInfo/ProfileInfo");
// import {Navigate} from "react-router-dom";

type ProfilePropsType = {
    profile: UserType | UserProfileType | null
    status: string
    authorizedUserId: number | null
    getUsers: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (statusText: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo
                profile = {props.profile}
                status = {props.status}
                updateStatus = {props.updateStatus}
                authorizedUserId = {props.authorizedUserId}
            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;

