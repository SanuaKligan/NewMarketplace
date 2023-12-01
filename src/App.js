import React, {useEffect} from "react";
import "./App.css";
import HeaderContainer from "./Components/Header/HeaderContainer";
import NavContainer from "./Components/Nav/NavContainer";
import ProfileContainer, {withRouter} from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import UsersContainer from "./Components/Users/UsersContainer";
import Settings from "./Components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import LoginContainer from "./Components/Login/LoginContainer";
import Preloader from "./assets/Preloader/Preloader";
import {connect} from "react-redux";
import {getInitializedApp} from "./redux/app-reducer";
import {compose} from "redux";
import Error from "./Components/Error/Error";
import PostIdPageContainer from "./Components/Profile/MyPosts/Post/PostIdPage/PostIdPageContainer";

const App = (props) => {

    // useEffect(() => {props.getInitializedApp()}, [])

    // if (!props.isInitialized) {
    //     return <Preloader/>
    // }

    return (
        <div className="grid">
            <HeaderContainer/>
            <NavContainer/>
            <body className="add-wrapper-content">
                <Routes>
                    <Route path="*" element={<Error/>} exact/>

                    <Route path="/" element={<News/>} exact/>

                    <Route path="/profile" element={<ProfileContainer/>}>
                        <Route path=":userId" element={<ProfileContainer/>}/>
                    </Route>

                    <Route path="/posts/:id" element={<PostIdPageContainer/>}/>

                    <Route path="/dialogs*" element={<DialogsContainer
                        //store = {props.store}
                        // dialogs={props.state.dialogsPage.dialogs}
                        // messages={props.state.dialogsPage.messages}
                        // newMessageText={props.state.dialogsPage.newMessageText}
                        // dispatch={props.dispatch}
                    />}/>

                    {/*<Route path="/dialogs/1*" element={<Dialog1
                            dialogs={props.state.dialogsPage.dialogs}
                            messages={props.state.dialogsPage.messages}
                            avatar={props.state.sidebar.Friends}/>}/>
                        <Route path="/dialogs/2*" element={<Dialog2
                            posts={props.state.sidebar.Friends}/>}/>
                        <Route path="/dialogs/3" element={<Dialog3
                            posts={props.state.sidebar.Friends}/>}/>*/}

                    <Route path="/news*" element={<News/>}/>

                    <Route path="/music*" element={<Music/>}/>

                    <Route path="/users*" element={<UsersContainer title = {"Челы"}/>}/>

                    <Route path="/settings*" element={<Settings/>}/>

                    <Route path="/login*" element={<LoginContainer/>}/>
                </Routes>
            </body>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized,
})

export default compose(
    // withRouter,
    connect(mapStateToProps, {getInitializedApp})
)(App);