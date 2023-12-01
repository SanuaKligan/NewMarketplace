import React, {useEffect} from "react";
import Nav from "./Nav";
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

type NavStateType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const NavAJAX: React.FC<NavStateType> = (props) => {
    useEffect(() => {
        props.getFriends(null, null)
    }, [
        props.users
    ])
    // let friends = props.friends
    // useEffect(() => {
    //     friends = props.friends
    // }, [
    //     // props.friends
    // ])
    //
    // while(friends.length < 3){
    //     let i = 2
    //     props.getFriends(i, 5)
    //     i++
    // }

    return <Nav
        isAuth={props.isAuth}
        friends={props.friends}
        authorizedUserId={props.authorizedUserId}
        isShowPreloader={props.isShowPreloader}
        users={props.users}
        // getFriends = {props.getFriends}
    />
}

// class NavAJAX extends React.Component {
//
//     componentDidMount() {
//         this.props.getFriends()
//     }
//
//     render() {
//         return <Nav
//             isAuth = {this.props.isAuth}
//             Friends = {this.props.Friends}
//             authorizedUserId = {this.props.authorizedUserId}
//             isShowPreloader = {this.props.isShowPreloader}
//         />
//     }
// }

let mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.sidebar.isAuth,
        friends: state.sidebar.friends, //Friends={props.store.getState().sidebar.Friends}
        authorizedUserId: state.auth.id,
        isShowPreloader: state.sidebar.isShowPreloader,
        users: state.usersPage.users
    }
}

const NavContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType,AppStateType>(
    mapStateToProps, {getFriends}
)(NavAJAX)

export default NavContainer;

