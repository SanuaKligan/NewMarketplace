import React from "react"
import {UserType, UserProfileType} from "../../../utils/generalTypes"
import classes from "./CatalogInfo.module.css"
import firstImg from "../../../assets/images/catalogs/firstImg.png"
import alterFirstImg from "../../../assets/images/catalogs/alterFirstImg.png"
import ProfileStatusWithHooks from "./ProfileStatusWIthHooks"
import SeeBelow from "../../SeeBelow/SeeBelow"
import RangeSlider from "../../../UI/RangeSlider/RangeSlider"

type CatalogInfoPropsType = {
    profile: UserType | UserProfileType | null
    status: string
    updateStatus: (statusText: string) => void
    authorizedUserId: number | null
}

const CatalogInfo: React.FC<CatalogInfoPropsType> = (props) => {
    return (
        <div className={classes.catalogInfo}>
            <div className={classes.firstContainer}>
                <div className={classes.logoText}>
                    <div className={classes.titleWhite}>КАТАЛОГ</div>
                    <div className={classes.titleYellow}>ГОТОВОЙ МЕБЕЛИ</div>
                </div>
            </div>
            <div className={classes.firstImg}><img src={firstImg} /></div>
            <div className={classes.alterFirstImg}><img src={alterFirstImg} /></div>
            <div className={classes.seeBelow}>
                <SeeBelow />
            </div>
            <div className={classes.titleBlock}>Каталог</div>
        </div>
    )
}

export default CatalogInfo;
