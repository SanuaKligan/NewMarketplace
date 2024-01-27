import React, { useState } from "react";
import classes from "./ProductPage.module.css";
import userPhoto from "../../../../assets/images/user.png";
import {useNavigate} from "react-router-dom";
import { ProductType } from "../../utils/generalTypes";

type ProductPageType = {
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
}

const ProductPage: React.FC<ProductPageType> = (props) => {

    const [counter, setCounter] = useState("1");

    const handleMinusClick = () => {
        const value = parseInt(counter) - 1;
        if (!isNaN(value) && value >= 1) {
            setCounter(value.toString());
        }
      };  
      
    const handlePlusClick = () => {
        const value = parseInt(counter) + 1;
        if (!isNaN(value)) {
            setCounter(value.toString());
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value.replace(/\D/g, ""); // Удаление всех нецифровых символов
        setCounter(value);
    };

    return (
        <div className={classes.productPage}>
            <div className={classes.productImg}>
                <img src={props.photo_links[0]} />
            </div>
            <div className={classes.productText}>
                <div className={classes.descript}>
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
                </div>
                <div className={classes.shopBlock}>
                    <div className={classes.price}>
                        от {props.price}/ шт
                    </div>
                    <div className={classes.buttons}>
                        <div className={classes.countRange}>
                            <button className={classes.rangeButtonM} onClick={handleMinusClick}>-</button>
                            <input className={classes.rangeInput} value={counter} onChange={handleInputChange} />
                            <button className={classes.rangeButtonP} onClick={handlePlusClick}>+</button>
                        </div>
                        <div className={classes.divBasketButton}>
                            <button className={classes.basketButton} onClick={() => {
                                props.setShopModal(true) 
                                props.setItemModal(false)
                                props.addProduct(props.product, counter)
                            }}><div>В корзину</div></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;