import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import appReducer from "./app-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let rootReducer = combineReducers ({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer
});

type RootReducerType = typeof rootReducer //(globalState: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

// let x: AppStateType
//x.something

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;