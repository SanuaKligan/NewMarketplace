import {UserType} from "../utils/generalTypes";
import {InferActionsTypes} from "./redux-store";

// const addMessageType = "ADD-MESSAGE";

export type MessageType = {
    id: number,
    message: string | null
}

export type InitialStateType = {
    dialogs: Array<UserType | null>
    messages: Array<MessageType | null>
    isShowPreloader: boolean
};

let initialState: InitialStateType = {
    dialogs: [
        // {
        //     id: 1,
        //     name: "Vladimir",
        //     img: "https://img2.joyreactor.cc/pics/post/art-%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA-%D0%BF%D0%B0%D0%BD%D0%BA-%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD-4836379.jpeg",
        // },
        // {
        //     id: 2,
        //     name: "Ernest",
        //     img: "https://mtdata.ru/u24/photo798D/20783317882-0/original.jpg",
        // },
        // {
        //     id: 3,
        //     name: "Che",
        //     img: "https://kartinkin.net/uploads/posts/2022-03/1646360616_1-kartinkin-net-p-che-gevara-kartinki-1.jpg"
        // }
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "I'm fine, thanks"},
        {id: 4, message: "How do you do?"}
    ],
    isShowPreloader: false
    // newMessageText: ""
}

const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: action.text}],
                // newMessageText: ""
            };
        // case onMessageChangeType:
        //     return {
        //         ...state,
        //         newMessageText: action.newText
        //     };
        // case addDialogHumans:
        //     return {...state, dialogs: [...action.friends]}
        // case showPreloaderDialogs:
        //     return {...state, isShowPreloader: action.setShowDialogs}
        default:
            return state;
    }
}

type ActionTypes = InferActionsTypes<typeof dialogsActions>

export const dialogsActions = {
    addMessage: (text: string) => ({type: "ADD-MESSAGE", text} as const)
}
// export const setDialogHumans = (friends) => ({type: addDialogHumans, friends});
// export const setShowPreloaderDialogs = (setShowDialogs) => ({type: showPreloaderDialogs, setShowDialogs});
// export const onMessageChange = (text) => ({type: onMessageChangeType, newText: text});
//
// export const getDialogHumans = (currentPage, pageSize) => {
//     return (dispatch) => {
//         dispatch(setShowPreloaderDialogs(true))
//         UsersAPI.getUsers(currentPage, 50)
//             .then(data => {
//                     if (data.error === null) {
//                         dispatch(setShowPreloaderDialogs(false))
//                         dispatch(setDialogHumans(data.items))
//                     }
//                 }
//             )
//     }
// }

export default dialogsReducer;