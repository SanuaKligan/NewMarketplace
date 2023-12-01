//import profileReducer from "./profile-reduser";
//import dialogsReduser from "./dialogs-reduser";
// import sidebarReduser from "./sidebar-reduser";
//
// const addPost = "ADD-POST";
// const onPostChange = "ON-POST-CHANGE";
//
// const addMessage = "ADD-MESSAGE";
// const onMessageChange = "ON-MESSAGE-CHANGE";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "Hi everyone", likes: "4"},
//                 {id: 2, message: "Today is shining", likes: "5"}
//             ],
//             newPostText: ""
//         },
//
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: "NameA", img: "https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg"},
//                 {id: 2, name: "NameB", img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
//                 {
//                     id: 2,
//                     name: "NameC",
//                     img: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
//                 }
//             ],
//             /*messages: {
//                 myMessagesToName1: [
//                     {id: 1, message: "Hi"},
//                     {id: 2, message: "How are you?"},
//
//                 ],
//                 messagesByName1: [
//                     {id: 1, message: "I'm fine, thanks"},
//                     {id: 2, message: "How do you do?"}
//                 ]
//                 }*/
//             messages: [
//                 {id: 1, message: "Hi"},
//                 {id: 2, message: "How are you?"},
//                 {id: 3, message: "I'm fine, thanks"},
//                 {id: 4, message: "How do you do?"}
//             ],
//             newMessageText: ""
//         },
//
//         sidebar: {
//             Friends: [
//                 {
//                     id: 1,
//                     name: "NameA",
//                     img: "https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg"
//                 },
//                 {
//                     id: 2,
//                     name: "NameB",
//                     img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
//                 },
//                 {
//                     id: 3,
//                     name: "NameC",
//                     img: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
//                 }
//             ]
//         }
//     },
//     _callSubscriber() {
//
//     },
//
//     getState() {
//         return this._state;
//     }, //_state
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     }, //_callSubscriber = rerenderEntireTree
//
//     //Изменение state
//     /*addPost() {
//         let newPost = {
//             id: 3,
//             message: this._state.profilePage.newPostText,
//             likes: "0"
//         };
//         this._state.profilePage.posts.push(newPost);
//         this._callSubscriber(this._state);
//         this._state.profilePage.newPostText = "";
//     },
//     addMessage() {
//         let newMessage = {
//             id: 5,
//             message: this._state.dialogsPage.newMessageText
//         };
//         this._state.dialogsPage.messages.push(newMessage);
//         this._callSubscriber(this._state);
//         this._state.dialogsPage.newMessageText = "";
//     },
//     onPostChange(newText) {
//         this._state.profilePage.newPostText = newText;
//         this._callSubscriber(this._state);
//     },
//     onMessageChange(newText) {
//         this._state.dialogsPage.newMessageText = newText;
//         this._callSubscriber(this._state);
//     }*/
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReduser(this._state.sidebar, action)
//
//         this._callSubscriber(this._state);
//     }
// }
//
// export const addPostActionCreator = () => ({type: addPost});
// export const onPostChangeActionCreator = (text) => ({type: onPostChange, newText: text});
//
// export const addMessageActionCreator = () => ({type: addMessage});
// export const onMessageChangeActionCreator = (text) => ({type: onMessageChange, newText: text});


