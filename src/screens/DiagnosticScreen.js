import React, { useEffect, useState, useContext } from 'react';
import { DiagnoseBanner } from '../components/DiagnoseBanner';
import { GaugeChart } from '../components/GaugeChart';
import { AreaChart } from '../components/AreaChart';
import { GlobalContext } from '../context/GlobalState';

export function DiagnosticScreen() {

    const [selected, setSelected] = useState("");

    const { gaugeDatas, getDatas, areaDatas } = useContext(GlobalContext);

    useEffect(()=> {
        getDatas();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const defaultData = areaDatas[Object.keys(areaDatas)[0]];

    return (
        <div> 
            <DiagnoseBanner />
            <div style = {{display:"flex", flexDirection:"row"}}>
                <GaugeChart gaugeDatas = { gaugeDatas } setSelected = {setSelected} />
                {defaultData !== undefined ? <AreaChart areaData = { selected === "" ? defaultData : areaDatas[selected] } /> : null}
            </div>
        </div>
    )
}
