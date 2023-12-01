// import React from "react";
// import {UsersAPI} from "../api/api";
// import {UserType} from "../utils/generalTypes";
// import {ThunkAction} from "redux-thunk";
// import {AppStateType, InferActionsTypes} from "./redux-store";
// import {GetUsersResponseType} from "../api/api";
// // const {UsersAPI} = require("../api/api");

// // const showPreloaderSidebar = "SHOW-PRELOADER-SIDEBAR";
// // const addFriends = "SET-FRIENDS";

// type InitialStateType = {
//     friends: Array<UserType>
//     isAuth: boolean
//     isShowPreloader: boolean
// }

// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
// //То, что в документации называется action'ом thunk'и и thunk'ой, мы называем соответственно thunk'ой и thunk creator'ом
// //Урок 6. 13:25 https://www.youtube.com/watch?v=fltI2uTv12c&t=533s

// let initialState: InitialStateType = {
//     friends: [],
//     isAuth: false,
//     isShowPreloader: false

// }

// const sidebarReducer = (
//     state = initialState,
//     action: ActionsType
// ): InitialStateType => {
//     switch (action.type) {
//         case "SET-FRIENDS":
//             return {
//                 ...state, friends: [...action.friends], isAuth: true
//                 // ...state, friends: [...action.friends.some(friend => friend.followed)
//                 // && action.friends.filter(friend => friend.followed).slice(0, 3)], isAuth: true
//             }
//         case "SHOW-PRELOADER-SIDEBAR":
//             return {...state, isShowPreloader: action.setShowSidebar}
//         default:
//             return state;
//     }
// }

// type ActionsType = InferActionsTypes<typeof sidebarActions>

// export const sidebarActions = {
//     setFriends: (friends: Array<UserType>) => ({type: "SET-FRIENDS", friends} as const),
//     setShowPreloaderSidebar: (setShowSidebar: boolean) => (
//         {type: "SHOW-PRELOADER-SIDEBAR", setShowSidebar} as const
//     )
// }

// export const getFriends = (currentPage: number | null, pageSize: number | null): ThunkType => {
//     return async (dispatch) => {
//         dispatch(sidebarActions.setShowPreloaderSidebar(true))
//         let items: Array<UserType> = []
//         let current: number = 1
//         for (let i = 0; i < 1; i++) {
//             // let state: InitialStateType = initialState
//             // console.log(current)
//             if (initialState.friends.length < 3) {
//                 UsersAPI.getUsers(currentPage = current, 100)
//                     .then((data: GetUsersResponseType) => {
//                             if (data.error === null) {
//                                 items = [...items, ...data.items.filter(friend => friend.followed)]
//                                 dispatch(sidebarActions.setFriends(items))
//                             }
//                         }
//                     )
//             }
//             current++
//         }
//         dispatch(sidebarActions.setShowPreloaderSidebar(false))
//     }
// }

// // import {UsersAPI} from "../../api/api";
// //
// // export const getFriends = (currentPage, pageSize) => {
// //     return (dispatch) => {
// //         dispatch(setShowPreloaderSidebar(true))
// //         for (let i; i < 3; i++) {
// //             let friends = 0
// //             UsersAPI.getUsers(currentPage = 1, 100)
// //                 .then(data => {
// //                         if (data.error === null) {
// //                             data.items.some(friend => friend.followed)
// //                             console.log(data.items)
// //                             if(data.items.length < 3){
// //                                 i = i + data.items.length
// //                                 friends = friends + data.items
// //                             }
// //                         }
// //                     }
// //                 )
// //             dispatch(setFriends(data.items))
// //             dispatch(setShowPreloaderSidebar(false))
// //         }
// //     }
// // }
// //
// // export const getFriends = (currentPage, pageSize) => {
// //     return (dispatch) => {
// //         dispatch(setShowPreloaderSidebar(true))
// //         UsersAPI.getUsers(currentPage, 100)
// //             .then(data => {
// //                     if (data.error === null) {
// //                         dispatch(setShowPreloaderSidebar(false))
// //                         dispatch(setFriends(data.items))
// //                     }
// //                 }
// //             )
// //     }
// // }

// export default sidebarReducer;