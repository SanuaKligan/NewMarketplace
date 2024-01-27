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
    maxPrice: number
    products: Array<ProductType>
    isShowPreloader: boolean
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
let initialState: InitialStateType = {
    maxPrice: 0,
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
        //     "article": "text",
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
        //     "article": "text1",
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
        case "SET-MAX-PRICE":
            return {
                ...state,
                maxPrice: action.maxPrice,
            }
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
    onSetMaxPrice: (maxPrice: number) => ({type: "SET-MAX-PRICE", maxPrice} as const),
    onSetProducts: (products: Array<ProductType>) => ({type: "SET-PRODUCTS", products} as const),
    onSetItem: (item: ProductType) => ({type: "SET-ITEM", item} as const)
}

export const getMaxPrice = (): ThunkType => {
    return async (dispatch) => {
        CatalogAPI.getMaxPriceForProducts()
            .then((response: AxiosResponse<any>) => {
                // console.log(response.data)
                dispatch(catalogActions.onSetMaxPrice(response.data.max_price));
            }
        )
    }
}

export const getProducts = (
        counter: string, material: string, type: string, price_range: string, sort: string, search_query: string
    ): ThunkType => {
    return async (dispatch) => {
        CatalogAPI.getAllProducts(counter, material, type, price_range, sort, search_query)
            .then((response: AxiosResponse<Array<ProductType>>) => {
                console.log(response.data)
                dispatch(catalogActions.onSetProducts(response.data));
            }
        )
    }
}

export const postAudit = (name: string, number: string, comment: string, items: string): any => {
    console.log(name, number, comment, items, "red")
    return ( 
        AuditAPI.getPostAudit(name, number, comment, items).then((response: any) => {
        }))
}

export default catalogReducer;