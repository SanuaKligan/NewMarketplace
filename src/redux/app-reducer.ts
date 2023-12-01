import {getMyProfile} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./redux-store";

const setInitializedData = "SET-INITIALIZED-DATA"

type InitialStateType = {
    isInitialized: boolean
}

let initialState: InitialStateType = {
    isInitialized: false
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

type ActionsType = InferActionsTypes<typeof appActions>

export const appActions = {
    onInitializedData: () => ({type: setInitializedData} as const)
}

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case setInitializedData:
            return {
            ...state,
            isInitialized: true
        };
        default:
            return state;
    }
}

export const getInitializedApp = (): ThunkType => {
    return async (dispatch) => {
        let promise = dispatch(getMyProfile())
        Promise.all([promise]).then(() => {
            dispatch(appActions.onInitializedData())
        })
    }
}

export default appReducer;