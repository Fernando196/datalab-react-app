import React, { useState } from "react"
import ButtonDefault from "../../components/shared/common/buttons/button-default/ButtonDefault";
import TextField from "../../components/shared/common/inputs/text-field/TextField";
import styles  from './login.module.css'

const LoginContainer = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ textBtnLogin,setTextBtnLogin ] = useState('Iniciar Sesión');

    const request = () =>{
        return new Promise((resolve)=>{
            setTimeout(resolve,2000)
        })
    }

    const Login = async () =>{
        try{
            setIsLoading(true);
            setTextBtnLogin('Espere...');
            let login = await request();

        }catch(err){
            console.log(err);
        }finally{
            setTextBtnLogin('Iniciar Sesión');
            setIsLoading(false);
        }
    }

    return(
        <div className={ styles.loginContainer }>
            <div className={ styles.loginFormContainer }>
                <div className={ styles.loginImg }>
                    <span>Bienvenido</span>
                </div>
                <div className={ styles.loginForm }>
                   <span>Login</span>
                   <TextField 
                        required={true}
                        name='Usuario'
                        disabled={isLoading}
                   />
                   <TextField 
                        required={true}
                        name='Contraseña'
                        disabled={isLoading}
                   />
                   <span>Registrate</span>
                   <div className={ styles.loginButton }>
                        <ButtonDefault
                            onClick={Login}
                            name={textBtnLogin}
                            disabled={isLoading}
                        />
                   </div>
                </div>
            </div>
        </div>
    )
}

export default LoginContainer;