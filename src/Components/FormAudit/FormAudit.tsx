import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import classes from "./FormAudit.module.css";
import {Element} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator} from "../../utils/validators/validators";
import {MessageType} from "../../redux/dialogs-reducer";

import title4 from "../../assets/images/Закажите у нас аудит.svg"
import logInFormMinText from "../../assets/images/Беремся за заказы любой сложности.svg"
import logInFormTitle from "../../assets/images/Проконсультируем бесплатно.svg"

import whiteLogo from "../../assets/images/whiteLogo.svg"
import { postAudit } from "../../redux/catalog-reducer";

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

const maxLength = maxLengthCreator(50)
const Textarea = Element("textarea");

const LogInForm: React.FC<
    InjectedFormProps<AuditFormDataType, AuditFormOwnPropsType> & AuditFormOwnPropsType
    > = (props) => {
    // console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
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
                    <div className={classes.text2}>на обработку своих персональных данных</div>
                </div>
            </div>
        </form>
    )
}

const LogInReduxForm = reduxForm<AuditFormDataType, AuditFormOwnPropsType>({form: "audit"})(LogInForm)

const FormAudit: React.FC<AuditType> = (props) => {
    const onSubmit = (values: AuditFormDataType) => {
        // console.log(values.name, values.number, values.comment)
        postAudit(values.name, values.number, values.comment, "audit");
    }
    return (
        <div className={classes.formAudit}>
            <div className={classes.titleAudit}>
                Закажите у нас аудит
            </div>
            <div className={classes.sixthContainer}>
                <div className={classes.fonImg}>
                    <img src={logInFormMinText} className={classes.fonImgText}/>
                    <img src={whiteLogo} className={classes.whiteLogoImg}/>
                </div>
                <div className={classes.sixthContText}>
                    <LogInReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    );
}

export default FormAudit;