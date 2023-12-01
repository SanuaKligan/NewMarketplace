import React, {useState} from "react";
import classes from "./Product.module.css";
import {useNavigate} from "react-router-dom";
import basket from "../../../../assets/images/catalogs/basket.svg"
import MyModal from "../../../../UI/MyModal/MyModal";
import ProductPage from "../../../ProductPage/ProductPage"
import { ProductType } from "../../../../utils/generalTypes";

type ProductElementType = {
    id: number
    name: string
    material: string
    size: string
    type: string
    for_what: string
    description: string
    photo_links: Array<string>
    price: number
    unit: string
    added_at: string
    setItemModal: React.Dispatch<React.SetStateAction<boolean>>
    setShopModal: React.Dispatch<React.SetStateAction<boolean>>
    product: ProductType
    addProduct: (product: ProductType, counter: number) => void
    // getItem: (itemId: string) => void
}

const Product: React.FC<ProductElementType> = (props) => {
    const [itemModal, setItemModal] = useState(false)
    return (
        <div className={classes.product}>
            <MyModal visible={itemModal} setVisible={setItemModal}>
                <ProductPage
                    id={props.id}
                    name={props.name}
                    material={props.material}
                    size={props.size}
                    type={props.type}
                    for_what={props.for_what}
                    description={props.description}
                    photo_links={props.photo_links}
                    price={props.price}
                    unit={props.unit}
                    added_at={props.added_at}
                    setItemModal = {setItemModal}
                    setShopModal = {props.setShopModal}
                    product = {props.product}
                    addProduct = {props.addProduct}
                />
            </MyModal>
            <div className={classes.prodImg}><img src={props.photo_links[0]} /></div>
            <div className={classes.title}>
                {props.name}
            </div>
            <div className={classes.charact}>
                <div>Материал: {props.material}</div>
                <div>Размер: {props.size}</div>
            </div>
            <div className={classes.text}>
                {props.description}
            </div>
            <div className={classes.price}>
                от {props.price}/ шт
            </div>
            <div className={classes.buttons}>
                <div className={classes.divMoreButton}>
                    <button className={classes.moreButton} onClick={() => setItemModal(true)}>Подробнее</button>
                </div>
                <div className={classes.divBasketButton}>
                    <button 
                        className={classes.basketButton} 
                        onClick={() => {
                            props.setShopModal(true)
                            props.addProduct(props.product, 1)
                        }}>
                        <img src={basket}
                    /><div>
                        В корзину
                    </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product;