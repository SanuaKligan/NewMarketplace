import React, {useEffect} from "react";
// import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
// import {getStatus, getUsers, updateStatus} from "../../redux/catalog-reducer";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
// import {UserProfileType, UserType} from "../../utils/generalTypes";
import Catalog from "./Catalog";
import {withRouter} from "../../utils/withRouter";
// const {Profile} = require("./Profile");
// const {withRouter} = require("../../utils/withRouter");

type MapStateToPropsType = {
    // profile: UserProfileType | UserType | null
    // status: string
    // authorizedUserId: number | null
}

type MapDispatchToProps = {
    // getUsers: (userId: number) => void
    // getStatus: (userId: number) => void
    // updateStatus: (statusText: string) => void
}

type OwnPropsType = {}

type CatalogStateType = MapStateToPropsType & MapDispatchToProps & OwnPropsType & typeof withRouter

const CatalogAJAX: React.FC<CatalogStateType> = (props) => {
    // useEffect(() => {
    //         let userId = props.match.params.userId;
    //         if (!userId) {
    //             userId = props.authorizedUserId
    //         }
    //         props.getUsers(userId)
    //         props.getStatus(userId)
    // }, [props])

    // if(!props.match.params.userId && !props.authorizedUserId){
    //     return <Navigate to={"/login"}/>
    // }
        return (
            <Catalog {...props}
                    //  profile = {props.profile}
                    //  status = {props.status}
                    //  updateStatus = {props.updateStatus}
            />
        )
}


// export const withRouter = (Children) => {
//     return (props) => {
//         const match = {params: useParams()};
//         return <Children {...props} match={match}/>
//     }
// }
//
// export const ProfileAJAX = (props) => {
//
//     useEffect(() => {
//         let userId = props.match.params.userId;
//         if (!userId) {
//             userId = props.authorizedUserId
//         }
//         this.props.getUsers(userId)
//         this.props.getStatus(userId)
//     }, [props.match.params.userId])
//
//     if(!props.match.params.userId && !props.authorizedUserId){
//         return <Navigate to={"/login"}/>
//     }
//     return (
//         <Profile {...props}
//                  profile = {props.profile}
//                  status = {props.status}
//                  updateStatus = {props.updateStatus}
//         />
//     )
// }


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        // profile: state.profilePage.profile,
        // status: state.profilePage.status,
        // authorizedUserId: state.auth.id
    }
}

export default compose<React.ComponentType<OwnPropsType>>(
    connect<MapStateToPropsType, MapDispatchToProps, OwnPropsType, AppStateType>(
        mapStateToProps, {
            // getUsers, getStatus, updateStatus
        }
    ), withRouter
)(CatalogAJAX)


