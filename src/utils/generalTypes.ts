// export type UserType = {
//     "name": string | null
//     "id": number,
//     "uniqueUrlName": string | null,
//     "photos": {
//         "small": string | null
//         "large": string | null
//     },
//     "status": string | null,
//     "followed": boolean
// }

// export type UserProfileType = {
//     "aboutMe": string | null,
//     "contacts": {
//         "facebook": string | null,
//         "website": string | null,
//         "vk": string | null,
//         "twitter": string | null,
//         "instagram": string | null,
//         "youtube": string | null,
//         "github": string | null,
//         "mainLink": string | null
//     },
//     "lookingForAJob": boolean,
//     "lookingForAJobDescription": string | null,
//     "fullName": string,
//     "userId": number,
//     "photos": {
//         "small": string | null,
//         "large": string | null
//     }
// }

// export type PostType = {
//     "userId": number
//     "id": number
//     "title": string
//     "body": string
// }

// export type PostCommentsType = {
//     "postId": number
//     "id": number
//     "name": string
//     "email": string
//     "body": string
// }

// export type GetMyProfileType = {
//     resultCode: number
//     messages: Array<string | null>
//     data: GetMyProfileDataType
// }

// export type GetMyProfileDataType = {
//     id: number
//     email: string
//     login: string
// }

export type ProductType = {
    "id": number
    "name": string
    "article": string
    "material": string
    "size": string
    "type": string
    "for_what": string
    "description": string
    "photo_links": Array<string>
    "price": number
    "unit": string
    "added_at": string
}