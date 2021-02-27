import React, { useRef } from 'react';
import { arc } from 'd3';

export const Gauge = ( {gaugeData, setSelected} ) => {
    
    const svgWidth = 120;
    const svhHeight = 200;
    const arcWidth = 5;
    const deepBlue = "rgb(48, 111, 191)";
    const lightblue = "rgb(78, 171, 233)";
    const filter = "rgba(78, 171, 233, 0.1)"
    const bordergrey = "rgba(218, 223, 225, 1)"

    const innerRadius = svgWidth / 2 - 10 - arcWidth;
    const outerRadius = svgWidth / 2 - 10;

    const acrGenerator = arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

    const progressArc = (startValue, endValue)=> acrGenerator({
        startAngle: 2 * Math.PI * startValue,
        endAngle: 2 * Math.PI * endValue
    });

    const rectRef = useRef();
    const arcRef = useRef();
    const textRef = useRef();
    const percentRef = useRef();

    const handleClick = (name) => {
        setSelected(name);
        const outters = document.querySelectorAll("rect");
        outters.forEach((outter) => {
            outter.style.fill = "none";
            outter.style.stroke = bordergrey;
        })
        const rect = rectRef.current;
        rect.style.fill = filter;
        rect.style.stroke = lightblue;
        const inners = document.querySelectorAll(".inner");
        inners.forEach((inner) => {
            inner.style.fill = deepBlue;
        })
        const arc = arcRef.current;
        const text = textRef.current;
        const percent = percentRef.current;
        percent.style.fill = lightblue;
        arc.style.fill = lightblue;
        text.style.fill = lightblue;
    }

    const cardView = {
        display: "inline-block",
        width: "120px",
        height: "200px",
        margin: "0.4rem 0.8rem",
        boxShadow: "0 1px 0px 0 rgba(0,0,0,0.2)"
    };

 
    return (
        <div style = { cardView } >
            <svg height={svhHeight} width={svgWidth} className="card" onClick={() => handleClick(gaugeData.name)}>

                <rect ref ={rectRef} className={`${gaugeData.name}`} height={svhHeight} width={svgWidth} stroke={bordergrey} 
                strokeWidth="2"  fill="none"/>

                <g transform={`translate(${svgWidth/2}, ${svhHeight/2})`}>
                    <text ref ={textRef} textAnchor="middle" y="-65" className="inner" fill = {deepBlue} fontWeight="400">
                        {gaugeData.name}
                    </text>
                    <path ref ={arcRef} className="inner" d ={progressArc(0, gaugeData.score / 100)} fill = {deepBlue} />
                    <path d={progressArc(gaugeData.score / 100, 1)} opacity="0.3" fill="grey" />
                    <text ref ={percentRef} textAnchor="middle" fill =  {deepBlue} className="inner" fontWeight="500">
                        {gaugeData.score}%
                    </text>
                    <text textAnchor="middle" y ="20" fill = "grey" opacity="0.6" fontSize="14" fontWeight="600">
                        {gaugeData.vsly ? gaugeData.vsly: "N/A"}
                    </text>
                    <text textAnchor="middle" y="70" fill = "grey" fontSize="13">
                        sample: {gaugeData.sample}
                    </text>
                </g>
            </svg>
        </div>
    )
}
