import React, { useEffect, useRef } from 'react';
import { select, line, curveCardinal, axisBottom, scaleLinear, area } from "d3"; 

export const AreaChart = ( {areaData} )=> {

    const areaRef = useRef();

    const svgWidth = 450;
    const svgHeight = 230;

    const color1 = "rgb(187,217,240)";
    const color2 = "rgba(48, 111, 191)";

    useEffect(() => {

        const svg = select(areaRef.current);
        const xScale = scaleLinear().domain([0, areaData.length - 1]).range([0, svgWidth - 30]);
        const yScale = scaleLinear().domain([0, 100]).range([svgHeight - 45, 0]);

        // generate line path
        const linePath = (boolean) => line()
        .x((d, i) => xScale(i))
        .y((d) => boolean ? yScale(d.score) : yScale(0)).curve(curveCardinal);

        // generate area path
        const areaGenerator = (boolean) => area()
        .x((d, i) => xScale(i))
        .y0(yScale(0))
        .y1(d => boolean ? yScale(d.score) : yScale(0)).curve(curveCardinal);

        // reset evertime render
        svg.selectAll("*").remove();

        // defs gradient
        const defs = svg.append("defs");

        const bgGradient = defs
            .append("linearGradient")
            .attr("id", "bg-gradient")
            .attr("gradientTransform", "rotate(90)");
        bgGradient
            .append("stop")
            .attr("stop-color", color2)
            .attr("offset", "0%");
        bgGradient
            .append("stop")
            .attr("stop-color", color1)
            .attr("offset", "100%");

        
        // append xAxis
        var tickLabels = areaData.map(d => d.date);
        const xAxis = axisBottom(xScale).ticks(areaData.length - 1).tickFormat((d, i) => tickLabels[i]);
        svg.append("g").style("transform", "translateX(10px) translateY(210px)").call(xAxis);
        
        // append line
        svg
        .selectAll(".line")
        .data([areaData])
        .join("path")
        .attr("class", "line")
        .style("transform", "translateX(10px) translateY(10px)")
        .attr("d", linePath(false))
        .transition()
        .duration(1000)
        .attr("d", linePath(true))
        .attr("fill", "none")
        .attr("stroke", color2)
        .attr("stroke-width", "3px")


        // append area
        svg.append("path")
        .datum(areaData)
        .style("transform", "translateX(10px) translateY(10px)")
        .attr("d", areaGenerator(false))
        .transition()
        .duration(1000)
        .attr("d", areaGenerator(true))
        .attr("fill", "url(#bg-gradient)");

        // append circle dot on line
        svg.selectAll("circle")
        .data(areaData)
        .join("circle")
        .style("transform", "translateX(10px) translateY(10px)")
        .attr("r", "10")
        .attr("cx", (d, i) => xScale(i))
        .attr("cy", d => yScale(0))
        .transition()
        .duration(1000)
        .attr("cy", d => yScale(d.score))
        .attr("fill", color2)
        .attr("stroke", "white")
        .attr("stroke-width", "3px");

        
        // append text
        svg.selectAll("text.tooltip")
        .data(areaData)
        .attr("class", "tooltip")
        .join("text")
        .style("transform", "translateX(15px) translateY(-6px)")
        .style("font-size", "0.8rem")
        .attr("text-anchor", "middle")
        .attr("x", (d, i) => xScale(i))
        .attr("y", d => yScale(0))
        .transition()
        .duration(1000)
        .attr("y", d => yScale(d.score))
        .text(d => d.score+"%")
        
    }, [areaData])

    const chartView = {
        margin: "12vh 10vw 0 3vw",
        width: "450px",
        height: "230px"
    }

    return (
        <div style ={chartView}>
            <svg ref = {areaRef} width={svgWidth} height={svgHeight} >
            </svg>
        </div>
    )
}
