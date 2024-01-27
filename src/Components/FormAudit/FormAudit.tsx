import React, { useRef } from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import classes from "./FormAudit.module.css";
import {Element} from "../../common/FormsControls/FormsControls";
import {MessageType} from "../../redux/dialogs-reducer";

import title4 from "../../assets/images/Закажите у нас аудит.svg"
import logInFormMinText from "../../assets/images/Беремся за заказы любой сложности.svg"
import logInFormTitle from "../../assets/images/Проконсультируем бесплатно.svg"

import whiteLogo from "../../assets/images/whiteLogo.svg"
import { postAudit } from "../../redux/catalog-reducer";
import { NavLink } from "react-router-dom";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

type AuditType = {
    addMessage: (name: string, number: string, comment: string) => void
}

type AuditFormDataType = {
    name: string
    number: string
    comment: string
}

type AuditFormOwnPropsType = {

}

const Textarea = Element("textarea");

const normalizePhoneNumber = (value) => {
    if (!value) return value;
    
    const onlyNums = value.replace(/[^\d]/g, "");
    
    if (onlyNums.startsWith("7")) {
      return "+7" + onlyNums.slice(1);
    }
  
    return "+7" + onlyNums;
}

const LogInForm: React.FC<
    InjectedFormProps<AuditFormDataType, AuditFormOwnPropsType> & AuditFormOwnPropsType
    > = (props) => {
    return (
        <form className = {classes.form} onSubmit={props.handleSubmit}>
            <div className={classes.formTitle}>
                Проконсультируем бесплатно
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
                    maxLength={12}
                    normalize={normalizePhoneNumber}
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
                <div className={classes.bottomBlockButton}>
                    <button
                        // onClick={props.addMessage}
                        className={classes.sendFormBut}
                    >
                        Отправить
                    </button>
                </div>
                <div className={classes.bottomBlockText}>
                    <div>Нажимая на кнопку, я соглашаюсь,</div>
                    <NavLink to="/privacy" className={classes.text2}>на обработку своих персональных данных</NavLink>
                    {/* ссылка на обработку своих персональных данных*/}
                </div>
            </div>
        </form>
    )
}

const LogInReduxForm = reduxForm<AuditFormDataType, AuditFormOwnPropsType>({form: "audit", initialValues: {
    number: "+7"
  }})(LogInForm)

const FormAudit: React.FC<AuditType> = (props) => {
    const block1 = useRef(null)
    const block2 = useRef(null)
    const block3 = useRef(null)
    const observedElements = [
            block1,
            block2,
            block3
        ];
    useIntersectionObserver(observedElements, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });
    const onSubmit = (values: AuditFormDataType) => {
        // console.log(values.name, values.number, values.comment)
        postAudit(values.name, values.number, values.comment, "audit");
    }
    return (
        <div className={classes.formAudit}>
            <div className={classes.titleAudit} ref={block1}>
                Закажите у нас аудит
            </div>
            <div className={classes.sixthContainer}>
                <div className={classes.fonImg} ref={block2}>
                    <img src={logInFormMinText} className={classes.fonImgText}/>
                    <img src={whiteLogo} className={classes.whiteLogoImg}/>
                </div>
                <div className={classes.sixthContText} ref={block3}>
                    <LogInReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    );
}

export default FormAudit;