import React from "react";
import styles  from './textField.module.css'

const TextField = ({placeholder,name,type,required,onChange,disabled,errors,value}) =>{

    const handleChangeInput = (value) =>{
        if(onChange) onChange(value)
    }

    return(
        <div className={ styles.inputContainer }>
            <input
                type         = {type || 'text'}
                required     = {required ? "required" : ''}
                onChange     = {handleChangeInput}
                disabled     = {disabled}
                name         = {name}
                id           = {`${type}-${name}`}
                autoComplete = {type === 'password' ? 'new-password' : 'off'}
                value        = {value}
            />
            { placeholder && <span className={ styles.inputPlaceholder }>{placeholder}</span> }
            { errors      && <span className={ styles.inputError }>{errors}</span> }
        </div>
    )
}

export default TextField;