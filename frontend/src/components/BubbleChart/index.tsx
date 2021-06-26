import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Simulation, SimulationNodeDatum } from "d3-force";
import { v4 as uuid } from "uuid";

const BubbleChart = (props: any) => {
  let forceData = useRef<any[]>([]);
  let simulation: Simulation<SimulationNodeDatum, undefined> | undefined;
  const { bubblesData, minValue, maxValue, textFillColor, confirmed } = props;
  const [data, setData] = useState<any[]>([]);

  const radiusScale = (value: d3.NumberValue) => {
    const fx = d3.scaleSqrt().range([10, 50]).domain([minValue, maxValue]);
    return fx(value);
  };

  const setForceData = (props: any) => {
    const d = [];
    for (let i = 0; i < props.bubblesData.length; i++) {
      let data = confirmed
        ? props.bubblesData[i].confirmed
        : props.bubblesData[i].deaths;
      d.push({ size: data });
    }
    return d;
  };

  const simulatePositions = (data: any[]) => {
    simulation = d3
      .forceSimulation()
      .nodes(data as SimulationNodeDatum[])
      .velocityDecay(0.3)
      .force("x", d3.forceX().strength(0.04))
      .force("y", d3.forceY().strength(0.04))
      .force(
        "collide",
        d3.forceCollide((d: SimulationNodeDatum) => {
          return radiusScale((d as { size: number }).size) + 1;
        })
      )
      .on("tick", () => {
        setData(data);
      });
  };

  const animateBubbles = () => {
    if (bubblesData.length > 0) {
      simulatePositions(forceData.current);
    }
  };

  const renderBubbles = (data: []) => {
    return data.map((item: { v: number; x: number; y: number }, index) => {
      // const { props } = this;

      const fontSize =
        radiusScale((item as unknown as { size: number }).size) / 4;
      const content =
        props.bubblesData.length > index
          ? props.bubblesData[index].country
          : "";
      const strokeColor =
        props.bubblesData.length > index ? "darkgrey" : props.backgroundColor;
      return (
        <g
          key={`g-${uuid()}`}
          transform={`translate(${props.width / 2 + item.x - 70}, ${
            props.height / 2 + item.y
          })`}
        >
          <circle
            style={{ cursor: "pointer" }}
            onClick={() => {
              props.selectedCircle(content);
            }}
            id="circleSvg"
            r={radiusScale((item as unknown as { size: number }).size)}
            // fill={props.bubblesData[index].fillColor}
            fill={confirmed ? "#0288d1" : "#e53935"}
            stroke={strokeColor}
            strokeWidth="2"
          />
          <text
            onClick={() => {
              props.selectedCircle(content);
            }}
            dy="6"
            className="bubbleText"
            fill={textFillColor}
            textAnchor="middle"
            fontSize={`${fontSize}px`}
            fontWeight="normal"
          >
            {content}
          </text>
        </g>
      );
    });
  };

  useEffect(() => {
    forceData.current = setForceData(props);
    animateBubbles();
  }, []);

  useEffect(() => {
    forceData.current = setForceData(props);
    animateBubbles();
  }, [props.bubblesData, confirmed]);

  return (
    <div>
      <div
        aria-hidden="true"
        id="chart"
        style={{ background: props.backgroundColor, cursor: "pointer" }}
      >
        <svg width={props.width} height={props.height}>
          {renderBubbles(data as [])}
        </svg>
      </div>
    </div>
  );
};

export default BubbleChart;
