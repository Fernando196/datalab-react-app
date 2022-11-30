import React from "react";
import styles from './notFound.module.css'

const NotFound = () => { 
    return (
        <div className={ styles.notFoundContainer }>
            <span className={ styles['title-level-1'] }>Oops!</span>
            <span className={ styles['title-level-2'] }>Lo sentimos, ha ocurrido un error inesperado</span>
            <span className={ styles['title-level-3'] }>Not Found</span>
        </div>
    )
}

export default NotFound;