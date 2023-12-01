// import React from "react";
// import classes from "./Dialog1.module.css";
// import DialogsHumans from "../../DialogsHumans/DialogsHumans";
// import Messages from "../Messages";
//
// const Dialogs = (props) => {
//
//     let allDialogs = props.dialogs
//         .map(dialog => <div className={classes.avatar}>
//                 <img src={dialog.img}/>
//                 <DialogsHumans name={dialog.name} id={dialog.id}/>
//             </div>
//         )
//
//     let allAvatars = props.avatar
//         .map(avatar => <div className={classes.avatar}>
//                 <img src={avatar.img}/>
//             </div>
//         )
//
//     let allMessages = props.messages
//         .map(message => <Messages message={message.message}/>)
//
//     return (
//         <div className={classes.dialogs}>
//             <div className={classes.dialogsItem}>
//                 {allDialogs}
//             </div>
//             <div>
//                 {allAvatars}
//             </div>
//             <div className={classes.messagesItem}>
//                 {allMessages}
//             </div>
//         </div>
//     );
// };
//
// export default Dialogs;