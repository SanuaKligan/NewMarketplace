// import {ProfileAPI} from "../api/api";
import React from "react";
import {PostCommentsType, PostType, UserProfileType, UserType} from "../utils/generalTypes";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./redux-store";
import {UpdateStatusResponseType} from "../api/api";
import {ProfileAPI} from "../api/api";
import {AxiosResponse} from 'axios';

type InitialStateType = {
    posts: Array<PostType>
    isShowPreloader: boolean
    profile: UserProfileType | UserType | null
    status: string
    selectedSort: string
    searchQuery: string
    objectTotalCount: string | undefined
    pageSize: number
    currentPage: number
    postComments: Array<PostCommentsType>
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
//То, что в документации называется action'ом thunk'и и thunk'ой, мы называем соответственно thunk'ой и thunk creator'ом
//Урок 6. 13:25 https://www.youtube.com/watch?v=fltI2uTv12c&t=533s

let initialState: InitialStateType = {
    posts: [
        // {id: 1, header: "aaaaaaaa", message: "xxxxxxxxxxxxxxxxx", likes: "4"},
        // {id: 2, header: "yyyyyy", message: "cccccccccccccccccc", likes: "5"}
    ],
    // newPostText: "",
    isShowPreloader: true,
    profile: null,
    status: "",
    selectedSort: "",
    searchQuery: "",
    objectTotalCount: "0",
    pageSize: 10,
    currentPage: 1,
    postComments: []
}
// console.log(initialState.currentPage)

const profileReducer = (
    state = initialState,
    action: ActionsType
): InitialStateType => {
    // console.log(state.currentPage)
    // console.log(state.postComments)
    // console.log(state.objectTotalCount)
    // Для перенарезания objectTotalCount при появлении нового поста нужна связь с сервером
    switch (action.type) {
// "ADD-POST" "SET-USERS-PROFILE" "SET-USERS-STATUS" "SET-REMOVE-POST" "SET-SELECTED-POSTS" "SET-SORT-POSTS" "SET-SEARCH-QUERY"
// "SET-FIRST-POSTS" "SET-POSTS" "SET-CURRENT-PAGE-FOR-POSTS" "SET-OBJECT-TOTAL-COUNT-FOR-POSTS" "SET-POST-COMMENTS" "SET-SHOW-PRELOADER"
        case "ADD-POST":
            return {
                ...state,
                posts: [{userId: action.userId, id: action.id, title: action.name, body: action.text}, ...state.posts],
                // , likes: "0"
                objectTotalCount: String(Number(state.objectTotalCount) + 1),
                // posts: [...state.posts].unshift({id: action.id, title: action.name, body: action.text, likes: "0"})
            };

        case "SET-USERS-PROFILE":
            return {
                ...state,
                profile: action.profile
            };
        case "SET-USERS-STATUS":
            return {
                ...state,
                status: action.status
            }
        // case setUpdatePost: return {
        //     ...state,
        //     posts: [...state.posts, {...state.posts.some(p => p.id === action.id)
        //         && {id: action.id, message: action.text, likes: "0"}}
        //     ]
        // }
        case "SET-REMOVE-POST":
            return {
                ...state,
                posts: [...state.posts.filter(p=> p.id !== action.id)]
            }
        case "SET-SELECTED-POSTS":
            return {
                ...state,
                selectedSort: action.sort
            }
        case "SET-SORT-POSTS":
            return {
                ...state,
                posts: action.newPosts
            }
        case "SET-SEARCH-QUERY":
            return {
                ...state,
                searchQuery: action.searchQuery
            }
        case "SET-FIRST-POSTS":
            return {
                ...state,
                posts: action.posts,
            }
        case "SET-POSTS":
            return {
                ...state,
                posts: [...state.posts, ...action.posts],
            }
        case "SET-CURRENT-PAGE-FOR-POSTS":
            return {...state, currentPage: action.page}
        case "SET-OBJECT-TOTAL-COUNT-FOR-POSTS":
            return {...state, objectTotalCount: action.totalCount}
        case "SET-POST-COMMENTS":
            return {...state, postComments: action.comments}
        case "SET-SHOW-PRELOADER":
            return {...state, isShowPreloader: action.isLoading}
        default:
            return state;
    }
}

type ActionsType = InferActionsTypes<typeof profileActions>

export const profileActions = {
    onAddPost: (userId: number, name: string, text: string, id: number) => (
        {type: "ADD-POST", userId, name, text, id} as const
    ),
    onSetUsersProfile: (profile: UserProfileType) => ({type: "SET-USERS-PROFILE", profile} as const),
    onSetUsersStatus: (status: string) => ({type: "SET-USERS-STATUS", status} as const),
    removePost: (id: number) => ({type: "SET-REMOVE-POST", id} as const),
    onSetSelectedSort: (sort: string) => ({type: "SET-SELECTED-POSTS", sort} as const),
    onSetSortPosts: (newPosts: Array<PostType>) => ({type: "SET-SORT-POSTS", newPosts} as const),
    onSetSearchQuery: (searchQuery: string) => ({type: "SET-SEARCH-QUERY", searchQuery} as const),
    onSetFirstPosts: (posts: Array<PostType>) => ({type: "SET-FIRST-POSTS", posts} as const),
    onSetPosts: (posts: Array<PostType>) => ({type: "SET-POSTS", posts} as const),
    onSetCurrentPageForPosts: (page: number) => (
        {type: "SET-CURRENT-PAGE-FOR-POSTS", page} as const
    ),
    onSetObjectTotalCountForPosts: (totalCount: string | undefined) => (
        {type: "SET-OBJECT-TOTAL-COUNT-FOR-POSTS", totalCount} as const
    ),
    onSetPostComments: (comments: Array<PostCommentsType>) => (
        {type: "SET-POST-COMMENTS", comments} as const
    ),
    onSetShowPreloader: (isLoading: boolean) => ({type: "SET-SHOW-PRELOADER", isLoading} as const)
}

const isEqual = (a: unknown, b: unknown) => {
    if (a instanceof Array && b instanceof Array) {
        for (let i = 0; i < a.length; i++) {
            // console.log(a[i], b[i], "elements")
            if (isEqual(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    return a === b;
}

export const getUsers = (userId: number): ThunkType => {
    return async (dispatch) => {
        ProfileAPI.getUsersProfile(userId).then((data: UserProfileType) => {
                dispatch(profileActions.onSetUsersProfile(data));
            }
        )
    }
}

export const getStatus = (userId: number): ThunkType => {
    return async (dispatch) => {
        ProfileAPI.getUsersStatus(userId).then((data: string) => {
                dispatch(profileActions.onSetUsersStatus(data));
            }
        )
    }
}

export const updateStatus = (statusText: string): ThunkType => {
    return async (dispatch) => {
        ProfileAPI.updateMyStatus(statusText).then((data: UpdateStatusResponseType) => {
                if (data.resultCode === 0) {
                    dispatch(profileActions.onSetUsersStatus(statusText));
                }
            }
        )
    }
}

export const getPosts = (currentPage: number, pageSize: number, posts: Array<PostType> | null): ThunkType => {
    return async (dispatch) => {
        dispatch(profileActions.onSetShowPreloader(true))
        ProfileAPI.getMyPosts(currentPage, pageSize).then((response: AxiosResponse<Array<PostType>>) => {
                if (!posts) {
                    dispatch(profileActions.onSetFirstPosts(response.data));
                }
                else {
                    // console.log(posts, response.data, "posts")
                    // console.log(isEqual(initialState.posts, response.data), "isEqual")
                    if (isEqual(posts, response.data)) {
                        dispatch(profileActions.onSetPosts(response.data));
                    }
                }
                dispatch(profileActions.onSetObjectTotalCountForPosts(response.headers["x-total-count"]))
                dispatch(profileActions.onSetShowPreloader(false))
            }
        )
    }
}

export const getPostById = (id: string | undefined): ThunkType => {
    return async (dispatch) => {
        ProfileAPI.getMyPostById(id).then((data: PostType) => {
                const post = [data]
                // console.log(post)
                dispatch(profileActions.onSetPosts(post));
            }
        )
    }
}

export const getPostComments = (id: string | undefined): ThunkType => {
    return async (dispatch) => {
        ProfileAPI.getMyPostComments(id).then((data: Array<PostCommentsType>) => {
                dispatch(profileActions.onSetPostComments(data));
            }
        )
    }
}

export default profileReducer;