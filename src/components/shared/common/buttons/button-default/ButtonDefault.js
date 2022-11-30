import React from "react";
import styles  from './ButtonDefault.module.css'

const ButtonDefault = ({onClick,name,disabled = false}) =>{

    const handleClick = () =>{
        if(onClick) onClick()
    }

    return name
        ? <button disabled={disabled} className={ styles.buttonDefault } onClick={handleClick}>{name}</button>
        : <></>
}

export default ButtonDefault;