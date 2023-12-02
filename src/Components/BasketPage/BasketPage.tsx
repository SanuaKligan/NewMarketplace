import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import classes from "./BasketPage.module.css";
import {Element} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator} from "../../utils/validators/validators";
import {MessageType} from "../../redux/dialogs-reducer";

import deleteButton from "../../assets/images/catalogs/deleteButton.svg"
import logInFormMinText from "../../assets/images/Беремся за заказы любой сложности.svg"
import logInFormTitle from "../../assets/images/Проконсультируем бесплатно.svg"

import whiteLogo from "../../assets/images/whiteLogo.svg"
import { postAudit } from "../../redux/catalog-reducer";
import { useTypedSelector } from "../../redux/redux-store";
import { ProductType } from "../../utils/generalTypes";

type AuditType = {
    basketItems: Array<ProductType>
    setBasketItems: Dispatch<SetStateAction<ProductType[]>>
    addProduct: (product: ProductType, counter: number) => void
    removeItemById: (idToRemove: number) => void
}

type AuditFormDataType = {
    name: string
    number: string
    comment: string
}

type AuditFormOwnPropsType = {

}

const maxLength = maxLengthCreator(50)
const Textarea = Element("textarea");

const BasketPageForm: React.FC<
        InjectedFormProps<AuditFormDataType, AuditFormOwnPropsType> & AuditFormOwnPropsType
    > = (props) => {
    // console.log(props)
    return (
        <form className = {classes.form} onSubmit={props.handleSubmit}>
            <div className={classes.formText}>
                ПРЕДЗАКАЗ – В данной форме вы оформляете предзаказ на мебель Лофт РТ, оплатить товары можно будет после подтверждения заказа (онлайн переводом или по факту получения товара)
            </div>
            <div className={classes.formTitle}>
                Заполните поля для оформления заказа
            </div>
            <div className={classes.divField}>
                <Field
                    placeholder={"Имя"}
                    name={"name"}
                    component={"input"}
                    className={classes.firstField}
                />
            </div>
            <div className={classes.divField}>
                <Field
                    placeholder={"+7 (999) 999-99-99"}
                    name={"number"}
                    component={"input"}
                    className={classes.firstField}
                />
            </div>
            <div className={classes.divField}>
                <Field
                    placeholder={"Комментарий"}
                    name={"comment"}
                    component={"textarea"}
                    className={classes.secondField}
                />
            </div>
            <div className={classes.bottomBlock}>
                <div className={classes.bottomBlockText}>
                    <div>Нажимая на кнопку, я соглашаюсь,</div>
                    <div className={classes.text2}>на обработку своих персональных данных</div>
                </div>
                <button
                    className={classes.sendFormBut}
                >
                    Оформить заказ
                </button>
            </div>
        </form>
    )
}

const BasketPageReduxForm = reduxForm<AuditFormDataType, AuditFormOwnPropsType>({form: "audit"})(BasketPageForm)

const BasketPage: React.FC<AuditType> = (props) => {

    // console.log(props.basketItems)

    const [articles, setArticles] = useState([])

    const generateArticleString = (basketItems: ProductType[]): string => {
        let newItemsArray: string[] = [];
        
        basketItems.forEach((item) => {
            for (let i = 0; i < item.added_at; i++) {
                newItemsArray.push(item.article);
            }
        });
    
        return setArticles(newItemsArray.join('_'))
    };

    useEffect(() => {
        generateArticleString(props.basketItems)
    }, [props.basketItems])

    const onSubmit = (values: AuditFormDataType) => {
        // console.log(values.name, values.number, values.comment, articles)
        postAudit(values.name, values.number, values.comment, articles);
    }

    const handleMinusClick = (item) => {
        if (Number(item.added_at) > 1) {
            const updatedItem = {...item, added_at: Number(item.added_at) - 1};
            handleItemChange(updatedItem);
        }
    };
    
    const handlePlusClick = (item) => {
        const updatedItem = {...item, added_at: Number(item.added_at) + 1};
        handleItemChange(updatedItem);
    };
    
    const handleInputChange = (e, item) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 1) {
            const updatedItem = {...item, added_at: value};
            handleItemChange(updatedItem);
        }
    };
    
    const handleItemChange = (updatedItem) => {
        const updatedBasketItems = props.basketItems.map((basketItem) => {
            if (basketItem.id === updatedItem.id) {
                return updatedItem;
            } else {
                return basketItem;
            }
        });
        props.setBasketItems(updatedBasketItems);
    };
    
    return (
        <div className={classes.formAudit}>
            <div className={classes.titleAudit}>
                Содержимое корзины
            </div>
            <div className={classes.allProducts}>
                {

                                    props.basketItems.map((item: ProductType) => {
                                        return (
                                            <div className={classes.productBlock}>
                                                <div className={classes.prodImg}><img src={item.photo_links[0]}/></div>
                                                <div className={classes.textBlock}>
                                                    <div className={classes.title}>
                                                        {item.name}
                                                    </div>
                                                    <div className={classes.charact}>
                                                        <div>Материал: {item.material}</div>
                                                        <div>Размер: {item.size}</div>
                                                    </div>
                                                    <div className={classes.price}>
                                                        {item.price} / шт
                                                    </div>
                                                </div>
                                                <div className={classes.countRange}>
                                                    <button 
                                                        className={classes.rangeButtonM} 
                                                        onClick={() => handleMinusClick(item)}
                                                    >
                                                        -
                                                    </button>
                                                    <input 
                                                        className={classes.rangeInput} 
                                                        value={Number(item.added_at)} 
                                                        onChange={(e) => handleInputChange(e, item)} 
                                                    />
                                                    <button 
                                                        className={classes.rangeButtonP} 
                                                        onClick={() => handlePlusClick(item)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <div className={classes.totalPrice}>
                                                    <div className={classes.totalPriceCount}>{item.price * item.added_at} р</div>
                                                    <div className={classes.totalPriceText}>{item.added_at} шт</div>
                                                </div>
                                                <div className={classes.divDeleteButton}>
                                                    <button 
                                                        className={classes.deleteButton} 
                                                        onClick={() => {props.removeItemById(item.id)}}
                                                    >
                                                        <img src={deleteButton}/>
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })
                }
            </div>
            <div className={classes.sixthContainer}>
                <BasketPageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
}

export default BasketPage;