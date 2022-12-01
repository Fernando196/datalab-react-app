import React, { useEffect, useState } from "react";
import Sunburst from "../../components/reactEcharts/sunburts";
import styles from './dashboard.module.css'
import json from './data';

const Dashboard = () =>{
    const [ data, setData ] = useState({
        data:{},
        criteria: 'minSize',
    });

    useEffect(()=>{
        setData({...data, data: json});
    },[])

    return(
        <div className="app-container">
            <div className={ styles.dashboardContainer }>
                <div className={ 'paper ' + styles.dashboardGraphics }>
                    <div className={ styles.graphicsContainer }>
                        <Sunburst
                            height = {650}
                        />
                    </div>
                </div>
                <div className={ 'paper' }>
                    <span>Informacion Grafica</span>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;