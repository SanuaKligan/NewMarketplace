import React from "react";
import {connect} from "react-redux";
import {logIn, logOut} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import Login from "./Login";

type MapStateToPropsType = {
    id: number | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    logIn: (email: string | null, password: string | null, rememberMe: boolean) => void
    logOut: () => void
}

type OwnPropsType = {}

type LoginStateType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const LoginAJAX: React.FC<LoginStateType> = (props) => {
    return <Login id={props.id}
                  isAuth={props.isAuth}
                  logIn={props.logIn}
                  logOut={props.logOut}
    />
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        id: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(
    mapStateToProps, {logIn, logOut}
)(LoginAJAX)