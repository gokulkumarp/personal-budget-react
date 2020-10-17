import React, { useRef, useState, useEffect } from "react";
import * as d3 from "d3";
import { chartData } from "../App";

const Donut = () => {
    const [data, setData] = useState({
      title: [],
      budget: [],
    });
    const chartRef = useRef(null);
  
    const width = 650;
    const height = 550;
    const margin = 0;
    const radius = Math.min(width, height) / 2 - margin;
    const { title } = data;
  
    const createChart = (data) => {
      let colors = d3
        .scaleOrdinal()
        .domain(title)
        .range([
          "#ffcd56",
          "#bc5090",
          "#ff6361",
          "#003f5c",
          "#00fff", 
          "#00bfff", 
          "#0080ff", 
          "#0040ff", 
          "#0000ff"
        ]);
      let pie = d3.pie().value((d) => d.budget)(data);
  
      var arc = d3
        .arc()
        .outerRadius(radius * 0.7)
        .innerRadius(radius * 0.4);
  
  
      var svg = d3
        .select(chartRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);
  
      svg
        .selectAll("allSlices")
        .data(pie)
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", (d) => colors(d.data.title))
        .attr("stroke", "white")
        .style("stroke-width", "2px")
        .style("opacity", 0.7);
  
        
    const labelLocation = d3.arc()
    .innerRadius(radius*0.9)
    .outerRadius(radius*0.2);
        svg
    .selectAll('pieces')
    .data(pie)
    .enter()
    .append('text')
    .text(d => d.data.title)
    .attr("transform", d => "translate(" + labelLocation.centroid(d) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 15);
      
    };
  
    useEffect(() => {
        const getData = () => {
            chartData().then((res) => {
              createChart(res.data.myBudget);
              setData({
                title: res.data.myBudget.map((res) => {
                  return res.title;
                }),
                budget: res.data.myBudget.map((res) => {
                  return res.budget;
                }),
              });
            });
          };
      getData();
    }, []);
  
    return <figure ref={chartRef}></figure>;
  };
  
  export default Donut;

