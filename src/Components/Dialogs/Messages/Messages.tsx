import React from "react";
import {MessageType} from "../../../redux/dialogs-reducer";
// import {classes} from "./Messages.module.css";

type MessagesPropsType = {
    message: MessageType | null
}

const Messages: React.FC<MessagesPropsType> = (props) =>{
    return(
        <div 
        // className={classes.message}
        >{props.message ? props.message.message : ""}</div>
    );
};

export default Messages;