import React from "react";
import ReactECharts from "echarts-for-react";
import data from "../../pages/dashboard/data";

const options = {
    series: {
        type: 'sunburst',
        // emphasis: {
        //     focus: 'ancestor'
        // },
        data: data,
        radius: [0, '90%'],
        label: {
          rotate: 'radial'
        }
      }
  }

const Sunburst = ({ width, height }) =>{

    return(
        <ReactECharts
            option={options}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            // onChartReady={onChartReadyCallback}
            // onEvent={EventsDict}
            opts={{ renderer: 'svg' }}
            style={{ 
                width: '100%',
                height: height || 200
            }}
        />
    )
}

export default Sunburst;