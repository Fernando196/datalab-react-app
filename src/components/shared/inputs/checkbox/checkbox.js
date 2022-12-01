import React from "react";
import styles  from './checkbox.module.css'

const CheckBox = ({placeholder,name,type,onChange,disabled,checked,label,textAlign}) =>{

    const handleChangeInput = (value) =>{
        if(onChange) onChange(value)
    }

    return(
        <div className={ styles.inputContainer } style={{ textAlign: textAlign || 'left' }}>
            <input 
                type="checkbox"
                onChange={handleChangeInput}
                disabled={disabled}
                name={name}
                id={`checkbox-${name}`}
                checked={checked}
            />
            <label className={ styles.inputLabel } htmlFor={`checkbox-${name}`}>{ label }</label>
        </div>
    )
}

export default CheckBox;