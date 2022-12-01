import React from "react";
import ToolBar from "../../components/shared/toolbar/toolbar";
import AppRoutes from "../../routes/AppRoutes";
import styles from './main.module.css'

const Main = () => {
    return(
        <div className="animated fadeIn">
            <ToolBar />
            <div className={ styles.mainContainer }>
                <AppRoutes />
            </div>
        </div>
    )
}

export default Main;