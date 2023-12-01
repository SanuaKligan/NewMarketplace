// import {AuthAPI} from "../api/api";
// import {stopSubmit} from "redux-form";
// import {ThunkAction} from "redux-thunk";
// import {AppStateType, InferActionsTypes} from "./redux-store";
// import {GetMyProfileType} from "../utils/generalTypes";
// import {LogInResponseType, LogOutResponseType} from "../api/api";














// const {AuthAPI} = require("../api/api");


// const setUsersData = "SET-USERS-DATA"
//
// let initialState = {
//     id: null,
//     email: null,
//     login: null,
//     isAuth: false
// }
//
// const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case setUsersData:
//             return {
//             ...state,
//             ...action.payload,
//             isAuth: action.payload.isAuth
//         };
//         default:
//             return state;
//     }
// }
//
// export const onSetUsersData = (id, email, login, isAuth) => ({type: setUsersData, payload: {id, email, login, isAuth}})
//
// export const getMyProfile = () => (dispatch) => {
//         return AuthAPI.getMyProfile()
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     let {id, email, login} = response.data.data;
//                     dispatch(onSetUsersData(id, email, login, true));
//                 }
//             })
// }
//
// export const logIn = (email, password, rememberMe) => (dispatch) => {
//         AuthAPI.logIn(email, password, rememberMe)
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     dispatch(getMyProfile());
//                 }
//                 else {
//                     let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
//                     dispatch(stopSubmit("login", {_error: message}));
//                 }
//             })
// }
//
// export const logOut = () => (dispatch) => {
//         AuthAPI.logOut()
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     dispatch(onSetUsersData(null, null, null, false));
//                 }
//             })
// }


















// export type InitialStateType = {
//     id: number | null
//     email: string | null
//     login: string | null
//     isAuth: boolean
// };

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
//То, что в документации называется action'ом thunk'и и thunk'ой, мы называем соответственно thunk'ой и thunk creator'ом
//Урок 6. 13:25 https://www.youtube.com/watch?v=fltI2uTv12c&t=533s

// let initialState: InitialStateType = {
//     id: null,
//     email: null,
//     login: null,
//     isAuth: false
// }

// const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
//     switch (action.type) {
//         case "SET-USERS-DATA":
//             return {
//                 ...state,
//                 ...action.payload,
//                 isAuth: action.payload.isAuth
//             };
//         default:
//             return state;
//     }
// }

// type ActionsType = InferActionsTypes<typeof authActions>

// export const authActions = {
//     onSetUsersData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
//         type: "SET-USERS-DATA", payload: {id, email, login, isAuth} as const
//     })
// }

// export const getMyProfile = (): ThunkType => (dispatch) => {
//     return AuthAPI.getMyProfile().then((data: GetMyProfileType) => {
//             if (data.resultCode === 0) {
//                 let {id, email, login} = data.data;
//                 dispatch(authActions.onSetUsersData(id, email, login, true));
//             }
//         })
// }

// export const logIn = (email: string | null, password: string | null, rememberMe: boolean): ThunkType => {
//     return async (dispatch) => {
//         AuthAPI.logIn(email, password, rememberMe)
//             .then((data: LogInResponseType) => {
//                 if (data.resultCode === 0) {
//                     dispatch(getMyProfile());
//                 } else {
//                     let message: string | null = data.messages.length > 0 ? data.messages[0] : "Some error"
//                     // @ts-ignore
//                     dispatch(stopSubmit("login", {_error: message}));
//                 }
//             })
//     }
// }

// export const logOut = (): ThunkType => {
//     return async (dispatch) => {
//         AuthAPI.logOut()
//             .then((data: LogOutResponseType) => {
//                 if (data.resultCode === 0) {
//                     dispatch(authActions.onSetUsersData(null, null, null, false));
//                 }
//             })
//     }
// }

// export default authReducer;