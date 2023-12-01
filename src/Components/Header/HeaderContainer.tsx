import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    logOut: () => void
}

type OwnPropsType = {

}

type HeaderStateType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const HeaderAJAX: React.FC<HeaderStateType> = (props) => {
    return <Header {...props}/>
}

let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const HeaderContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(
    mapStateToProps, {logOut}
)(HeaderAJAX)

export default HeaderContainer;
