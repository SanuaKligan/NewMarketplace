// import {ProfileAPI} from "../api/api";
import React from "react";
import {
    ProductType, 
    // PostCommentsType, PostType, UserProfileType, UserType
} from "../utils/generalTypes";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./redux-store";
// import {UpdateStatusResponseType} from "../api/api";Ы
import {AuditAPI, CatalogAPI, ItemAPI} from "../api/api";
import {AxiosResponse} from 'axios';
import prodImg from "../assets/images/catalogs/Frame 1.png"

type InitialStateType = {
    products: Array<ProductType>
    isShowPreloader: boolean
    // profile: UserProfileType | UserType | null
    // status: string
    // selectedSort: string
    // searchQuery: string
    // objectTotalCount: string | undefined
    // pageSize: number
    // currentPage: number
    // postComments: Array<PostCommentsType>
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
//То, что в документации называется action'ом thunk'и и thunk'ой, мы называем соответственно thunk'ой и thunk creator'ом
//Урок 6. 13:25 https://www.youtube.com/watch?v=fltI2uTv12c&t=533s

let initialState: InitialStateType = {
    products: [
        // {
        //     "id": 1,
        //     "name": "Стул “Триножный”",
        //     "material": "Материал: сосна",
        //     "size": "18*200",
        //     "type": "",
        //     "for_what": "",
        //     "description": "Элегантный стул на трехх ножках, идеально впишется в любой интерьер. Приобретите уже сейчас.",
        //     "photo_links": [
        //         prodImg,
        //         prodImg,
        //         prodImg,
        //         prodImg
        //     ],
        //     "price": 1999,
        //     "unit": "шт",
        //     "added_at": "2023-10-08 19:04:52"
        // },
        // {
        //     "id": 2,
        //     "name": "Стул “Триножный”",
        //     "material": "Материал: сосна",
        //     "size": "18*200",
        //     "type": "",
        //     "for_what": "",
        //     "description": "Элегантный стул на трехх ножках, идеально впишется в любой интерьер. Приобретите уже сейчас.",
        //     "photo_links": [
        //         prodImg,
        //         prodImg,
        //         prodImg,
        //         prodImg
        //     ],
        //     "price": 1999,
        //     "unit": "шт",
        //     "added_at": "2023-10-08 19:04:52"
        // },
        // {
        //     "id": 3,
        //     "name": "Стул “Триножный”",
        //     "material": "Материал: сосна",
        //     "size": "18*200",
        //     "type": "",
        //     "for_what": "",
        //     "description": "Элегантный стул на трехх ножках, идеально впишется в любой интерьер. Приобретите уже сейчас.",
        //     "photo_links": [
        //         prodImg,
        //         prodImg,
        //         prodImg,
        //         prodImg
        //     ],
        //     "price": 1999,
        //     "unit": "шт",
        //     "added_at": "2023-10-08 19:04:52"
        // },
        // {
        //     "id": 4,
        //     "name": "Стул “Триножный”",
        //     "material": "Материал: сосна",
        //     "size": "18*200",
        //     "type": "",
        //     "for_what": "",
        //     "description": "Элегантный стул на трехх ножках, идеально впишется в любой интерьер. Приобретите уже сейчас.",
        //     "photo_links": [
        //         prodImg,
        //         prodImg,
        //         prodImg,
        //         prodImg
        //     ],
        //     "price": 1999,
        //     "unit": "шт",
        //     "added_at": "2023-10-08 19:04:52"
        // },
        // {
        //     "id": 5,
        //     "name": "Стул “Триножный”",
        //     "material": "Материал: сосна",
        //     "size": "18*200",
        //     "type": "",
        //     "for_what": "",
        //     "description": "Элегантный стул на трехх ножках, идеально впишется в любой интерьер. Приобретите уже сейчас.",
        //     "photo_links": [
        //         prodImg,
        //         prodImg,
        //         prodImg,
        //         prodImg
        //     ],
        //     "price": 1999,
        //     "unit": "шт",
        //     "added_at": "2023-10-08 19:04:52"
        // },
        // {
        //     "id": 6,
        //     "name": "Стул “Триножный”",
        //     "material": "Материал: сосна",
        //     "size": "18*200",
        //     "type": "",
        //     "for_what": "",
        //     "description": "Элегантный стул на трехх ножках, идеально впишется в любой интерьер.Приобретите уже сейчас.",
        //     "photo_links": [
        //         prodImg,
        //         prodImg,
        //         prodImg,
        //         prodImg
        //     ],
        //     "price": 1999,
        //     "unit": "шт",
        //     "added_at": "2023-10-08 19:04:52"
        // }
    ],
    isShowPreloader: true
}

const catalogReducer = (
    state = initialState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case "SET-PRODUCTS":
            return {
                ...state,
                products: [...action.products],
            }
        case "SET-ITEM":
            return {
                ...state,
                basketItems: [...state.basketItems, action.item],
            }
        default:
            return state;
    }
}

type ActionsType = InferActionsTypes<typeof catalogActions>

export const catalogActions = {
    onSetProducts: (products: Array<ProductType>) => ({type: "SET-PRODUCTS", products} as const),
    onSetItem: (item: ProductType) => ({type: "SET-ITEM", item} as const)
}

export const getProducts = (
        counter: string, material: string, type: string, price_range: string, sort: string, search_query: string
    ): ThunkType => {
    return async (dispatch) => {
        // console.log(counter, material, type, price_range, sort, search_query)
        CatalogAPI.getAllProducts(counter, material, type, price_range, sort, search_query)
            .then((response: AxiosResponse<Array<ProductType>>) => {
                // console.log(response.data)
                dispatch(catalogActions.onSetProducts(response.data));
            }
        )
    }
}

// export const getItem = (
//     itemId: string
// ): ThunkType => {
// return async (dispatch) => {
//     console.log(itemId)
//     ItemAPI.getItemById(itemId)
//         .then((response: AxiosResponse<ProductType>) => {
//             // console.log(response.data)
//             dispatch(catalogActions.onSetItem(response.data));
//         }
//     )
// }
// }

export const postAudit = (name: string, number: string, comment: string, items: string): any => {
    // console.log(name, number, comment, items)
    return ( 
        AuditAPI.getPostAudit(name, number, comment, items).then((response: any) => {
            // console.log(response)
        }))
}

export default catalogReducer;