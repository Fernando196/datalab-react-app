import React, { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from '../../redux/slice/authSlice';

import styles  from './login.module.css';

import ButtonDefault from "../../components/shared/buttons/button-default/ButtonDefault";
import CheckBox from "../../components/shared/inputs/checkbox/checkbox";
import TextField from "../../components/shared/inputs/textField/textField";

import loginValidator from "../../hooks/useForm/formValidators/loginValidators";
import useForm from "../../hooks/useForm/useForm";

import authService from "../../services/auth.service";

const login = {
    usuario  : authService.getLastUserName(),
    password : ''
}

const LoginContainer = () => {
    const dispatch     = useDispatch();
    const { values:form, isSubmitting,setIsSubmitting, handleSubmit, errors, handleChange } = useForm(login,loginValidator,Login);
    const [ textBtnLogin,setTextBtnLogin ]            = useState('Iniciar Sesión');
    const [ isCheckedRecordar, setIsCheckedRecordar ] = useState(false);
    const [ msgRequestError,setMsgRequestError ]      = useState(false);
    const navigate                                    = useNavigate();

    useEffect(()=>{
        if(authService.getLastUserName()) setIsCheckedRecordar(true)
    },[])

    async function Login(){
        try{
            setIsSubmitting(true);
            setTextBtnLogin('Espere...');
            let data = await authService.login(form,isCheckedRecordar);
            dispatch(authenticate(data));
            navigate('/')
        }catch(err){
            if(err?.response && err?.response?.data){
                setMsgRequestError(err.response.data.msg);
                setTimeout(()=> setMsgRequestError(''), 2000);
            }
        }finally{
            setTextBtnLogin('Iniciar Sesión');
            setIsSubmitting(false);
        }
    }

    const handleChangeRecordar = (e) =>{
        setIsCheckedRecordar(e.target.checked);
    }

    return(
        authService.isAuthenticated() ? <Navigate to="/" /> :
        <div className={ styles.loginContainer }>
            <div className={ styles.loginFormContainer }>
                <div className={ styles.loginImg }>
                    <span>Bienvenido</span>
                </div>
                <form noValidate autoComplete="off" onSubmit={handleSubmit} className={ styles.formContainer }>
                    <div className={ styles.formInputsContainer }>
                        <span className={ styles.formTitle }>Login</span>
                        <div className={ styles.formInputs }>
                            <TextField 
                                required    = { true }
                                placeholder = 'Usuario'
                                name        = "usuario"
                                disabled    = { isSubmitting }
                                onChange    = { handleChange }
                                errors      = { errors?.usuario ? errors.usuario : '' }
                                value       = { form.usuario }
                            />
                            <TextField 
                                required    = {true}
                                type        = "password"
                                placeholder = 'Contraseña'
                                name        = 'password'
                                disabled    = { isSubmitting }
                                onChange    = { handleChange }
                                errors      = { errors?.password ? errors.password : '' }
                                value       = { form.password }
                            />
                        </div>
                        <div className={ styles.formUtils }>
                            <CheckBox
                                name     = 'guardar'
                                disabled = { isSubmitting }
                                label    = 'Recordar'
                                checked  = { isCheckedRecordar }
                                onChange = { handleChangeRecordar }
                            />
                        </div>
                        <ButtonDefault
                            type     = "submit"
                            name     = { textBtnLogin }
                            disabled = { isSubmitting }
                        />
                        {
                            msgRequestError &&
                            <div className={ styles.msgErrorRequestContainer }>
                                <span>{ msgRequestError }</span>
                            </div>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginContainer;