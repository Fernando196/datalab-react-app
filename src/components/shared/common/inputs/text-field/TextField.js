import React from "react";
import styles  from './TextField.module.css'

const TextField = ({placeholder,name,type,required,onChange,disabled}) =>{

    const handleChangeInput = (value) =>{
        if(onChange) onChange(value)
    }

    return(
        <div className={ styles.inputContainer }>
            <input 
                type={type || 'text'}
                required={required ? "required" : ''}
                onChange={handleChangeInput}
                disabled={disabled}
            />
            { name ? <span>{name}</span> : <></>}
        </div>
    )
}

export default TextField;