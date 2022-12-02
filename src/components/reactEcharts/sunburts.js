import React from "react";
import ReactECharts from "echarts-for-react";
import { useDispatch } from "react-redux";
import { onClickValue } from '../../redux/slice/graphicSlice'

const Sunburst = ({ width, height, data }) =>{
    const dispatch = useDispatch();

    const options = {
        series: {
            type: 'sunburst',
            data: data,
            radius: [0, '90%'],
            label: {
              rotate: 'radial'
            }
          }
    }

    return(
        <ReactECharts
            option={options}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            // onChartReady={onChartReadyCallback}
            onEvents={{
                'click': (e) => dispatch(onClickValue(e.data))
            }}
            opts={{ renderer: 'svg' }}
            style={{ 
                width: '100%',
                height: height || 200
            }}
        />
    )
}

export default Sunburst;