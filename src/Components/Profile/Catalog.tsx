import React, { useRef } from "react";
import classes from "./Catalog.module.css";
import AllProductsContainer from "./MyPosts/AllProductsContainer";
import CatalogInfo from "./CatalogInfo/CatalogInfo";
import FormAudit from "../FormAudit/FormAudit";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
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
    const block1 = useRef(null)
    const block2 = useRef(null)
    const observedElements = [
        block1, block2
    ];

    useIntersectionObserver(observedElements, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });

    return (
        <div className={classes.catalog}>
            <div className={classes.catalogInfoCont} ref={block1}>
                <CatalogInfo />
            </div>
            <div className={classes.catalogInfoCont2}>
                <AllProductsContainer />
            </div>
            <FormAudit />
        </div>
    )
}

export default Catalog;

