import React from "react"
import {connect} from "react-redux"
import PostIdPage from "./PostIdPage"
import {getPostById, getPostComments} from "../../../../../redux/profile-reducer"
import {PostCommentsType, PostType} from "../../../../../utils/generalTypes";
import {AppStateType} from "../../../../../redux/redux-store";


type MapStateToPropsType = {
    post: Array<PostType>
    comments: Array<PostCommentsType>
}

type MapDispatchToPropsType = {
    getPostById: (id: string | undefined) => void
    getPostComments: (id: string | undefined) => void
}

type OwnPropsType = {

}

let mapStateToProps = (state: AppStateType) => {
    return {
        post: state.profilePage.posts,
        comments: state.profilePage.postComments
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(
    mapStateToProps, {getPostById, getPostComments}
)(PostIdPage)
