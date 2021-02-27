import React from 'react';
import { Gauge } from './Gauge';


export const GaugeChart = (params) => {

    const gaugeView = {
        overflow: "hidden",
        margin: "2vh 0 2vh 18vw",
        width: "35vw"
    }

    return (
        <>
        <div>
        </div>
        <div style = {gaugeView}>
            {params.gaugeDatas.map((gaugeData) => 
                (<Gauge key = {gaugeData.name} gaugeData ={gaugeData} setSelected = {params.setSelected} />)
            )}
        </div>
        </>
    )
}

