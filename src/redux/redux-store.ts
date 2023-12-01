import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import appReducer from "./app-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import catalogReducer from "./catalog-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


let rootReducer = combineReducers ({
    app: appReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    catalogPage: catalogReducer,
    form: formReducer
});

type RootReducerType = typeof rootReducer //(globalState: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>
export type AppDispatch = typeof store.dispatch

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

// let x: AppStateType
//x.something

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>()
export default store;