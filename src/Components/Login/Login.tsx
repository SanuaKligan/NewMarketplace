import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Navigate} from "react-router-dom";
import classes from "../../common/FormsControls/FormsControls.module.css";
import {Element} from "../../common/FormsControls/FormsControls";
import {required, maxLengthCreator} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(50)
const Input = Element("input")

type LoginPropsType = {
    id: number | null
    isAuth: boolean
    logIn: (email: string | null, password: string | null, rememberMe: boolean) => void
    logOut: () => void
}

type LogInFormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type LogInFormOwnPropsType = {

}

const LoginForm: React.FC<
    InjectedFormProps<LogInFormDataType, LogInFormOwnPropsType> & LogInFormOwnPropsType
    > = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"email"}
                    name={"email"}
                    validate={[required, maxLength10]}
                    component={Input}
                />
            </div>
            <div>
                <Field
                    placeholder={"password"}
                    name={"password"}
                    validate={[required, maxLength10]}
                    component={Input}
                    type={"password"}
                />
            </div>
            <div>
                <Field
                    name={"rememberMe"}
                    component={"input"}
                    type={"checkbox"}
                /> remember me
            </div>
            {
                props.error && <div className={classes.formSummaryError}>
                    <span className={classes.formSummaryError}>
                        {props.error}
                    </span>
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LogInFormDataType, LogInFormOwnPropsType>({form: "login"})(LoginForm)

const Login: React.FC<LoginPropsType> = (props) => {
    const onSubmit = (formData: LogInFormDataType) => {
        props.logIn(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to={"/profile/" + props.id}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;