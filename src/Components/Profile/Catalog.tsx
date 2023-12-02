import React from "react";
import classes from "./Catalog.module.css";
import {UserType, UserProfileType} from "../../utils/generalTypes";
import AllProductsContainer from "./MyPosts/AllProductsContainer";
import CatalogInfo from "./CatalogInfo/CatalogInfo";
import FormAudit from "../FormAudit/FormAudit";
// const MyPostsContainer = require("./MyPosts/MyPostsContainer");
// const ProfileInfo = require("./ProfileInfo/ProfileInfo");
// import {Navigate} from "react-router-dom";

type CatalogPropsType = {
    // profile: UserType | UserProfileType | null
    // status: string
    // authorizedUserId: number | null
    // getUsers: (userId: number) => void
    // getStatus: (userId: number) => void
    // updateStatus: (statusText: string) => void
}

const Catalog: React.FC<CatalogPropsType> = (props) => {
    return (
        <div className={classes.catalog}>
            <CatalogInfo
                // profile = {props.profile}
                // status = {props.status}
                // updateStatus = {props.updateStatus}
                // authorizedUserId = {props.authorizedUserId}
            />
            <AllProductsContainer />
            {/* <FormAudit /> */}
        </div>
    )
}

export default Catalog;

