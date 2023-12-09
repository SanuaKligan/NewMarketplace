import React from "react";
import classes from "./Catalog.module.css";
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
            />
            <AllProductsContainer />
            <FormAudit />
        </div>
    )
}

export default Catalog;

