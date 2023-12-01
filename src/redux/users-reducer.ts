// import {UsersAPI} from "../api/api";
// import {UserType} from "../utils/generalTypes";
// import {ThunkAction} from "redux-thunk";
// import {AppStateType, InferActionsTypes} from "./redux-store";
// import {GetUsersResponseType, DeleteUsersResponseType, PostUsersResponseType} from "../api/api";
// // const {UsersAPI} = require("../api/api");

// // const follow = "FOLLOW";
// // const unfollow = "UNFOLLOW";
// // const addUsers = "SET-USERS";
// // const setCurrentForUsers = "SET-CURRENT-FOR-USERS";
// // const setTotalUsersCount = "SET-TOTAL-USERS-COUNT";
// // const showPreloader = "SHOW-PRELOADER";
// // const followingInProgress = "FOLLOWING-IN-PROGRESS";
// // const setSelectedUsers = "SET-SELECTED-USERS"
// // const setSortUsers = "SET-SORT-USERS"
// // const setSearchQueryUsers = "SET-SEARCH-QUERY-USERS"

// type InitialStateType = {
//     users: Array<UserType>
//     pageSize: number
//     userTotalCount: string | undefined
//     currentPage: number
//     isShowPreloader: boolean
//     isFollowingInProgress: Array<number | null>
//     selectedSort: string
//     searchQuery: string
// }

// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
// //То, что в документации называется action'ом thunk'и и thunk'ой, мы называем соответственно thunk'ой и thunk creator'ом
// //Урок 6. 13:25 https://www.youtube.com/watch?v=fltI2uTv12c&t=533s

// let initialState: InitialStateType = {
//     users: [],
//     // Friends: [],
//     pageSize: 5,
//     userTotalCount: "20",
//     currentPage: 1,
//     isShowPreloader: false,
//     isFollowingInProgress: [],
//     selectedSort: "",
//     searchQuery: ""
// }

// const usersReducer = (
//     state = initialState,
//     action: ActionsType
// ): InitialStateType => {
//     switch (action.type) {
//         case "FOLLOW":
//             return {
//                 ...state, users: state.users.map(user => {
//                     if ((user) && (user.id === action.userId)) {
//                         return {...user, followed: true}
//                     }
//                     return user;
//                 })
//             }
//         case "UNFOLLOW":
//             return {
//                 ...state, users: state.users.map(user => {
//                     if ((user) && (user.id === action.userId)) {
//                         return {...user, followed: false}
//                     }
//                     return user;
//                 })
//             }
//         case "SET-USERS":
//             return {...state, users: [...action.users]}
//         case "SET-CURRENT-FOR-USERS":
//             return {...state, currentPage: action.page}
//         case "SET-TOTAL-USERS-COUNT":
//             return {...state, userTotalCount: action.usersCount}
//         case "SHOW-PRELOADER":
//             return {
//                 ...state, isShowPreloader: action.setShow
//             }
//         case "FOLLOWING-IN-PROGRESS":
//             return{
//                 ...state, isFollowingInProgress: action.setFollowing
//                     ? [...state.isFollowingInProgress, action.userId]
//                     : state.isFollowingInProgress.filter(id => id !== action.userId)
//             }
//         case "SET-SELECTED-USERS": return {
//             ...state,
//             selectedSort: action.sort
//         }
//         case "SET-SORT-USERS": return {
//             ...state,
//             users: action.newUsers
//         }
//         case "SET-SEARCH-QUERY-USERS": return {
//             ...state,
//             searchQuery: action.searchQuery
//         }
//         default:
//             return state;
//     }
// }

// type ActionsType = InferActionsTypes<typeof usersActions>

// export const usersActions = {
//     changeFollow: (userId: number) => ({type: "FOLLOW", userId} as const),
//     changeUnfollow: (userId: number) => ({type: "UNFOLLOW", userId} as const),
//     setUsers: (users: Array<UserType>) => ({type: "SET-USERS", users} as const),
// // setFriends: (Friends) => ({type: addFriends, Friends} as const),
//     setCurrentPageForUsers: (page: number) => (
//         {type: "SET-CURRENT-FOR-USERS", page} as const
//     ),
//     setTotalCount: (usersCount: string | undefined) => (
//         {type: "SET-TOTAL-USERS-COUNT", usersCount} as const
//     ),
//     setShowPreloader: (setShow: boolean) => ({type: "SHOW-PRELOADER", setShow} as const),
//     setFollowingInProgress: (
//         setFollowing: boolean, userId: number
//     ) => (
//         {type: "FOLLOWING-IN-PROGRESS", setFollowing, userId} as const
//     ),
//     onSetSelectedSort: (sort: string) => ({type: "SET-SELECTED-USERS", sort} as const),
//     onSetSortUsers: (newUsers: Array<UserType>) => ({type: "SET-SORT-USERS", newUsers} as const),
//     onSetSearchQuery: (searchQuery: string) => (
//         {type: "SET-SEARCH-QUERY-USERS", searchQuery} as const
//     )
// }

// export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
//     return async (dispatch) => {
//         dispatch(usersActions.setShowPreloader(true))
//         UsersAPI.getUsers(currentPage, pageSize)
//             .then((data: GetUsersResponseType) => {
//                 if (data.error === null) {
//                     dispatch(usersActions.setShowPreloader(false));
//                     dispatch(usersActions.setUsers(data.items));
//                     // dispatch(setFriends(data.items));
//                     dispatch(usersActions.setTotalCount(data.totalCount));
//                 }
//             })
//     }
// }
// export const deleteUsers = (userId: number): ThunkType => {
//     return async (dispatch) => {
//         dispatch(usersActions.setFollowingInProgress(true, userId));
//         UsersAPI.deleteUsers(userId)
//             .then((data: DeleteUsersResponseType) => {
//                 if (data.resultCode === 0) {
//                     dispatch(usersActions.changeUnfollow(userId));
//                 }
//                 dispatch(usersActions.setFollowingInProgress(false, userId));
//             })
//     }
// }
// export const postUsers = (userId: number): ThunkType => {
//     return async (dispatch) => {
//         dispatch(usersActions.setFollowingInProgress(true, userId));
//         UsersAPI.postUsers(userId)
//             .then((data: PostUsersResponseType) => {
//                 if (data.resultCode === 0) {
//                     dispatch(usersActions.changeFollow(userId));
//                 }
//                 dispatch(usersActions.setFollowingInProgress(false, userId));
//             })
//     }
// }

// export default usersReducer;