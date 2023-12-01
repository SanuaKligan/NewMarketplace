import React, {useEffect} from "react";
import Footer from "./Footer";
import {connect} from "react-redux";
import {getFriends} from "../../redux/sidebar-reducer";
import {UserType} from "../../utils/generalTypes";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
    friends: Array<UserType>
    authorizedUserId: number | null
    isShowPreloader: boolean
    users: Array<UserType | void>
}

type MapDispatchToPropsType = {
    getFriends: (currentPage: number | null, pageSize: number | null) => void
}

type OwnPropsType = {

}

type FooterStateType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const FooterAJAX: React.FC<FooterStateType> = (props) => {
    useEffect(() => {
        props.getFriends(null, null)
    }, [
        props.users
    ])
    return <Footer
        isAuth={props.isAuth}
        friends={props.friends}
        authorizedUserId={props.authorizedUserId}
        isShowPreloader={props.isShowPreloader}
        users={props.users}
    />
}

let mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.sidebar.isAuth,
        friends: state.sidebar.friends, //Friends={props.store.getState().sidebar.Friends}
        authorizedUserId: state.auth.id,
        isShowPreloader: state.sidebar.isShowPreloader,
        users: state.usersPage.users
    }
}

const FooterContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType,AppStateType>(
    mapStateToProps, {getFriends}
)(FooterAJAX)

export default FooterContainer;

