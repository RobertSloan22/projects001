import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./RadarDisplay.css";

const RadarDisplay = ({ width = 400, height = 400 }) => {
  const radarRef = useRef();

  useEffect(() => {
    const svg = d3.select(radarRef.current);

    // Set up radar display
    const centerX = width / 2;
    const centerY = height / 2;
    const numOfCircles = 4;
    const radius = Math.min(width, height) / 2;

    // Draw background circles
    for (let i = 1; i <= numOfCircles; i++) {
      svg
        .append("circle")
        .attr("class", "circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", (radius / numOfCircles) * i);
    }

    // Draw radial lines
    for (let i = 0; i < 360; i += 45) {
      const x1 = centerX + radius * Math.cos((i * Math.PI) / 180);
      const y1 = centerY + radius * Math.sin((i * Math.PI) / 180);
      svg
        .append("line")
        .attr("class", "radial-line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", x1)
        .attr("y2", y1);
    }

    // Draw rotating scan line
    const scanLine = svg
      .append("line")
      .attr("class", "scan-line")
      .attr("x1", centerX)
      .attr("y1", centerY)
      .attr("x2", centerX)
      .attr("y2", centerY - radius);

    // Animation function
    const animateScanLine = () => {
      scanLine
        .transition()
        .duration(4000)
        .ease(d3.easeLinear)
        .attrTween("transform", () => {
          return (t) => `rotate(${t * 360}, ${centerX}, ${centerY})`;
        })
        .on("end", animateScanLine);
    };

    animateScanLine();
  }, [width, height]);

  return (
    <div className="radar-display">
      <svg ref={radarRef} width={width} height={height}></svg>
    </div>
  );
};

export default RadarDisplay;
