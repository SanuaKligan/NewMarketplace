import React, {useEffect} from "react";
import {
    usersActions, getUsers, deleteUsers, postUsers
} from "../../redux/users-reducer";
import {getFriends} from "../../redux/sidebar-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../../assets/Preloader/Preloader";
import {compose} from "redux";
// import {onSetSearchQuery, onSetSortUsers, onSetSelectedSort} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {UserType} from "../../utils/generalTypes";
// const {Preloader} = require("../../assets/Preloader/Preloader");

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    userTotalCount: string | undefined
    currentPage: number
    isFollowingInProgress: Array<number | null>
    isAuth: boolean
    isShowPreloader: boolean
    selectedSort: string
    searchQuery: string
}

type MapDispatchToPropsType = {
    setCurrentPageForUsers: (page: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    deleteUsers: (userId: number) => void
    postUsers: (userId: number) => void
    getFriends: (currentPage: number | null, pageSize: number | null) => void
    onSetSelectedSort: (sort: string) => void
    onSetSearchQuery: (searchQuery: string) => void
    onSetSortUsers: (newUsers: Array<UserType>) => void
}

type OwnPropsType = {
    title: string
}

type UsersStateType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const setCurrentPageForUsers = usersActions.setCurrentPageForUsers
const onSetSearchQuery = usersActions.onSetSearchQuery
const onSetSortUsers = usersActions.onSetSortUsers
const onSetSelectedSort = usersActions.onSetSelectedSort

const UsersAJAX: React.FC<UsersStateType> = (props) => {

    useEffect(() => {props.getUsers(props.currentPage, props.pageSize)}, [])

    // componentDidMount() {
    //     this.props.getUsers(this.props.currentPage, this.props.pageSize)
    // }


    const onPageChange = (pageNumber: number): void => {
        props.setCurrentPageForUsers(pageNumber)
        props.getUsers(pageNumber, props.pageSize)
    }

        return <>
            {props.isShowPreloader ? <Preloader/> : null}
            <Users {...props}
                   onPageChange={onPageChange}
                   // userTotalCount={this.props.userTotalCount}
                   // pageSize={this.props.pageSize}
                   // currentPage={this.props.currentPage}
                   // users={this.props.users}
                   // isFollowingInProgress={this.props.isFollowingInProgress}
                   // deleteUsers={this.props.deleteUsers}
                   // postUsers={this.props.postUsers}
            />
        </>
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        userTotalCount: state.usersPage.userTotalCount,
        currentPage: state.usersPage.currentPage,
        isFollowingInProgress: state.usersPage.isFollowingInProgress,
        isAuth: state.auth.isAuth,
        isShowPreloader: state.usersPage.isShowPreloader,
        selectedSort: state.usersPage.selectedSort,
        searchQuery: state.usersPage.searchQuery
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         changeFollow: (id) => {
//             let action = onFollowActionCreatorChange(id);
//             dispatch(action);
//         },
//         changeUnfollow: (id) => {
//             let action = onUnfollowActionCreatorChange(id);
//             dispatch(action);
//         },
//         setUsers: (users) => {
//             let action = setUsersActionCreator(users);
//             dispatch(action);
//         },
//         setCurrentPage: (page) => {
//             let action = setCurrentPageActionCreator(page);
//             dispatch(action);
//         },
//         setTotalCount: (usersCount) => {
//             let action = setTotalUsersCountActionCreator(usersCount);
//             dispatch(action);
//         },
//         setShowPreloader: (setShow) => {
//             let action = isShowPreloaderActionCreator(setShow);
//             dispatch(action);
//         }
//     }
//
// }

export default compose(
    //TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps,
        {
            setCurrentPageForUsers, getUsers, deleteUsers,
            postUsers, getFriends, onSetSelectedSort,
            onSetSearchQuery, onSetSortUsers
        }),
    // withAuthNavigate
)(UsersAJAX);

