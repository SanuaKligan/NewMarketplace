import React from "react"
// import MyPosts from "./MyPosts"
import {
    profileActions,
    getPosts
    // onPostChange
} from "../../../redux/profile-reducer"
import {connect} from "react-redux"
import {PostType} from "../../../utils/generalTypes";
import {AppStateType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts.tsx";
// const MyPosts = require("./MyPosts")

// const lowMyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//
//                 let addPost = () => {
//                     let action = addPostActionCreator();
//                     store.dispatch(action);
//                 }
//
//                 let updateNewPostText = (text) => {
//                     let action = onPostChangeActionCreator(text);
//                     store.dispatch(action);
//                 }
//                 return <MyPosts addPost={addPost}
//                                 updateNewPostText={updateNewPostText}
//                                 posts={store.getState().profilePage.posts}
//                                 newPostText={store.getState().profilePage.newPostText}>
//                 </MyPosts>
//             }
//             }
//         </StoreContext.Consumer>
//     )
//
// }

type MapStateToPropsType = {
    posts: Array<PostType>
    isAuth: boolean
    userId: number | null
    selectedSort: string
    searchQuery: string
    objectTotalCount: string | undefined
    pageSize: number
    currentPage: number
    isShowPreloader: boolean
}

type MapDispatchToPropsType = {
    onAddPost: (userId: number, name: string, text: string, id: number) => void
    removePost: (id: number) => void
    onSetSelectedSort: (sort: string) => void
    onSetSortPosts: (newPosts: Array<PostType>) => void
    onSetSearchQuery: (searchQuery: string) => void
    getPosts: (currentPage: number, pageSize: number, posts: Array<PostType> | null) => void
    onSetCurrentPageForPosts: (page: number) => void
}

type OwnPropsType = {

}

const onAddPost = profileActions.onAddPost
const onSetSelectedSort = profileActions.onSetSelectedSort
const onSetSortPosts = profileActions.onSetSortPosts
const removePost = profileActions.removePost
const onSetSearchQuery = profileActions.onSetSearchQuery
const onSetCurrentPageForPosts = profileActions.onSetCurrentPageForPosts

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        isAuth: state.auth.isAuth,
        userId: state.auth.id,
        selectedSort: state.profilePage.selectedSort,
        // newPostText: state.profilePage.newPostText
        searchQuery: state.profilePage.searchQuery,
        objectTotalCount: state.profilePage.objectTotalCount,
        pageSize: state.profilePage.pageSize,
        currentPage: state.profilePage.currentPage,
        isShowPreloader: state.profilePage.isShowPreloader
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return{
//         addPost: () => {
//             dispatch(onAddPost())
//         },
//         updateNewPostText: (text) => {
//             let action = onPostChange(text);
//             dispatch(action);
//         }
//     }
// }

// const MyPostsContainer = connect(mapStateToProps, {onAddPost, onPostChange})(MyPosts)
const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(
    mapStateToProps, {
        onAddPost,
        removePost,
        onSetSelectedSort,
        onSetSortPosts,
        onSetSearchQuery,
        getPosts,
        onSetCurrentPageForPosts,
    }
    )(MyPosts)

export default MyPostsContainer;

