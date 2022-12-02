import React from "react";
import Sunburst from "../../components/reactEcharts/sunburts";
import styles from './dashboard.module.css'
import { useSelector } from "react-redux";
import InfoGraphic from "./infoGraphic";

const Dashboard = () =>{
    const data = useSelector(state =>  state.dataGraphic);

    return(
        <div className="app-container">
            <div className={ styles.dashboardContainer }>
                <div className={ styles.dashboardGraphics }>
                    <div className={ styles.graphicsContainer }>
                        <Sunburst
                            height = {650}
                            data   = {data}
                        />
                    </div>
                </div>
                <InfoGraphic />
            </div>
        </div>
    )
}

export default Dashboard;