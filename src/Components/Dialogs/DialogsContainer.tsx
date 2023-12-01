import React, {useEffect} from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {dialogsActions} from "../../redux/dialogs-reducer";
import {getFriends} from "../../redux/sidebar-reducer";
import {UserType} from "../../utils/generalTypes";
import {MessageType} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
// const {Dialogs} = require("./Dialogs");
// const {withAuthNavigate} = require("../../hoc/withAuthNavigate");


type MapStateToPropsType = {
    dialogs: Array<UserType | null>
    messages: Array<MessageType | null>
    isShowPreloader: boolean
}

type MapDispatchToPropsType = {
    addMessage: (text: string) => void
    getFriends: (currentPage: number | null, pageSize: number | null) => void
}

type OwnPropsType = {

}

const addMessage = dialogsActions.addMessage

type DialogsStateType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

// const DialogsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                 let addMessage = () => {
//                     let action = addMessageActionCreator()
//                     store.dispatch(action);
//                 }
//                 let updateNewMessageText = (text) => {
//                     let action = onMessageChangeActionCreator(text);
//                     store.dispatch(action);
//                 }
//                 return <Dialogs
//                         addMessage={addMessage}
//                         updateNewMessageText={updateNewMessageText}
//                         dialogs={store.getState().dialogsPage.dialogs}
//                         messages={store.getState().dialogsPage.messages}
//                         newMessageText={store.getState().dialogsPage.newMessageText}></Dialogs>
//             }
//         }
//         </StoreContext.Consumer>
//     );
// };

const DialogsAJAX: React.FC<DialogsStateType> = (props) => {

    useEffect(() => {
        props.getFriends(null, null)
    }, [])

    return <Dialogs
        dialogs={props.dialogs}
        messages={props.messages}
        addMessage={props.addMessage}
        isShowPreloader={props.isShowPreloader}
    />
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.sidebar.friends,
        messages: state.dialogsPage.messages,
        isShowPreloader: state.dialogsPage.isShowPreloader
        // newMessageText: state.dialogsPage.newMessageText,

    }
}

// export default compose (
//     connect(mapStateToProps, {addMessage, onMessageChange}),
//     withAuthNavigate
// )(Dialogs)

export default compose<React.ComponentType<OwnPropsType>>(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(
        mapStateToProps, {addMessage, getFriends}
    ),
    withAuthNavigate
)(DialogsAJAX)