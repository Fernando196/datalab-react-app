import React from "react";
import Sunburst from "../../components/reactEcharts/sunburts";
import styles from './dashboard.module.css'
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () =>{
    const { data,selectedValue } = useSelector(state =>  state.graphic);

    return(
        <div className="app-container">
            <div className={ styles.dashboardContainer }>
                <div className={ 'paper ' + styles.dashboardGraphics }>
                    <div className={ styles.graphicsContainer }>
                        <Sunburst
                            height = {650}
                            data   = {data}
                        />
                    </div>
                </div>
                <div className={ 'paper' }>
                    <span>{ `${selectedValue}` }</span>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;