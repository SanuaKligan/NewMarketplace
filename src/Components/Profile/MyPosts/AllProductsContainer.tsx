import React from "react"
import {
    getMaxPrice,
    getProducts,
    postAudit
} from "../../../redux/catalog-reducer.ts"
import {connect} from "react-redux"
import {ProductType} from "../../../utils/generalTypes.ts";
import {AppStateType} from "../../../redux/redux-store.ts";
import AllProducts from "./AllProducts.tsx";

type MapStateToPropsType = {
    maxPrice: number
    products: Array<ProductType>
    isShowPreloader: boolean
}

type MapDispatchToPropsType = {
    getMaxPrice: () => void
    getProducts: (page: string, material: string, type: string, price_range: string, sort: string, search_query: string) => void
    postAudit: (name: string, number: string, comment: string, items: string) => void
}

type OwnPropsType = {

}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        maxPrice: state.catalogPage.maxPrice,
        products: state.catalogPage.products,
        isShowPreloader: state.catalogPage.isShowPreloader
    }
}

const AllProductsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(
    mapStateToProps, {
        getMaxPrice,
        getProducts, 
        // getItem,
        postAudit
    }
    )(AllProducts)

export default AllProductsContainer;
