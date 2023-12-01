import axios from "axios";
import {PostCommentsType, PostType, UserProfileType, UserType} from "../utils/generalTypes";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "60b3e096-3ca2-4790-9c70-dd47fabeecb1"
    }
})

export type GetUsersResponseType = {
    "items": Array<UserType>
    "totalCount": string | undefined,
    "error": string | null
}

export type DeleteUsersResponseType = {
    resultCode: number
    messages: Array<string | void> | null
    data: {}
}

export type PostUsersResponseType = {
    resultCode: number
    messages: Array<string | void> | null
    data: {
        userId: number
    }
}

export type LogInResponseType = {
    resultCode: number
    messages: Array<string | null>
    data: {userId: number | null}
}


export type LogOutResponseType = {
    resultCode: number
    messages: Array<string | null>
    data: unknown
}

export type UpdateStatusResponseType = {
    resultCode: number
    messages: Array<string | void> | null
    data: {}
}

export const UsersAPI = {
    async getUsers(currentPage = 1, pageSize = 10){
        return await instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    async deleteUsers(userId = 1){
        return await instance.delete<DeleteUsersResponseType>(`follow/${userId}`).then(response => response.data)
    },
    async postUsers(userId = 1){
        return await instance.post<PostUsersResponseType>(`follow/${userId}`).then(response => response.data)
    }
}

export const AuthAPI = {
    async getMyProfile(){
        return await instance.get(`auth/me`).then(response => response.data)
    },
    async logIn(email: string | null, password: string | null, rememberMe: boolean = false){
        return await instance.post<LogInResponseType>(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    async logOut(){
        return await instance.delete<LogOutResponseType>(`auth/login`).then(response => response.data)
    }
}

export const ProfileAPI = {
    async getUsersProfile(userId: number){
        return await instance.get<UserProfileType>(`profile/` + userId).then(response => response.data)
    },
    async getUsersStatus(userId: number){
        return await instance.get<string>(`profile/status/${userId}`).then(response => response.data)
    },
    async updateMyStatus(status: string){
        return await instance.put<UpdateStatusResponseType>(`profile/status`, {status: status})
            .then(response => response.data)
    },
    async getMyPosts(currentPage: number, pageSize: number){
        return await axios.get<Array<PostType>>(
            `https://jsonplaceholder.typicode.com/posts?_limit=${pageSize}&_page=${currentPage}`
        ).then(response => response)
    },
    async getMyPostById(id: string | undefined){
        return await axios.get<PostType>(`https://jsonplaceholder.typicode.com/posts/` + id)
            .then(response => response.data)
    },
    async getMyPostComments(id: string | undefined){
        return await axios.get<Array<PostCommentsType>>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.data)
    }
}