import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import classes from "./Dialogs.module.css";
// import DialogsHumans from "./DialogsHumans/DialogsHumans";
import Messages from "./Messages/Messages";
import userPhoto from "../../assets/images/user.png"
import {Element} from "../../common/FormsControls/FormsControls";
import {required, maxLengthCreator} from "../../utils/validators/validators";
import Preloader from "../../assets/Preloader/Preloader";
import Friends from "../Friends/Friends";
import {UserType} from "../../utils/generalTypes";
import {MessageType} from "../../redux/dialogs-reducer";
// const {classes} = require("./Dialogs.module.css");
// const {Messages} = require("./Messages/Messages");
// const {Element} = require("../../common/FormsControls/FormsControls");
// const {required, maxLengthCreator} = require("../../utils/validators/validators");
// const {Preloader} = require("../../assets/Preloader/Preloader");

type DialogsType = {
    addMessage: (text: string) => void
    dialogs: Array<UserType | null>
    isShowPreloader: boolean
    messages: Array<MessageType | null>
}

type DialogsFormDataType = {
    message: string
}

type DialogsFormOwnPropsType = {

}

const maxLength = maxLengthCreator(50)
const Textarea = Element("textarea");

const DialogsForm: React.FC<
    InjectedFormProps<DialogsFormDataType, DialogsFormOwnPropsType> & DialogsFormOwnPropsType
    > = (props) => {
    // console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"message"}
                    name={"message"}
                    // onChange={props.onMessageChange}
                    validate={[required, maxLength]}
                    component={Textarea}
                />
            </div>
            <div>
                <button
                    // onClick={props.addMessage}
                >Send
                </button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm<DialogsFormDataType, DialogsFormOwnPropsType>({form: "dialog"})(DialogsForm)

const Dialogs: React.FC<DialogsType> = (props) => {
        const onSubmit = (values: DialogsFormDataType) => {
            props.addMessage(values.message);
        }
        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                    {
                        props.isShowPreloader
                            ? <Preloader/>
                            : <Friends
                                friends={props.dialogs}
                                isAuth={true}
                                classesDiv={classes.blockItem}
                                classesImg={classes.avatar}
                            />
                    }
                </div>
                <div className={classes.messagesItem}>
                    {props.messages.map(message => <Messages message={message}/>)}
                    <DialogsReduxForm
                        onSubmit={onSubmit}
                    />
                </div>
            </div>
        );
}

export default Dialogs;